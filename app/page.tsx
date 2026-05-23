import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import ServiceAreas from '@/components/ServiceAreas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <WhyUs />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  )
}
