import { motion } from 'framer-motion'
import { FiInstagram, FiMail } from 'react-icons/fi'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="container-shell py-4 sm:py-6">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-panel px-6 py-10 sm:px-10"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Start a premium collaboration conversation.</h2>
          <p className="section-copy">
            For fashion campaigns, affiliate partnerships, product gifting, or branded content, reach
            out directly below.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:teamdrakunz@gmail.com"
              className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-black/25 px-5 py-4 text-white/80 transition hover:border-gold/50"
            >
              <FiMail className="text-gold" />
              <span>teamdrakunz@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/dra_kunz/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-black/25 px-5 py-4 text-white/80 transition hover:border-gold/50"
            >
              <FiInstagram className="text-gold" />
              <span>@dra_kunz</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={handleSubmit}
          className="glass-panel space-y-5 px-6 py-10 sm:px-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.28em] text-white/50">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-[18px] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-gold/70"
              />
            </label>
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-[0.28em] text-white/50">Brand</span>
              <input
                type="text"
                placeholder="Your brand"
                className="w-full rounded-[18px] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-gold/70"
              />
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/50">Email</span>
            <input
              type="email"
              placeholder="hello@brand.com"
              className="w-full rounded-[18px] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-gold/70"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/50">Project brief</span>
            <textarea
              rows="6"
              placeholder="Tell me about the campaign, deliverables, and timelines."
              className="w-full rounded-[18px] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-gold/70"
            />
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
