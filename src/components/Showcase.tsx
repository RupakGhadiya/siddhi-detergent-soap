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

  // Audio is scoped to this section only: it plays while the video is on screen
  // and the user hasn't muted it, and is muted again the moment it scrolls away.
  const [inView, setInView] = useState(false)
  const [wantSound, setWantSound] = useState(true)
  const [muted, setMuted] = useState(true)

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

  // Apply the "sound only here" policy whenever visibility or intent changes.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const shouldPlaySound = inView && wantSound
    if (shouldPlaySound) {
      v.muted = false
      v.play()
        .then(() => setMuted(false))
        .catch(() => {
          // Browser blocked unmuted autoplay — stay muted until a click gesture.
          v.muted = true
          setMuted(true)
        })
    } else {
      v.muted = true
      setMuted(true)
    }
  }, [inView, wantSound])

  // Pause audio if the tab is hidden.
  useEffect(() => {
    const onVis = () => {
      const v = videoRef.current
      if (v && document.hidden) {
        v.muted = true
        setMuted(true)
      }
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

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
              onClick={() => setWantSound((s) => !s)}
              aria-label={soundLabel}
              title={soundLabel}
            >
              <Icon name={muted ? 'soundOff' : 'soundOn'} size={20} />
            </button>
          </motion.div>

          {/* floating stat badges */}
          <motion.div
            className="showcase-badge b1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon name="shield" size={18} />
            {t('showcase.p1')}
          </motion.div>
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
