import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Section {
  id: string;
  nome: string;
  slug: string;
  descrizione: string;
  colore_primario: string;
  colore_secondario: string;
}

export function useSection() {
  const [section, setSection] = useState<Section | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { sectionId } = router.query;

  useEffect(() => {
    if (!sectionId) {
      setLoading(false);
      return;
    }

    const fetchSection = async () => {
      try {
        const response = await fetch(`/api/sections/${sectionId}`);
        
        if (response.ok) {
          const sectionData = await response.json();
          setSection(sectionData);
          setError(null);
        } else {
          setError('Errore nel caricamento della sezione');
          setSection(null);
        }
      } catch (error) {
        console.error('Error fetching section:', error);
        setError('Errore nel caricamento della sezione');
        setSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, [sectionId]);

  return { section, loading, error };
} 