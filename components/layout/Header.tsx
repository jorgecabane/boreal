'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site.config'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Carta', href: '#menu' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contacto', href: '#ubicacion' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom px-6 py-6">
        <div className="flex items-center justify-between">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/images/logos/logo.svg"
              alt={siteConfig.name}
              width={140}
              height={45}
              className={`transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-95 brightness-0 invert'
              }`}
              priority
            />
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-light tracking-wider transition-colors text-sm uppercase ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-ocean-600' 
                      : 'text-white hover:text-cream-200'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-8 space-y-6 pb-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href)
                    setIsMenuOpen(false)
                  }}
                  className={`block font-light tracking-wider transition-colors text-sm uppercase ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-ocean-600' 
                      : 'text-white hover:text-cream-200'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
