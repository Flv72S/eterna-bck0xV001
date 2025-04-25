-- Aggiungi colonna stato_account alla tabella users
ALTER TABLE users ADD COLUMN IF NOT EXISTS stato_account VARCHAR(50) DEFAULT 'in_attesa_verifica';

-- Aggiungi colonna stato_account alla tabella users_pro
ALTER TABLE users_pro ADD COLUMN IF NOT EXISTS stato_account VARCHAR(50) DEFAULT 'in_attesa_verifica';

-- Aggiungi commenti alle colonne per documentazione
COMMENT ON COLUMN users.stato_account IS 'Stato dell''account: attivo, sospeso, in_attesa_verifica';
COMMENT ON COLUMN users_pro.stato_account IS 'Stato dell''account: attivo, sospeso, in_attesa_verifica'; 