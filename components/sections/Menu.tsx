'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'

// Tipos para el menú
interface MenuItem {
  name: string
  price?: string
  description?: string
}

interface MenuCategoryData {
  title: string
  subtitle?: string
  items: MenuItem[]
}

// Menú completo organizado por categorías
const menuData: Record<string, MenuCategoryData> = {
  promos: {
    title: 'Promos Todo el Día',
    subtitle: '(Promociones válidas para té o café mediano con leche de vaca)',
    items: [
      { name: 'CROISSANT', price: '$6.000', description: 'Café mediano + Croissant horneado relleno con queso y jamón.' },
      { name: 'CLÁSICA', price: '$6.000', description: 'Café mediano + Plancha jamón queso.' },
      { name: 'ARGENTINA', price: '$4.600', description: 'Café mediano + 2 Media Luna' },
      { name: 'BARRIS', price: '$6.500', description: 'Café mediano + trozo de Carrot Cake Barris Bakery' },
      { name: 'CINNAMON', price: '$4.000', description: 'Café mediano + Rollito de canela' },
      { name: 'TOSTADAS', price: '$4.000', description: 'Dos rebanadas de masa madre o pan del día con dos acompañamientos a elección: mermelada (con y sin azúcar), mantequilla, mantequilla de maní, paté de campo, palta, bruschetta de alcachofa. Cambia a pan Keto $600' },
    ],
  },
  brunch: {
    title: 'Brunch',
    subtitle: 'De Lunes a Siempre - De 08:00 a 15:00',
    items: [
      { name: 'HUEVOS REVUELTOS', price: '$4.500', description: 'Mini cacerola de huevos revueltos con pan masa madre o amasado y mantequilla. Agrega tocino por $1200, Cambia a pan Keto $600' },
      { name: 'GRANOLA BOWL', price: '$4.800', description: 'Yogurt de kéfir, con granola de avena, quinoa y frutos secos, fruta de temporada y mantequilla de maní.' },
      { name: 'FRENCH TOAST', price: '$6.000', description: 'Dos deliciosas rebanadas de Molde Brioche al estilo francés, con plátano, fruta de estación, coco y almendras tostadas y syrup de maple.' },
      { name: 'KETO BREAKY', price: '$6.300', description: 'Huevos revueltos con tocino, palta, tomate Cherry queso crema y dos tostadas keto para acompañar.' },
      { name: 'TOSTÓN PALTA', price: '$4.200', description: 'Gruesa rebanada de pan masa madre con palta laminada, hojas verdes, semillas de zapallo, sésamo negro y aceite de oliva.' },
      { name: 'BOREAL', price: '$8.600', description: 'Tostadas con mantequilla, huevos revueltos y palta, 200cc de jugo de fruta y café mediano' },
      { name: 'BACON & EGG ROLL', price: '$6.000', description: 'Bolla de pan Brioche con Tocino, queso cheddar y huevo frito' },
      { name: 'BOWL DE FRUTA', price: '$4.000', description: 'Bowl de fruta de temporada, con coco y almendras tostadas.' },
      { name: 'ENSALADA DEL DÍA', price: '$6.500', description: 'Pregunta por la opción de ensalada disponible.' },
    ],
  },
  sandwich: {
    title: 'Sándwich',
    items: [
      { name: 'SERRANO', price: '$6.700', description: 'Ciabatta relleno con jamón serrano, pesto, queso mantecoso, hojas verdes' },
      { name: 'SALMÓN', price: '$6.800', description: 'Ciabatta relleno con salmón ahumado, queso crema, pepinos encurtidos, hojas verdes.' },
      { name: 'VEGAN', price: '$6.400', description: 'Ciabatta relleno hummus de garbanzo, tomates cherry asados, almendras tostadas, hojas verdes.' },
      { name: 'CROISSANT JARPA', price: '$4.800', description: 'Croissant relleno con jamón y queso mantecoso derretido.' },
      { name: 'CROISSANT CAMPESTRE', price: '$5.900', description: 'Croissant relleno con jamón de cerdo, pasta de alcachofa, hojas verdes, tomate asado, queso mantecoso.' },
    ],
  },
  cosasricas: {
    title: 'Cosas Ricas',
    items: [
      { name: 'TROZO DE TORTA', price: '$4.000', description: 'Pregunta por las variedades disponibles: cheesecake, carrot cake, apple pie, triple chocolate.' },
      { name: 'MUFFIN', price: '$2.500', description: 'Pregunta por sabores disponibles.' },
      { name: 'MUFFIN RELLENO', price: '$2.800', description: 'Pregunta por sabores disponibles.' },
      { name: 'MASITA RELLENA DEL DIA', price: '$2.000', description: 'Pregunta por sabores disponibles.' },
      { name: 'MACARONS x 3 UNIDADES', price: '$2.600', description: 'Pregunta por sabores disponibles.' },
      { name: 'MINI BERLIN RELLENO (x2)', price: '$2.000' },
      { name: 'BROWNIE', price: '$2.000' },
      { name: 'KINKI BROWNIE', price: '$2.800', description: 'Pregunta por sabores disponibles (mantequilla maní, cookie, chocolate, salty caramelo)' },
      { name: 'MEDIA LUNA', price: '$1.600' },
      { name: 'BERLIN PASTELERA', price: '$2.200' },
      { name: 'BRETZEL CHOCOLATE', price: '$3.200' },
      { name: 'CINNAMON ROLL', price: '$2.300' },
    ],
  },
  helados: {
    title: 'Helados',
    items: [
      { name: 'HELADO SIMPLE', price: '$2.800' },
      { name: 'HELADO DOBLE', price: '$4.000' },
      { name: 'HELADO TRIPLE', price: '$5.000' },
      { name: 'BROWNIE CON HELADO', price: '$4.200', description: 'Brownie calentito con una bola de helado encima y salsa de chocolate.' },
      { name: 'WAFFLE CON HELADO', price: '$4.900', description: 'Waffle azucarado calientito con una bola de helado, crema chantilly y salsa de chocolate.' },
    ],
  },
  keto: {
    title: 'Queques Keto',
    items: [
      { name: 'QUEQUE ARÁNDANO', price: '$2.600', description: 'Sin gluten, sin azúcar y bajo en carbohidratos. A base de harina de almendras y coco.' },
      { name: 'BROWNIE KETO', description: 'Sin gluten, sin azúcar, sin lactosa y bajo en carbohidratos. A base de harina de almendras y chocolate amargo 85%.' },
      { name: 'QUEQUE LIMON AMAPOLA', description: 'Sin gluten, sin azúcar, sin lactosa y bajo en carbohidratos. Hecho a base de harina de almendras.' },
    ],
  },
  singluten: {
    title: 'Queques Sin Gluten',
    subtitle: 'Endulzados con azúcar de caña y elaborados con huevos de gallinas libres y aceite 100% maravilla.',
    items: [
      { name: 'ZANAHORIA', price: '$2.900', description: 'Zanahoria, harina de garbanzos nueces y almendras.' },
      { name: 'FRAMBUESA ARÁNDANO', description: 'Frambuesas y arándanos, harina de almendras, harina de garbanzos, chuño, mantequilla sin sal.' },
      { name: 'TÉ VERDE Y CHOCOLATE BLANCO', description: 'Té verde molido, harina de garbanzos, crema de leche, mantequilla sin sal, chocolate blanco.' },
      { name: 'NARANJA AVELLANA (Vegano)', description: 'Harina de garbanzos, jugo de naranja, harina de avellanas, semillas de linaza, zeste de naranja.' },
      { name: 'CHOCOLATE (Vegano)', description: 'Chocolate amargo 65 %, cacao, leche de coco, harina de garbanzos, harina de linaza, coco rallado, cacao amargo, con una moneda de chocolate negro en su interior.' },
    ],
  },
}

