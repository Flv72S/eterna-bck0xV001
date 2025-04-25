import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/auth';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { eternaSections } from '@/drizzle/schema/eterna_sections';
import { adminSections } from '@/drizzle/schema/admin_sections';

export async function sectionMiddleware(req: NextRequest) {
  const user = await getCurrentUser(req);
  
  if (!user) {
    return NextResponse.redirect('/auth/signin');
  }

  let sectionSlug: string | null = null;

  // Se l'utente è un admin, verifica se ha accesso alla sezione
  if (user.ruolo === 'admin') {
    const result = await db
      .select({ slug: eternaSections.slug })
      .from(adminSections)
      .leftJoin(eternaSections, eq(eternaSections.id, adminSections.sezione_id))
      .where(eq(adminSections.admin_id, user.id))
      .limit(1);

    if (result.length > 0) {
      sectionSlug = result[0].slug;
    }
  } else if (user.sezione_id) {
    // Per utenti normali e professionisti
    const result = await db
      .select({ slug: eternaSections.slug })
      .from(eternaSections)
      .where(eq(eternaSections.id, user.sezione_id))
      .limit(1);

    if (result.length > 0) {
      sectionSlug = result[0].slug;
    }
  }

  if (!sectionSlug) {
    return NextResponse.redirect('/seleziona-sezione');
  }

  const headers = new Headers(req.headers);
  headers.set('x-section', sectionSlug);
  return NextResponse.next({
    request: {
      headers
    }
  });
} 