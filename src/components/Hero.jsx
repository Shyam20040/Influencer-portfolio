import { motion } from 'framer-motion'
import { FiArrowRight, FiInstagram } from 'react-icons/fi'
import kunalImage from '../assets/kunal.png'

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-4 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pb-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_18%_22%,rgba(212,175,55,0.12),transparent_24%),radial-gradient(circle_at_76%_18%,rgba(212,175,55,0.08),transparent_22%),linear-gradient(180deg,#141414_0%,#090909_46%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-[10%] top-24 h-60 w-60 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-28 h-72 w-72 rounded-full bg-gold/10 blur-[135px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid min-h-[calc(100svh-7rem)] items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative order-2 overflow-hidden rounded-[24px] border border-gold/20 bg-[linear-gradient(145deg,rgba(21,21,21,0.82),rgba(10,10,10,0.76)_65%,rgba(38,30,12,0.72))] px-7 py-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-9 sm:py-10 lg:order-1 lg:px-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(212,175,55,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%)]" />
            <div className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-gold/10 blur-[80px]" />

            <div className="relative flex min-h-[360px] flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold/85 sm:text-xs"
              >
                Men&apos;s Fashion Creator
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.16 }}
                className="mt-4 max-w-[8ch] bg-gradient-to-r from-white via-[#f7ebc5] to-[#d4af37] bg-clip-text font-display text-5xl font-extrabold tracking-[-0.075em] text-transparent sm:text-6xl lg:text-[68px] lg:leading-[0.94]"
              >
                Kunal Maru
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, delay: 0.24 }}
                className="mt-5 max-w-md text-sm uppercase tracking-[0.16em] text-white/72"
              >
                Men&apos;s Fashion • Fitness • Lifestyle Creator
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.32 }}
                className="mt-6 max-w-[30rem] text-sm leading-7 text-white/62 sm:text-base"
              >
                A premium destination for style edits, brand storytelling, and curated affiliate
                picks designed to convert followers into customers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.76, delay: 0.4 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a href="#shop" className="btn-primary group gap-2 px-7 py-3.5">
                  Shop My Picks
                  <FiArrowRight className="transition duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="btn-secondary group relative overflow-hidden px-7 py-3.5"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold/0 via-gold/15 to-gold/35 transition duration-500 group-hover:translate-x-0" />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Work With Me
                    <FiInstagram />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut', delay: 0.18 }}
            className="relative order-1 flex min-h-[420px] items-end justify-center lg:order-2 lg:min-h-[600px] lg:justify-end"
          >
            <div className="pointer-events-none absolute inset-x-[10%] top-1/2 h-[340px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.1)_36%,rgba(212,175,55,0)_74%)] blur-[140px]" />
            <div className="pointer-events-none absolute right-[12%] top-[18%] h-[280px] w-[280px] rounded-full bg-gold/15 blur-[160px]" />

            <div className="group relative z-10 flex h-full w-full items-end justify-center lg:justify-end">
              <img
                src={kunalImage}
                alt="Kunal Maru portrait"
                className="h-[360px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_30px_65px_rgba(0,0,0,0.52)] transition duration-700 group-hover:scale-[1.03] sm:h-[430px] lg:h-[600px]"
              />

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-auto lg:right-6">
                <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-black/30 px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-white/58">Instagram</p>
                    <p className="mt-1 text-sm font-medium text-white">@dra_kunz</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
