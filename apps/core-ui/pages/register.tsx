import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Funzioni di validazione locali
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const formatPhoneNumber = (value: string) => {
  if (!value) return '';
  // Rimuove tutti i caratteri non numerici
  const numbers = value.replace(/\D/g, '');
  
  // Formatta il numero di telefono italiano
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 6) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
  return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 10)}`;
};

type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  phonePrefix: string;
  pin: string;
  token: string;
  version: 'free' | 'premium';
  seriale_gioiello?: string;
};

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    defaultValues: {
      version: 'free',
      name: '',
      surname: '',
      email: '',
      phone: '',
      phonePrefix: '+39',
      pin: '123456',
      token: '123456',
      seriale_gioiello: '123456'
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNfcReading, setIsNfcReading] = useState(false);
  const version = watch('version');
  const router = useRouter();

  const handleNfcRead = async () => {
    setIsNfcReading(true);
    try {
      if (typeof window !== 'undefined' && 'NDEFReader' in window) {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();
        
        ndef.addEventListener("reading", ({ message, serialNumber }: any) => {
          if (serialNumber) {
            setValue('seriale_gioiello', serialNumber);
            alert('Codice NFC letto con successo');
          }
        });
      } else {
        alert('Il tuo dispositivo non supporta la lettura NFC');
      }
    } catch (error) {
      console.error('Errore nella lettura NFC:', error);
      alert('Errore nella lettura NFC');
    } finally {
      setIsNfcReading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!data) return;
    
    setIsSubmitting(true);
    try {
      console.log('Invio dati di registrazione:', data);
      
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          pin: data.pin,
          version: data.version,
          seriale_gioiello: data.seriale_gioiello,
          phone: data.phone,
          nome: data.name,
          cognome: data.surname,
          token: data.token
        }),
      });

      console.log('Risposta ricevuta:', response);

      // Verifica il tipo di contenuto della risposta
      const contentType = response.headers.get('content-type');
      console.log('Content-Type della risposta:', contentType);

      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Risposta non JSON:', text);
        throw new Error('La risposta del server non è nel formato JSON atteso');
      }

      const result = await response.json();
      console.log('Risultato JSON:', result);

      if (!response.ok) {
        throw new Error(result.message || 'Errore nella registrazione');
      }

      alert('Registrazione completata con successo');
      router.push('/login');
    } catch (error) {
      console.error('Errore nella registrazione:', error);
      alert(error instanceof Error ? error.message : 'Errore nella registrazione');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="flex h-screen w-full">
        <div className="bg-image">
          <div className="bg-image-content">
            <Image
              src="/images/auth/register-bg.jpg"
              alt="Register Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="container">
            <div className="mb-8 text-center">
              <h2 className="title">
                Registrazione Utente Privato
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    Nome
                  </label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="form-input"
                  />
                  {errors.name && (
                    <p className="error-message">Il nome è obbligatorio</p>
                  )}
                </div>

                <div>
                  <label className="label">
                    Cognome
                  </label>
                  <input
                    {...register('surname', { required: true })}
                    type="text"
                    className="form-input"
                  />
                  {errors.surname && (
                    <p className="error-message">Il cognome è obbligatorio</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="label">
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: true,
                      validate: validateEmail 
                    })}
                    type="email"
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="error-message">
                      {errors.email.type === 'validate' 
                        ? 'Inserisci un indirizzo email valido' 
                        : 'L\'email è obbligatoria'}
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="label">
                    Telefono
                  </label>
                  <div className="flex gap-2">
                    <select
                      {...register('phonePrefix')}
                      className="form-select w-24"
                    >
                      <option value="+39">+39</option>
                      <option value="+33">+33</option>
                      <option value="+49">+49</option>
                      <option value="+44">+44</option>
                      <option value="+34">+34</option>
                    </select>
                    <input
                      {...register('phone', {
                        onChange: (e) => {
                          e.target.value = formatPhoneNumber(e.target.value);
                        }
                      })}
                      type="tel"
                      className="form-input flex-1"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="label">
                    PIN (6 cifre)
                  </label>
                  <input
                    {...register('pin', { 
                      required: true,
                      minLength: 6,
                      maxLength: 6,
                      pattern: /^[0-9]{6}$/
                    })}
                    type="password"
                    className="form-input"
                  />
                  {errors.pin && (
                    <p className="error-message">
                      Il PIN deve essere di 6 cifre numeriche
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="label">
                    Versione
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("version", { required: true })}
                        value="free"
                        className="form-radio"
                      />
                      <span className="ml-2">Free</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("version", { required: true })}
                        value="premium"
                        className="form-radio"
                      />
                      <span className="ml-2">Premium</span>
                    </label>
                  </div>
                </div>

                {version === "premium" && (
                  <div className="col-span-2">
                    <label className="label">
                      Seriale Gioiello
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        {...register("seriale_gioiello", {
                          required: "Il seriale del gioiello è obbligatorio per la versione Premium",
                          pattern: {
                            value: /^[0-9A-F]{8}$/,
                            message: "Il seriale deve essere un codice esadecimale di 8 caratteri"
                          }
                        })}
                        className="form-input"
                        placeholder="Inserisci il seriale del gioiello"
                      />
                      <button
                        type="button"
                        onClick={handleNfcRead}
                        disabled={isNfcReading}
                        className="btn btn-primary"
                      >
                        {isNfcReading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Lettura in corso...
                          </>
                        ) : (
                          "Leggi NFC"
                        )}
                      </button>
                    </div>
                    {errors.seriale_gioiello && (
                      <p className="error-message">
                        {errors.seriale_gioiello.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="col-span-2">
                  <label className="label">
                    Token
                  </label>
                  <input
                    {...register('token', { required: true })}
                    type="text"
                    className="form-input"
                  />
                  {errors.token && (
                    <p className="error-message">
                      Il token è obbligatorio
                    </p>
                  )}
                </div>

                <div className="col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? 'Registrazione in corso...' : 'Registrati'}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Oppure
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/login"
                  className="btn btn-outline-primary w-full"
                >
                  Accedi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 