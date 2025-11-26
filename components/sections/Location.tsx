import { siteConfig } from '@/config/site.config'

export default function Location() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`

  return (
    <section id="ubicacion" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-ocean-300 rounded-full"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-sand-300 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cream-400 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-secondary text-5xl sm:text-6xl font-light text-ocean-700 mb-8 tracking-wide">
              Dónde Encontrarnos
            </h2>
            <div className="elegant-divider"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-700 leading-relaxed font-light">
                Con una ubicación privilegiada en el centro de la comuna de Santo Domingo, 
                <span className="font-secondary text-2xl text-ocean-600 italic"> {siteConfig.fullName} </span>
                se ha convertido en un punto de encuentro favorito para residentes y visitantes.
              </p>
              
              <div className="bg-gradient-to-r from-ocean-50 to-sand-50 border-l-4 border-ocean-500 p-8 rounded-none">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-ocean-600 mt-1">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-normal text-ocean-700 mb-2 tracking-wide uppercase text-sm">Dirección</p>
                    <p className="text-slate-700 font-light text-lg">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-ocean-600 mt-1">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-normal text-ocean-700 mb-2 tracking-wide uppercase text-sm">Teléfono</p>
                    <a 
                      href={`tel:${siteConfig.phone}`}
                      className="text-slate-700 font-light text-lg hover:text-ocean-600 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ocean-600 text-white rounded-none font-light tracking-wider hover:bg-ocean-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Cómo Llegar
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-ocean-600 border-2 border-ocean-600 rounded-none font-light tracking-wider hover:bg-ocean-50 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-ocean-100 via-sand-100 to-cream-100 rounded-none aspect-square relative overflow-hidden p-8">
                {/* Google Maps Embed */}
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(siteConfig.address)}&zoom=16`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-none"
                  title="Ubicación de Boreal en Google Maps"
                ></iframe>
                
                {/* Borde decorativo */}
                <div className="absolute inset-8 border-2 border-white/80 pointer-events-none"></div>
                
                {/* Elementos decorativos en las esquinas */}
                <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-ocean-400 pointer-events-none"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-sand-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
