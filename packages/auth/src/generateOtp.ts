import { randomInt } from 'crypto';
import { db, otps } from '@eterna/db';

export async function generateOtp(userId: number) {
  const code = ('' + randomInt(100000, 999999));
  const expiresAt = new Date(Date.now() + 5 * 60000);

  await db.insert(otps).values({
    userId,
    code,
    expiresAt,
  });

  return code;
} 