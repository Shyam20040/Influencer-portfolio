import { FiInstagram, FiMail, FiYoutube } from 'react-icons/fi'
import { navItems } from '../data/content'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.28em] text-white">KUNAL MARU</p>
          <p className="mt-2 text-sm text-white/50">© 2026 dra_kunz. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/50 transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/dra_kunz/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold/60 hover:text-gold"
          >
            <FiInstagram />
          </a>
          <a
            href="mailto:teamdrakunz@gmail.com"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold/60 hover:text-gold"
          >
            <FiMail />
          </a>
          <a
            href="#portfolio"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold/60 hover:text-gold"
          >
            <FiYoutube />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
