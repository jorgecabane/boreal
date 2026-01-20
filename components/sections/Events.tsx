import { events } from '@/config/events.config'

export default function Events() {
  return (
    <section id="eventos" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-ocean-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-secondary text-4xl sm:text-5xl font-light text-ocean-700 mb-6 tracking-wide">
              Próximos Eventos
            </h2>
            <div className="elegant-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gradient-to-br from-cream-50/50 to-sand-50/50 border border-sand-200 rounded-none p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-secondary text-xl text-ocean-700 mb-3 font-normal tracking-wide">
                  {event.title}
                </h3>
                
                {event.description && (
                  <p className="text-slate-600 text-sm font-light mb-3 leading-relaxed">
                    {event.description}
                  </p>
                )}

                <div className="space-y-2">
                  {event.type === 'recurrente' ? (
                    <p className="text-ocean-600 text-sm font-light">
                      {event.schedule}
                    </p>
                  ) : (
                    <>
                      <p className="text-ocean-600 text-sm font-light mb-2">
                        {event.schedule}
                      </p>
                      {event.dates && event.dates.length > 0 && (
                        <div className="space-y-1">
                          {event.dates.map((date, index) => (
                            <p key={index} className="text-slate-700 text-sm font-light pl-2 border-l-2 border-ocean-300">
                              {date}
                            </p>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-600 font-light text-sm italic">
              Consulta disponibilidad y más información en nuestro Instagram
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
