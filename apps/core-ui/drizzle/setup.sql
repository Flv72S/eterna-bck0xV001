-- Creazione della tabella eterna_sections
CREATE TABLE IF NOT EXISTS eterna_sections (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  descrizione TEXT,
  stato VARCHAR(20) NOT NULL DEFAULT 'attivo',
  ordine INTEGER NOT NULL DEFAULT 0,
  configurazione JSONB DEFAULT '{}',
  colore_primario VARCHAR(7),
  colore_secondario VARCHAR(7),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Creazione della tabella users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  pin VARCHAR(255) NOT NULL,
  nome VARCHAR(100),
  cognome VARCHAR(100),
  versione VARCHAR(50),
  seriale_gioiello VARCHAR(255),
  sezione_id INTEGER REFERENCES eterna_sections(id),
  email_verificata BOOLEAN DEFAULT FALSE,
  telefono_verificato BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Creazione della tabella users_pro
CREATE TABLE IF NOT EXISTS users_pro (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  tipo_professione VARCHAR(100),
  specializzazione VARCHAR(100),
  nome_attivita VARCHAR(255),
  partita_iva VARCHAR(50),
  indirizzo VARCHAR(255),
  città VARCHAR(100),
  regione VARCHAR(100),
  cap VARCHAR(20),
  licenza TEXT,
  sezione_id INTEGER REFERENCES eterna_sections(id),
  approvato_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Creazione della tabella admin_sections
CREATE TABLE IF NOT EXISTS admin_sections (
  id SERIAL PRIMARY KEY,
  admin_id INTEGER REFERENCES users(id),
  sezione_id INTEGER REFERENCES eterna_sections(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 