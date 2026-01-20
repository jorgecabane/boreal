// Configuración de eventos - Fácil de actualizar

export interface Event {
  id: string
  title: string
  description?: string
  type: 'recurrente' | 'fechas'
  schedule: string // Horario o días
  dates?: string[] // Fechas específicas (solo para tipo 'fechas')
}

export const events: Event[] = [
  {
    id: 'bossa-nova',
    title: 'Bossa Nova',
    description: 'Con Gerson Riet, músico brasileño',
    type: 'recurrente',
    schedule: 'Todos los domingos de 12:00 a 14:00',
  },
  {
    id: 'charlas-astrologicas',
    title: 'Charlas Astrológicas',
    description: 'Qué recursos y desafíos nos acerca nuestro signo solar?',
    type: 'fechas',
    schedule: '20:00 hrs',
    dates: ['22 de enero', '19 de febrero'],
  },
  {
    id: 'lecturas-tarot',
    title: 'Lecturas cortas',
    description: 'Carta Astral o tarot por Hector Pinochet',
    type: 'recurrente',
    schedule: 'Todos los viernes 16:00 a 20:00 hrs',
  },
]
