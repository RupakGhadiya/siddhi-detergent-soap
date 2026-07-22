import type { SVGProps } from 'react'

/**
 * A single inline-SVG icon set (line style, `currentColor`) so the whole site
 * shares one crisp, scalable, emoji-free visual language.
 */
export type IconName =
  // UI / contact
  | 'phone'
  | 'mail'
  | 'mapPin'
  | 'whatsapp'
  | 'clock'
  | 'directions'
  | 'globe'
  | 'arrowRight'
  | 'arrowUp'
  | 'send'
  | 'sparkle'
  | 'check'
  // feature / why
  | 'shield'
  | 'layers'
  | 'factory'
  | 'wallet'
  | 'power'
  | 'flower'
  | 'hand'
  | 'tag'
  // product illustrations
  | 'powder'
  | 'powderBox'
  | 'machineLiquid'
  | 'dishLiquid'
  | 'cake'
  | 'cakeStack'
  | 'bigBar'
  | 'shampoo'
  | 'herbal'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

// Each entry returns the inner SVG markup for a 24x24 viewBox.
const paths: Record<IconName, JSX.Element> = {
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 5.5L20 7" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm-2.4 5.1c.15 0 .3 0 .43.01.14.01.33-.05.51.4.19.46.64 1.6.7 1.72.06.11.1.25.02.4-.08.16-.12.25-.24.39-.12.14-.25.31-.36.41-.12.11-.24.24-.1.47.14.23.6.99 1.29 1.6.89.8 1.64 1.04 1.87 1.16.23.11.37.09.5-.06.14-.15.58-.68.74-.91.15-.23.3-.19.51-.11.21.08 1.33.63 1.56.74.23.12.38.17.44.27.06.1.06.57-.13 1.12-.19.55-1.12 1.06-1.57 1.09-.45.04-.87.2-2.93-.61-2.48-.98-4.05-3.5-4.17-3.66-.12-.16-1-1.33-1-2.53 0-1.2.63-1.79.85-2.04.22-.25.48-.31.64-.31Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  directions: (
    <>
      <path d="m11.3 2.7 9 9a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-9-9a1 1 0 0 1 0-1.4l7.2-7.2a1 1 0 0 1 1.4 0Z" />
      <path d="M9.5 13v-2a1.5 1.5 0 0 1 1.5-1.5h4" />
      <path d="m13 7.5 2.5 2-2.5 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 2.3 14.7 0 17M12 3.5c-2.3 2.3-2.3 14.7 0 17" />
    </>
  ),
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  arrowUp: <path d="M12 20V5m-6 6 6-6 6 6" />,
  send: <path d="M4.5 11.5 20 4l-7.5 15.5-2-6.5-6-1.5Z" />,
  sparkle: (
    <path d="M12 3.5c.6 3.7 1.8 4.9 5.5 5.5-3.7.6-4.9 1.8-5.5 5.5-.6-3.7-1.8-4.9-5.5-5.5 3.7-.6 4.9-1.8 5.5-5.5ZM18.5 14c.3 1.6.8 2.1 2.5 2.5-1.7.4-2.2.9-2.5 2.5-.3-1.6-.8-2.1-2.5-2.5 1.7-.4 2.2-.9 2.5-2.5Z" />
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5L20.5 12M3.5 16.5 12 21l8.5-4.5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4V10l6 4V7l6-2v16H3Z" />
      <path d="M7 21v-3.5M12 21v-3.5M17 21v-3.5" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 9h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3" />
      <circle cx="16" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  power: (
    <path d="M13.5 2 4 13.5h6L9.5 22 20 10.5h-6L13.5 2Z" />
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c.6-2.4-.4-4.6-2.4-4.6S7.5 7.4 12 9.6ZM14.4 12c2.4-.6 4.6.4 4.6 2.4S16.6 16.5 14.4 12ZM12 14.4c-.6 2.4.4 4.6 2.4 4.6S16.5 16.6 12 14.4ZM9.6 12c-2.4.6-4.6-.4-4.6-2.4S7.4 7.5 9.6 12Z" />
    </>
  ),
  hand: (
    <path d="M8 12.5V6a1.5 1.5 0 0 1 3 0v5V4.5a1.5 1.5 0 0 1 3 0V11V6.5a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-.5a5 5 0 0 1-4-2l-3-4a1.6 1.6 0 0 1 2.4-2.1L8 12.5Z" />
  ),
  tag: (
    <>
      <path d="M4 4h7l9 9-7 7-9-9V4Z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),

  /* ---- product illustrations ---- */
  powder: (
    <>
      <path d="M8 8h8l1.5 11a2 2 0 0 1-2 2.2H8.5a2 2 0 0 1-2-2.2L8 8Z" />
      <path d="M8.4 8c-.4-2 .4-4 3.6-4s4 2 3.6 4" />
      <path d="M9 13h6M9.5 17h5" />
    </>
  ),
  powderBox: (
    <>
      <rect x="4.5" y="7" width="15" height="13" rx="1.5" />
      <path d="M4.5 11h15M8 4.5l1.5 2.5M16 4.5 14.5 7" />
      <path d="M12 14.2v3M10.5 15.7h3" />
    </>
  ),
  machineLiquid: (
    <>
      <path d="M8 3h5l.5 3H9.2L8 3Z" />
      <path d="M7 8.5C7 7 8 6 9.4 6h3.2C14 6 15 7 15 8.5V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8.5Z" />
      <circle cx="11" cy="14" r="2.4" />
    </>
  ),
  dishLiquid: (
    <>
      <path d="M10 2.5h3v2.5h-3z" />
      <path d="M8.5 7c0-1 .8-1.8 1.8-1.8h2.4c1 0 1.8.8 1.8 1.8v12.2a1.8 1.8 0 0 1-1.8 1.8h-2.4a1.8 1.8 0 0 1-1.8-1.8V7Z" />
      <path d="M8.5 10.5h6" />
    </>
  ),
  cake: (
    <>
      <rect x="4" y="7.5" width="16" height="10" rx="1.5" />
      <path d="M4 11h16" />
      <path d="M8 5.5 9 7.5M12 5l.4 2.5M16 5.5 15 7.5" />
    </>
  ),
  cakeStack: (
    <>
      <rect x="4" y="6" width="10" height="6" rx="1.2" />
      <rect x="7" y="12.5" width="13" height="6" rx="1.2" />
      <path d="M6 9h6M10 15.5h7" />
    </>
  ),
  bigBar: (
    <>
      <rect x="3" y="9" width="18" height="7" rx="2" />
      <path d="M7 9v7M11 9v7M15 9v7" />
    </>
  ),
  shampoo: (
    <>
      <path d="M9.5 2.5h3.5V5H9.5z" />
      <path d="M8 6.5C8 5.7 8.7 5 9.5 5h3.5c.8 0 1.5.7 1.5 1.5V19a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V6.5Z" />
      <path d="M8 12h6.5" />
    </>
  ),
  herbal: (
    <>
      <path d="M12 21c0-5 2-8 6-9-1 5-3 8-6 9ZM12 21c0-5-2-8-6-9 1 5 3 8 6 9Z" />
      <path d="M12 21v-8" />
    </>
  ),
}

export default function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
