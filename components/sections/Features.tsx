import { siteConfig } from '@/config/site.config'

const featureIcons: Record<string, string> = {
  'Café de especialidad': '☕',
  'Brunch sin prisa': '🥐',
  'Ambiente cálido': '🏠',
  'Opciones sin azúcar': '🍯',
  'Opciones veganas': '🌱',
  'Opciones sin gluten': '🌾',
  'Opciones keto': '🥑',
}

export default function Features() {
  return (
    <section className="section-padding beach-gradient relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="font-secondary text-5xl sm:text-6xl font-light text-ocean-700 mb-8 tracking-wide">
            Para Todos
          </h2>
          <div className="elegant-divider"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-8 font-light">
            Perfecto para leer, trabajar o compartir. Opciones para todos los estilos de vida.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {siteConfig.features.map((feature, index) => (
            <div
              key={feature}
              className="group bg-white/80 backdrop-blur-sm border border-sand-200/50 rounded-none p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {featureIcons[feature] || '✨'}
              </div>
              <p className="text-slate-700 font-light tracking-wide text-sm">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-secondary text-2xl text-ocean-600 italic font-light">
            "Slow living: vivir intencionalmente y disfrutar de las pequeñas cosas"
          </p>
        </div>
      </div>
    </section>
  )
}
