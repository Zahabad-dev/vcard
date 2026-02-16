# 📊 CÓMO ACCEDER AL CONTADOR DE VISITAS

## 🔐 Acceso al Panel de Estadísticas

### Opción 1: Desde tu PC (Desarrollo Local)
```
http://localhost:3000/admin-stats-2026
```

### Opción 2: Desde tu Red Local (Celular/Tablet)
```
http://192.168.100.15:3000/admin-stats-2026
```

### Opción 3: Desde tu Sitio en Vercel (Producción)
```
https://tu-dominio.vercel.app/admin-stats-2026
```

## 🔑 Credenciales

**Contraseña:** `nexacard2026`

## 📈 ¿Qué verás en el Panel?

- ✅ **Total de visitas** - Contador global
- 📅 **Visitas hoy** - Visitas del día actual
- 🕐 **Última visita** - Timestamp de la última visita registrada
- 📄 **Visitas por página** - Desglose por cada tarjeta
- 📊 **Visitas por fecha** - Historial diario completo

## 🔄 Actualizar Estadísticas

Haz clic en el botón **"Actualizar Datos"** dentro del panel para recargar las estadísticas en tiempo real.

## 🎯 Accesos Rápidos

### Desde VS Code
Solo pídeme: 
- "¿Cuántas visitas tengo?"
- "Muéstrame las estadísticas"
- "Dame el reporte de visitas"

Y yo leeré el archivo de datos y te mostraré la información.

## 🔒 Seguridad

- La ruta `/admin-stats-2026` no es obvia ni aparece en navegación
- Está protegida con contraseña
- El archivo de datos no se sube a GitHub
- Solo tú sabes que existe este panel

## 💡 Cambiar Contraseña

Para cambiar la contraseña, edita el archivo:
```
app/admin-stats-2026/page.tsx
```

Busca la línea:
```javascript
if (password === 'nexacard2026') {
```

Y cámbiala por tu nueva contraseña.

---

**¡Listo para usar!** 🚀
