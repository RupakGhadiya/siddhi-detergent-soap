import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { ALL_IN_ONE } from '../data/assets'
import Icon, { type IconName } from './Icon'
import Reveal from './Reveal'

interface Point {
  icon: IconName
  text: string
}

export default function Showcase() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)

  // Gentle parallax lift on the family photo as it scrolls through view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const points: Point[] = [
    { icon: 'layers', text: t('showcase.p1') },
    { icon: 'sparkle', text: t('showcase.p2') },
    { icon: 'factory', text: t('showcase.p3') },
  ]

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
          >
            <motion.img
              src={ALL_IN_ONE}
              alt={t('showcase.title')}
              loading="lazy"
              decoding="async"
              style={{ y: imgY }}
            />
            <span className="showcase-glow" aria-hidden="true" />
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
