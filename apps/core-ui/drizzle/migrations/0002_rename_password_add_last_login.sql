-- Rinominare la colonna password in hashed_pin
ALTER TABLE users RENAME COLUMN password TO hashed_pin;

-- Aggiungere la colonna last_login
ALTER TABLE users ADD COLUMN last_login TIMESTAMP; 