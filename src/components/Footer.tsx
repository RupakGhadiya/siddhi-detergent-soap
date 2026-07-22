import { useLanguage } from '../context/LanguageContext'
import { COMPANY } from '../data/company'
import { categories } from '../data/products'
import { LOGO } from '../data/assets'
import Icon from './Icon'

interface FooterLink {
  id: string
  key: string
}

export default function Footer() {
  const { t, pick } = useLanguage()

  const navLinks: FooterLink[] = [
    { id: 'home', key: 'nav.home' },
    { id: 'about', key: 'nav.about' },
    { id: 'products', key: 'nav.products' },
    { id: 'visit', key: 'nav.visit' },
    { id: 'contact', key: 'nav.contact' },
  ]

  const year = 2026 // static build year — avoids Date at render time

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <span className="brand-logo">
                <img src={LOGO} alt="SIDDHI Detergent Soap" />
              </span>
            </div>
            <p className="footer-about">
              {t('footer.tagline')} · {COMPANY.name}.
            </p>
            <div className="footer-social">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name="whatsapp" size={20} />
              </a>
              <a href={`mailto:${COMPANY.email}`} aria-label="Email">
                <Icon name="mail" size={20} />
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} aria-label="Phone">
                <Icon name="phone" size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>{t('footer.quick')}</h5>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{t(l.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footer.productsCol')}</h5>
            <ul>
              {categories
                .filter((c) => c.id !== 'all')
                .map((c) => (
                  <li key={c.id}>
                    <a href="#products">{pick(c)}</a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>{t('footer.contactCol')}</h5>
            <ul>
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li>{t('contact.addressValue')}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {COMPANY.name}. {t('footer.rights')}
          </span>
          <span>
            {t('footer.made')} <span className="heart">♦</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
