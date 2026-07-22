import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { ALL_IN_ONE, ALL_IN_ONE_VIDEO } from '../data/assets'
import Icon, { type IconName } from './Icon'
import Reveal from './Reveal'

interface Point {
  icon: IconName
  text: string
}

export default function Showcase() {
  const { t, lang } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Gentle parallax lift on the family video as it scrolls through view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  // Audio is scoped to this section: sound plays whenever the video is on screen
  // and the user hasn't muted it. Unmuted by default — the toggle only mutes —
  // and the state isn't persisted, so a refresh returns to unmuted.
  const [inView, setInView] = useState(false)
  const [muted, setMuted] = useState(false)
  // Browsers allow unmuted playback only after the user has interacted with the
  // page at least once. We record that the moment it happens ANYWHERE, so audio
  // is already cleared by the time this section scrolls into view.
  const gesturedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.5),
      { threshold: [0, 0.5, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // The video ALWAYS autoplays and loops (muted-safe, never paused). Audio is on
  // whenever the section is in view, not muted, the tab is visible, and the user
  // has interacted with the page at least once (browser requirement).
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const apply = () => {
      v.muted = !(inView && !muted && !document.hidden && gesturedRef.current)
      if (v.paused) void v.play().catch(() => {})
    }
    apply()
    document.addEventListener('visibilitychange', apply)
    return () => document.removeEventListener('visibilitychange', apply)
  }, [inView, muted])

  // Record the first real user gesture (anywhere) and immediately apply audio, so
  // sound starts on its own when the section is/gets in view — no click required
  // on the video itself.
  useEffect(() => {
    if (gesturedRef.current) return
    const onGesture = () => {
      gesturedRef.current = true
      const v = videoRef.current
      if (v) {
        v.muted = !(inView && !muted && !document.hidden)
        if (v.paused) void v.play().catch(() => {})
      }
      cleanup()
    }
    const cleanup = () => {
      window.removeEventListener('pointerdown', onGesture)
      window.removeEventListener('keydown', onGesture)
      window.removeEventListener('touchstart', onGesture)
    }
    window.addEventListener('pointerdown', onGesture)
    window.addEventListener('keydown', onGesture)
    window.addEventListener('touchstart', onGesture, { passive: true })
    return cleanup
  }, [inView, muted])

  const points: Point[] = [
    { icon: 'layers', text: t('showcase.p1') },
    { icon: 'sparkle', text: t('showcase.p2') },
    { icon: 'factory', text: t('showcase.p3') },
  ]

  const soundLabel = muted
    ? lang === 'gu'
      ? 'અવાજ ચાલુ કરો'
      : 'Unmute'
    : lang === 'gu'
      ? 'અવાજ બંધ કરો'
      : 'Mute'

  return (
    <section className="section showcase" id="range">
      <div className="container showcase-grid">
        <div className="showcase-copy">
          <Reveal>
            <span className="section-tag">{t('showcase.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('showcase.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{t('showcase.subtitle')}</p>
          </Reveal>

          <motion.ul
            className="showcase-points"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          >
            {points.map((p, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <span className="sp-ic">
                  <Icon name={p.icon} size={20} />
                </span>
                {p.text}
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.2}>
            <a href="#products" className="btn btn-primary btn-lg">
              {t('showcase.cta')}
              <Icon name="arrowRight" size={19} />
            </a>
          </Reveal>
        </div>

        <div className="showcase-visual" ref={ref}>
          <motion.div
            className="showcase-frame"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY }}
          >
            <video
              ref={videoRef}
              src={ALL_IN_ONE_VIDEO}
              poster={ALL_IN_ONE}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <span className="showcase-glow" aria-hidden="true" />

            <button
              type="button"
              className={`sound-toggle ${muted ? 'is-muted' : ''}`}
              onClick={() => setMuted((m) => !m)}
              aria-label={soundLabel}
              title={soundLabel}
            >
              <Icon name={muted ? 'soundOff' : 'soundOn'} size={20} />
            </button>
          </motion.div>

          {/* floating stat badges */}
          <motion.div
            className="showcase-badge b2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <Icon name="sparkle" size={18} />
            Trusted Quality
          </motion.div>
        </div>
      </div>
    </section>
  )
}
