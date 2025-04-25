import jwt from 'jsonwebtoken';
import { db, users, sessions } from '@eterna/db';
import { eq } from 'drizzle-orm';

export async function login(email: string, pin: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email)
  });
  if (!user || user.pin !== pin) return null;

  const token = jwt.sign(
    { userId: user.id, role: user.role }, 
    process.env.JWT_SECRET!, 
    { expiresIn: '1h' }
  );

  await db.insert(sessions).values({
    userId: user.id,
    token,
    expiresAt: new Date(Date.now() + 3600000)
  });

  return token;
} 