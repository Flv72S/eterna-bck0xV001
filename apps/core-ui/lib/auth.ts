import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from './db';
import { eq } from 'drizzle-orm';
import { users } from '@/drizzle/schema/users';
import { postgres } from '@/lib/postgres';

interface User {
  id: string;
  email: string;
  ruolo: string;
  nome?: string | null;
  cognome?: string | null;
  sezione_id?: string | null;
}

// Costanti per la validazione
const MIN_PASSWORD_LENGTH = 8;
const PIN_LENGTH = 6;
const TOKEN_LENGTH = 6;

// Valori di default
const DEFAULT_PASSWORD = '123456';
const DEFAULT_PIN = '123456';
const DEFAULT_TOKEN = '123456';

// Funzione di validazione email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Funzione di validazione password
function isValidPassword(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}

// Funzione di validazione PIN e token
function isValidCode(code: string, length: number): boolean {
  return /^\d+$/.test(code) && code.length === length;
}

export async function getCurrentUser(req?: NextRequest): Promise<User | null> {
  try {
    const token = req?.cookies.get('token')?.value || '';
    
    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.userId))
      .limit(1);

    if (!user || !user[0]) {
      return null;
    }

    return {
      id: user[0].id,
      email: user[0].email,
      ruolo: user[0].ruolo,
      nome: user[0].nome,
      cognome: user[0].cognome,
      sezione_id: user[0].sezione_id
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function signIn(credentials: { email: string; password: string }) {
  try {
    // Validazione input
    if (!credentials.email || !credentials.password) {
      throw new Error('Email e password sono obbligatorie');
    }

    if (!isValidEmail(credentials.email)) {
      throw new Error('Formato email non valido');
    }

    // Verifica esistenza utente
    const userResult = await postgres.query(
      'SELECT * FROM users WHERE email = $1',
      [credentials.email]
    );

    if (userResult.rows.length === 0) {
      throw new Error('Utente non trovato');
    }

    const user = userResult.rows[0];

    // Verifica password
    const isValidPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isValidPassword) {
      throw new Error('Password non valida');
    }

    // Genera token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    return {
      ...user,
      token,
      password: undefined // Rimuoviamo la password dalla risposta
    };
  } catch (error) {
    console.error('Errore durante il login:', error);
    throw error;
  }
}

export async function signUp(userData: {
  nome: string;
  cognome: string;
  email: string;
  sezione: string;
  password?: string;
  pin?: string;
  token?: string;
}) {
  try {
    // Validazione input
    if (!userData.nome || !userData.cognome || !userData.email || !userData.sezione) {
      throw new Error('Nome, cognome, email e sezione sono obbligatori');
    }

    if (!isValidEmail(userData.email)) {
      throw new Error('Formato email non valido');
    }

    // Verifica se l'email è già in uso
    const existingUser = await postgres.query(
      'SELECT * FROM users WHERE email = $1',
      [userData.email]
    );

    if (existingUser.rows.length > 0) {
      throw new Error('Email già in uso');
    }

    // Hash della password di default
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    // Inserimento utente con valori di default
    const result = await postgres.query(
      `INSERT INTO users (nome, cognome, email, password, pin, token, eterna_section)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        userData.nome,
        userData.cognome,
        userData.email,
        hashedPassword,
        DEFAULT_PIN,
        DEFAULT_TOKEN,
        userData.sezione
      ]
    );

    const newUser = result.rows[0];

    // Genera token JWT
    const token = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    return {
      ...newUser,
      token,
      password: undefined // Rimuoviamo la password dalla risposta
    };
  } catch (error) {
    console.error('Errore durante la registrazione:', error);
    throw error;
  }
} 