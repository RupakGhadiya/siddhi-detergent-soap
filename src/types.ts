// Shared types for the SIDDHI site.

export type Lang = 'en' | 'gu'

/** A string available in both supported languages. */
export interface Localized {
  en: string
  gu: string
}

export type ProductCategory = 'powder' | 'liquid' | 'cake' | 'care'

/** Which SVG illustration a product card renders (see Icon.tsx). */
export type ProductIcon =
  | 'powder'
  | 'powderBox'
  | 'machineLiquid'
  | 'dishLiquid'
  | 'cake'
  | 'cakeStack'
  | 'bigBar'
  | 'shampoo'
  | 'herbal'

export interface Product {
  id: string
  category: ProductCategory
  icon: ProductIcon
  /** Filename inside /public/images used as the card photo. */
  image: string
  accent: string
  accent2: string
  tag: Localized
  name: Localized
  subtitle: Localized
  desc: Localized
  features: Localized[]
  sizes: Localized
}

export interface CategoryDef extends Localized {
  id: 'all' | ProductCategory
}
