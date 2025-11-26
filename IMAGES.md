# Guía de Imágenes para Boreal

## 📁 Estructura de Carpetas Creada

```
public/images/
├── logos/          # Logos y marcas
├── gallery/        # Fotos del local
├── og/            # Imágenes para redes sociales
└── README.md      # Documentación completa
```

## 🎯 Imágenes Necesarias

### Prioridad Alta (Esenciales)

1. **Logo Principal** (`/public/images/logos/logo.svg` o `.png`)
   - Dimensiones: 1200x400px aprox
   - Formato: SVG preferido (escalable)
   - Usar en: Header, Footer

2. **Logo Blanco** (`/public/images/logos/logo-white.svg`)
   - Para fondos oscuros (hero, footer)
   - Mismo tamaño que logo principal

3. **Foto Hero** (`/public/images/gallery/hero.jpg`)
   - Dimensiones: 1920x1080px
   - La imagen principal del sitio
   - Debe ser impactante y representativa

4. **OG Image** (`/public/images/og/og-image.jpg`)
   - Dimensiones: 1200x630px
   - Para compartir en redes sociales
   - Incluir logo + texto "Boreal - Santo Domingo"

### Prioridad Media (Recomendadas)

5. **Interior 1-3** (`/public/images/gallery/interior-{1,2,3}.jpg`)
   - Vista general del espacio
   - Vista del mural marino
   - Detalle de mesas y decoración

6. **Café con Latte Art** (`/public/images/gallery/coffee.jpg`)
   - Para la sección de menú
   - Dimensiones: 1200x800px

7. **Brunch** (`/public/images/gallery/brunch.jpg`)
   - Foto del brunch preparado

### Prioridad Baja (Opcionales)

8. **Exterior** (`/public/images/gallery/exterior.jpg`)
   - Fachada del local

9. **Favicon** (`/public/images/logos/favicon.ico`)
   - 32x32px y 16x16px

## 🔧 Cómo Usar las Imágenes

### Ejemplo 1: Actualizar el Hero con Foto de Fondo

Cuando tengas `hero.jpg`, actualiza `components/sections/Hero.tsx`:

```tsx
// Agrega al inicio del archivo
import Image from 'next/image'

// Dentro del componente, reemplaza el gradiente de fondo:
<section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <Image
      src="/images/gallery/hero.jpg"
      alt="Cafetería Boreal"
      fill
      className="object-cover"
      priority
      quality={90}
    />
    {/* Overlay oscuro para legibilidad del texto */}
    <div className="absolute inset-0 bg-slate-900/50"></div>
  </div>
  
  {/* ... resto del contenido ... */}
</section>
```

### Ejemplo 2: Agregar Logo en el Header

En `components/layout/Header.tsx`:

```tsx
import Image from 'next/image'

// Reemplaza el texto del logo con:
<a href="#inicio" className="flex items-center gap-3">
  <Image
    src="/images/logos/logo.svg"
    alt={siteConfig.name}
    width={120}
    height={40}
    className={`transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
    priority
  />
</a>
```

### Ejemplo 3: Crear Galería con Fotos Reales

Actualizar `components/sections/Gallery.tsx`:

```tsx
const galleryImages = [
  {
    src: '/images/gallery/interior-1.jpg',
    alt: 'Interior acogedor de Boreal',
    title: 'Nuestro Espacio',
  },
  {
    src: '/images/gallery/interior-2.jpg',
    alt: 'Mural marino en la pared',
    title: 'Arte Marino',
  },
  {
    src: '/images/gallery/coffee.jpg',
    alt: 'Café con latte art',
    title: 'Café Artesanal',
  },
  {
    src: '/images/gallery/brunch.jpg',
    alt: 'Brunch preparado',
    title: 'Brunch Especial',
  },
]

// En el JSX:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {galleryImages.map((image, index) => (
    <div key={index} className="group relative aspect-[3/4] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-secondary text-2xl text-white">{image.title}</h3>
        </div>
      </div>
    </div>
  ))}
</div>
```

## 📸 Recomendaciones de Fotografía

### Estilo Visual
- ✅ Luz natural cuando sea posible
- ✅ Tonos cálidos que reflejen la paleta mediterránea
- ✅ Enfocar detalles: texturas de madera, latte art, plantas
- ✅ Incluir personas (clientes disfrutando) para calidez
- ❌ Evitar flash directo
- ❌ Evitar saturación excesiva
- ❌ Evitar composiciones muy cargadas

### Herramientas de Edición
- **Lightroom**: Para ajustar tonos y exposición
- **VSCO**: Para filtros consistentes
- **Snapseed**: Editor móvil potente

### Colores a Resaltar
Según nuestra paleta:
- Azules del océano (#1a8cc7)
- Tonos arena/beige (#d4b896)
- Blancos cremosos
- Detalles dorados (#f5d76e)

## 🚀 Optimización Antes de Subir

### Herramientas Online
1. [TinyPNG](https://tinypng.com/) - Comprime sin pérdida visible
2. [Squoosh](https://squoosh.app/) - Herramienta de Google
3. [ImageOptim](https://imageoptim.com/) - App para Mac

### Formato Recomendado por Uso
- **Logos**: SVG > PNG con transparencia
- **Fotos**: WebP > JPG (Next.js convierte automáticamente)
- **OG Images**: JPG (mejor compatibilidad)

## 📝 Checklist de Implementación

Cuando tengas las imágenes:

- [ ] Colocar imágenes en las carpetas correspondientes
- [ ] Optimizar todas las imágenes (< 500KB cada una)
- [ ] Actualizar Hero con imagen de fondo
- [ ] Agregar logo en Header y Footer
- [ ] Actualizar sección Gallery con fotos reales
- [ ] Agregar og-image.jpg para redes sociales
- [ ] Actualizar `app/layout.tsx` con la ruta de OG image
- [ ] Crear favicon.ico y agregarlo al `<head>`
- [ ] Probar carga en diferentes dispositivos
- [ ] Verificar alt text accesibles en todas las imágenes

## 💡 Tips Extra

1. **Lazy Loading**: Next.js lo hace automático, excepto para `priority` images
2. **Blur Placeholder**: Genera automáticamente con `placeholder="blur"`
3. **Responsive**: Next.js sirve diferentes tamaños según dispositivo
4. **CDN**: Si usas Vercel, las imágenes se optimizan y sirven desde CDN gratis

## 🎨 Ejemplo de Sesión Fotográfica

**Hora recomendada**: 10am - 12pm (luz natural óptima)

**Shots necesarios**:
1. Hero shot: Vista amplia del interior con luz natural
2. Detalle mural: Acercamiento al arte marino de la pared
3. Mesa preparada: Setup completo de desayuno/brunch
4. Café close-up: Latte art recién hecho
5. Personas disfrutando: Clientes reales en el espacio
6. Productos: Pasteles, sándwiches en primer plano
7. Exterior: Fachada con letrero
8. Detalles: Plantas, texturas de madera, decoración

---

¿Necesitas ayuda con algo más relacionado a las imágenes?

