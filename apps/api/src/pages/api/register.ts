import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../src/config/db';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { users } from '../../../packages/db/src/schema';

// Token di default per la versione Free
const DEFAULT_TOKEN = "123456";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, pin, name, surname, phone, sector } = req.body;

    // Verifica che tutti i campi obbligatori siano presenti
    if (!email || !pin || !name || !surname || !phone || !sector) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Verifica che il PIN sia composto da 6 caratteri numerici
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(pin)) {
      return res.status(400).json({ message: 'PIN must be exactly 6 numeric digits' });
    }

    // Verifica se l'email esiste già
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash del PIN
    const hashedPin = await bcrypt.hash(pin, 10);

    // Creazione dell'utente
    const [user] = await db.insert(users).values({
      email,
      pin: hashedPin,
      name,
      surname,
      phone,
      sector,
      token: DEFAULT_TOKEN,
    }).returning();

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        sector: user.sector,
        token: DEFAULT_TOKEN,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 