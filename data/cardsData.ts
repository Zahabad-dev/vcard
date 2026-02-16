import { CardData } from '@/types/card';

export const cardsData: CardData[] = [
  {
    id: 1,
    nombre: 'Ana García Martínez',
    especialidad: 'Fotógrafa Profesional',
    email: 'ana.garcia@example.com',
    telefono: '+52 55 1234 5678',
    direccion: 'Ciudad de México, CDMX',
    empresa: 'Ana García Photography',
    sitioWeb: 'https://anagarcia.photography',
    foto: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=400&fit=crop&crop=center',
    tema: 'fotografo'
  },
  {
    id: 2,
    nombre: 'Carlos Cuevas',
    especialidad: 'Estilista Profesional & Barbero',
    email: 'carlos.cuevas@barberia.com',
    telefono: '7751459879',
    direccion: 'Col. Centro Jardín la Floresta, a un lado de Vikingos',
    empresa: 'Barbería Carlos Cuevas',
    sitioWeb: 'https://barberia-carloscuevas.com',
    ubicacionMapa: 'https://maps.app.goo.gl/a7Fc3mjURCyzMm5T6',
    foto: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Certificado Internacional en Barbería Clásica',
      'Especialización en Cortes Fade & Degradados',
      'Curso Avanzado de Colorimetría Masculina',
      'Certificación en Afeitado Clásico con Navaja'
    ],
    tema: 'barbero'
  },
  {
    id: 3,
    nombre: 'María Fernández Silva',
    especialidad: 'Chef Ejecutiva',
    email: 'maria.fernandez@example.com',
    telefono: '+52 81 3456 7890',
    direccion: 'Monterrey, Nuevo León',
    empresa: 'Restaurante Sabor & Tradición',
    sitioWeb: 'https://mariaferchef.mx',
    foto: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Diplomado en Alta Cocina Francesa',
      'Certificación en Repostería Internacional',
      'Especialización en Cocina Molecular'
    ],
    tema: 'cocinero'
  },
  {
    id: 4,
    nombre: 'José Luis Hernández',
    especialidad: 'Pintor & Artista Plástico',
    email: 'joseluis.hernandez@example.com',
    telefono: '+52 55 4567 8901',
    direccion: 'Ciudad de México, CDMX',
    empresa: 'Taller de Arte JL Hernández',
    sitioWeb: 'https://jlhernandez.art',
    foto: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop&crop=center',
    tema: 'pintor'
  },
  {
    id: 5,
    nombre: 'Laura Martínez Pérez',
    especialidad: 'Maestra de Obra & Construcción',
    email: 'laura.martinez@example.com',
    telefono: '+52 33 5678 9012',
    direccion: 'Guadalajara, Jalisco',
    empresa: 'Construcciones Martínez',
    sitioWeb: 'https://lauramp.construccion',
    foto: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Certificado en Construcción Residencial',
      'Curso de Seguridad Industrial',
      'Especialización en Acabados Finos'
    ],
    tema: 'albanil'
  },
  {
    id: 6,
    nombre: 'Roberto Sánchez Torres',
    especialidad: 'Arquitecto',
    email: 'roberto.sanchez@example.com',
    telefono: '+52 81 6789 0123',
    direccion: 'Monterrey, Nuevo León',
    empresa: 'Sánchez Arquitectos',
    sitioWeb: 'https://robertoarq.com',
    foto: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Cédula Profesional de Arquitectura',
      'Maestría en Diseño Urbano',
      'Certificación LEED en Construcción Sustentable'
    ],
    tema: 'arquitecto'
  },
  {
    id: 7,
    nombre: 'Diana Ramírez Flores',
    especialidad: 'Abogada Corporativa',
    email: 'diana.ramirez@example.com',
    telefono: '+52 55 7890 1234',
    direccion: 'Ciudad de México, CDMX',
    empresa: 'Bufete Ramírez & Asociados',
    sitioWeb: 'https://dianaramirez.legal',
    foto: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Cédula Profesional de Derecho',
      'Especialización en Derecho Corporativo',
      'Maestría en Derecho Fiscal'
    ],
    tema: 'abogado'
  },
  {
    id: 8,
    nombre: 'Miguel Ángel Morales',
    especialidad: 'Médico Cirujano',
    email: 'miguel.morales@example.com',
    telefono: '+52 33 8901 2345',
    direccion: 'Guadalajara, Jalisco',
    empresa: 'Clínica Morales',
    sitioWeb: 'https://drmorales.med',
    foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Cédula Profesional de Medicina',
      'Especialidad en Cirugía General',
      'Certificación del Consejo Mexicano de Cirugía'
    ],
    tema: 'doctor'
  },
  {
    id: 9,
    nombre: 'Patricia González Cruz',
    especialidad: 'Mecánica Automotriz',
    email: 'patricia.gonzalez@example.com',
    telefono: '+52 81 9012 3456',
    direccion: 'Monterrey, Nuevo León',
    empresa: 'Taller Mecánico González',
    sitioWeb: 'https://tallergonzalez.mx',
    foto: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Certificación en Mecánica Automotriz',
      'Especialización en Sistemas de Inyección',
      'Curso de Diagnóstico Electrónico'
    ],
    tema: 'mecanico'
  },
  {
    id: 10,
    nombre: 'Fernando Jiménez Vargas',
    especialidad: 'Profesor de Matemáticas',
    email: 'fernando.jimenez@example.com',
    telefono: '+52 55 0123 4567',
    direccion: 'Ciudad de México, CDMX',
    empresa: 'Instituto Educativo Jiménez',
    sitioWeb: 'https://fernandoprof.edu',
    foto: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop&crop=center',
    certificaciones: [
      'Licenciatura en Matemáticas',
      'Maestría en Educación',
      'Certificación en Pedagogía Moderna'
    ],
    tema: 'profesor'
  }
];
