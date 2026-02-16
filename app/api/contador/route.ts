import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'visitas.json');

interface VisitData {
  totalVisitas: number;
  visitasPorPagina: Record<string, number>;
  visitasPorFecha: Record<string, number>;
  ultimaVisita: string;
}

// Función para leer datos
function leerDatos(): VisitData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error leyendo datos:', error);
  }
  
  return {
    totalVisitas: 0,
    visitasPorPagina: {},
    visitasPorFecha: {},
    ultimaVisita: ''
  };
}

// Función para guardar datos
function guardarDatos(data: VisitData) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error guardando datos:', error);
  }
}

// POST - Registrar visita
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pagina } = body;
    
    const datos = leerDatos();
    const fecha = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Incrementar contadores
    datos.totalVisitas += 1;
    datos.visitasPorPagina[pagina] = (datos.visitasPorPagina[pagina] || 0) + 1;
    datos.visitasPorFecha[fecha] = (datos.visitasPorFecha[fecha] || 0) + 1;
    datos.ultimaVisita = new Date().toISOString();
    
    guardarDatos(datos);
    
    return NextResponse.json({ success: true, totalVisitas: datos.totalVisitas });
  } catch (error) {
    console.error('Error en POST:', error);
    return NextResponse.json({ success: false, error: 'Error registrando visita' }, { status: 500 });
  }
}

// GET - Obtener estadísticas
export async function GET() {
  try {
    const datos = leerDatos();
    
    // Calcular estadísticas adicionales
    const fechas = Object.keys(datos.visitasPorFecha).sort();
    const visitasHoy = datos.visitasPorFecha[new Date().toISOString().split('T')[0]] || 0;
    
    const stats = {
      totalVisitas: datos.totalVisitas,
      visitasHoy,
      visitasPorPagina: datos.visitasPorPagina,
      visitasPorFecha: datos.visitasPorFecha,
      ultimaVisita: datos.ultimaVisita,
      primeraFecha: fechas[0] || 'N/A',
      ultimaFecha: fechas[fechas.length - 1] || 'N/A'
    };
    
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error en GET:', error);
    return NextResponse.json({ error: 'Error obteniendo estadísticas' }, { status: 500 });
  }
}
