'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    sezione: '',
    pin: '123456'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sezioniEterna = [
    { value: 'soul', label: 'Soul' },
    { value: 'baby', label: 'Baby' },
    { value: 'pets', label: 'Pets' },
    { value: 'travel', label: 'Travel' },
    { value: 'life', label: 'Life' },
    { value: 'health', label: 'Health' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Errore durante la registrazione');
      }

      router.push('/auth/signin');
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
      setError('Si è verificato un errore durante la registrazione');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col flex-1 lg:w-1/2 w-full">
        <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla dashboard
          </Link>
        </div>

        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div>
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Registrati
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Inserisci i tuoi dati per registrarti!
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Nome<span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                    placeholder="Inserisci il tuo nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Cognome<span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                    placeholder="Inserisci il tuo cognome"
                    value={formData.cognome}
                    onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Email<span className="text-error-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                  placeholder="Inserisci la tua email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  Sezione Eterna<span className="text-error-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800 cursor-pointer"
                    value={formData.sezione}
                    onChange={(e) => setFormData({ ...formData, sezione: e.target.value })}
                  >
                    <option value="" className="text-gray-400">Seleziona una sezione</option>
                    {sezioniEterna.map((sezione) => (
                      <option key={sezione.value} value={sezione.value} className="text-gray-800 dark:text-white/90">
                        {sezione.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                  PIN<span className="text-error-500">*</span>
                </label>
                <input
                  type="password"
                  required
                  className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                  placeholder="Inserisci il PIN"
                  value={formData.pin}
                  onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Registrazione in corso...' : 'Registrati'}
                </button>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Hai già un account?{' '}
                <Link href="/auth/signin" className="text-brand-500 hover:text-brand-600 dark:text-brand-400">
                  Accedi
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden">
        <div className="relative items-center justify-center flex z-1">
          {/* Temporaneamente commentato
          <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
            <Image src="/images/shape/grid-01.svg" alt="grid" width={540} height={254} />
          </div>
          <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
            <Image src="/images/shape/grid-01.svg" alt="grid" width={540} height={254} />
          </div>
          */}
          <div className="flex flex-col items-center max-w-xs">
            {/* Temporaneamente commentato
            <Link href="/" className="block mb-4">
              <Image src="/images/logo/auth-logo.svg" alt="Logo" width={231} height={48} />
            </Link>
            */}
            <p className="text-center text-gray-400 dark:text-white/60">Free and Open-Source Tailwind CSS Admin Dashboard Template</p>
          </div>
        </div>
      </div>
    </div>
  );
} 