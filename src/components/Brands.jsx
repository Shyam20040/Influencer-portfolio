import { motion } from 'framer-motion'
import { brands } from '../data/content'

function Brands() {
  const sliderBrands = [...brands, ...brands]

  return (
    <section id="brands" className="container-shell py-4 sm:py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="glass-panel overflow-hidden px-6 py-10 sm:px-10"
      >
        <div className="mb-8 text-center">
          <p className="section-kicker">Brands I&apos;ve worked with</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Trusted by fashion, lifestyle, and commerce-first brands.
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="brand-marquee flex min-w-max gap-4">
            {sliderBrands.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex min-w-[180px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Brands
