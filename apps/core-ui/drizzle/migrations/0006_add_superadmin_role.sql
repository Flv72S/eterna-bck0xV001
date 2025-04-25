-- Aggiungi colonna ruolo se non esiste
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_name = 'users' AND column_name = 'ruolo') THEN
        ALTER TABLE users ADD COLUMN ruolo VARCHAR(20) DEFAULT 'user';
    END IF;
END $$;

-- Modifica il tipo e il default della colonna ruolo
ALTER TABLE users 
ALTER COLUMN ruolo TYPE VARCHAR(20),
ALTER COLUMN ruolo SET DEFAULT 'user';

-- Aggiungi commento aggiornato alla colonna ruolo
COMMENT ON COLUMN users.ruolo IS 'Ruolo dell''utente: user, pro, admin, superadmin';

-- Aggiungi vincolo di controllo sui valori ammessi
ALTER TABLE users 
ADD CONSTRAINT check_ruolo_valido 
CHECK (ruolo IN ('user', 'pro', 'admin', 'superadmin')); 