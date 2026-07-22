import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { LOGO } from '../data/assets'

interface NavLink {
  id: string
  key: string
}

const LINKS: NavLink[] = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'products', key: 'nav.products' },
  { id: 'why', key: 'nav.why' },
  { id: 'visit', key: 'nav.visit' },
  { id: 'contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Thin reading-progress bar pinned under the nav.
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={close} aria-label="SIDDHI Detergent Soap — Home">
          <motion.span
            className="brand-logo"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14 }}
          >
            <img src={LOGO} alt="SIDDHI Detergent Soap" />
          </motion.span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{t(l.key)}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              className={lang === 'gu' ? 'active' : ''}
              onClick={() => setLang('gu')}
              aria-pressed={lang === 'gu'}
            >
              ગુજ
            </button>
          </div>

          <a href="#contact" className="btn btn-primary nav-cta">
            {t('common.dealership')}
          </a>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* scroll progress */}
      <motion.div className="nav-progress" style={{ scaleX: progress }} aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={close}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                {t(l.key)}
              </motion.a>
            ))}
            <a href="#contact" className="btn btn-primary" onClick={close}>
              {t('common.dealership')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
