# Eterna Core

Sistema di gestione centralizzato per i prodotti Eterna.

## Struttura del Progetto

```
eterna-core/
├── apps/                      # Applicazioni
│   ├── api/                   # API Backend
│   └── core-ui/               # Frontend Next.js
├── packages/                  # Pacchetti condivisi
│   ├── auth/                  # Autenticazione
│   ├── db/                    # ORM/DB setup con Drizzle
│   └── utils/                 # Utility
├── src/                       # Codice sorgente principale
│   ├── config/                # Configurazioni
│   ├── controllers/           # Controller
│   ├── routes/                # Route
│   └── services/              # Servizi
└── drizzle/                   # Schema DB Drizzle
```

## Setup

1. Clona il repository
2. Installa le dipendenze:
   ```bash
   pnpm install
   ```
3. Configura il database:
   ```bash
   pnpm db:generate
   pnpm db:push
   ```
4. Avvia l'applicazione:
   ```bash
   pnpm dev
   ```

## Dipendenze Principali

- Next.js
- React
- Drizzle ORM
- PostgreSQL
- Tailwind CSS
- NextAuth.js

## Requisiti

- Node.js >= 16
- PostgreSQL >= 13
- pnpm (gestore pacchetti)

## Configurazione Iniziale

1. Clonare il repository
2. Installare le dipendenze:
   ```bash
   pnpm install
   ```
3. Configurare il file .env con le variabili necessarie
4. Eseguire le migrazioni del database:
   ```bash
   pnpm db:generate
   pnpm db:push
   ```
5. Avviare l'applicazione:
   ```bash
   pnpm dev
   ```

## Script Disponibili

- `pnpm dev`: Avvia l'applicazione in modalità sviluppo
- `pnpm build`: Compila l'applicazione per la produzione
- `pnpm start`: Avvia l'applicazione in modalità produzione
- `pnpm test`: Esegue i test 

## Promemoria per la configurazione

### Punti da completare quando si va online:

1. Configurazione NFC
   - Implementare la lettura NFC per dispositivi Android
   - Testare la compatibilità con diversi dispositivi
   - Aggiungere fallback per dispositivi non supportati

2. Configurazione SMS
   - Configurare l'account Twilio per l'invio degli SMS
   - Implementare la logica di invio token via SMS
   - Testare il sistema di invio SMS in ambiente di produzione

3. Sicurezza
   - Verificare che tutte le chiamate API siano protette
   - Implementare rate limiting per le richieste
   - Configurare CORS correttamente
   - Assicurarsi che i token siano generati in modo sicuro

### Dipendenze da installare in produzione:
- react-hot-toast
- twilio
- bcrypt

### Variabili d'ambiente necessarie:
```env
DATABASE_URL=postgresql://postgres:N0nn0c4rl0!!@localhost:5432/eterna
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=...
```

### Note aggiuntive:
- Assicurarsi che il database sia correttamente migrato prima del deploy
- Verificare che tutti i servizi necessari siano attivi e configurati
- Testare il flusso completo di registrazione e login in ambiente di staging prima del deploy in produzione 