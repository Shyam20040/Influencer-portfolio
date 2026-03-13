import About from '../components/About'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import SectionDivider from '../components/SectionDivider'
import ShopSection from '../components/ShopSection'

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-gold-radial opacity-70" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <ShopSection />
        <SectionDivider />
        <Brands />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
