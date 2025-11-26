# Carpeta de Imágenes - Boreal

Esta carpeta contiene todos los recursos visuales del sitio web.

## Estructura

### `/logos`
Logos de Boreal en diferentes formatos y tamaños:
- `logo.svg` - Logo principal en SVG (recomendado para mejor calidad)
- `logo.png` - Logo principal en PNG (alta resolución)
- `logo-white.svg` - Logo en blanco para fondos oscuros
- `logo-icon.svg` - Ícono/isotipo sin texto
- `favicon.ico` - Favicon del sitio

**Dimensiones recomendadas:**
- Logo completo: 1200x400px o similar (horizontal)
- Logo icon: 512x512px (cuadrado)
- Favicon: 32x32px, 16x16px

### `/gallery`
Fotos del local para la galería:
- `interior-1.jpg` - Vista general del interior
- `interior-2.jpg` - Vista del mural marino
- `interior-3.jpg` - Vista de las mesas y sillas
- `exterior.jpg` - Fachada del local
- `coffee-1.jpg` - Foto de café con latte art
- `coffee-2.jpg` - Otro ángulo de café
- `brunch.jpg` - Foto del brunch
- `pastries.jpg` - Foto de los pasteles/dulces

**Recomendaciones:**
- Formato: JPG o WebP
- Resolución: 1920x1080px o 1200x800px
- Optimizar para web (usar herramientas como TinyPNG o Squoosh)
- Mantener consistencia en estilo fotográfico
- Priorizar luz natural y colores mediterráneos

### `/og`
Imágenes para Open Graph (redes sociales):
- `og-image.jpg` - Imagen principal para compartir en redes sociales
- `og-hero.jpg` - Imagen alternativa

**Dimensiones:**
- 1200x630px (formato estándar Open Graph)
- Incluir logo y texto legible
- Evitar elementos importantes en los bordes (pueden cortarse)

## Formatos Recomendados

### Logos
- **SVG**: Mejor opción, escalable sin pérdida de calidad
- **PNG**: Con transparencia, para fondos variados

### Fotografías
- **WebP**: Mejor compresión, carga más rápida (moderno)
- **JPG**: Compatible con todos los navegadores
- **AVIF**: Siguiente generación (opcional)

## Uso en el Código

```tsx
// Importar logo
import Image from 'next/image'

<Image 
  src="/images/logos/logo.svg" 
  alt="Boreal Logo"
  width={200}
  height={67}
  priority
/>

// Imagen de galería
<Image 
  src="/images/gallery/interior-1.jpg" 
  alt="Interior de Boreal"
  width={1200}
  height={800}
  className="object-cover"
/>
```

## Optimización

Antes de subir imágenes, optimizarlas con:
- [TinyPNG](https://tinypng.com/) - Compresión JPG/PNG
- [Squoosh](https://squoosh.app/) - Herramienta de Google
- [ImageOptim](https://imageoptim.com/) - App para Mac
- [Sharp](https://sharp.pixelplumbing.com/) - Herramienta CLI

## Notas Importantes

1. **Nombrado**: Usar kebab-case (ejemplo: `coffee-latte-art.jpg`)
2. **Tamaño**: Mantener archivos bajo 500KB cuando sea posible
3. **Licencias**: Asegurarse de tener derechos sobre todas las imágenes
4. **Alt text**: Siempre incluir descripciones accesibles en el código
5. **Responsive**: Considerar versiones más pequeñas para móviles

## Git

El archivo `.gitignore` ya está configurado para NO ignorar esta carpeta, 
así que las imágenes se subirán al repositorio.

Si las imágenes son muy pesadas, considerar usar un CDN o servicio como:
- Cloudinary
- imgix
- Vercel Image Optimization (automático al deployar en Vercel)

