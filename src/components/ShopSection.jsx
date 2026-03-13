import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { picks } from '../data/content'

function ShopSection() {
  return (
    <section id="shop" className="container-shell py-4 sm:py-6">
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Affiliate storefront</p>
          <h2 className="section-title max-w-3xl">Shop the curated picks that drive everyday style upgrades.</h2>
          <p className="section-copy">
            Budget-conscious essentials, elevated wardrobe staples, and grooming recommendations
            presented as a premium storefront.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {picks.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -10 }}
            className="luxe-card group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80">Affiliate edit</p>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">{item.price}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full gap-2"
              >
                Shop Now
                <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ShopSection
