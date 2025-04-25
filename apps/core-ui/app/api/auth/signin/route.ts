import { NextResponse } from 'next/server';
import { signIn } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await signIn(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore durante il login' },
      { status: 500 }
    );
  }
} 