import { motion } from 'framer-motion'
import { FiCompass, FiUsers } from 'react-icons/fi'
import kunalImage from '../assets/kunal.png'

const infoCards = [
  {
    title: 'Audience Fit',
    copy: 'Fashion-conscious, trend-aware, and commerce-ready viewers.',
    icon: FiUsers,
  },
  {
    title: 'Content Tone',
    copy: 'Minimal, aspirational, and highly product friendly without feeling forced.',
    icon: FiCompass,
  },
]

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-[12%] top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-24 h-72 w-72 rounded-full bg-gold/8 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.75),rgba(8,8,8,0.3)_40%,rgba(16,12,5,0.3)_100%)]" />

      <div className="container-shell relative">
        <div className="mb-14 sm:mb-16">
          <div className="section-divider-line mx-auto h-px w-full max-w-4xl" />
        </div>

        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-x-[12%] bottom-10 top-12 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16)_0%,rgba(212,175,55,0.08)_38%,rgba(212,175,55,0)_74%)] blur-[140px]" />
            <div className="pointer-events-none absolute left-8 top-10 h-28 w-40 rounded-full bg-gradient-to-r from-gold/18 via-gold/6 to-transparent blur-[60px]" />

            <div className="group relative rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 shadow-[0_38px_100px_rgba(0,0,0,0.44)]">
              <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
              <div className="relative overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_50%_22%,rgba(212,175,55,0.08),transparent_40%),linear-gradient(180deg,rgba(18,18,18,0.88),rgba(10,10,10,0.98))]">
                <img
                  src={kunalImage}
                  alt="Kunal Maru portrait"
                  className="h-full min-h-[460px] w-full object-contain object-bottom transition duration-700 group-hover:scale-[1.03] lg:min-h-[620px]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.82, ease: 'easeOut', delay: 0.08 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(15,15,15,0.9),rgba(8,8,8,0.82)_58%,rgba(26,20,8,0.72))] px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(212,175,55,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_32%)]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-gold/85">
                About Creator
              </p>
              <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-bold tracking-[-0.06em] text-white sm:text-[42px] sm:leading-[1.02] lg:text-[48px]">
                Style-led storytelling for modern men&apos;s fashion brands
              </h2>

              <div className="mt-7 max-w-[600px] space-y-5 text-sm leading-7 text-white/62 sm:text-base">
                <p>
                  Kunal Maru is a Mumbai-based men&apos;s fashion and lifestyle creator helping
                  brands reach style-conscious audiences through engaging fashion content, product
                  recommendations, and lifestyle storytelling.
                </p>
                <p>
                  His work blends clean fashion visuals, accessible grooming and fitness advice, and
                  a premium editorial point of view tailored for Gen Z and young millennial
                  consumers.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {infoCards.map((card, index) => {
                  const Icon = card.icon

                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: 0.22 + index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="rounded-[20px] border border-gold/15 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-gold/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_50px_rgba(0,0,0,0.34)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                          <Icon size={17} />
                        </span>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold/82">
                          {card.title}
                        </p>
                      </div>
                      <p className="mt-4 max-w-[26ch] text-sm leading-7 text-white/72">
                        {card.copy}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
