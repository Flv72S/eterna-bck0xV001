import { db } from '@/lib/db';
import { eternaSections } from './schema/eterna_sections';
import { users as usersTable } from './schema/users';
import { adminSections } from './schema/admin_sections';
import bcrypt from 'bcryptjs';

async function main() {
  try {
    // Inserimento delle sezioni
    const sectionsData = [
      {
        nome: 'Soul',
        slug: 'soul',
        descrizione: 'Sezione Soul'
      },
      {
        nome: 'Pets',
        slug: 'pets',
        descrizione: 'Sezione Pets'
      }
    ];

    const sections = await db.insert(eternaSections).values(sectionsData).returning();

    // Inserimento degli utenti
    const password = await bcrypt.hash('password123', 10);
    const usersData = [
      {
        email: 'admin@example.com',
        nome: 'Admin',
        cognome: 'User',
        password_hash: password,
        ruolo: 'admin'
      },
      {
        email: 'user@example.com',
        nome: 'Normal',
        cognome: 'User',
        password_hash: password,
        ruolo: 'user',
        sezione_id: sections[0].id
      }
    ];

    const insertedUsers = await db.insert(usersTable).values(usersData).returning();

    // Inserimento delle relazioni admin-sezioni
    await db.insert(adminSections).values({
      admin_id: insertedUsers[0].id,
      sezione_id: sections[0].id
    });

    console.log('Seed completato con successo');
  } catch (error) {
    console.error('Errore durante il seed:', error);
    process.exit(1);
  }
}

main(); 