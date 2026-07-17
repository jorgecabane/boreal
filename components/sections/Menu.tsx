'use client'

import { useState, useRef, useEffect } from 'react'
import { siteConfig } from '@/config/site.config'

// Tipos para el menú
interface MenuItem {
  name: string
  price?: string
  priceSmall?: string
  priceLarge?: string
  description?: string
  isVegan?: boolean
}

interface MenuCategoryData {
  title: string
  subtitle?: string
  hasSizes?: boolean
  items: MenuItem[]
}

// Menú completo organizado por categorías
const menuData: Record<string, MenuCategoryData> = {
  brunch: {
    title: 'BRUNCH',
    items: [
      { name: 'Huevos revueltos o fritos', price: '$5.300', description: 'Con pan masa madre o amasado y mantequilla. Agrega tocino por $1.200. Cambia a pan Keto $600.' },
      { name: 'Keto breaky', price: '$7.200', description: 'Huevos revueltos con tocino, palta, tomates asados, queso crema y dos tostadas keto para acompañar.' },
      { name: 'Tostón salmón palta', price: '$5.900', description: 'Gruesa rebanada de pan masa madre untada con queso crema, salmón ahumado y palta, sobre mix verde, semillas de zapallo, sésamo negro y aceite de oliva.' },
      { name: 'Boreal', price: '$9.000', description: 'Tostadas con mantequilla, huevos revueltos y palta, 200cc de jugo de fruta y café o té mediano.' },
      { name: 'Brioche bun', price: '$6.800', description: 'Pan Brioche, tocino, queso cheddar, huevo frito, servido con salsa barbecue.' },
      { name: 'Bowl Açai', price: '$6.200', description: 'Açai, plátano y frutilla, granola con coco y almendras tostadas y mantequilla de maní crunchy.' },
      { name: 'Bowl granola', price: '$5.300', description: 'Yogurt de kéfir natural, granola con coco y almendras tostadas, fruta de temporada y mantequilla de maní crunchy.' },
      { name: 'Bowl de fruta', price: '$4.000', description: 'Fruta de temporada con coco y almendras tostadas. Agrega mantequilla de maní por $1.000.' },
      { name: 'Pan de queso', price: '$3.200', description: 'Pan de queso brasilero, 5 unidades.' },
      { name: 'Croissant jarpa', price: '$4.900', description: 'Croissant con jamón y queso mantecoso derretido.' },
      { name: 'Tostadas', price: '$5.500', description: 'Dos rebanadas de pan masa madre o pan amasado con dos acompañamientos a elección: mermelada (con y sin azúcar), mantequilla, mantequilla de maní, palta, bruschetta de alcachofa, jamón de cerdo, queso laminado. Cambia a pan Keto $600.' },
    ],
  },
  almuerzo: {
    title: 'ALMUERZO',
    items: [
      { name: 'Mechada o hamburguesa Boreal', price: '$8.600', description: 'Sándwich de carne mechada o hamburguesa con queso mantecoso, lechuga, pepino encurtido, cebolla caramelizada, acompañado de chips de papas. Elige pan Brioche o Amasado.' },
      { name: 'Mechada o hamburguesa Italiana', price: '$8.600', description: 'Sándwich de carne mechada o hamburguesa con palta, tomate y mayonesa, acompañado de chips de papas. Elige pan Brioche o Amasado.' },
      { name: 'Serrano', price: '$6.900', description: 'Ciabatta con jamón serrano, pesto, queso mantecoso y hojas verdes.' },
      { name: 'Salmón', price: '$7.000', description: 'Ciabatta con salmón ahumado, queso crema, pepinos encurtidos y lechuga.' },
      { name: 'Vegan', price: '$6.800', description: 'Ciabatta con hummus de garbanzo, palta, champiñones salteados con sésamo, lechuga y tomates asados.', isVegan: true },
      { name: 'Croissant campestre', price: '$6.600', description: 'Croissant relleno con jamón de cerdo, pasta de alcachofa, hojas verdes y tomate asado, queso mantecoso.' },
      { name: 'Croissant serralta', price: '$7.200', description: 'Croissant jamón serrano, queso mantecoso, palta y tomate. Agrega chips de camote por $1.000.' },
      { name: 'Crema de verduras', price: '$5.690', description: 'Crema de verduras servida con dos rebanadas de pan masa madre y mantequilla. Pregunta por variedades disponibles.' },
      { name: 'Ensalada del día', price: '$6.500', description: 'Bowl de ensalada con base de hojas verdes y proteína a elección, pregunta por variedades disponibles.' },
    ],
  },
  cosasricas: {
    title: 'COSAS RICAS',
    items: [
      { name: 'Trozo de torta', price: '$4.000', description: 'Pregunta por las variedades disponibles: Cheesecake, Carrotcake, Apple Pie, Caluga o Panqueque Trufa, según disponibilidad.' },
      { name: 'Croissant dulce relleno', price: '$5.200', description: 'Croissant neutro relleno con crema de pistacho o mantequilla de maní, frutillas, plátano, crema chantilly y salsa de chocolate.' },
      { name: 'Muffin', price: '$3.000', description: 'Pregunta por sabores disponibles.' },
      { name: 'Muffin relleno', price: '$3.200', description: 'Pregunta por sabores disponibles.' },
      { name: 'Masita rellena del día', price: '$2.000', description: 'Pregunta por sabores disponibles.' },
      { name: 'Macarons x 3 unidades', price: '$2.900', description: 'Pregunta por sabores disponibles.' },
      { name: 'Galletones La Gracia', price: '$3.500', description: 'Sin azúcar, sin gluten.' },
      { name: 'Brownie básico', price: '$2.000', description: 'Esponjoso y húmedo con doble chocolate.' },
      { name: 'Brownies supremos', price: '$2.900', description: 'Pregunta por sabores disponibles: mantequilla maní, cookie, chocolate, caramelo salado.' },
      { name: 'Mini berlín relleno (x2)', price: '$2.200' },
      { name: 'Media luna', price: '$2.000' },
      { name: 'Berlín pastelera', price: '$2.300' },
      { name: 'Bretzel chocolate', price: '$3.200' },
      { name: 'Cinnamon roll', price: '$2.800' },
    ],
  },
  match: {
    title: 'MATCH PERFECTO',
    subtitle: 'Promociones válidas para té o café mediano con leche de vaca, descremada, sin lactosa.',
    items: [
      { name: 'Croissant', price: '$6.500', description: 'Café mediano + Croissant horneado relleno con queso y jamón.' },
      { name: 'Clásica', price: '$6.500', description: 'Café mediano + Planchado jamón queso.' },
      { name: 'Argentina', price: '$5.000', description: 'Café mediano + 2 Media Luna.' },
      { name: 'Cinnamon', price: '$5.300', description: 'Café mediano + Rollito de canela.' },
      { name: 'Barris', price: '$6.800', description: 'Café mediano + trozo de Carrot Cake Barris Bakery.' },
    ],
  },
  helados: {
    title: 'HELADOS',
    items: [
      { name: 'Helado simple', price: '$3.200' },
      { name: 'Helado doble', price: '$5.200' },
      { name: 'Helado triple', price: '$6.900' },
      { name: 'Brownie con helado', price: '$4.800', description: 'Brownie calentito con una bolita de helado encima y salsa de chocolate.' },
      { name: 'Waffle con helado', price: '$5.300', description: 'Waffle azucarado calientito con una bola de helado, crema chantilly y salsa de chocolate.' },
      { name: 'Helado medio litro para llevar', price: '$8.900' },
    ],
  },
  pasteleria: {
    title: 'PASTELERÍA DE ESPECIALIDAD',
    subtitle: 'Sujetos a disponibilidad.',
    items: [
      { name: 'Queque arándano keto', price: '$3.200', description: 'Sin gluten, sin azúcar y bajo en carbohidratos. A base de harina de almendras y coco.' },
      { name: 'Brownie keto', price: '$3.200', description: 'Sin gluten, sin azúcar, sin lactosa y bajo en carbohidratos. A base de harina de almendras y chocolate amargo 85%.' },
      { name: 'Queque limón amapola keto', price: '$3.200', description: 'Sin gluten, sin azúcar, sin lactosa y bajo en carbohidratos. Hecho a base de harina de almendras.' },
      { name: 'Queque frambuesa arándano (sin gluten)', price: '$3.200', description: 'Frambuesas y arándanos, harina de almendras, huevo, harina de garbanzos, chuño, mantequilla, azúcar de caña orgánica. (Sin certificación celíaca).' },
      { name: 'Queque zanahoria keto (sin gluten, sin lácteos, sin azúcar)', price: '$3.200', description: 'Zanahoria, harina de garbanzos, harina de coco, huevo, alulosa, nueces y almendras. (Sin certificación celíaca).' },
      { name: 'Queque té verde y chocolate blanco (sin gluten)', price: '$3.200', description: 'Té verde molido, harina de garbanzos, crema de leche, mantequilla sin sal, azúcar de caña orgánica, chocolate blanco. (Sin certificación celíaca).' },
      { name: 'Queque naranja avellana (sin trigo, vegano, sin azúcar)', price: '$3.200', description: 'Harina de garbanzos, jugo de naranja, harina de avellanas, semillas de linaza, zeste de naranja, alulosa.', isVegan: true },
      { name: 'Queque chocolate (sin trigo, vegano, sin azúcar)', price: '$3.200', description: 'Chocolate amargo 65%, cacao, leche de coco, harina de garbanzos, harina de linaza, coco rallado, cacao amargo, alulosa, con una moneda de chocolate negro en su interior. (Sin certificación celíaca).', isVegan: true },
      { name: 'Snickers keto', price: '$3.200', description: 'Keto, sin gluten, sin azúcar. Barrita de base de almendras, mantequilla de maní, maní tostado, toffee artesanal y cobertura de chocolate sin azúcar.' },
      { name: 'Pie de limón', price: '$4.000', description: 'Sin gluten, sin azúcar, low carb. Cuadrito en base de almendras, relleno de crema de limón con leche condensada artesanal sin azúcar y merengue sin azúcar.' },
      { name: 'Kuchen de manzana', price: '$4.000', description: 'Sin gluten, sin azúcar, low carb. Cuadrito en base de almendras, finas láminas de manzana con suave crema de vainilla sin azúcar.' },
    ],
  },
}

