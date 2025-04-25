import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../src/config/db';
import { eq } from 'drizzle-orm';
import { users } from '../../../../packages/db/src/schema';

// Token di default per la versione Free
const DEFAULT_TOKEN = "123456";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, pin, version, seriale_gioiello, phone, name, surname } = req.body;

    // Verifica che tutti i campi obbligatori siano presenti
    if (!email || !pin || !version || !phone || !name || !surname) {
      return res.status(400).json({ message: 'Campi obbligatori mancanti' });
    }

    // Verifica se l'email esiste già
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email già registrata' });
    }

    // Se è un utente premium, verifica il seriale
    if (version === 'premium' && !seriale_gioiello) {
      return res.status(400).json({ message: 'Seriale gioiello obbligatorio per versione Premium' });
    }

    // In fase di sviluppo, usa sempre il token di default
    const token = DEFAULT_TOKEN;

    // Per ora, rispondiamo con il token direttamente
    // In produzione, il token verrà inviato via SMS
    return res.status(200).json({ 
      message: 'Token generato con successo',
      token: token
    });

  } catch (error) {
    console.error('Errore nella richiesta del token:', error);
    return res.status(500).json({ message: 'Errore interno del server' });
  }
} 