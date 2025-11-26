// Componente decorativo con ilustraciones marinas sutiles

import { CSSProperties } from 'react'

interface MarineDecorationProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  type?: 'whale' | 'turtle' | 'fish' | 'coral'
  className?: string
  style?: CSSProperties
}

export default function MarineDecoration({ 
  position = 'top-right', 
  type = 'whale',
  className = '',
  style
}: MarineDecorationProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }

  const illustrations = {
    whale: (
      <svg className="w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20,50 Q30,30 50,35 T80,50 Q70,65 50,60 T20,50" />
        <circle cx="40" cy="45" r="2" />
        <path d="M50,35 Q55,25 60,20" stroke="currentColor" fill="none" strokeWidth="2" />
      </svg>
    ),
    turtle: (
      <svg className="w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="20" ry="15" />
        <path d="M30,50 L25,55 L25,45 Z M70,50 L75,55 L75,45 Z" />
        <circle cx="45" cy="45" r="1.5" />
      </svg>
    ),
    fish: (
      <svg className="w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="currentColor">
        <ellipse cx="50" cy="50" rx="25" ry="12" />
        <path d="M25,50 L15,45 L15,55 Z M75,50 L80,40 L85,50 L80,60 Z" />
        <circle cx="60" cy="47" r="2" />
      </svg>
    ),
    coral: (
      <svg className="w-28 h-28 opacity-10" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,80 Q45,60 40,50 Q35,40 30,30 M50,80 Q50,60 50,40 Q50,30 50,20 M50,80 Q55,60 60,50 Q65,40 70,30" 
              stroke="currentColor" fill="none" strokeWidth="2" />
      </svg>
    ),
  }

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none ${className} text-ocean-600`}
      style={style}
    >
      {illustrations[type]}
    </div>
  )
}

