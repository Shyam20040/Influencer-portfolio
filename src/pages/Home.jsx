import { Suspense, lazy } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionDivider from '../components/SectionDivider'

const Portfolio = lazy(() => import('../components/Portfolio'))
const ShopSection = lazy(() => import('../components/ShopSection'))
const Brands = lazy(() => import('../components/Brands'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))

function SectionFallback() {
  return <div className="container-shell h-24 animate-pulse rounded-[24px] bg-white/[0.03]" />
}

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-gold-radial opacity-70" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
          <SectionDivider />
          <ShopSection />
          <SectionDivider />
          <Brands />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Home
