import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { COMPANY } from '../data/company'
import Icon from './Icon'

export default function FloatActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="float-actions">
      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab whatsapp"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="fab-ping" aria-hidden="true" />
        <Icon name="whatsapp" size={24} />
      </motion.a>

      <AnimatePresence>
        {show && (
          <motion.button
            className="fab top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{ y: -3 }}
          >
            <Icon name="arrowUp" size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
