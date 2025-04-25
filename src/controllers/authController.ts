import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../config/prisma';
import { createOtpForUser, validateOtp } from '../services/otpService';
import { generateToken } from '../utils/jwt';

interface RegisterBody {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  eternaVersion: string;
  nfcCode?: string;
}

interface LoginBody {
  email: string;
  password: string;
}

interface VerifyOtpBody {
  userId: string;
  code: string;
}

interface NfcLoginBody {
  nfcCode: string;
  password: string;
}

export const register = async (req: Request<{}, {}, RegisterBody>, res: Response) => {
  try {
    const { fullName, email, phone, password, eternaVersion, nfcCode } = req.body;
    const isPremium = !!nfcCode;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        phone,
        passwordHash,
        eternaVersion,
        isPremium,
        nfcCode,
      },
    });

    const otp = await createOtpForUser(user.id);
    // Invia OTP via SMS/email in prod
    res.status(201).json({ userId: user.id, message: "OTP inviato", otp });
  } catch (error) {
    console.error('Errore durante la registrazione:', error);
    res.status(500).json({ error: "Errore durante la registrazione" });
  }
};

export const login = async (req: Request<{}, {}, LoginBody>, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "Utente non trovato" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Credenziali non valide" });

    const otp = await createOtpForUser(user.id);
    res.json({ userId: user.id, message: "OTP inviato", otp });
  } catch (error) {
    console.error('Errore durante il login:', error);
    res.status(500).json({ error: "Errore durante il login" });
  }
};

export const verifyOtp = async (req: Request<{}, {}, VerifyOtpBody>, res: Response) => {
  try {
    const { userId, code } = req.body;
    const valid = await validateOtp(userId, code);
    if (!valid) return res.status(400).json({ error: "OTP non valido o scaduto" });

    const token = generateToken(userId);
    res.json({ token });
  } catch (error) {
    console.error('Errore durante la verifica OTP:', error);
    res.status(500).json({ error: "Errore durante la verifica OTP" });
  }
};

export const loginViaNFC = async (req: Request<{}, {}, NfcLoginBody>, res: Response) => {
  try {
    const { nfcCode, password } = req.body;
    const user = await prisma.user.findUnique({ where: { nfcCode } });
    if (!user || !user.isPremium) return res.status(404).json({ error: "Utente NFC non trovato" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Credenziali non valide" });

    const otp = await createOtpForUser(user.id);
    res.json({ userId: user.id, message: "OTP inviato", otp });
  } catch (error) {
    console.error('Errore durante il login NFC:', error);
    res.status(500).json({ error: "Errore durante il login NFC" });
  }
}; 