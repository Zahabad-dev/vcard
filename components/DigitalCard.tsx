'use client';

import React from 'react';
import { CardData } from '@/types/card';
import { downloadVCard, shareCard } from '@/utils/cardHelpers';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaShare, FaBriefcase, FaUser, FaAward,
  FaCut, FaUtensils, FaPaintBrush, FaHardHat, FaRuler, FaBalanceScale,
  FaCamera, FaStethoscope, FaWrench, FaChalkboardTeacher
} from 'react-icons/fa';

interface DigitalCardProps {
  data: CardData;
}

// Configuración de temas para cada profesión
const getThemeConfig = (tema?: string) => {
  switch (tema) {
    case 'barbero':
      return {
        gradient: 'from-gray-900 via-gray-800 to-amber-900',
        bgPattern: 'bg-gradient-to-br from-stone-50 to-amber-50',
        primaryColor: 'gray-900',
        secondaryColor: 'amber-700',
        icon: FaCut,
        accentBg: 'bg-amber-50',
        accentBorder: 'border-gray-300',
        accentText: 'text-gray-900',
        buttonGradient1: 'from-gray-900 to-gray-800',
        buttonGradient2: 'from-amber-800 to-amber-900',
        shadow: 'shadow-gray-300'
      };
    case 'cocinero':
      return {
        gradient: 'from-red-600 via-orange-500 to-yellow-500',
        bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50',
        primaryColor: 'red-600',
        secondaryColor: 'orange-500',
        icon: FaUtensils,
        accentBg: 'bg-orange-100',
        accentBorder: 'border-orange-300',
        accentText: 'text-red-700',
        buttonGradient1: 'from-red-600 to-orange-600',
        buttonGradient2: 'from-orange-600 to-yellow-600',
        shadow: 'shadow-orange-200'
      };
    case 'pintor':
      return {
        gradient: 'from-purple-600 via-pink-500 to-rose-500',
        bgPattern: 'bg-gradient-to-br from-purple-50 to-pink-50',
        primaryColor: 'purple-600',
        secondaryColor: 'pink-500',
        icon: FaPaintBrush,
        accentBg: 'bg-purple-100',
        accentBorder: 'border-purple-300',
        accentText: 'text-purple-700',
        buttonGradient1: 'from-purple-600 to-pink-600',
        buttonGradient2: 'from-pink-600 to-rose-600',
        shadow: 'shadow-purple-200'
      };
    case 'albanil':
      return {
        gradient: 'from-stone-700 via-orange-600 to-amber-700',
        bgPattern: 'bg-gradient-to-br from-stone-50 to-orange-50',
        primaryColor: 'stone-700',
        secondaryColor: 'orange-600',
        icon: FaHardHat,
        accentBg: 'bg-stone-100',
        accentBorder: 'border-stone-300',
        accentText: 'text-stone-800',
        buttonGradient1: 'from-stone-700 to-orange-700',
        buttonGradient2: 'from-orange-700 to-amber-700',
        shadow: 'shadow-stone-300'
      };
    case 'arquitecto':
      return {
        gradient: 'from-slate-700 via-blue-600 to-cyan-600',
        bgPattern: 'bg-gradient-to-br from-slate-50 to-blue-50',
        primaryColor: 'slate-700',
        secondaryColor: 'blue-600',
        icon: FaRuler,
        accentBg: 'bg-blue-100',
        accentBorder: 'border-blue-300',
        accentText: 'text-slate-700',
        buttonGradient1: 'from-slate-700 to-blue-700',
        buttonGradient2: 'from-blue-700 to-cyan-700',
        shadow: 'shadow-blue-200'
      };
    case 'abogado':
      return {
        gradient: 'from-gray-800 via-slate-700 to-blue-900',
        bgPattern: 'bg-gradient-to-br from-gray-50 to-slate-100',
        primaryColor: 'gray-800',
        secondaryColor: 'slate-700',
        icon: FaBalanceScale,
        accentBg: 'bg-slate-100',
        accentBorder: 'border-slate-400',
        accentText: 'text-gray-800',
        buttonGradient1: 'from-gray-800 to-slate-800',
        buttonGradient2: 'from-slate-800 to-blue-900',
        shadow: 'shadow-slate-300'
      };
    case 'fotografo':
      return {
        gradient: 'from-yellow-500 via-amber-500 to-orange-500',
        bgPattern: 'bg-gradient-to-br from-yellow-50 to-amber-50',
        primaryColor: 'yellow-600',
        secondaryColor: 'amber-500',
        icon: FaCamera,
        accentBg: 'bg-yellow-100',
        accentBorder: 'border-yellow-300',
        accentText: 'text-yellow-700',
        buttonGradient1: 'from-yellow-500 to-amber-500',
        buttonGradient2: 'from-amber-500 to-orange-500',
        shadow: 'shadow-yellow-200'
      };
    case 'doctor':
      return {
        gradient: 'from-teal-600 via-cyan-500 to-blue-600',
        bgPattern: 'bg-gradient-to-br from-teal-50 to-cyan-50',
        primaryColor: 'teal-600',
        secondaryColor: 'cyan-500',
        icon: FaStethoscope,
        accentBg: 'bg-teal-100',
        accentBorder: 'border-teal-300',
        accentText: 'text-teal-700',
        buttonGradient1: 'from-teal-600 to-cyan-600',
        buttonGradient2: 'from-cyan-600 to-blue-600',
        shadow: 'shadow-teal-200'
      };
    case 'mecanico':
      return {
        gradient: 'from-zinc-700 via-gray-600 to-slate-700',
        bgPattern: 'bg-gradient-to-br from-zinc-50 to-gray-100',
        primaryColor: 'zinc-700',
        secondaryColor: 'gray-600',
        icon: FaWrench,
        accentBg: 'bg-zinc-100',
        accentBorder: 'border-zinc-300',
        accentText: 'text-zinc-800',
        buttonGradient1: 'from-zinc-700 to-gray-700',
        buttonGradient2: 'from-gray-700 to-slate-700',
        shadow: 'shadow-zinc-300'
      };
    case 'profesor':
      return {
        gradient: 'from-emerald-600 via-green-500 to-teal-600',
        bgPattern: 'bg-gradient-to-br from-emerald-50 to-green-50',
        primaryColor: 'emerald-600',
        secondaryColor: 'green-500',
        icon: FaChalkboardTeacher,
        accentBg: 'bg-emerald-100',
        accentBorder: 'border-emerald-300',
        accentText: 'text-emerald-700',
        buttonGradient1: 'from-emerald-600 to-green-600',
        buttonGradient2: 'from-green-600 to-teal-600',
        shadow: 'shadow-emerald-200'
      };
    default:
      return {
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        bgPattern: 'bg-white',
        primaryColor: 'indigo-600',
        secondaryColor: 'purple-600',
        icon: FaBriefcase,
        accentBg: 'bg-indigo-100',
        accentBorder: 'border-indigo-300',
        accentText: 'text-indigo-700',
        buttonGradient1: 'from-indigo-600 to-purple-600',
        buttonGradient2: 'from-purple-600 to-pink-600',
        shadow: 'shadow-indigo-200'
      };
  }
};

