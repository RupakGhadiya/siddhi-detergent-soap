import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { translations } from '../i18n/translations'
import type { Lang, Localized } from '../types'

interface LanguageValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  /** Dot-path lookup into the translations table, e.g. t('hero.title'). */
  t: (path: string) => string
  /** Resolve a bilingual object from the data files to the active language. */
  pick: (obj: Localized) => string
}

const LanguageContext = createContext<LanguageValue | null>(null)

const STORAGE_KEY = 'siddhi-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'gu' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.body.dataset.lang = lang
  }, [lang])

  const t = useCallback(
    (path: string): string => {
      const parts = path.split('.')
      const read = (src: (typeof translations)[Lang]): string | undefined => {
        let node: unknown = src
        for (const p of parts) {
          if (node && typeof node === 'object') {
            node = (node as Record<string, unknown>)[p]
          } else {
            return undefined
          }
        }
        return typeof node === 'string' ? node : undefined
      }
      return read(translations[lang]) ?? read(translations.en) ?? path
    },
    [lang]
  )

  const pick = useCallback((obj: Localized): string => (obj ? obj[lang] ?? obj.en : ''), [lang])

  const toggleLang = useCallback(() => setLang((prev) => (prev === 'en' ? 'gu' : 'en')), [])

  const value: LanguageValue = { lang, setLang, toggleLang, t, pick }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
