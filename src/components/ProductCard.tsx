import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Icon from './Icon'
import { asset } from '../data/assets'
import type { Product } from '../types'

// Photo-led product card: a real lifestyle photo fills the top, with an accent
// colour wash, a floating tag, a category glyph and a hover shine sweep.
export default function ProductCard({ product }: { product: Product }) {
  const { pick } = useLanguage()

  return (
    <motion.article
      className="product-card"
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12 }}
      style={{ '--a': product.accent, '--b': product.accent2 } as React.CSSProperties}
    >
      <div className="pc-photo">
        <img src={asset(product.image)} alt={pick(product.name)} loading="lazy" decoding="async" />
        <span className="pc-photo-wash" aria-hidden="true" />
        <span className="pc-shine" aria-hidden="true" />
        <span className="pc-tag">{pick(product.tag)}</span>
        <span className="pc-cat" aria-hidden="true">
          <Icon name={product.icon} size={20} />
        </span>
      </div>

      <div className="pc-body">
        <h3>{pick(product.name)}</h3>
        <div className="pc-sub">{pick(product.subtitle)}</div>
        <p className="pc-desc">{pick(product.desc)}</p>

        <div className="pc-features">
          {product.features.map((f, i) => (
            <span className="pc-feature" key={i}>
              {pick(f)}
            </span>
          ))}
        </div>

        <div className="pc-foot">
          <span className="pc-size">{pick(product.sizes)}</span>
          <span className="pc-dot" aria-hidden="true">
            <Icon name="arrowRight" size={17} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}
