import { FaAmazon } from 'react-icons/fa'
import { FiInstagram, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="container-shell">
        <div className="section-divider-line mb-10 h-px w-full" />

        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-display text-3xl font-semibold tracking-[0.45em] text-white sm:text-4xl">
            DRA KUNZ
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dra_kunz/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:scale-105 hover:border-gold/60 hover:text-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              <FiInstagram />
            </a>
            <a
              href="mailto:teamdrakunz@gmail.com"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:scale-105 hover:border-gold/60 hover:text-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              <FiMail />
            </a>
            <a
              href="https://www.amazon.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:scale-105 hover:border-gold/60 hover:text-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              <FaAmazon />
            </a>
          </div>

          <p className="text-sm text-white/50">© 2026 dra_kunz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
