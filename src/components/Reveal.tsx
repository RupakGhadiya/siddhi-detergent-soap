import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: Direction
  distance?: number
}

const offset = (dir: Direction, d: number) => {
  switch (dir) {
    case 'up':
      return { y: d }
    case 'down':
      return { y: -d }
    case 'left':
      return { x: d }
    case 'right':
      return { x: -d }
    case 'scale':
      return { scale: 0.9 }
  }
}

// Fades + slides (or scales) children in when they scroll into view.
export default function Reveal({
  children,
  delay = 0,
  className,
  direction = 'up',
  distance = 30,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
