import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Bubbles from './Bubbles'
import Counter from './Counter'
import Icon from './Icon'
import { LOGO_VIDEO } from '../data/assets'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

interface StatDef {
  to: number
  suffix: string
  label: string
}

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)

  // Parallax: the visual drifts as you scroll the hero out.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse-follow tilt on the floating card.
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const stats: StatDef[] = [
    { to: Number(t('hero.stat1v')), suffix: '+', label: t('hero.stat1') },
    { to: Number(t('hero.stat2v')), suffix: '+', label: t('hero.stat2') },
    { to: Number(t('hero.stat3v')), suffix: 'K+', label: t('hero.stat3') },
  ]

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-glow g1" />
      <div className="hero-glow g2" />
      <Bubbles />

      <div className="container hero-inner">
        <motion.div variants={container} initial="hidden" animate="show" style={{ y: textY, opacity: fade }}>
          <motion.div className="hero-badge" variants={item}>
            <span className="dot" />
            {t('hero.badge')}
          </motion.div>

          <motion.h1 variants={item}>
            {t('hero.title')}
            <span className="accent">{t('hero.titleAccent')}</span>
          </motion.h1>

          <motion.p className="lead" variants={item}>
            {t('hero.subtitle')}
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a href="#products" className="btn btn-light btn-lg">
              {t('hero.cta')}
              <Icon name="arrowRight" size={19} />
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg">
              <Icon name="whatsapp" size={19} />
              {t('hero.cta2')}
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <div className="num">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div className="hero-visual" style={{ y: visualY }}>
          <motion.div
            className="hero-disc"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero-disc-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          />

          <div
            className="tilt-stage"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="hero-logo-card"
              style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, scale: 0.7, rotateZ: -6 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0, y: [0, -16, 0] }}
              transition={{
                opacity: { duration: 0.7, delay: 0.35 },
                scale: { type: 'spring', stiffness: 120, damping: 12, delay: 0.35 },
                rotateZ: { duration: 0.7, delay: 0.35 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
            >
              <video
                className="hero-logo-img"
                src={LOGO_VIDEO}
                autoPlay
                muted
                loop
                playsInline
                style={{ transform: 'translateZ(40px)' }}
              />
              <span className="hero-logo-shine" aria-hidden="true" />
            </motion.div>
          </div>

          <motion.div
            className="chip-float c1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          >
            <Icon name="sparkle" size={17} /> 2X Power
          </motion.div>
          <motion.div
            className="chip-float c2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          >
            <Icon name="flower" size={17} /> Fresh Fragrance
          </motion.div>
        </motion.div>
      </div>

      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="var(--bg-alt)"
            d="M0,64 C240,120 480,120 720,80 C960,40 1200,0 1440,48 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  )
}
