import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

type FormData = {
  email: string;
  pin: string;
  token: string;
};

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulazione di login
      console.log('Dati di login:', data);
      
      // Verifica del token fisso
      if (data.token !== '123456') {
        setError('Token non valido. Usa il token: 123456');
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (error) {
      console.error('Errore durante il login:', error);
      setError('Si è verificato un errore durante il login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-auth">
      <div className="flex h-screen w-full">
        <div className="bg-image">
          <div className="bg-image-content">
            <Image
              src="/images/auth/login-bg.jpg"
              alt="Login Background"
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
                Accedi al tuo account
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 ? (
                <>
                  <div className="mb-4">
                    <label className="label">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Inserisci la tua email"
                        className="form-input"
                        {...register('email', { required: 'Email obbligatoria' })}
                      />
                      {errors.email && (
                        <p className="error-message">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="label">
                      PIN
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Inserisci il tuo PIN"
                        className="form-input"
                        {...register('pin', { 
                          required: 'PIN obbligatorio',
                          pattern: {
                            value: /^\d{6}$/,
                            message: 'Il PIN deve essere di 6 cifre numeriche'
                          }
                        })}
                      />
                      {errors.pin && (
                        <p className="error-message">{errors.pin.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary"
                    >
                      Avanti
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="label">
                      Token
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Inserisci il token"
                        className="form-input"
                        {...register('token', { required: 'Token obbligatorio' })}
                      />
                      {errors.token && (
                        <p className="error-message">{errors.token.message}</p>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Usa il token: <span className="font-mono">123456</span>
                    </p>
                  </div>

                  {error && (
                    <div className="mb-4 rounded-lg bg-danger/10 p-4">
                      <p className="text-sm text-danger">{error}</p>
                    </div>
                  )}

                  <div className="mb-5 flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary"
                    >
                      Indietro
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary"
                    >
                      {isLoading ? 'Accesso in corso...' : 'Accedi'}
                    </button>
                  </div>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Non hai un account?{' '}
                <Link href="/register" className="text-primary hover:underline">
                  Registrati
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 