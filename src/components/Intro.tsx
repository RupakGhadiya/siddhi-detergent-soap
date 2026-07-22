import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LOGO_VIDEO } from '../data/assets'
import { useLanguage } from '../context/LanguageContext'

const SEEN_KEY = 'siddhi-intro-seen'

// Full-screen brand splash that plays the logo-animation video once per session,
// then fades away to reveal the site. Skippable, with a safety timeout.
export default function Intro() {
  const { lang } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  })

  const dismiss = () => {
    sessionStorage.setItem(SEEN_KEY, '1')
    setShow(false)
  }

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'
    // Safety net: never trap the user if the video stalls.
    const t = window.setTimeout(dismiss, 7000)
    return () => {
      document.body.style.overflow = ''
      window.clearTimeout(t)
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="intro-bubbles" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} style={{ ['--i' as string]: i }} />
            ))}
          </div>

          <motion.video
            ref={videoRef}
            className="intro-video"
            src={LOGO_VIDEO}
            autoPlay
            muted
            playsInline
            onEnded={dismiss}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.button
            className="intro-skip"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {lang === 'gu' ? 'છોડો' : 'Skip'} →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
