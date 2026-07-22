import { useLanguage } from '../context/LanguageContext'

// Infinite scrolling band of brand promises. Items are duplicated so the
// CSS translateX(-50%) loop is seamless.
export default function Marquee() {
  const { lang } = useLanguage()

  const items =
    lang === 'gu'
      ? ['શુદ્ધતા', 'તાજગી', 'ભરોસાપાત્ર ગુણવત્તા', 'ચમકદાર સફાઈ', 'સૌરાષ્ટ્રનું ગૌરવ', 'સાચી કિંમત']
      : ['Purity', 'Freshness', 'Trusted Quality', 'Sparkling Clean', 'Pride of Saurashtra', 'Honest Value']

  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span className="marquee-item" key={i}>
            <span className="m-dot" />
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}
