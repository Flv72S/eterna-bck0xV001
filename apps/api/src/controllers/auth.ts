import { Request, Response, NextFunction } from 'express';
import { db } from '../../../src/config/db';
import { AppError } from '../middleware/errorHandler';
import { generateToken, sendSmsToken } from '../services/token';
import { hashPin, comparePin } from '../services/crypto';
import { eq } from 'drizzle-orm';
import { users } from '../../../packages/db/src/schema';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, surname, phone, pin, version, seriale_gioiello } = req.body;

    // Verifica se l'utente esiste già
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser) {
      throw new AppError('Email già registrata', 400);
    }

    // Se è un utente Premium, verifica il seriale
    if (version === 'PREMIUM' && !seriale_gioiello) {
      throw new AppError('Il seriale del gioiello è obbligatorio per la versione Premium', 400);
    }

    // Crea l'utente
    const hashedPin = await hashPin(pin);
    const [user] = await db.insert(users).values({
      email,
      name,
      surname,
      phone,
      pin: hashedPin,
      version,
      seriale_gioiello
    }).returning();

    // Genera e invia il token via SMS
    const token = await generateToken(user.id);
    await sendSmsToken(phone, token);

    res.status(201).json({
      status: 'success',
      message: 'Registrazione completata. Controlla il tuo telefono per il token di verifica.'
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, pin } = req.body;

    // Trova l'utente
    const user = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (!user) {
      throw new AppError('Credenziali non valide', 401);
    }

    // Verifica il PIN
    const isValidPin = await comparePin(pin, user.pin);
    if (!isValidPin) {
      throw new AppError('Credenziali non valide', 401);
    }

    // Genera e invia il token via SMS
    const token = await generateToken(user.id);
    await sendSmsToken(user.phone, token);

    res.json({
      status: 'success',
      message: 'Token inviato al tuo numero di telefono.'
    });
  } catch (error) {
    next(error);
  }
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.body;

    // Trova il token
    const tokenRecord = await db.query.tokens.findFirst({
      where: eq(tokens.token, token),
      include: { user: true }
    });

    if (!tokenRecord) {
      throw new AppError('Token non valido', 401);
    }

    if (tokenRecord.used_at) {
      throw new AppError('Token già utilizzato', 401);
    }

    if (new Date() > tokenRecord.expires_at) {
      throw new AppError('Token scaduto', 401);
    }

    // Marca il token come utilizzato
    await db.update(tokens).set({ used_at: new Date() }).where(eq(tokens.id, tokenRecord.id));

    res.json({
      status: 'success',
      data: {
        user: {
          id: tokenRecord.user.id,
          email: tokenRecord.user.email,
          name: tokenRecord.user.name,
          surname: tokenRecord.user.surname,
          version: tokenRecord.user.version
        }
      }
    });
  } catch (error) {
    next(error);
  }
}; 