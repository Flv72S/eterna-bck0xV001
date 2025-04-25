-- Aggiungi colonna role_level alla tabella users
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS role_level VARCHAR(50) DEFAULT 'gestionale';

-- Aggiungi commento alla colonna per documentazione
COMMENT ON COLUMN users.role_level IS 'Livello del ruolo amministrativo: tecnico, gestionale';

-- Aggiorna i valori esistenti per gli admin
UPDATE users 
SET role_level = 'gestionale' 
WHERE ruolo = 'admin' AND role_level IS NULL; 