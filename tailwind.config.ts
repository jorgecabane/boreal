import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta mediterránea inspirada en Santorini
        ocean: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffc',
          300: '#7cc7f9',
          400: '#38aff4',
          500: '#1a8cc7', // Azul profundo del mar Egeo
          600: '#1570a1',
          700: '#135682',
          800: '#14476b',
          900: '#123954',
        },
        sand: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4ebdb',
          300: '#ecddc3',
          400: '#e3cca8',
          500: '#d4b896', // Tierra cálida / arena
          600: '#b89871',
          700: '#997a5a',
          800: '#7d644a',
          900: '#67533f',
        },
        cream: {
          50: '#fffef5',
          100: '#fffceb',
          200: '#fff8d6',
          300: '#fff3b8',
          400: '#ffeb8f',
          500: '#f5d76e', // Dorado suave
          600: '#d4b155',
          700: '#b08b42',
          800: '#8f6f3a',
          900: '#785d34',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b', // Azul oscuro para texto/mural
          900: '#0f172a',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'serif'],
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' stroke='%23e2e8f0' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

