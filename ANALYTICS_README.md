# Sistema de Contador de Visitas - NexaCard

## 📊 Descripción

Sistema de análisis de visitas integrado que registra automáticamente cada visita a tu portafolio de tarjetas digitales.

## 🔐 Acceso a Estadísticas

Para ver las estadísticas de visitas, accede a:

```
http://tu-dominio.com/admin-stats-2026
```

**Contraseña:** `nexacard2026`

## 📈 Funcionalidades

- **Contador total de visitas** - Registra cada visita al sitio
- **Visitas por página** - Detalla cuántas veces se visita cada tarjeta
- **Visitas por fecha** - Muestra el historial diario de visitas
- **Visitas hoy** - Contador de visitas del día actual
- **Última visita** - Timestamp de la última visita registrada

## 🛠️ Implementación Técnica

### Desarrollo Local
En desarrollo local, las visitas se guardan en:
```
/data/visitas.json
```

Este archivo NO se sube a GitHub (está en .gitignore).

### Producción en Vercel

⚠️ **IMPORTANTE**: Vercel usa un sistema de archivos de solo lectura. Para producción necesitas:

#### Opción 1: Vercel KV (Recomendado)
1. Ve a tu proyecto en Vercel Dashboard
2. Integrations → Browse Marketplace → KV
3. Instala Vercel KV
4. Actualiza el código para usar KV en lugar de archivo JSON

#### Opción 2: Base de datos externa
- MongoDB Atlas (gratis)
- Supabase (gratis)
- PlanetScale (gratis)

#### Opción 3: Google Analytics
- Más completo pero requiere configuración adicional

## 📝 Endpoints API

### Registrar visita
```
POST /api/contador
Body: { "pagina": "home" | "card-1" | "card-2" | ... }
```

### Obtener estadísticas
```
GET /api/contador
Response: {
  totalVisitas: number,
  visitasHoy: number,
  visitasPorPagina: object,
  visitasPorFecha: object,
  ultimaVisita: string
}
```

## 🔒 Seguridad

- La página de estadísticas está protegida con contraseña
- La ruta es no-obvia (/admin-stats-2026)
- El archivo de datos no se sube a GitHub
- En producción, usa variables de entorno para la contraseña

## 💡 Consultar desde VS Code

Puedes pedirme que consulte las estadísticas escribiendo algo como:
- "¿Cuántas visitas tengo?"
- "Muéstrame las estadísticas"
- "Dame el reporte de visitas"

Yo leeré el archivo `data/visitas.json` y te mostraré los datos.

## 🚀 Próximos Pasos para Vercel

1. Crea una cuenta en Vercel KV (gratuita)
2. Instala la integración en tu proyecto
3. Actualiza `/app/api/contador/route.ts` para usar KV:

```typescript
import { kv } from '@vercel/kv';

// En lugar de fs.readFile/writeFile
const datos = await kv.get('visitas') || initialData;
await kv.set('visitas', datos);
```

---

**Desarrollado para NexaCard Portfolio**
