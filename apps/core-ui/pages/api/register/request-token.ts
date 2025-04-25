import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../db';
import { tokens } from '../../../db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Genera un token casuale
    const token = Math.random().toString(36).substring(2, 15);

    // Salva il token nel database
    await db.insert(tokens).values({
      token,
      type: 'registration',
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000) // Scade dopo 24 ore
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 