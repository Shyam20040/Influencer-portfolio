import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiInstagram } from 'react-icons/fi'
import kunalImage from '../assets/kunal.png'

function Hero() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 500], [0, -28])

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-3 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-5"
    >
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_18%_26%,rgba(212,175,55,0.1),transparent_24%),radial-gradient(circle_at_74%_26%,rgba(212,175,55,0.11),transparent_24%),radial-gradient(circle_at_48%_34%,rgba(212,175,55,0.08),transparent_36%),linear-gradient(180deg,#121212_0%,#080808_48%,transparent_100%),linear-gradient(120deg,transparent_0%,rgba(212,175,55,0.04)_42%,transparent_66%)] bg-[length:100%_100%,100%_100%,100%_100%,100%_100%,180%_180%]"
      />
      <div className="pointer-events-none absolute left-[9%] top-24 h-56 w-56 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[8%] top-20 h-80 w-80 rounded-full bg-gold/12 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-[24%] h-64 w-[76%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.04)_48%,transparent_72%)] blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid min-h-[calc(100svh-6.8rem)] items-center gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: 'easeOut' }}
            className="relative order-2 max-w-[520px] overflow-hidden rounded-[24px] border border-gold/18 bg-[linear-gradient(145deg,rgba(23,23,23,0.78),rgba(10,10,10,0.72)_68%,rgba(35,28,12,0.66))] px-7 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_70px_rgba(0,0,0,0.44)] backdrop-blur-2xl sm:px-9 sm:py-9 lg:order-1 lg:px-9 lg:py-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(212,175,55,0.11),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_34%)]" />
            <div className="pointer-events-none absolute -left-8 top-16 h-32 w-32 rounded-full bg-gold/10 blur-[70px]" />

            <div className="relative flex min-h-[330px] flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.08 }}
                className="text-[11px] font-semibold uppercase tracking-[0.42em] text-gold/85 sm:text-xs"
              >
                Men&apos;s Fashion Creator
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-4 max-w-[8ch] bg-gradient-to-r from-white via-[#f8edcb] to-[#d4af37] bg-clip-text font-display text-[58px] font-extrabold tracking-[-0.085em] text-transparent sm:text-[64px] sm:leading-[0.93]"
              >
                Kunal Maru
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.66, delay: 0.24 }}
                className="mt-4 max-w-md text-sm tracking-[0.08em] text-white/72 sm:text-[15px]"
              >
                Men&apos;s Fashion • Fitness • Lifestyle Creator
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-6 max-w-[28rem] text-sm leading-7 text-white/60 sm:text-base"
              >
                A premium destination for style edits, brand storytelling, and curated affiliate
                picks designed to convert followers into customers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {['54K+ followers', 'Mumbai based', 'Open for brand collaborations'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/72 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.74, delay: 0.42 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#shop"
                  className="btn-primary group gap-2 px-7 py-3.5 hover:shadow-[0_24px_60px_rgba(212,175,55,0.34)]"
                >
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
            initial={{ opacity: 0, scale: 0.95, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.92, ease: 'easeOut', delay: 0.16 }}
            style={{ y: imageY }}
            className="relative order-1 flex min-h-[460px] items-end justify-center lg:order-2 lg:min-h-[620px] lg:justify-start"
          >
            <div className="pointer-events-none absolute left-[6%] right-[10%] top-1/2 h-[360px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0.12)_34%,rgba(212,175,55,0)_72%)] blur-[155px]" />
            <div className="pointer-events-none absolute left-[18%] top-[14%] h-[340px] w-[340px] rounded-full bg-gold/14 blur-[180px]" />

            <div className="group relative z-10 flex h-full w-full items-end justify-center lg:justify-start">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-2 pt-5 shadow-[0_40px_110px_rgba(0,0,0,0.5)]">
                <img
                  src={kunalImage}
                  alt="Kunal Maru portrait"
                  className="h-[520px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_34px_72px_rgba(0,0,0,0.56)] transition duration-700 group-hover:scale-[1.03] sm:h-[560px] lg:h-[600px]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8">
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
