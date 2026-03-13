import { motion } from 'framer-motion'
import { featuredContent } from '../data/content'

function Portfolio() {
  return (
    <section id="portfolio" className="container-shell py-4 sm:py-6">
      <p className="section-kicker">Featured content</p>
      <div className="flex flex-col gap-5 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="section-title max-w-3xl">Editorial visuals with the polish of a fashion campaign.</h2>
          <p className="section-copy">
            Outfit storytelling, lifestyle mood, and fitness content arranged in a responsive masonry
            format that feels closer to a premium magazine spread than a social link page.
          </p>
        </div>
      </div>

      <div className="portfolio-columns">
        {featuredContent.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="group luxe-card relative"
          >
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/5 to-transparent p-6 opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-gold">{item.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
