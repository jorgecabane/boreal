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
                La Cafetería <span className="font-secondary text-2xl text-ocean-600">«{siteConfig.fullName}»</span>, 
                anclada en la comuna de Santo Domingo, es un refugio acogedor que ofrece una experiencia 
                única para los amantes del café.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                Nuestro ambiente <span className="text-ocean-600 font-normal">playero</span> con toques de una particular modernidad mediterránea, creando un espacio cálido 
                y relajante donde disfrutar de un exquisito café.
              </p>
              
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                Situados en un espacio <span className="text-sand-600 font-normal">ícono</span> de 
                la comuna, donde convergen varios emprendedores que juntos añaden un toque especial a la experiencia.
              </p>

              <div className="pt-8">
                <a
                  href="#menu"
                  className="inline-block px-8 py-4 border-2 border-ocean-600 text-ocean-700 rounded-none font-light tracking-wider hover:bg-ocean-600 hover:text-white transition-all duration-300"
                >
                  Explorar el Menú
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Imagen de café de especialidad */}
              <div className="relative aspect-[3/4] rounded-none overflow-hidden shadow-2xl group">
                <Image
                  src="/images/gallery/coffee-specialty.jpg"
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
