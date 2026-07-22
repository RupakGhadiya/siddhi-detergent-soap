// Ambient rising soap-bubbles used behind the hero and contact sections.
// Deterministic values (no Math.random) keep re-renders stable.

interface BubbleDef {
  left: string
  size: number
  dur: number
  delay: number
}

const BUBBLES: BubbleDef[] = [
  { left: '6%', size: 46, dur: 14, delay: 0 },
  { left: '18%', size: 20, dur: 11, delay: 2 },
  { left: '28%', size: 64, dur: 18, delay: 4 },
  { left: '40%', size: 28, dur: 13, delay: 1 },
  { left: '52%', size: 40, dur: 16, delay: 6 },
  { left: '63%', size: 18, dur: 10, delay: 3 },
  { left: '72%', size: 54, dur: 19, delay: 5 },
  { left: '83%', size: 26, dur: 12, delay: 2 },
  { left: '92%', size: 38, dur: 15, delay: 7 },
  { left: '47%', size: 14, dur: 9, delay: 8 },
]

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