type MenuCategory = keyof typeof menuData

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('promos')

  const categories: { key: MenuCategory; label: string; icon: string }[] = [
    { key: 'promos', label: 'Promos', icon: '🎉' },
    { key: 'brunch', label: 'Brunch', icon: '🥐' },
    { key: 'sandwich', label: 'Sándwich', icon: '🥪' },
    { key: 'cosasricas', label: 'Dulces', icon: '🍰' },
    { key: 'helados', label: 'Helados', icon: '🍨' },
    { key: 'keto', label: 'Keto', icon: '🥑' },
    { key: 'singluten', label: 'Sin Gluten', icon: '🌾' },
  ]

  return (
    <section id="menu" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-secondary text-5xl sm:text-6xl lg:text-7xl font-light text-ocean-700 mb-8 tracking-wide">
            Nuestro Menú
          </h2>
          <div className="elegant-divider"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            Desde café de especialidad hasta brunch artesanal. Una experiencia culinaria sin prisa.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className={`px-6 py-3 rounded-none font-light tracking-wider transition-all duration-300 ${
                  activeTab === category.key
                    ? 'bg-ocean-600 text-white shadow-lg'
                    : 'bg-cream-50 text-slate-700 hover:bg-sand-100 border border-sand-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Contenido de la categoría activa */}
          <div className="bg-gradient-to-br from-cream-50/50 to-sand-50/50 border border-sand-200 rounded-none p-8 sm:p-12 min-h-[500px]">
            <div className="text-center mb-8">
              <h3 className="font-secondary text-4xl font-light text-ocean-700 tracking-wider mb-2">
                {menuData[activeTab].title}
              </h3>
              {menuData[activeTab].subtitle && (
                <p className="text-slate-600 font-light text-sm mt-2">
                  {menuData[activeTab].subtitle}
                </p>
              )}
              <div className="w-12 h-0.5 bg-sand-400 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {menuData[activeTab].items.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-sand-200/50 pb-4 hover:bg-white/50 p-4 rounded-none transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-secondary text-lg text-slate-800 font-normal">
                      {item.name}
                    </h4>
                    {item.price && (
                      <span className="text-ocean-600 font-normal ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nota sobre opciones especiales */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-ocean-50 to-sand-50 border border-sand-200 rounded-none p-10">
          <p className="text-lg text-slate-700 mb-6 font-light leading-relaxed">
            ¿Tienes alguna restricción alimentaria? Contamos con opciones <span className="font-normal text-ocean-600">sin azúcar</span>, 
            <span className="font-normal text-ocean-600"> veganas</span>, <span className="font-normal text-ocean-600">sin gluten</span> y 
            <span className="font-normal text-ocean-600"> keto</span>.
          </p>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ocean-600 text-white rounded-none font-light tracking-wider hover:bg-ocean-700 transition-colors duration-300"
          >
            Consultar Disponibilidad
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
