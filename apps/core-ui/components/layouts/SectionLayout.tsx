import { ReactNode } from 'react';
import { useSection } from '@/hooks/useSection';
import DashboardLayout from './DashboardLayout';

interface SectionLayoutProps {
  children: ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  const { section, loading, error } = useSection();

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento della sezione</div>;
  }

  if (!section) {
    return <div>Sezione non trovata</div>;
  }

  return (
    <DashboardLayout>
      <div className={`theme-${section.slug}`}>
        <style jsx>{`
          .theme-${section.slug} {
            --primary-color: ${section.colore_primario || '#4F46E5'};
            --secondary-color: ${section.colore_secondario || '#818CF8'};
          }
        `}</style>
        
        <header className="bg-primary-color text-white p-4">
          <h1 className="text-2xl font-bold">{section.nome}</h1>
          <p className="text-sm opacity-80">{section.descrizione}</p>
        </header>

        <main className="p-4">
          {children}
        </main>
      </div>
    </DashboardLayout>
  );
} 