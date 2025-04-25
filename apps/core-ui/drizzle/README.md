# Struttura del Database Eterna

Questo documento descrive la struttura del database utilizzato nell'applicazione Eterna.

## Tabelle Principali

### eterna_sections
Tabella principale che contiene le sezioni dell'applicazione.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | SERIAL | Chiave primaria |
| nome | VARCHAR(255) | Nome della sezione |
| slug | VARCHAR(255) | Slug univoco della sezione |
| descrizione | TEXT | Descrizione della sezione |
| stato | VARCHAR(50) | Stato della sezione (es. 'attivo', 'inattivo') |
| ordine | INTEGER | Ordine di visualizzazione |
| configurazione | JSONB | Configurazione personalizzata della sezione |
| colore_primario | VARCHAR(50) | Colore primario della sezione |
| colore_secondario | VARCHAR(50) | Colore secondario della sezione |
| created_at | TIMESTAMP | Data di creazione |

### users
Tabella degli utenti del sistema.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | SERIAL | Chiave primaria |
| email | VARCHAR(255) | Email dell'utente |
| hashed_pin | VARCHAR(255) | PIN hashato a 6 cifre |
| nome | VARCHAR(255) | Nome dell'utente |
| cognome | VARCHAR(255) | Cognome dell'utente |
| sezione_id | INTEGER | Riferimento alla sezione (FK) |
| ruolo | VARCHAR(20) | Ruolo dell'utente: 'user', 'pro', 'admin', 'superadmin' |
| role_level | VARCHAR(50) | Livello del ruolo amministrativo: 'tecnico', 'gestionale' |
| stato_account | VARCHAR(50) | Stato dell'account: 'attivo', 'sospeso', 'in_attesa_verifica' |
| created_at | TIMESTAMP | Data di creazione |
| last_login | TIMESTAMP | Data e ora dell'ultimo accesso (opzionale) |

### users_pro
Tabella degli utenti professionali.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | SERIAL | Chiave primaria |
| user_id | INTEGER | Riferimento all'utente (FK) |
| sezione_id | INTEGER | Riferimento alla sezione (FK) |
| azienda | VARCHAR(255) | Nome dell'azienda |
| partita_iva | VARCHAR(20) | Partita IVA |
| telefono_studio | VARCHAR(20) | Numero di telefono dello studio professionale |
| email_studio | VARCHAR(255) | Email dello studio professionale |
| verificato_admin | BOOLEAN | Indica se l'account è stato verificato da un amministratore |
| is_visibile | BOOLEAN | Indica se il profilo è visibile pubblicamente |
| stato_account | VARCHAR(50) | Stato dell'account: 'attivo', 'sospeso', 'in_attesa_verifica' |
| created_at | TIMESTAMP | Data di creazione |

### admin_sections
Tabella di relazione tra amministratori e sezioni.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | SERIAL | Chiave primaria |
| admin_id | INTEGER | Riferimento all'utente admin (FK) |
| sezione_id | INTEGER | Riferimento alla sezione (FK) |
| created_at | TIMESTAMP | Data di creazione |

## Relazioni

1. **eterna_sections** ↔ **users**
   - Un utente appartiene a una sezione
   - Una sezione può avere molti utenti
   - Relazione: 1:N

2. **users** ↔ **users_pro**
   - Un utente può essere un utente pro
   - Un utente pro appartiene a un utente
   - Relazione: 1:1

3. **eterna_sections** ↔ **users_pro**
   - Un utente pro appartiene a una sezione
   - Una sezione può avere molti utenti pro
   - Relazione: 1:N

4. **users** ↔ **admin_sections**
   - Un admin può gestire molte sezioni
   - Una sezione può essere gestita da molti admin
   - Relazione: N:M

## Vincoli di Chiave Esterna

1. `users.sezione_id` → `eterna_sections.id`
2. `users_pro.user_id` → `users.id`
3. `users_pro.sezione_id` → `eterna_sections.id`
4. `admin_sections.admin_id` → `users.id`
5. `admin_sections.sezione_id` → `eterna_sections.id`

## Note

- Tutte le tabelle includono un campo `created_at` per il tracciamento temporale
- Le relazioni sono gestite tramite vincoli di chiave esterna
- La tabella `eterna_sections` è la tabella principale che definisce la struttura dell'applicazione
- Gli utenti possono essere normali o professionali, con quest'ultimi che hanno informazioni aggiuntive
- Gli amministratori possono gestire più sezioni attraverso la tabella `admin_sections`
- Il ruolo `superadmin` ha accesso globale a tutte le sezioni e funzionalità 