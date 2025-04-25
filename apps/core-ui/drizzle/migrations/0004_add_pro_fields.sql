-- Aggiungi nuovi campi alla tabella users_pro
ALTER TABLE users_pro 
ADD COLUMN IF NOT EXISTS telefono_studio VARCHAR(20),
ADD COLUMN IF NOT EXISTS email_studio VARCHAR(255),
ADD COLUMN IF NOT EXISTS verificato_admin BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_visibile BOOLEAN DEFAULT true;

-- Aggiungi commenti alle colonne per documentazione
COMMENT ON COLUMN users_pro.telefono_studio IS 'Numero di telefono dello studio professionale';
COMMENT ON COLUMN users_pro.email_studio IS 'Email dello studio professionale';
COMMENT ON COLUMN users_pro.verificato_admin IS 'Indica se l''account è stato verificato da un amministratore';
COMMENT ON COLUMN users_pro.is_visibile IS 'Indica se il profilo è visibile pubblicamente'; 