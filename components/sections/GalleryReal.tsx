import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/gallery/interior-1.jpg',
    alt: 'Interior acogedor de Boreal con mural marino',
    title: 'Nuestro Espacio',
    description: 'Ambiente cálido y acogedor',
  },
  {
    src: '/images/gallery/coffee-1.jpg',
    alt: 'Café con latte art',
    title: 'Café de especialidad',
    description: 'Preparado con dedicación',
  },
  {
    src: '/images/gallery/exterior-1.jpg',
    alt: 'Exterior de la cafetería Boreal',
    title: 'Fachada',
    description: 'En el corazón de Santo Domingo',
  },
  {
    src: '/images/gallery/coffee-2.webp',
    alt: 'Café de especialidad',
    title: 'Brunch',
    description: 'Abanico gastronómico',
  },
  {
    src: '/images/gallery/exterior-2.webp',
    alt: 'Vista exterior del local',
    title: 'Entrada',
    description: 'Te esperamos',
  },
  {
    src: '/images/gallery/interior-2.png',
    alt: 'Detalle del interior',
    title: 'Detalles',
    description: 'Cada rincón cuenta una historia',
  },
]

export default function GalleryReal() {
  return (
    <section id="galeria" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-ocean-300 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-sand-300 rounded-full animate-float" style={{ animationDelay: '1s' } as any}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cream-400 rounded-full animate-float" style={{ animationDelay: '2s' } as any}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-secondary text-5xl sm:text-6xl lg:text-7xl font-light text-ocean-700 mb-8 tracking-wide">
            GALERÍA
          </h2>
          <div className="elegant-divider"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-8 font-light">
            Un espacio donde el estilo playero moderno se encuentra con la elegancia tradicional de Santo Domingo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-none shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8 w-full">
                  <h3 className="font-secondary text-3xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                  </h3>
                  <p className="text-cream-200 font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Borde decorativo */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-secondary text-2xl text-ocean-600 font-light">
            Visítanos y descubre un refugio de relajo y sabor
          </p>
        </div>
      </div>
    </section>
  )
}

