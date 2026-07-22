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

  // Apply the "sound only here" policy on view / mute / tab-visibility changes.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const apply = () => {
      if (inView && !muted && !document.hidden) {
        v.muted = false
        // Unmuted autoplay may be blocked until the first user gesture; if so the
        // video keeps playing muted and unlocks on the next interaction (below).
        void v.play().catch(() => {})
      } else {
        v.muted = true
      }
    }
    apply()
    document.addEventListener('visibilitychange', apply)
    return () => document.removeEventListener('visibilitychange', apply)
  }, [inView, muted])

  // Browsers block unmuted autoplay until the user interacts with the page, so
  // start the (default-on) sound on the first gesture while the section is shown.
  useEffect(() => {
    const unlock = (e: Event) => {
      if ((e.target as HTMLElement | null)?.closest?.('.sound-toggle')) return
      const v = videoRef.current
      if (v && inView && !muted && !document.hidden) {
        v.muted = false
        void v.play().catch(() => {})
      }
    }
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
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
