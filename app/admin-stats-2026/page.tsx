'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChartLine, FaCalendarDay, FaEye, FaClock, FaFileAlt } from 'react-icons/fa';

interface Stats {
  totalVisitas: number;
  visitasHoy: number;
  visitasPorPagina: Record<string, number>;
  visitasPorFecha: Record<string, number>;
  ultimaVisita: string;
  primeraFecha: string;
  ultimaFecha: string;
}

export default function AdminStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Contraseña simple (en producción usa algo más seguro)
    if (password === 'nexacard2026') {
      setAuthenticated(true);
      loadStats();
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const loadStats = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contador');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error cargando estadísticas:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <FaChartLine className="text-5xl text-purple-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">Panel de Estadísticas</h1>
            <p className="text-gray-500 mt-2">Acceso restringido</p>
          </div>
          <form onSubmit={handleAuth}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mb-4"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Acceder
            </button>
          </form>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando estadísticas...</p>
        </div>
      </main>
    );
  }

  if (!stats) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error cargando estadísticas</p>
        </div>
      </main>
    );
  }

  const formatDate = (isoString: string) => {
    if (!isoString) return 'N/A';
    return new Date(isoString).toLocaleString('es-MX');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image 
              src="/logo_v2.png" 
              alt="Logo NexaCard" 
              width={200} 
              height={60}
              className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            Panel de Estadísticas
          </h1>
          <p className="text-gray-600 text-lg">NexaCard Analytics</p>
          <button
            onClick={loadStats}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Actualizar Datos
          </button>
        </div>

        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold uppercase text-sm">Total Visitas</h3>
              <FaEye className="text-purple-600 text-2xl" />
            </div>
            <p className="text-4xl font-bold text-gray-800">{stats.totalVisitas}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-pink-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold uppercase text-sm">Visitas Hoy</h3>
              <FaCalendarDay className="text-pink-600 text-2xl" />
            </div>
            <p className="text-4xl font-bold text-gray-800">{stats.visitasHoy}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-rose-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-semibold uppercase text-sm">Última Visita</h3>
              <FaClock className="text-rose-600 text-2xl" />
            </div>
            <p className="text-sm font-semibold text-gray-800">{formatDate(stats.ultimaVisita)}</p>
          </div>
        </div>

        {/* Visitas por página */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaFileAlt className="text-purple-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Visitas por Página</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(stats.visitasPorPagina)
              .sort(([, a], [, b]) => b - a)
              .map(([pagina, visitas]) => (
                <div key={pagina} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    {pagina === 'home' ? '🏠 Inicio' : `📇 ${pagina.replace('card-', 'Tarjeta ')}`}
                  </p>
                  <p className="text-2xl font-bold text-purple-700">{visitas} visitas</p>
                </div>
              ))}
          </div>
        </div>

        {/* Visitas por fecha */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-purple-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Visitas por Fecha</h2>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {Object.entries(stats.visitasPorFecha)
              .sort(([a], [b]) => b.localeCompare(a))
              .map(([fecha, visitas]) => (
                <div key={fecha} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <span className="font-semibold text-gray-700">📅 {fecha}</span>
                  <span className="text-lg font-bold text-purple-700">{visitas} visitas</span>
                </div>
              ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Periodo: {stats.primeraFecha} - {stats.ultimaFecha}</p>
        </div>
      </div>
    </main>
  );
}
