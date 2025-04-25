import { NextResponse } from 'next/server';
import { signUp } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await signUp(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore durante la registrazione' },
      { status: 500 }
    );
  }
} 