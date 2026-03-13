import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { picks, shopTabs } from '../data/content'

function ShopSection() {
  const [activeTab, setActiveTab] = useState('All')

  const visiblePicks =
    activeTab === 'All' ? picks : picks.filter((item) => item.category === activeTab)

  return (
    <section id="shop" className="container-shell py-4 sm:py-6">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Affiliate storefront</p>
          <h2 className="section-title max-w-3xl">Shop the curated picks that drive everyday style upgrades.</h2>
          <p className="section-copy">
            Budget-conscious essentials, elevated wardrobe staples, and grooming recommendations
            presented as a premium storefront.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {shopTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 ${
              activeTab === tab
                ? 'border-gold bg-gold/12 text-gold shadow-[0_10px_30px_rgba(212,175,55,0.16)]'
                : 'border-white/10 bg-white/5 text-white/68 hover:border-gold/40 hover:text-gold'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="section-divider-line mb-8 h-px w-full" />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visiblePicks.map((item, index) => (
          <motion.article
            key={`${activeTab}-${item.title}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,18,0.96),rgba(11,11,11,0.92))] shadow-[0_22px_55px_rgba(0,0,0,0.24)] transition duration-300 hover:shadow-[0_30px_75px_rgba(0,0,0,0.34)]"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold/80">{item.category}</p>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">{item.price}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full gap-2 shadow-[0_0_0_1px_rgba(212,175,55,0.08)] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.18)]"
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
