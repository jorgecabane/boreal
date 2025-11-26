# Boreal - Cafetería en Santo Domingo

Página web estática para Concepto Boreal, una cafetería de especialidad ubicada en Santo Domingo, Chile.

## Características

- 🏛️ Diseño elegante inspirado en la estética mediterránea y Santorini
- 🌊 Estilo playero-provenzal que refleja la identidad única de Boreal
- 🎨 Paleta de colores mediterránea (azul océano, arena, crema, slate)
- 🔤 Tipografía sofisticada (Montserrat + Cormorant Garamond)
- ✨ Microanimaciones sutiles y transiciones elegantes
- 🖼️ Ilustraciones marinas decorativas inspiradas en el mural del local
- 📱 Totalmente responsive con diseño "mobile-first"
- 🔍 Optimizado para SEO
- 🧩 Componentes modulares y reutilizables
- ⚙️ Configuración centralizada para fácil mantenimiento
- 🎭 Abundante espacio en blanco para un diseño "respirable"

## Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Google Fonts** - Fuentes tipográficas

## Estructura del Proyecto

```
boreal/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadatos SEO
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Header.tsx     # Navegación principal (transparente con scroll)
│   │   └── Footer.tsx     # Pie de página con gradiente
│   ├── ui/                # Componentes reutilizables
│   │   └── MarineDecoration.tsx  # Ilustraciones marinas decorativas
│   └── sections/          # Secciones de la página
│       ├── Hero.tsx       # Hero con gradiente océano y decoraciones
│       ├── About.tsx      # Sobre nosotros con espaciado elegante
│       ├── Gallery.tsx    # Galería visual de la esencia del local
│       ├── Features.tsx   # Características con iconos
│       ├── Menu.tsx       # Menú con diseño mediterráneo
│       ├── Hours.tsx      # Horarios con día actual destacado
│       ├── Location.tsx   # Ubicación con mapa y detalles
│       └── Contact.tsx    # Contacto con tarjetas elegantes
├── config/
│   └── site.config.ts     # Configuración centralizada
└── public/                # Archivos estáticos
    └── images/            # Imágenes y recursos visuales
        ├── logos/         # Logos en diferentes formatos
        ├── gallery/       # Fotos del local
        └── og/            # Imágenes para redes sociales
```

## Configuración

Toda la información del sitio se encuentra centralizada en `config/site.config.ts`. Para hacer cambios:

- **Información de contacto**: Edita `phone`, `email`, `address`
- **Horarios**: Modifica el objeto `hours`
- **Redes sociales**: Actualiza `social`
- **SEO**: Ajusta `seo`
- **Características**: Modifica el array `features`
- **Menú**: Edita `menuCategories` en `components/sections/Menu.tsx`

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Filosofía de Diseño

El diseño refleja la esencia de Boreal: un refugio elegante donde el mar Mediterráneo se encuentra con la tranquilidad del estilo provenzal. Inspirado en las casas blancas de Santorini, con toques marinos y un ambiente "slow living".

### Paleta de Colores Mediterránea

1. **Ocean (Azul Egeo)**: `#1a8cc7` - Azul profundo del mar, transmite calma y sofisticación
2. **Sand (Tierra Cálida)**: `#d4b896` - Tonos tierra y arena, evoca calidez natural
3. **Cream (Dorado Suave)**: `#f5d76e` - Acentos dorados sutiles, añade elegancia
4. **Slate (Azul Oscuro)**: `#1e293b` - Para textos y elementos fuertes, inspirado en el mural

### Tipografía Elegante

- **Primaria**: Montserrat (sans-serif) - Peso ligero (300-400) para textos, elegante y moderna
- **Secundaria**: Cormorant Garamond (serif) - Para títulos, sofisticada y atemporal

### Principios UX/UI

- **Slow Design**: Espaciado generoso, sin prisas, invita a explorar con calma
- **Elegancia Mediterránea**: Líneas limpias, geometría simple, bordes sin redondear
- **Microanimaciones**: Transiciones suaves que añaden vida sin distraer
- **Jerarquía Visual**: Tipografía grande, mucho aire, fácil escaneo
- **Elementos Decorativos**: Ilustraciones marinas sutiles que refuerzan la identidad

## SEO

El sitio está optimizado para SEO con:

- Metadatos completos en `layout.tsx`
- Estructura semántica HTML
- Open Graph tags
- Twitter Card tags
- Configuración de robots

## Personalización

### Agregar una nueva sección

1. Crea un nuevo componente en `components/sections/`
2. Importa y agrega en `app/page.tsx`
3. Agrega el enlace en `components/layout/Header.tsx`

### Modificar estilos

Los estilos se pueden modificar en:
- `tailwind.config.ts` - Configuración de Tailwind
- `app/globals.css` - Estilos globales y utilidades
- Componentes individuales - Estilos específicos

## Licencia

Este proyecto es privado y pertenece a Concepto Boreal.

