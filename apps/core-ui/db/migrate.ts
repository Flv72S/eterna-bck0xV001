import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  try {
    console.log('Iniziando la migrazione...');

    // Eliminiamo la vecchia tabella
    await pool.query(`
      DROP TABLE IF EXISTS users CASCADE;
    `);

    // Creiamo la nuova tabella con la struttura aggiornata
    await pool.query(`
      CREATE TABLE users (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        email varchar(255) NOT NULL UNIQUE,
        pin text NOT NULL,
        token text,
        nome varchar(100) DEFAULT 'Non specificato',
        cognome varchar(100) DEFAULT 'Non specificato',
        version varchar(20) DEFAULT 'free',
        seriale_gioiello varchar(100),
        ruolo varchar(30) DEFAULT 'utente',
        attivatore_validato boolean DEFAULT false,
        nfc_supportato boolean DEFAULT true,
        registrazione_via_nfc boolean DEFAULT false,
        otp varchar(10),
        otp_scadenza timestamp,
        verificato_email boolean DEFAULT false,
        verificato_telefono boolean DEFAULT false,
        ultima_login timestamp DEFAULT NOW(),
        created_at timestamp DEFAULT NOW(),
        updated_at timestamp DEFAULT NOW()
      );
    `);

    console.log('Migrazione completata con successo!');
  } catch (error) {
    console.error('Errore durante la migrazione:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main(); 