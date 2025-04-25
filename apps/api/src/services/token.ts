import { db } from '../../../src/config/db';
import { generateOTP } from 'otp-generator';
import { tokens } from '../../../packages/db/src/schema';

export const generateToken = async (userId: string): Promise<string> => {
  // Genera un token OTP di 6 cifre
  const token = generateOTP(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false
  });

  // Salva il token nel database
  await db.insert(tokens).values({
    token,
    type: 'SMS',
    expires_at: new Date(Date.now() + 5 * 60 * 1000), // 5 minuti
    user_id: userId
  });

  return token;
};

export const sendSmsToken = async (phone: string, token: string): Promise<void> => {
  // In fase di sviluppo, stampiamo il token nella console
  console.log(`Token SMS per ${phone}: ${token}`);
  // In produzione, qui verrà implementato l'invio effettivo via SMS
}; 