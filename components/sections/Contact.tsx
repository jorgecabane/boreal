import { siteConfig } from '@/config/site.config'

export default function Contact() {
  return (
    <section id="contacto" className="section-padding beach-gradient">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-secondary text-5xl sm:text-6xl font-light text-ocean-700 mb-8 tracking-wide">
              Conversemos
            </h2>
            <div className="elegant-divider"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
              ¿Tienes alguna pregunta o quieres hacer una consulta? Estamos aquí para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href={`tel:${siteConfig.phone}`}
              className="group bg-white/90 backdrop-blur-sm border border-sand-200 rounded-none p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">📞</div>
              <h3 className="font-secondary text-xl text-slate-800 mb-3 font-light tracking-wide">
                Teléfono
              </h3>
              <p className="text-ocean-600 font-light">{siteConfig.phone}</p>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group bg-white/90 backdrop-blur-sm border border-sand-200 rounded-none p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">✉️</div>
              <h3 className="font-secondary text-xl text-slate-800 mb-3 font-light tracking-wide">
                Email
              </h3>
              <p className="text-ocean-600 font-light text-sm break-all">{siteConfig.email}</p>
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/90 backdrop-blur-sm border border-sand-200 rounded-none p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="font-secondary text-xl text-slate-800 mb-3 font-light tracking-wide">
                WhatsApp
              </h3>
              <p className="text-ocean-600 font-light">Enviar mensaje</p>
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-sand-200 rounded-none shadow-xl p-12 text-center">
            <h3 className="font-secondary text-3xl text-ocean-700 mb-6 font-light tracking-wide">
              Visítanos
            </h3>
            <p className="text-lg text-slate-700 mb-4 font-light">{siteConfig.address}</p>
            <div className="elegant-divider my-8"></div>
            <p className="text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              Te esperamos con café de especialidad, brunch sin prisa y un ambiente cálido. 
              Un refugio perfecto para leer, trabajar o simplemente disfrutar del momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
