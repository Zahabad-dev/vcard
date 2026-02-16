'use client';

import React from 'react';
import DigitalCard from '@/components/DigitalCard';
import { cardsData } from '@/data/cardsData';
import { useVisitTracker } from '@/hooks/useVisitTracker';

interface PageProps {
  params: {
    id: string;
  };
}

export default function CardDetailPage({ params }: PageProps) {
  const cardId = parseInt(params.id);
  const card = cardsData.find((c) => c.id === cardId);
  
  // Registrar visita a esta tarjeta específica
  useVisitTracker(`card-${params.id}`);

  if (!card) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tarjeta no encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            La tarjeta que buscas no existe.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center p-2 sm:p-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-auto">
      {/* Tarjeta centrada completamente */}
      <div className="w-full max-w-lg my-auto">
        <DigitalCard data={card} />
      </div>
    </main>
  );
}
