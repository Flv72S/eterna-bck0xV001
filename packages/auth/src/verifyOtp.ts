import { db, otps } from '@eterna/db';
import { eq, and } from 'drizzle-orm';

export async function verifyOtp(userId: number, inputCode: string) {
  const otp = await db.query.otps.findFirst({
    where: and(
      eq(otps.userId, userId),
      eq(otps.code, inputCode),
      eq(otps.used, false)
    )
  });

  if (!otp || new Date(otp.expiresAt) < new Date()) return false;

  await db.update(otps)
    .set({ used: true })
    .where(eq(otps.id, otp.id));

  return true;
} 