// Menú de bebidas organizado por categorías
const drinksData: Record<string, MenuCategoryData> = {
  basecafe: {
    title: 'BASE CAFÉ',
    items: [
      { name: 'Ristretto', price: '$2.000' },
      { name: 'Espresso', price: '$2.000' },
      { name: 'Espresso Lungo', price: '$2.000' },
      { name: 'Espresso Doble Shot', price: '$2.800' },
      { name: 'Espresso Machiato', price: '$2.800' },
      { name: 'Americano', price: '$2.800' },
      { name: 'Americano Doble Shot', price: '$3.900' },
      { name: 'Americano Grande', price: '$3.900' },
      { name: 'Cortado', price: '$3.300' },
      { name: 'Cortado Doble', price: '$4.000' },
      { name: 'Cortado Grande', price: '$4.300' },
      { name: 'Capuccino', price: '$3.200' },
      { name: 'Flat White', price: '$3.200' },
      { name: 'Latte', price: '$3.800' },
      { name: 'Café Vienes', price: '$3.700' },
      { name: 'Café Vienes Grande', price: '$4.200' },
      { name: 'Mockaccino', price: '$3.600' },
      { name: 'Mockalatte', price: '$4.200' },
    ],
  },
  bebidasfrias: {
    title: 'BEBIDAS FRÍAS',
    items: [
      { name: 'Iced Latte', price: '$4.000', description: 'Hielo + leche + 2 shot de espresso.' },
      { name: 'Café Helado', price: '$5.100', description: '2 bolas de helado de vainilla (o a elección) + leche + 2 shot espresso + crema batida + salsa de chocolate.' },
      { name: 'Afogatto', price: '$4.000', description: '1 bola de helado de vainilla (o a elección) + 1 shot de café espresso caliente.' },
      { name: 'Iced Chai Latte', price: '$3.700', description: 'Hielo + leche + mix chai.' },
      { name: 'Iced Matcha Latte', price: '$3.700', description: 'Hielo + leche + té matcha.' },
      { name: 'Iced Frambuesa Matcha', price: '$4.200', description: 'Frambuesas congeladas + leche + matcha + syrup de frambuesa.' },
      { name: 'Iced Espresso Dubai', price: '$4.600', description: 'Salsa y syrup de chocolate + pasta y syrup de pistacho + hielo + leche + 2 shot de espresso + kataifi.' },
      { name: 'Espresso Naranja', price: '$3.600', description: 'Hielo + 2 shot espresso + jugo de naranja.' },
      { name: 'Espresso Tonica', price: '$3.600', description: 'Hielo + 2 shot espresso + tónica.' },
    ],
  },
  basete: {
    title: 'BASE TÉ',
    subtitle: 'Vive la experiencia IngenuiTea de Adagio Teas. La mejor selección de té en hebras: English Breakfast, Earl Grey Bravo, Rooibos Vainilla, Verde Citrus, Masala Chai, Deleite Cúrcuma, Berries, Foxtrot.',
    items: [
      { name: 'Tetera Ingenuitea', price: '$3.900' },
      { name: 'Taza de Té con Leche', price: '$3.300', description: 'Bolsita.' },
      { name: 'Taza de Té', price: '$3.000', description: 'Bolsita.' },
    ],
  },
  calientes: {
    title: 'OTRAS BEBIDAS CALIENTES',
    hasSizes: true,
    items: [
      { name: 'Chocolate Caliente', priceSmall: '$3.400', priceLarge: '$4.000' },
      { name: 'Chocolate Avellana', priceSmall: '$3.900', priceLarge: '$4.500' },
      { name: 'Chocolate Menta', priceSmall: '$3.900', priceLarge: '$4.500' },
      { name: 'Chocolate Chai', priceSmall: '$3.900', priceLarge: '$4.500' },
      { name: 'Chai Latte', priceSmall: '$3.400', priceLarge: '$4.000' },
      { name: 'Spicy Chai Latte', priceSmall: '$3.400', priceLarge: '$4.000', isVegan: true },
      { name: 'Power Chai Latte', priceSmall: '$3.400', priceLarge: '$4.000' },
      { name: 'Golden Milk', priceSmall: '$3.400', priceLarge: '$4.000', isVegan: true },
      { name: 'Matcha Latte', priceSmall: '$3.400', priceLarge: '$4.000', isVegan: true },
      { name: 'Dirty Chai', priceSmall: '$3.900', priceLarge: '$4.500', isVegan: true },
      { name: 'Babyccino', priceSmall: '$2.800', isVegan: true },
    ],
  },
  otrasfrias: {
    title: 'OTRAS BEBIDAS FRÍAS',
    subtitle: 'Pregunte a nuestro staff por variedades disponibles.',
    items: [
      { name: 'Agua con y sin gas', price: '$2.200' },
      { name: 'Coca Cola Original, Light, Zero', price: '$2.200' },
      { name: 'Sprite Zero', price: '$2.200' },
      { name: 'Fanta Zero', price: '$2.200' },
      { name: 'Jugos Prensados en Frío AMA', price: '$3.100', description: 'Botella.' },
      { name: 'Jugo AMA Cajita', price: '$1.800' },
      { name: 'Kombucha Botella', price: '$4.000' },
      { name: 'Jugos de Pulpa o Natural', price: '$3.800' },
    ],
  },
  extras: {
    title: 'EXTRAS',
    items: [
      { name: 'Leche Vegetal', price: '$600' },
      { name: 'Extra Shot Café', price: '$1.000' },
      { name: 'Extra Crema', price: '$700' },
      { name: 'Sabores', price: '$500', description: 'Vainilla, caramelo, avellana, amaretto, chocolate, pistacho, frambuesa.' },
    ],
  },
}

