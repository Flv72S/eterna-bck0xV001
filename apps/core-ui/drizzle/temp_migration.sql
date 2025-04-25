-- Verifica struttura tabella
\d users;

-- Aggiungi colonna last_login se non esiste
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'users' AND column_name = 'last_login') THEN
        ALTER TABLE users ADD COLUMN last_login TIMESTAMP;
    END IF;
END $$;

-- Aggiungi colonna role_level
ALTER TABLE users ADD COLUMN IF NOT EXISTS role_level VARCHAR(50) DEFAULT 'gestionale';

-- Aggiungi commento
COMMENT ON COLUMN users.role_level IS 'Livello del ruolo amministrativo: tecnico, gestionale';

-- Aggiorna valori esistenti
UPDATE users SET role_level = 'gestionale' WHERE ruolo = 'admin' AND role_level IS NULL; 