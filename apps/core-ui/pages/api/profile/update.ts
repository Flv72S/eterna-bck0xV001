import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { users } from '@/drizzle/schema/users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.email) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { nome, cognome, email, phone } = req.body;

    // Verifica che l'email non sia già in uso da un altro utente
    if (email !== session.user.email) {
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Email già in uso' });
      }
    }

    // Aggiorna il profilo dell'utente
    const updatedUser = await db
      .update(users)
      .set({
        nome,
        cognome,
        email,
        phone,
      })
      .where(eq(users.email, session.user.email))
      .returning();

    if (!updatedUser || updatedUser.length === 0) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    return res.status(200).json({
      message: 'Profilo aggiornato con successo',
      user: {
        id: updatedUser[0].id,
        nome: updatedUser[0].nome,
        cognome: updatedUser[0].cognome,
        email: updatedUser[0].email,
        phone: updatedUser[0].phone,
      },
    });
  } catch (error) {
    console.error('Errore durante l\'aggiornamento del profilo:', error);
    return res.status(500).json({ message: 'Errore interno del server' });
  }
} 