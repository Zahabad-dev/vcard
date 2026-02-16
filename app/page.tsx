'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DigitalCard from '@/components/DigitalCard';
import { cardsData } from '@/data/cardsData';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { useVisitTracker } from '@/hooks/useVisitTracker';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Registrar visita a la página principal
  useVisitTracker('home');

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="text-center mb-8">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image 
            src="/logo_v2.png?v=2" 
            alt="Logo NexaCard" 
            width={200} 
            height={60}
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>
        
        <h1 className="text-6xl font-black mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          <span style={{ color: '#FFC700' }}>Nexa</span>
          <span style={{ color: '#000000' }}>Card</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Portafolio de Tarjetas Digitales de Contacto
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Explora {cardsData.length} diseños profesionales
        </p>
      </div>

      {/* Contenedor de la tarjeta centrada */}
      <div className="relative w-full max-w-2xl">
        {/* Botón anterior */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-indigo-600 hover:bg-indigo-50"
          aria-label="Tarjeta anterior"
        >
          <FaChevronLeft className="text-2xl" />
        </button>

        {/* Tarjeta actual */}
        <div className="transition-all duration-500 ease-in-out">
          <DigitalCard data={cardsData[currentIndex]} />
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-indigo-600 hover:bg-indigo-50"
          aria-label="Tarjeta siguiente"
        >
          <FaChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="flex gap-2 mt-8 flex-wrap justify-center max-w-md">
        {cardsData.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-indigo-600 to-purple-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-indigo-400'
            }`}
            aria-label={`Ir a tarjeta ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 font-medium">
          Tarjeta {currentIndex + 1} de {cardsData.length}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {cardsData[currentIndex].nombre}
        </p>
      </div>

      {/* Links a todas las tarjetas */}
      <div className="mt-12 w-full max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Diseños Disponibles
          </h2>
          <p className="text-gray-600 mb-1">
            Explora cada diseño de forma independiente
          </p>
          <p className="text-sm text-gray-500">
            Cada tarjeta tiene su propio estilo y ambiente único
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cardsData.map((card, index) => (
            <Link
              key={card.id}
              href={`/card/${card.id}`}
              target="_blank"
              className={`group relative bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                index === currentIndex 
                  ? 'ring-2 ring-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50' 
                  : ''
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform bg-gradient-to-r from-indigo-500 to-purple-500">
                  <span className="text-white font-bold text-lg">{card.id}</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                  {card.nombre.split(' ')[0]} {card.nombre.split(' ')[1]}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                  {card.especialidad}
                </p>
                <div className="flex items-center justify-center gap-1 text-indigo-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver Demo</span>
                  <FaExternalLinkAlt className="text-xs" />
                </div>
              </div>
              
              {index === currentIndex && (
                <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  Actual
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
          <p className="text-center text-gray-700">
            <span className="font-semibold text-indigo-600">💡 Tip:</span> Cada tarjeta se abre en su propia vista independiente, 
            permitiendo que tus clientes vean exactamente cómo lucirá su tarjeta digital en un ambiente real.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2026 NexaCard - Portafolio de Diseño de Tarjetas Digitales</p>
        <p className="mt-1">Desarrollado con Next.js, React y TailwindCSS</p>
      </footer>
    </main>
  );
}
