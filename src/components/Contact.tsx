import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import Bubbles from './Bubbles'
import Icon, { type IconName } from './Icon'
import { COMPANY } from '../data/company'

interface FormState {
  name: string
  phone: string
  message: string
}

interface ContactItem {
  icon: IconName
  label: string
  value: string
  href?: string
}

export default function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' })

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // Build a polished, formatted WhatsApp message (not just the raw fields).
  const buildWhatsAppMessage = (): string => {
    const lines = [
      t('wa.greeting'),
      '',
      t('wa.intro'),
      '',
      `*${t('wa.nameLabel')}:* ${form.name || '-'}`,
      `*${t('wa.phoneLabel')}:* ${form.phone || '-'}`,
      `*${t('wa.messageLabel')}:* ${form.message || '-'}`,
      '',
      t('wa.closing'),
    ]
    return lines.join('\n')
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(buildWhatsAppMessage())
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 6000)
  }

  const items: ContactItem[] = [
    { icon: 'phone', label: t('contact.phone'), value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
    { icon: 'mail', label: t('contact.email'), value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: 'mapPin', label: t('contact.address'), value: t('contact.addressValue') },
  ]

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="center">
          <Reveal>
            <span className="section-tag">{t('contact.tag')}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">{t('contact.title')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{t('contact.subtitle')}</p>
          </Reveal>
        </div>

        <div className="contact-grid">
          <Reveal direction="right">
            <div className="contact-panel">
              <Bubbles />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="cp-brand">{t('contact.manufacturedBy')}</div>
                <h3>{COMPANY.name}</h3>
              </div>
              <div className="contact-list">
                {items.map((it, i) => (
                  <div className="contact-item" key={i}>
                    <span className="ci-ic">
                      <Icon name={it.icon} size={22} />
                    </span>
                    <div>
                      <div className="ci-label">{it.label}</div>
                      {it.href ? (
                        <a className="ci-value" href={it.href}>
                          {it.value}
                        </a>
                      ) : (
                        <span className="ci-value">{it.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <a
                  className="wa-quick"
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(t('wa.greeting'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={20} />
                  WhatsApp&nbsp;·&nbsp;{COMPANY.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} direction="left">
            <div className="contact-form">
              <form onSubmit={onSubmit}>
                {sent && (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Icon name="check" size={20} />
                    {t('contact.sent')}
                  </motion.div>
                )}
                <div className="form-field">
                  <label htmlFor="name">{t('contact.formName')}</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">{t('contact.formPhone')}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">{t('contact.formMessage')}</label>
                  <textarea id="message" name="message" value={form.message} onChange={onChange} required />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary wa-submit"
                  style={{ width: '100%' }}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon name="whatsapp" size={20} />
                  {t('contact.formSubmit')}
                </motion.button>
                <p className="form-note">{t('contact.formNote')}</p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
