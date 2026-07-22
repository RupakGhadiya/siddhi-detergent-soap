import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import Icon, { type IconName } from './Icon'

interface Feature {
  icon: IconName
  title: string
  desc: string
  color: string
}

export default function About() {
  const { t } = useLanguage()

  const features: Feature[] = [
    { icon: 'shield', title: t('about.f1'), desc: t('about.f1d'), color: '#1573d4' },
    { icon: 'layers', title: t('about.f2'), desc: t('about.f2d'), color: '#16bcc4' },
    { icon: 'factory', title: t('about.f3'), desc: t('about.f3d'), color: '#ff7a1a' },
    { icon: 'wallet', title: t('about.f4'), desc: t('about.f4d'), color: '#1fae67' },
  ]

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <Reveal>
            <span className="section-tag">{t('about.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('about.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>{t('about.p1')}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>{t('about.p2')}</p>
          </Reveal>
        </div>

        <motion.div
          className="about-features"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {features.map((f, i) => (
            <motion.div
              className="feature-card"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8 }}
            >
              <span
                className="feature-icon"
                style={{
                  background: `linear-gradient(135deg, ${f.color}, color-mix(in srgb, ${f.color} 62%, #000))`,
                  color: '#fff',
                }}
              >
                <Icon name={f.icon} size={26} />
              </span>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
