# Eterna Core UI

## Requisiti per il Deployment

### 1. HTTPS
- Il sito deve essere servito su HTTPS per:
  - Accesso alla fotocamera per la scansione QR
  - Sicurezza delle comunicazioni
  - Supporto alle moderne API del browser

### 2. Permessi Fotocamera
- Gestire i permessi della fotocamera:
  - Richiedere esplicitamente il permesso all'utente
  - Gestire i casi di rifiuto
  - Fornire istruzioni chiare per l'attivazione della fotocamera

### 3. QR Code Scanner
- La libreria `html5-qrcode` richiede:
  - HTTPS per funzionare
  - Permessi della fotocamera
  - Browser moderni con supporto alle API necessarie

### 4. Token SMS
- Implementare il servizio di invio SMS per:
  - Invio del token di verifica
  - Gestione dei fallimenti
  - Logica di scadenza del token

### 5. Sicurezza
- Implementare:
  - Rate limiting per le richieste di token
  - Validazione lato server dei PIN
  - Protezione contro attacchi brute force
  - Logging delle attività sospette

### 6. Performance
- Ottimizzare:
  - Caricamento della libreria QR
  - Gestione della memoria durante la scansione
  - Tempo di risposta delle API

### 7. Testing
- Verificare:
  - Funzionamento su diversi dispositivi
  - Supporto a diversi browser
  - Gestione degli errori
  - Esperienza utente su mobile

### 8. Documentazione
- Fornire:
  - Istruzioni per l'utente
  - Troubleshooting guide
  - FAQ comuni
  - Supporto tecnico 