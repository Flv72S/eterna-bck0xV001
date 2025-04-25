import { seed } from '../drizzle/seed';
import { db } from '../lib/db';

async function main() {
  try {
    console.log('Inizio migrazione del database...');
    await seed();
    console.log('Migrazione completata con successo!');
  } catch (error) {
    console.error('Errore durante la migrazione:', error);
    process.exit(1);
  } finally {
    await db.end();
  }
}

main(); 