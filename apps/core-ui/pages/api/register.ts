import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { db } from '../../db';
import { users } from '../../db/schema';
import { eq } from 'drizzle-orm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Imposta gli header CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Gestisci la richiesta OPTIONS per CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const { 
      email, 
      pin, 
      token, 
      version, 
      seriale_gioiello, 
      nome, 
      cognome,
      nfc_supportato = true,
      registrazione_via_nfc = false
    } = req.body;

    // Verifica che tutti i campi obbligatori siano presenti
    if (!email || !pin) {
      return res.status(400).json({ error: 'Email e PIN sono obbligatori' });
    }

    // Verifica se l'email esiste già
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email già registrata' });
    }

    // Verifica che il seriale_gioiello sia presente per gli utenti premium
    if (version === 'premium' && !seriale_gioiello) {
      return res.status(400).json({ error: 'Il numero seriale del gioiello è obbligatorio per gli utenti premium' });
    }

    // Hash del pin
    const hashedPin = await hash(pin, 10);

    // Crea l'utente
    const [user] = await db.insert(users).values({
      email,
      pin: hashedPin,
      token,
      version: version || 'free',
      seriale_gioiello: version === 'premium' ? seriale_gioiello : null,
      nome,
      cognome,
      nfc_supportato,
      registrazione_via_nfc,
      attivatore_validato: false,
      verificato_email: false,
      verificato_telefono: false,
    }).returning();

    return res.status(201).json({ 
      success: true,
      message: 'Registrazione completata con successo',
      user: {
        id: user.id,
        email: user.email,
        nome: user.nome,
        cognome: user.cognome,
        version: user.version,
        nfc_supportato: user.nfc_supportato,
        verificato_email: user.verificato_email,
        verificato_telefono: user.verificato_telefono
      }
    });
  } catch (error) {
    console.error('Errore durante la registrazione:', error);
    return res.status(500).json({ 
      error: 'Errore interno del server',
      details: error instanceof Error ? error.message : 'Errore sconosciuto'
    });
  }
} 