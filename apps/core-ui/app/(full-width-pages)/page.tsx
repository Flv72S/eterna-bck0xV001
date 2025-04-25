'use client';

import Link from 'next/link';
// import Image from 'next/image';

export default function WelcomePage() {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
        {/* Content Section */}
        <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
          <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div>
              <div className="mb-5 sm:mb-8">
                <h1 className="mb-2 font-semibold text-gray-800 text-2xl sm:text-3xl dark:text-white/90">Benvenuto in Eterna</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">La piattaforma per la gestione dei tuoi investimenti</p>
              </div>

              <div className="space-y-5">
                <Link 
                  href="/auth/signin" 
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-[#3C50E0] hover:bg-[#1B2B8F] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  Accedi
                </Link>

                <Link 
                  href="/auth/signup" 
                  className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 transition rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                >
                  Registrati
                </Link>
              </div>

              <div className="mt-5">
                <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400">
                  Vuoi saperne di più? <Link href="/about" className="text-[#3C50E0] hover:text-[#1B2B8F] dark:text-[#3C50E0]">Scopri di più su Eterna</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full h-full bg-[#1B2B8F] dark:bg-white/5 lg:grid items-center hidden">
          <div className="relative items-center justify-center flex z-1">
            {/* Commentato temporaneamente
            <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
              <Image src="/images/shape/grid-01.svg" alt="grid" width={540} height={254} />
            </div>
            <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
              <Image src="/images/shape/grid-01.svg" alt="grid" width={540} height={254} />
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Link href="/" className="block mb-4">
                <Image src="/images/logo/auth-logo.svg" alt="Logo" width={231} height={48} />
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">Free and Open-Source Tailwind CSS Admin Dashboard Template</p>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
} 