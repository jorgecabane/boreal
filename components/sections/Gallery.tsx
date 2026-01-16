export default function Gallery() {
  const galleryItems = [
    {
      title: 'Nuestro Espacio',
      description: 'Ambiente cálido y acogedor',
      icon: '🏠',
    },
    {
      title: 'Arte Marino',
      description: 'Murales inspirados en el océano',
      icon: '🐋',
    },
    {
      title: 'Café Artesanal',
      description: 'Preparado con dedicación',
      icon: '☕',
    },
    {
      title: 'Estilo Provenzal',
      description: 'Detalles mediterráneos',
      icon: '🌿',
    },
  ]

  return (
    <section id="galeria" className="section-padding ocean-gradient relative overflow-hidden">
      {/* Decoración de burbujas */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' } as any}></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' } as any}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-secondary text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-wide">
            Nuestra Esencia
          </h2>
          <div className="elegant-divider bg-gradient-to-r from-transparent via-cream-300 to-transparent"></div>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto mt-8 font-light">
            Un espacio donde el estilo playero se encuentra con la elegancia provenzal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-none p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-secondary text-2xl text-white mb-3 font-light">
                {item.title}
              </h3>
              <p className="text-cream-200 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-cream-100 text-lg font-light">
            Visítanos y descubre un refugio de relajo y sabor
          </p>
        </div>
      </div>
    </section>
  )
}

