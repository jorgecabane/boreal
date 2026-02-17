// Archivo de configuración centralizado para fácil mantenimiento

export const siteConfig = {
  // Información básica
  name: 'Boreal',
  fullName: 'Concepto Boreal',
  tagline: 'Tómate tu tiempo',
  description: 'Te esperamos con café de especialidad, brunch sin prisa y un ambiente cálido. Perfecto para leer, trabajar o disfrutar.',
  
  // Contacto
  phone: '+56 9 9428 9741',
  email: 'cafe@conceptoboreal.cl',
  address: 'Av. Tte. Luis Cruz Martinez 42, Santo Domingo',
  
  // Horarios
  hours: {
    monday: { open: '8:00', close: '20:30' },
    tuesday: { open: '8:00', close: '20:30' },
    wednesday: { open: '8:00', close: '20:30' },
    thursday: { open: '8:00', close: '20:30' },
    friday: { open: '8:00', close: '20:30' },
    saturday: { open: '9:30', close: '20:30' },
    sunday: { open: '9:30', close: '20:00' },
  },
  
  // Características destacadas
  features: [
    'Café de especialidad',
    'Brunch sin prisa',
    'Ambiente cálido',
    'Opciones sin azúcar',
    'Opciones veganas',
    'Opciones sin gluten',
    'Opciones keto',
  ],
  
  // SEO
  seo: {
    title: 'Boreal - Café de Especialidad en Santo Domingo',
    description: 'Cafetería Boreal en Santo Domingo. Café de especialidad, brunch sin prisa y ambiente cálido. Perfecto para leer, trabajar o compartir.',
    keywords: ['cafetería', 'café de especialidad', 'brunch', 'Santo Domingo', 'Chile', 'slow living', 'café artesanal'],
    ogImage: '/og-image.jpg',
  },
  
  // Redes sociales
  social: {
    instagram: 'https://instagram.com/conceptoboreal',
    whatsapp: `https://wa.me/56994289741`,
  },
}