const DigitalCard: React.FC<DigitalCardProps> = ({ data }) => {
  const theme = getThemeConfig(data.tema);
  const IconComponent = theme.icon;

  const handleSaveContact = () => {
    downloadVCard(data);
  };

  const handleShare = async () => {
    await shareCard(data);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className={`${theme.bgPattern} rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${theme.shadow}`}>
        {/* Header con gradiente */}
        <div className={`bg-gradient-to-r ${theme.gradient} h-20 sm:h-28 relative`}>
          <div className="absolute -bottom-10 sm:-bottom-14 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              {data.foto ? (
                <img 
                  src={data.foto} 
                  alt={data.nombre} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <IconComponent className={`text-4xl sm:text-5xl text-${theme.primaryColor}`} />
              )}
            </div>
          </div>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="pt-14 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6">
          {/* Nombre y especialidad */}
          <div className="text-center mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              {data.nombre}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${theme.buttonGradient1}`}>
                <IconComponent className="text-xs sm:text-sm text-white" />
                <p className="text-sm sm:text-base font-bold text-white">
                  {data.especialidad}
                </p>
              </div>
            </div>
            {data.empresa && (
              <p className="text-xs sm:text-sm font-semibold text-gray-700" style={{ textShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
                {data.empresa}
              </p>
            )}
          </div>

          {/* Certificaciones */}
          {data.certificaciones && data.certificaciones.length > 0 && (
            <div className={`mb-3 sm:mb-4 ${theme.accentBg} rounded-lg sm:rounded-xl p-2 sm:p-3 border ${theme.accentBorder}`}>
              <div className="flex items-center gap-1 sm:gap-2 mb-2">
                <FaAward className={`text-${theme.primaryColor} text-sm`} />
                <h3 className={`text-xs sm:text-sm font-bold ${theme.accentText} uppercase tracking-wider`}>
                  Certificaciones
                </h3>
              </div>
              <ul className="space-y-1">
                {data.certificaciones.map((cert, index) => (
                  <li key={index} className="text-[10px] sm:text-xs text-gray-800 flex items-start gap-1 sm:gap-2">
                    <span className={`text-${theme.primaryColor} mt-0.5`}>✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Información de contacto */}
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            {/* Email */}
            <div className="flex items-center gap-2 sm:gap-3 text-gray-800">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 ${theme.accentBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <FaEnvelope className={`text-xs sm:text-sm text-${theme.primaryColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs text-gray-600 uppercase font-semibold">Email</p>
                <a 
                  href={`mailto:${data.email}`}
                  className={`text-xs sm:text-sm text-gray-900 hover:text-${theme.primaryColor} transition-colors truncate block`}
                >
                  {data.email}
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-2 sm:gap-3 text-gray-800">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 ${theme.accentBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <FaPhone className={`text-xs sm:text-sm text-${theme.secondaryColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs text-gray-600 uppercase font-semibold">Teléfono</p>
                <a 
                  href={`tel:${data.telefono}`}
                  className={`text-xs sm:text-sm text-gray-900 hover:text-${theme.secondaryColor} transition-colors truncate block`}
                >
                  {data.telefono}
                </a>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-center gap-2 sm:gap-3 text-gray-800">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 ${theme.accentBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <FaMapMarkerAlt className={`text-xs sm:text-sm text-${theme.primaryColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs text-gray-600 uppercase font-semibold">Dirección</p>
                {data.ubicacionMapa ? (
                  <a 
                    href={data.ubicacionMapa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs sm:text-sm text-gray-900 hover:text-${theme.primaryColor} transition-colors truncate block hover:underline cursor-pointer`}
                  >
                    {data.direccion}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-900 truncate">
                    {data.direccion}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
            <button
              onClick={handleSaveContact}
              className={`flex-1 bg-gradient-to-r ${theme.buttonGradient1} text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm`}
            >
              <FaDownload className="text-xs sm:text-sm" />
              <span>Guardar</span>
            </button>
            <button
              onClick={handleShare}
              className={`flex-1 bg-gradient-to-r ${theme.buttonGradient2} text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm`}
            >
              <FaShare className="text-xs sm:text-sm" />
              <span>Compartir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;
