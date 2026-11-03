import Navbar from '../components/layout/Navbar.jsx'
import Hero from '../components/landing/Hero.jsx'
import Categories from '../components/landing/Categories.jsx'
import FeaturedProducts from '../components/landing/FeaturedProducts.jsx'
import Stats from '../components/landing/GlobalReach.jsx'
import Clients from '../components/landing/Clients.jsx'
import Services from '../components/landing/Services.jsx'
import ContactSection from '../components/landing/ContactSection.jsx'
import Footer from '../components/layout/Footer.jsx'
import GlobalReach from '../components/landing/GlobalReach.jsx'
import WhatsAppButton from '../components/common/WhatsAppButton.jsx'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Clients />
      <GlobalReach/>
      <Services />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
