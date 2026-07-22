import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'
import type { CategoryDef } from '../types'

export default function Products() {
  const { t, pick } = useLanguage()
  const [active, setActive] = useState<CategoryDef['id']>('all')

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="products-head">
          <Reveal>
            <span className="section-tag">{t('products.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('products.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle center">{t('products.subtitle')}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="filters">
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`filter-btn ${active === c.id ? 'active' : ''}`}
                  onClick={() => setActive(c.id)}
                >
                  {pick(c)}
                  {active === c.id && <motion.span className="filter-glow" layoutId="filter-glow" />}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div className="product-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
