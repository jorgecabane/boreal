import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import GalleryReal from '@/components/sections/GalleryReal'
import Menu from '@/components/sections/Menu'
import Events from '@/components/sections/Events'
import Hours from '@/components/sections/Hours'
import Location from '@/components/sections/Location'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <GalleryReal />
      {/* <Features /> */}
      <Menu />
      <Events />
      <Hours />
      <Location />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}

