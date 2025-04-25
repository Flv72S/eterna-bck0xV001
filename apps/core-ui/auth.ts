import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { users } from '@/drizzle/schema/users';
import bcrypt from 'bcryptjs';
import { User } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email e password sono obbligatori');
        }

        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .limit(1);

        if (!user || !user[0]) {
          throw new Error('Email non trovata');
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user[0].password_hash
        );

        if (!isPasswordValid) {
          throw new Error('Password non valida');
        }

        return {
          id: user[0].id,
          email: user[0].email,
          name: user[0].nome,
          ruolo: user[0].ruolo,
          sezione_id: user[0].sezione_id
        };
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          ruolo: user.ruolo,
          sezione_id: user.sezione_id
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          ruolo: token.ruolo,
          sezione_id: token.sezione_id
        }
      };
    }
  }
}; 