import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { navItems } from '../data/content'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.82)' : 'rgba(0, 0, 0, 0.6)',
        borderColor: isScrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b backdrop-blur-[10px]"
    >
      <nav
        className={`container-shell flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-[0.3em] text-white">
          DRA KUNZ
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link group pb-1 text-[15px]">
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 text-xs shadow-[0_0_0_1px_rgba(212,175,55,0.18),0_18px_40px_rgba(212,175,55,0.22)]"
          >
            Work With Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                Contact for Collaborations
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
