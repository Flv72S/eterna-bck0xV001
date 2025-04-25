import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '@eterna/db';
import { users } from '@eterna/db/schema';
import { eq } from 'drizzle-orm';

export const useUser = async (userId: string) => {
  const [user] = await db.select().from(users).where(eq(users.id, userId));
  return user;
};

export function useUserOld() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem('token');
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        localStorage.removeItem('token');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  return { user, loading };
} 