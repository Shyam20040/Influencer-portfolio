import { motion } from 'framer-motion'
import { services } from '../data/content'

function WorkWithMe() {
  return (
    <section className="container-shell pt-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass-panel grid gap-8 overflow-hidden px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"
      >
        <div>
          <p className="section-kicker">Partnerships</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-copy">
            Built for campaigns that need polished visuals, credible product integration, and premium
            storytelling that aligns with aspirational men&apos;s lifestyle audiences.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            Contact for Collaborations
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-[24px] border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white">{service}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default WorkWithMe
