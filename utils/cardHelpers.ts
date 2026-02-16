import { CardData } from '@/types/card';

/**
 * Genera un archivo vCard para guardar el contacto
 */
export const generateVCard = (data: CardData): string => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${data.nombre}
TITLE:${data.especialidad}
EMAIL:${data.email}
TEL:${data.telefono}
ADR:;;${data.direccion};;;;
${data.empresa ? `ORG:${data.empresa}` : ''}
${data.sitioWeb ? `URL:${data.sitioWeb}` : ''}
END:VCARD`;
  
  return vcard;
};

/**
 * Descarga el vCard como archivo .vcf
 */
export const downloadVCard = (data: CardData): void => {
  const vcard = generateVCard(data);
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.nombre.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

/**
 * Comparte la tarjeta usando Web Share API
 */
export const shareCard = async (data: CardData): Promise<void> => {
  const text = `${data.nombre}\n${data.especialidad}\n\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nDirección: ${data.direccion}`;
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: data.nombre,
        text: text,
      });
    } catch (error) {
      // Usuario canceló o error al compartir
      console.log('Error al compartir:', error);
    }
  } else {
    // Fallback: copiar al portapapeles
    try {
      await navigator.clipboard.writeText(text);
      alert('¡Información copiada al portapapeles!');
    } catch (error) {
      console.error('Error al copiar:', error);
    }
  }
};
