import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { COMPANY } from '../data/company'
import Reveal from './Reveal'
import Icon from './Icon'

const query = encodeURIComponent(COMPANY.mapQuery)
// Embeddable map (no API key required).
const EMBED_URL = `https://maps.google.com/maps?q=${query}&t=&z=14&ie=UTF8&iwloc=&output=embed`
// Deep link that opens turn-by-turn directions to the factory.
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${query}`

export default function MapSection() {
  const { t } = useLanguage()

  const openDirections = () => window.open(DIRECTIONS_URL, '_blank', 'noopener,noreferrer')

  return (
    <section className="section map-section" id="visit">
      <div className="container">
        <div className="center">
          <Reveal>
            <span className="section-tag">{t('map.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('map.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{t('map.subtitle')}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="map-wrap">
            {/* Info rail */}
            <div className="map-info">
              <div className="map-info-badge">
                <Icon name="mapPin" size={22} />
              </div>
              <h3>{COMPANY.name}</h3>

              <div className="map-info-row">
                <span className="mi-ic">
                  <Icon name="mapPin" size={19} />
                </span>
                <div>
                  <div className="mi-label">{t('map.located')}</div>
                  <div className="mi-value">{t('contact.addressValue')}</div>
                </div>
              </div>

              <div className="map-info-row">
                <span className="mi-ic">
                  <Icon name="clock" size={19} />
                </span>
                <div>
                  <div className="mi-label">{t('map.hours')}</div>
                  <div className="mi-value">{t('map.hoursValue')}</div>
                </div>
              </div>

              <div className="map-info-row">
                <span className="mi-ic">
                  <Icon name="phone" size={19} />
                </span>
                <div>
                  <div className="mi-label">{t('contact.phone')}</div>
                  <a className="mi-value link" href={`tel:${COMPANY.phoneRaw}`}>
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <button className="btn btn-primary map-dir-btn" onClick={openDirections}>
                <Icon name="directions" size={20} />
                {t('map.directions')}
              </button>
            </div>

            {/* Map + clickable overlay */}
            <motion.div
              className="map-frame"
              onClick={openDirections}
              role="button"
              tabIndex={0}
              aria-label={t('map.openMaps')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openDirections()
                }
              }}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <iframe
                title="SIDDHI · Vrajbhoomi Chemicals location"
                src={EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Animated pin marker */}
              <div className="map-pin" aria-hidden="true">
                <span className="map-pin-pulse" />
                <span className="map-pin-dot">
                  <Icon name="mapPin" size={20} />
                </span>
              </div>

              {/* Hover overlay CTA */}
              <motion.div
                className="map-overlay"
                variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.28 }}
              >
                <span className="map-overlay-pill">
                  <Icon name="directions" size={18} />
                  {t('map.openMaps')}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
