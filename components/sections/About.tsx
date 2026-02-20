import { siteConfig } from '@/config/site.config'
import Image from 'next/image'

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-cream-50 relative overflow-hidden">
      {/* Patrón de olas sutil en el fondo */}
      <div className="absolute inset-0 opacity-30 bg-wave-pattern"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-secondary text-5xl sm:text-6xl lg:text-7xl font-light text-ocean-700 mb-8 tracking-wide">
              SOBRE NOSOTROS
            </h2>
            <div className="elegant-divider"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                <span className="font-secondary text-2xl text-ocean-600">«{siteConfig.name}» </span> 
                nace del sueño familiar de vivir y compartir la paz de Santo Domingo. Somos un refugio diseñado entre la brisa del mar y el confort de un buen café de especialidad; un lugar para pausar y reconectar.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                Con <span className="text-ocean-600 font-normal">alma de hogar</span> y <span className="text-sand-600 font-normal">esencia playera</span>, creamos un puente entre lo artesanal y lo saludable. Nuestra carta nace de esa unión, ofreciendo desde opciones Keto y sin gluten hasta un café de especialidad preparado con dedicación. Te invitamos a descubrir este refugio donde el tiempo se detiene. Disfruta la vida al ritmo de Boreal.
              </p>

              <div className="pt-8">
                <a
                  href="#menu"
                  className="inline-block px-8 py-4 border-2 border-ocean-600 text-ocean-700 rounded-none font-light tracking-wider hover:bg-ocean-600 hover:text-white transition-all duration-300"
                >
                  Explorar la Carta
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Imagen de café de especialidad */}
              <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl group">
                <Image
                  src="/images/gallery/about-us.jpg"
                  alt="Café de especialidad preparado con dedicación"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay sutil con texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8 w-full">
                    <p className="font-secondary text-3xl text-white">
                      Café de Especialidad
                    </p>
                    <p className="text-cream-200 font-light mt-2">
                      Preparado con dedicación
                    </p>
                  </div>
                </div>
                
                {/* Borde decorativo */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/40 transition-all duration-500"></div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sand-200 rounded-none -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