type MenuCategory = keyof typeof menuData
type DrinksCategory = keyof typeof drinksData
type MainSection = 'comer' | 'beber'

export default function Menu() {
  const [mainSection, setMainSection] = useState<MainSection>('comer')
  const [activeFoodTab, setActiveFoodTab] = useState<MenuCategory>('brunch')
  const [activeDrinksTab, setActiveDrinksTab] = useState<DrinksCategory>('basecafe')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const foodCategories: { key: MenuCategory; label: string; icon: string }[] = [
    { key: 'brunch', label: 'Brunch', icon: '🥐' },
    { key: 'almuerzo', label: 'Almuerzo', icon: '🍽️' },
    { key: 'cosasricas', label: 'Dulces', icon: '🍰' },
    { key: 'match', label: 'Match', icon: '🎉' },
    { key: 'helados', label: 'Helados', icon: '🍨' },
    { key: 'pasteleria', label: 'Pastelería', icon: '🧁' },
  ]

  const drinksCategories: { key: DrinksCategory; label: string; icon: string }[] = [
    { key: 'basecafe', label: 'Café', icon: '☕' },
    { key: 'bebidasfrias', label: 'Frío', icon: '🧊' },
    { key: 'basete', label: 'Té', icon: '🍵' },
    { key: 'calientes', label: 'Calientes', icon: '🔥' },
    { key: 'otrasfrias', label: 'Refrescos', icon: '🥤' },
    { key: 'extras', label: 'Extras', icon: '➕' },
  ]

  const handleFoodCategoryClick = (categoryKey: MenuCategory, buttonElement: HTMLButtonElement) => {
    setActiveFoodTab(categoryKey)
    scrollToButton(buttonElement)
  }

  const handleDrinksCategoryClick = (categoryKey: DrinksCategory, buttonElement: HTMLButtonElement) => {
    setActiveDrinksTab(categoryKey)
    scrollToButton(buttonElement)
  }

  const scrollToButton = (buttonElement: HTMLButtonElement) => {
    if (scrollContainerRef.current && buttonElement) {
      const container = scrollContainerRef.current
      const buttonLeft = buttonElement.offsetLeft
      const gap = 12
      container.scrollTo({
        left: Math.max(0, buttonLeft - gap),
        behavior: 'smooth'
      })
    }
  }

  // Resetear scroll y categoría cuando cambia la sección principal
  useEffect(() => {
    // Resetear a la primera categoría de cada sección
    if (mainSection === 'comer') {
      setActiveFoodTab('brunch')
    } else {
      setActiveDrinksTab('basecafe')
    }
    
    // Resetear scroll al inicio
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [mainSection])

  // Datos activos según la sección
  const activeData = mainSection === 'comer' 
    ? menuData[activeFoodTab] 
    : drinksData[activeDrinksTab]

  return (
    <section id="menu" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-secondary text-5xl sm:text-6xl lg:text-7xl font-light text-ocean-700 mb-8 tracking-wide">
            CARTA
          </h2>
          <div className="elegant-divider"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-8 font-light leading-relaxed">
            Desde café de especialidad hasta brunch artesanal. Una experiencia culinaria sin prisa.
          </p>
        </div>

        {/* Segmented Control - Comer / Beber */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex bg-sand-100 p-1.5 rounded-none border border-sand-200">
            <button
              onClick={() => setMainSection('comer')}
              className={`flex-1 py-3.5 px-6 font-light tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                mainSection === 'comer'
                  ? 'bg-white text-ocean-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <span className="text-lg">🍽️</span>
              COMER
            </button>
            <button
              onClick={() => setMainSection('beber')}
              className={`flex-1 py-3.5 px-6 font-light tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                mainSection === 'beber'
                  ? 'bg-white text-ocean-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <span className="text-lg">☕</span>
              BEBER
            </button>
          </div>
        </div>

        {/* Tabs de subcategorías */}
        <div className="max-w-5xl mx-auto mb-12">
          <div 
            ref={scrollContainerRef}
            className="flex md:flex-wrap md:justify-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide md:overflow-x-visible"
          >
            {mainSection === 'comer' ? (
              foodCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={(e) => handleFoodCategoryClick(category.key, e.currentTarget)}
                  className={`px-6 py-3 rounded-none font-light tracking-wider transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeFoodTab === category.key
                      ? 'bg-ocean-600 text-white shadow-lg'
                      : 'bg-cream-50 text-slate-700 hover:bg-sand-100 border border-sand-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))
            ) : (
              drinksCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={(e) => handleDrinksCategoryClick(category.key, e.currentTarget)}
                  className={`px-6 py-3 rounded-none font-light tracking-wider transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeDrinksTab === category.key
                      ? 'bg-ocean-600 text-white shadow-lg'
                      : 'bg-cream-50 text-slate-700 hover:bg-sand-100 border border-sand-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))
            )}
          </div>

          {/* Contenido de la categoría activa */}
          <div className="bg-gradient-to-br from-cream-50/50 to-sand-50/50 border border-sand-200 rounded-none p-8 sm:p-12 min-h-[500px]">
            <div className="text-center mb-8">
              <h3 className="font-secondary text-4xl font-light text-ocean-700 tracking-wider mb-2">
                {activeData.title}
              </h3>
              {activeData.subtitle && (
                <p className="text-slate-600 font-light text-sm mt-2 max-w-2xl mx-auto">
                  {activeData.subtitle}
                </p>
              )}
              <div className="w-12 h-0.5 bg-sand-400 mx-auto mt-6"></div>
            </div>
            
            {/* Header para tamaños si aplica */}
            {activeData.hasSizes && (
              <div className="max-w-4xl mx-auto mb-4">
                <div className="flex justify-end gap-8 pr-4 text-sm font-light text-slate-500 tracking-wider">
                  <span className="w-16 text-center">MEDIANO</span>
                  <span className="w-16 text-center">GRANDE</span>
                </div>
              </div>
            )}
            
            <div className={`grid gap-6 max-w-4xl mx-auto ${
              activeData.hasSizes ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {activeData.items.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-sand-200/50 pb-4 hover:bg-white/50 p-4 rounded-none transition-all duration-300"
                >
                  {activeData.hasSizes ? (
                    // Layout para items con dos precios (Chico/Grande)
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <h4 className="font-secondary text-lg text-slate-800 font-normal">
                          {item.name}
                        </h4>
                        {item.isVegan && (
                          <span className="text-green-600 text-sm" title="Opción vegana disponible">🌿</span>
                        )}
                      </div>
                      <div className="flex gap-8">
                        <span className="text-ocean-600 font-normal w-16 text-center">
                          {item.priceSmall || '—'}
                        </span>
                        <span className="text-ocean-600 font-normal w-16 text-center">
                          {item.priceLarge || '—'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Layout estándar
                    <>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-secondary text-lg text-slate-800 font-normal">
                            {item.name}
                          </h4>
                          {item.isVegan && (
                            <span className="text-green-600 text-sm" title="Opción vegana disponible">🌿</span>
                          )}
                        </div>
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
                    </>
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
