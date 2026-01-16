'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site.config'

const daysOfWeek = [
  { key: 'monday', label: 'Lunes' },
  { key: 'tuesday', label: 'Martes' },
  { key: 'wednesday', label: 'Miércoles' },
  { key: 'thursday', label: 'Jueves' },
  { key: 'friday', label: 'Viernes' },
  { key: 'saturday', label: 'Sábado' },
  { key: 'sunday', label: 'Domingo' },
]

export default function Hours() {
  const [currentDay, setCurrentDay] = useState<string>('monday')

  useEffect(() => {
    const getCurrentDay = () => {
      const today = new Date().getDay()
      return today === 0 ? 'sunday' : daysOfWeek[today - 1].key
    }
    
    setCurrentDay(getCurrentDay())
    
    // Actualizar cada minuto para detectar cambios de día
    const interval = setInterval(() => {
      setCurrentDay(getCurrentDay())
    }, 60000) // Cada minuto
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="horarios" className="section-padding beach-gradient">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-secondary text-5xl sm:text-6xl font-light text-ocean-700 mb-8 tracking-wide">
              Horarios
            </h2>
            <div className="elegant-divider"></div>
            <p className="text-xl text-slate-600 mt-8 font-light">
              Te esperamos para disfrutar sin prisa
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm border border-sand-200 rounded-none shadow-xl p-10">
            <ul className="space-y-5">
              {daysOfWeek.map((day) => {
                const hours = siteConfig.hours[day.key as keyof typeof siteConfig.hours]
                const isToday = day.key === currentDay
                
                return (
                  <li
                    key={day.key}
                    className={`flex justify-between items-center py-4 px-6 rounded-none transition-all duration-300 ${
                      isToday 
                        ? 'bg-ocean-50 border-l-4 border-ocean-500' 
                        : 'hover:bg-sand-50/50'
                    }`}
                  >
                    <span className={`font-light tracking-wide ${
                      isToday ? 'text-ocean-700 font-normal' : 'text-slate-700'
                    }`}>
                      {day.label}
                      {isToday && (
                        <span className="ml-3 text-xs text-ocean-600 font-light uppercase tracking-widest">
                          Hoy
                        </span>
                      )}
                    </span>
                    <span className={`font-light ${
                      isToday ? 'text-ocean-700 font-normal' : 'text-slate-600'
                    }`}>
                      {hours.open} - {hours.close}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="font-secondary text-xl text-slate-600 font-light">
              Sin prisa, con café de especialidad y buen ambiente
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
