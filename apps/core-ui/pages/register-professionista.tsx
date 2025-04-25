import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import toast from 'react-hot-toast';

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
  email: string;
  pin: string;
  nome: string;
  cognome: string;
  phone: string;
  profession_type: string;
  specialization?: string;
  business_name?: string;
  vat_number?: string;
  address?: string;
  city?: string;
  region?: string;
  cap?: string;
  website?: string;
  license_number: string;
  license_country: string;
  eterna_section?: string;
};

export default function RegisterProfessionista() {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/register/professionista', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Errore nella registrazione');
      }

      toast.success('Registrazione completata con successo!');
      router.push('/login');
    } catch (error) {
      console.error('Errore nella registrazione:', error);
      toast.error(error instanceof Error ? error.message : 'Errore nella registrazione');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Registrazione Professionista
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Compila il form per registrarti come professionista Eterna
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-8">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dati personali */}
              <div className="col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Dati Personali</h3>
              </div>

              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  {...register('nome', { required: true })}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.nome && (
                  <p className="mt-1 text-sm text-red-600">Il nome è obbligatorio</p>
                )}
              </div>

              <div>
                <label htmlFor="cognome" className="block text-sm font-medium text-gray-700">
                  Cognome
                </label>
                <input
                  {...register('cognome', { required: true })}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.cognome && (
                  <p className="mt-1 text-sm text-red-600">Il cognome è obbligatorio</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  {...register('email', { 
                    required: true,
                    validate: validateEmail 
                  })}
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.type === 'validate' 
                      ? 'Inserisci un indirizzo email valido' 
                      : 'L\'email è obbligatoria'}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefono
                </label>
                <input
                  {...register('phone', { 
                    required: true,
                    onChange: (e) => {
                      e.target.value = formatPhoneNumber(e.target.value);
                    }
                  })}
                  type="tel"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">Il telefono è obbligatorio</p>
                )}
              </div>

              <div>
                <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
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
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.pin && (
                  <p className="mt-1 text-sm text-red-600">
                    Il PIN deve essere di 6 cifre numeriche
                  </p>
                )}
              </div>

              {/* Dati professionali */}
              <div className="col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Dati Professionali</h3>
              </div>

              <div>
                <label htmlFor="profession_type" className="block text-sm font-medium text-gray-700">
                  Tipo di Professione
                </label>
                <select
                  {...register('profession_type', { required: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Seleziona la tua professione</option>
                  <option value="veterinario">Veterinario</option>
                  <option value="psicologo">Psicologo</option>
                  <option value="medico">Medico</option>
                  <option value="dietologo">Dietologo</option>
                  <option value="altro">Altro</option>
                </select>
                {errors.profession_type && (
                  <p className="mt-1 text-sm text-red-600">Seleziona la tua professione</p>
                )}
              </div>

              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                  Specializzazione
                </label>
                <input
                  {...register('specialization')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="license_number" className="block text-sm font-medium text-gray-700">
                  Numero Licenza
                </label>
                <input
                  {...register('license_number', { required: true })}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.license_number && (
                  <p className="mt-1 text-sm text-red-600">Il numero di licenza è obbligatorio</p>
                )}
              </div>

              <div>
                <label htmlFor="license_country" className="block text-sm font-medium text-gray-700">
                  Paese di Rilascio Licenza
                </label>
                <input
                  {...register('license_country', { required: true })}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.license_country && (
                  <p className="mt-1 text-sm text-red-600">Il paese di rilascio è obbligatorio</p>
                )}
              </div>

              {/* Dati aziendali */}
              <div className="col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Dati Aziendali (Opzionali)</h3>
              </div>

              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">
                  Nome Attività/Studio
                </label>
                <input
                  {...register('business_name')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="vat_number" className="block text-sm font-medium text-gray-700">
                  Partita IVA
                </label>
                <input
                  {...register('vat_number')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Indirizzo
                </label>
                <input
                  {...register('address')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Città
                </label>
                <input
                  {...register('city')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Regione
                </label>
                <input
                  {...register('region')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="cap" className="block text-sm font-medium text-gray-700">
                  CAP
                </label>
                <input
                  {...register('cap')}
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Sito Web
                </label>
                <input
                  {...register('website')}
                  type="url"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="eterna_section" className="block text-sm font-medium text-gray-700">
                  Sezione Eterna
                </label>
                <select
                  {...register('eterna_section')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Seleziona la sezione</option>
                  <option value="salute">Salute</option>
                  <option value="benessere">Benessere</option>
                  <option value="nutrizione">Nutrizione</option>
                  <option value="comportamento">Comportamento</option>
                </select>
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Registrazione in corso...' : 'Registrati come Professionista'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/register" className="text-sm text-indigo-600 hover:text-indigo-500">
          Registrazione utente privato
        </Link>
      </div>
    </div>
  );
} 