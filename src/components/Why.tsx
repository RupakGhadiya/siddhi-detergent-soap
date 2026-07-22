import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import Icon, { type IconName } from './Icon'

interface Reason {
  icon: IconName
  title: string
  desc: string
  color: string
}

export default function Why() {
  const { t } = useLanguage()

  const reasons: Reason[] = [
    { icon: 'power', title: t('why.r1'), desc: t('why.r1d'), color: '#1573d4' },
    { icon: 'flower', title: t('why.r2'), desc: t('why.r2d'), color: '#e5327e' },
    { icon: 'hand', title: t('why.r3'), desc: t('why.r3d'), color: '#16bcc4' },
    { icon: 'tag', title: t('why.r4'), desc: t('why.r4d'), color: '#ff7a1a' },
  ]

  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="center">
          <Reveal>
            <span className="section-tag">{t('why.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('why.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{t('why.subtitle')}</p>
          </Reveal>
        </div>

        <motion.div
          className="why-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {reasons.map((r, i) => (
            <motion.div
              className="why-card"
              key={i}
              variants={{
                hidden: { opacity: 0, y: 34 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8 }}
            >
              <span className="why-num">{`0${i + 1}`}</span>
              <span
                className="why-ic"
                style={{ background: `linear-gradient(135deg, ${r.color}, color-mix(in srgb, ${r.color} 60%, #000))` }}
              >
                <Icon name={r.icon} size={28} />
              </span>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
