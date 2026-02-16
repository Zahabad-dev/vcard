'use client';

import { useEffect } from 'react';

export function useVisitTracker(pagina: string) {
  useEffect(() => {
    // Registrar la visita
    const registrarVisita = async () => {
      try {
        await fetch('/api/contador', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pagina }),
        });
      } catch (error) {
        console.error('Error registrando visita:', error);
      }
    };

    registrarVisita();
  }, [pagina]);
}
