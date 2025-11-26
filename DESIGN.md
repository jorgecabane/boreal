# Documentación de Diseño - Boreal

## Filosofía de Diseño

Boreal no es una "picada tradicional", es una experiencia estética completa. El diseño debe reflejar:

1. **Elegancia Mediterránea**: Inspiración en Santorini, casas blancas, azules profundos
2. **Estilo Playero-Provenzal**: Combinación única que define la identidad de Boreal
3. **Slow Living**: Diseño tranquilo, espacioso, sin prisas
4. **Sofisticación Artesanal**: Premium pero accesible, cálido pero elegante

## Decisiones de Diseño UX/UI

### 1. Paleta de Colores

**¿Por qué estos colores?**

- **Ocean (#1a8cc7)**: Evoca el mar Egeo, transmite calma y confianza
- **Sand (#d4b896)**: Tierra cálida, conexión con lo natural y artesanal
- **Cream (#f5d76e)**: Toques dorados sutiles que añaden lujo sin ser ostentoso
- **Slate (#1e293b)**: Azul oscuro para texto y mural, sofisticado y legible

**Alternativas descartadas:**
- ❌ Colores brillantes/saturados: Demasiado agresivos para la experiencia "slow"
- ❌ Grises neutros: Sin personalidad, no reflejan la identidad playera
- ❌ Rojos/naranjas: No mediterráneos, demasiado urgentes

### 2. Tipografía

**Montserrat (Primaria)**
- Peso ligero (300-400) para sensación aireada
- Sans-serif moderna pero cálida
- Excelente legibilidad en pantallas

**Cormorant Garamond (Secundaria)**
- Serif elegante con personalidad
- Evoca refinamiento europeo/provenzal
- Tracking amplio para mayor elegancia

**Alternativas descartadas:**
- ❌ Inter/Roboto: Demasiado corporativas/genéricas
- ❌ Playfair Display: Hermosa pero demasiado formal
- ❌ Fuentes script: Difíciles de leer, poco profesionales

### 3. Espaciado y Layout

**Principios:**
- Secciones con `py-20 sm:py-28 lg:py-36` - Mucho espacio vertical
- Márgenes generosos entre elementos
- Contenedores max-width limitados para líneas de lectura óptimas
- Grid systems espaciados

**¿Por qué tanto espacio?**
- Refleja el concepto "tómate tu tiempo"
- Reduce carga cognitiva
- Aumenta sensación de lujo/calidad
- Mejora enfoque en cada sección

### 4. Elementos Visuales

**Ilustraciones Marinas**
- Sutiles (opacity: 10%) para no competir con contenido
- Inspiradas en el mural real del local
- Animación "float" para sensación orgánica
- Refuerzan identidad sin ser literales

**Bordes y Formas**
- `rounded-none` - Sin bordes redondeados
- Líneas limpias, geometría simple
- Inspiración en arquitectura mediterránea
- Contrasta con tendencia actual de "todo redondeado"

**Gradientes**
- Transiciones suaves ocean → sand → cream
- Nunca bruscos o artificiales
- Imitan luz natural mediterránea

### 5. Animaciones

**Microanimaciones Implementadas:**
- `fade-in`: Entrada suave de contenido
- `slide-up`: Elementos que emergen desde abajo
- `float`: Movimiento orgánico para decoraciones
- Hover states con `transform` y `scale`

**Principios:**
- Duración: 300-600ms (nunca >1s)
- Easing natural (`ease-in-out`, `ease-out`)
- Propósito: Feedback visual, no espectáculo
- Pueden deshabilitarse con `prefers-reduced-motion`

### 6. Jerarquía Visual

**Títulos (h1-h6):**
- Font sizes grandes: 5xl-7xl en hero
- Tracking amplio (letter-spacing)
- Font-weight light-normal (no bold)
- Color ocean-700 para consistencia

**Textos:**
- Font-weight light (300-400)
- Line-height relajado (leading-relaxed)
- Max-width en párrafos para legibilidad
- Color slate-700 para contraste suave

**CTAs:**
- Bordes limpios, sin sombras agresivas
- Hover states con transiciones suaves
- Tracking amplio para elegancia
- Padding generoso para touch targets

### 7. Componentes Clave

**Header:**
- Transparente sobre hero
- Transición a blanco al hacer scroll
- Sticky para acceso constante
- Menú minimalista

**Hero:**
- Full-height con gradiente océano
- Decoraciones marinas animadas
- Onda SVG en el bottom
- CTA dual (primario + secundario)

**Secciones:**
- Alternancia de fondos (blanco/gradientes suaves)
- Divider elegante entre contenido importante
- Consistencia en espaciado
- Responsive sin comprometer diseño

## Responsive Design

**Breakpoints:**
- Mobile first approach
- sm: 640px - Tablets pequeñas
- md: 768px - Tablets grandes
- lg: 1024px - Desktop
- xl: 1280px - Desktop grande

**Consideraciones móviles:**
- Touch targets mínimo 44x44px
- Texto legible sin zoom (16px+)
- Imágenes optimizadas
- Menú hamburguesa elegante

## Accesibilidad

- Contraste mínimo WCAG AA (4.5:1 texto, 3:1 UI)
- Todos los enlaces/botones con estados hover/focus
- Aria labels en elementos interactivos
- Navegación por teclado funcional
- Semántica HTML correcta

## Performance

- Fuentes con `display: swap`
- SVGs inline para decoraciones
- Lazy loading de imágenes (cuando se agreguen)
- CSS optimizado con Tailwind purge
- Animaciones en `transform` y `opacity` (GPU-accelerated)

## Futuras Mejoras

1. **Fotos reales**: Reemplazar placeholders con fotografías profesionales del local
2. **Galería interactiva**: Lightbox para mostrar el espacio en detalle
3. **Reservas online**: Integración con sistema de reservas
4. **Blog/Stories**: Sección de contenido sobre slow living y café
5. **Modo oscuro**: Versión nocturna con azules más profundos
6. **Ilustraciones custom**: Comisionar arte marino personalizado
7. **Video background**: Clip sutil del océano en hero (muy comprimido)

## Referencias Visuales

- Santorini: Arquitectura blanca, azules profundos, geometría limpia
- Cafés provenzales: Madera clara, textiles naturales, plantas
- Slow living aesthetic: Minimalismo cálido, materiales naturales
- Costa chilena: Tonos tierra, océano Pacífico, luz natural

---

**Recuerda**: Cada elemento debe responder a "¿Esto refleja la experiencia de estar en Boreal?"

