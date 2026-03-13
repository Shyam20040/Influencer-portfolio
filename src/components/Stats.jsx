import { motion } from 'framer-motion'
import { stats } from '../data/content'

const itemMotion = {
  hidden: { opacity: 0, y: 30 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08 },
  }),
}

function Stats() {
  return (
    <section className="container-shell pt-20">
      <div className="mb-10">
        <p className="section-kicker">Social proof</p>
        <h2 className="section-title max-w-3xl">Performance that gives brands a clear reason to invest.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            custom={index}
            variants={itemMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="luxe-card p-6"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-white/50">{stat.label}</p>
            <p className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white">
              {stat.value}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/60">{stat.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Stats
