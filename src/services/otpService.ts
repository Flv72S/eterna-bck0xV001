import { db } from '../config/db';
import { otps } from '../../packages/db/src/schema';
import { eq } from 'drizzle-orm';
import { generateOtp } from '../utils/otp';

export const createOtpForUser = async (userId: string) => {
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minuti
  
  const [newOtp] = await db.insert(otps).values({
    userId,
    code: otp,
    expiresAt
  }).returning();
  
  return newOtp;
};

export const validateOtp = async (userId: string, code: string) => {
  const [otp] = await db.select().from(otps).where(eq(otps.userId, userId));
  
  if (!otp || otp.code !== code || otp.expiresAt < new Date()) {
    return false;
  }
  
  return true;
}; 