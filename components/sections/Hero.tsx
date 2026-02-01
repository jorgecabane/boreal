import { siteConfig } from '@/config/site.config'
import MarineDecoration from '@/components/ui/MarineDecoration'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/background.jpg"
          alt="Cafetería Boreal"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-ocean-900/50 to-slate-800/60"></div>
      </div>
      
      {/* Contenido */}
      <div className="container-custom section-padding text-center relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/logos/logo.svg"
              alt={siteConfig.name}
              width={600}
              height={140}
              className="w-full max-w-[600px] h-auto brightness-0 invert drop-shadow-2xl"
              priority
            />
          </div>
          
          <div className="elegant-divider bg-gradient-to-r from-transparent via-cream-300 to-transparent"></div>
          
          <p className="font-secondary text-3xl sm:text-4xl text-cream-100 mb-6 font-light">
            {siteConfig.tagline}
          </p>
          
          <p className="text-xl sm:text-2xl text-cream-50 max-w-2xl mx-auto mb-12 text-balance font-light leading-relaxed">
            {siteConfig.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#menu"
              className="group px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-none font-normal tracking-wider hover:bg-white hover:text-ocean-700 transition-all duration-300 text-lg"
            >
              Descubrir la Carta
            </a>
            <a
              href="#nosotros"
              className="px-10 py-4 bg-transparent text-white border-2 border-white/50 rounded-none font-normal tracking-wider hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
            >
              Nuestra Historia
            </a>
          </div>
        </div>
      </div>
      
      {/* Onda decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="#fffef5"
          />
        </svg>
      </div>
    </section>
  )
}
