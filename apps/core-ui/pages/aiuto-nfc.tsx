import Link from 'next/link';

export default function AiutoNfc() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Guida alla lettura del codice NFC
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-3">
                  Come leggere il codice NFC
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Assicurati che il tuo dispositivo supporti la tecnologia NFC</li>
                  <li>Attiva la funzione NFC nelle impostazioni del tuo dispositivo</li>
                  <li>Avvicina il gioiello alla parte posteriore del tuo dispositivo</li>
                  <li>Mantieni il gioiello fermo fino al completamento della lettura</li>
                </ol>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-3">
                  Problemi comuni e soluzioni
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">La lettura non funziona</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Verifica che l'NFC sia attivato sul tuo dispositivo</li>
                      <li>Assicurati che il gioiello sia posizionato correttamente</li>
                      <li>Prova a rimuovere eventuali cover o protezioni del telefono</li>
                      <li>Riavvia l'applicazione e riprova</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Il codice non viene riconosciuto</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Verifica che il gioiello sia autentico Eterna</li>
                      <li>Prova a pulire la superficie del gioiello</li>
                      <li>Assicurati che il gioiello non sia danneggiato</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Il dispositivo non supporta NFC</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Verifica le specifiche del tuo dispositivo</li>
                      <li>Se il tuo dispositivo non supporta NFC, puoi inserire manualmente il codice seriale</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-3">
                  Inserimento manuale del codice
                </h2>
                <p className="text-gray-600">
                  Se non riesci a leggere il codice NFC, puoi inserirlo manualmente. Il codice seriale è composto da 12 caratteri alfanumerici e si trova sul certificato di autenticità del tuo gioiello Eterna.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-3">
                  Assistenza
                </h2>
                <p className="text-gray-600">
                  Se continui ad avere problemi, contatta il nostro servizio clienti:
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Email: assistenza@eterna.com</li>
                  <li>Telefono: 800 123 456</li>
                  <li>Orari: Lun-Ven 9:00-18:00</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/register" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Torna alla registrazione
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 