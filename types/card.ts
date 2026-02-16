export interface CardData {
  id: number;
  nombre: string;
  especialidad: string;
  email: string;
  telefono: string;
  direccion: string;
  foto?: string;
  empresa?: string;
  sitioWeb?: string;
  certificaciones?: string[];
  ubicacionMapa?: string;
  tema?: 'barbero' | 'cocinero' | 'pintor' | 'albanil' | 'arquitecto' | 'abogado' | 'fotografo' | 'doctor' | 'mecanico' | 'profesor';
  layoutVersion?: 1 | 2;
}
