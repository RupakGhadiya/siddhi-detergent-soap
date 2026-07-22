// All SIDDHI products extracted from the official Vrajbhoomi Chemicals catalog.
// Each product carries bilingual (English / Gujarati) copy so the whole catalog
// switches language instantly. `accent`/`accent2` drive the card's colour theme;
// `icon` selects an SVG illustration from Icon.tsx.

import type { CategoryDef, Product } from '../types'

// Maps each product id to its photo filename in /public/images.
const IMAGES: Record<string, string> = {
  'washing-powder-bag': 'Washing Powder Bag.webp',
  'detergent-powder': 'Detergent Powder.webp',
  'washing-machine-liquid': 'Washing Machine Liquid.webp',
  'dishwash-liquid': 'Dishwash Liquid.webp',
  'herbal-detergent-cake': 'Herbal Detergent Cake.webp',
  'semi-detergent-cake': 'Semi Detergent Cake.webp',
  'detergent-cake-white-purple': 'Detergent Cake (White : Purple).webp',
  'detergent-cake-color': 'Detergent Cake 3colour.webp',
  'detergent-cake-white': 'Detergent Cake (White).webp',
  'big-bar-detergent-cake': 'Detergent Cake.webp',
  'prasiddhi-coconut-shampoo': 'Prasiddhi Shampoo.webp',
  'prasiddhi-amla-shampoo': 'Prasiddhi Shampoo.webp',
}

export const categories: CategoryDef[] = [
  { id: 'all', en: 'All Products', gu: 'બધા ઉત્પાદનો' },
  { id: 'powder', en: 'Powders', gu: 'પાવડર' },
  { id: 'liquid', en: 'Liquids', gu: 'લિક્વિડ' },
  { id: 'cake', en: 'Detergent Cakes', gu: 'ડિટર્જન્ટ કેક' },
  { id: 'care', en: 'Personal Care', gu: 'પર્સનલ કેર' },
]

const baseProducts: Omit<Product, 'image'>[] = [
  {
    id: 'washing-powder-bag',
    category: 'powder',
    icon: 'powder',
    accent: '#f6a821',
    accent2: '#e8620c',
    tag: { en: 'Best Seller', gu: 'બેસ્ટ સેલર' },
    name: { en: 'Siddhi Washing Powder', gu: 'સિદ્ધિ વોશિંગ પાવડર' },
    subtitle: { en: 'With the Power of Lemon', gu: 'લીંબુની તાકાત સાથે' },
    desc: {
      en: 'A powerful washing powder with a built-in whitening booster. Perfect for both top-load and front-load machines as well as hand wash.',
      gu: 'વ્હાઇટનિંગ બૂસ્ટર સાથેનો શક્તિશાળી વોશિંગ પાવડર. ટોપ-લોડ, ફ્રન્ટ-લોડ મશીન અને હાથ ધોવા બંને માટે યોગ્ય.',
    },
    features: [
      { en: 'Whitening Booster', gu: 'વ્હાઇટનિંગ બૂસ્ટર' },
      { en: 'Top & Front Loading', gu: 'ટોપ અને ફ્રન્ટ લોડિંગ' },
      { en: 'Power of Lemon', gu: 'લીંબુની તાકાત' },
    ],
    sizes: { en: 'Available in convenient carry bags', gu: 'સગવડભર્યા કેરી બેગમાં ઉપલબ્ધ' },
  },
  {
    id: 'detergent-powder',
    category: 'powder',
    icon: 'powderBox',
    accent: '#2196f3',
    accent2: '#0a4d9e',
    tag: { en: 'Quickwash', gu: 'ક્વિકવોશ' },
    name: { en: 'Siddhi Detergent Powder', gu: 'સિદ્ધિ ડિટર્જન્ટ પાવડર' },
    subtitle: { en: 'Quickwash Formula', gu: 'ક્વિકવોશ ફોર્મ્યુલા' },
    desc: {
      en: 'Advanced detergent powder that removes tough stains while caring for your colours. Delivers more brightness with a long-lasting high fragrance.',
      gu: 'એડવાન્સ્ડ ડિટર્જન્ટ પાવડર જે કપડાના રંગની સંભાળ રાખતાં જિદ્દી ડાઘ દૂર કરે છે. વધુ ચમક અને લાંબા સમય સુધી ટકતી સુગંધ આપે છે.',
    },
    features: [
      { en: 'Removes Stains', gu: 'ડાઘ દૂર કરે' },
      { en: 'Colour Care', gu: 'રંગની સંભાળ' },
      { en: 'More Brightness', gu: 'વધુ ચમક' },
      { en: 'High Fragrance', gu: 'ઉચ્ચ સુગંધ' },
    ],
    sizes: { en: 'Multiple pack sizes available', gu: 'વિવિધ પેક સાઇઝમાં ઉપલબ્ધ' },
  },
  {
    id: 'washing-machine-liquid',
    category: 'liquid',
    icon: 'machineLiquid',
    accent: '#29b6f6',
    accent2: '#0277bd',
    tag: { en: 'All-in-One', gu: 'ઓલ-ઇન-વન' },
    name: { en: 'Washing Machine Liquid', gu: 'વોશિંગ મશીન લિક્વિડ' },
    subtitle: { en: 'Cleans, Shines & Removes Stains in One Step', gu: 'એક જ સ્ટેપમાં સાફ, ચમક અને ડાઘ દૂર' },
    desc: {
      en: 'A premium liquid detergent that cleans, shines and removes stains in a single step. Keeps clothes fresh with a pleasant fragrance without cardio and phosphate.',
      gu: 'પ્રીમિયમ લિક્વિડ ડિટર્જન્ટ જે એક જ સ્ટેપમાં સાફ કરે, ચમકાવે અને ડાઘ દૂર કરે. કાર્ડિઓ અને ફોસ્ફેટ વગર સુખદ સુગંધ સાથે કપડાં તાજા રાખે.',
    },
    features: [
      { en: 'One-Step Clean', gu: 'વન-સ્ટેપ ક્લીન' },
      { en: 'Pleasant Fragrance', gu: 'સુખદ સુગંધ' },
      { en: 'Machine Safe', gu: 'મશીન સેફ' },
    ],
    sizes: { en: 'Available in 1 Litre & 5 Litre', gu: '૧ લિટર અને ૫ લિટરમાં ઉપલબ્ધ' },
  },
  {
    id: 'dishwash-liquid',
    category: 'liquid',
    icon: 'dishLiquid',
    accent: '#cddc39',
    accent2: '#8bc34a',
    tag: { en: '2X Active Power', gu: '૨X એક્ટિવ પાવર' },
    name: { en: 'Siddhi Dishwash Liquid', gu: 'સિદ્ધિ ડિશવોશ લિક્વિડ' },
    subtitle: { en: 'Clean & Shine · 2X More Active Power', gu: 'ક્લીન અને શાઇન · ૨X વધુ એક્ટિવ પાવર' },
    desc: {
      en: 'A concentrated dishwash liquid with 2X more active power that cuts through grease and grime, leaving your utensils sparkling clean and shiny.',
      gu: '૨X વધુ એક્ટિવ પાવર સાથેનું કોન્સન્ટ્રેટેડ ડિશવોશ લિક્વિડ જે તેલ અને ચીકાશ દૂર કરી વાસણોને ચમકદાર અને સાફ બનાવે છે.',
    },
    features: [
      { en: '2X Active Power', gu: '૨X એક્ટિવ પાવર' },
      { en: 'Cuts Grease', gu: 'ચીકાશ દૂર કરે' },
      { en: 'Sparkling Shine', gu: 'ચમકદાર શાઇન' },
    ],
    sizes: { en: 'Available in 500 ml & 5 Litre', gu: '૫૦૦ મિલી અને ૫ લિટરમાં ઉપલબ્ધ' },
  },
  {
    id: 'herbal-detergent-cake',
    category: 'cake',
    icon: 'cake',
    accent: '#ffb300',
    accent2: '#f57c00',
    tag: { en: '₹60 · 500g', gu: '₹૬૦ · ૫૦૦ગ્રામ' },
    name: { en: 'Herbal Detergent Cake', gu: 'હર્બલ ડિટર્જન્ટ કેક' },
    subtitle: { en: 'Herbal Care for Your Clothes', gu: 'તમારા કપડાં માટે હર્બલ સંભાળ' },
    desc: {
      en: 'A herbal detergent cake that is gentle on hands yet tough on dirt. Formulated for a rich lather and effective cleaning at an affordable price.',
      gu: 'હર્બલ ડિટર્જન્ટ કેક જે હાથ પર નરમ છતાં ડાઘ પર કઠોર છે. સમૃદ્ધ ફીણ અને અસરકારક સફાઈ માટે પરવડે તેવી કિંમતે તૈયાર.',
    },
    features: [
      { en: 'Herbal Formula', gu: 'હર્બલ ફોર્મ્યુલા' },
      { en: 'Rich Lather', gu: 'સમૃદ્ધ ફીણ' },
      { en: 'Gentle on Hands', gu: 'હાથ પર નરમ' },
    ],
    sizes: { en: 'Net Wt. 500 gm · MRP ₹60', gu: 'નેટ વજન ૫૦૦ ગ્રામ · MRP ₹૬૦' },
  },
  {
    id: 'semi-detergent-cake',
    category: 'cake',
    icon: 'cakeStack',
    accent: '#ef5350',
    accent2: '#c62828',
    tag: { en: '₹60 · 800g', gu: '₹૬૦ · ૮૦૦ગ્રામ' },
    name: { en: 'Semi Detergent Cake', gu: 'સેમી ડિટર્જન્ટ કેક' },
    subtitle: { en: 'Extra Brightness', gu: 'એક્સ્ટ્રા બ્રાઇટનેસ' },
    desc: {
      en: 'A value-packed semi detergent cake delivering extra brightness with every wash. Bigger size, superb cleaning and long-lasting performance.',
      gu: 'દરેક ધોવા સાથે એક્સ્ટ્રા બ્રાઇટનેસ આપતી વેલ્યુ-પેક્ડ સેમી ડિટર્જન્ટ કેક. મોટી સાઇઝ, ઉત્તમ સફાઈ અને લાંબા સમય સુધીની કામગીરી.',
    },
    features: [
      { en: 'Extra Brightness', gu: 'એક્સ્ટ્રા બ્રાઇટનેસ' },
      { en: 'Bigger 800g', gu: 'મોટી ૮૦૦ગ્રામ' },
      { en: 'Value Pack', gu: 'વેલ્યુ પેક' },
    ],
    sizes: { en: 'Net Wt. 800 gm · MRP ₹60', gu: 'નેટ વજન ૮૦૦ ગ્રામ · MRP ₹૬૦' },
  },
  {
    id: 'detergent-cake-white-purple',
    category: 'cake',
    icon: 'cakeStack',
    accent: '#7e57c2',
    accent2: '#4527a0',
    tag: { en: 'White / Purple', gu: 'સફેદ / જાંબલી' },
    name: { en: 'Detergent Cake (White / Purple)', gu: 'ડિટર્જન્ટ કેક (સફેદ / જાંબલી)' },
    subtitle: { en: 'Strong Cleaning Bars', gu: 'મજબૂત સફાઈ બાર' },
    desc: {
      en: 'Classic detergent cakes in white and purple that scrub off tough dirt and stains effortlessly, giving your laundry a bright, fresh finish.',
      gu: 'સફેદ અને જાંબલી રંગની ક્લાસિક ડિટર્જન્ટ કેક જે જિદ્દી ડાઘ સરળતાથી દૂર કરી કપડાંને ઉજળા અને તાજા બનાવે છે.',
    },
    features: [
      { en: 'Tough on Stains', gu: 'ડાઘ પર કઠોર' },
      { en: 'Twin Colours', gu: 'બે રંગ' },
      { en: 'Long Lasting', gu: 'લાંબા સમય સુધી' },
    ],
    sizes: { en: 'Economy multi-bar packs', gu: 'ઇકોનોમી મલ્ટી-બાર પેક' },
  },
  {
    id: 'detergent-cake-color',
    category: 'cake',
    icon: 'bigBar',
    accent: '#26c6da',
    accent2: '#00838f',
    tag: { en: 'Multi-Colour', gu: 'મલ્ટી-કલર' },
    name: { en: 'Detergent Cake', gu: 'ડિટર્જન્ટ કેક' },
    subtitle: { en: 'Blue · Yellow · Green Bars', gu: 'વાદળી · પીળી · લીલી બાર' },
    desc: {
      en: 'Everyday detergent cakes available in vibrant blue, yellow and green. Trusted quality for a spotless wash, every single day.',
      gu: 'રોજિંદા ઉપયોગ માટે વાદળી, પીળી અને લીલી રંગમાં ઉપલબ્ધ ડિટર્જન્ટ કેક. દરરોજ સ્વચ્છ ધોવા માટે ભરોસાપાત્ર ગુણવત્તા.',
    },
    features: [
      { en: 'Everyday Use', gu: 'રોજિંદો ઉપયોગ' },
      { en: 'Vibrant Colours', gu: 'આકર્ષક રંગ' },
      { en: 'Trusted Quality', gu: 'ભરોસાપાત્ર ગુણવત્તા' },
    ],
    sizes: { en: 'Available in assorted colours', gu: 'વિવિધ રંગોમાં ઉપલબ્ધ' },
  },
  {
    id: 'detergent-cake-white',
    category: 'cake',
    icon: 'cake',
    accent: '#ffca28',
    accent2: '#ff8f00',
    tag: { en: '1.5 KG', gu: '૧.૫ કિલો' },
    name: { en: 'Detergent Cake (White)', gu: 'ડિટર્જન્ટ કેક (સફેદ)' },
    subtitle: { en: 'Family Value Pack', gu: 'ફેમિલી વેલ્યુ પેક' },
    desc: {
      en: 'A generous 1.5 kg pack of white detergent cakes for families. Superb dirt removal and brightness that lasts wash after wash.',
      gu: 'પરિવારો માટે સફેદ ડિટર્જન્ટ કેકનું ૧.૫ કિલોનું મોટું પેક. ઉત્તમ ડાઘ સફાઈ અને દરેક ધોવે ટકતી ચમક.',
    },
    features: [
      { en: 'Big 1.5 KG Pack', gu: 'મોટું ૧.૫ કિલો પેક' },
      { en: 'Family Size', gu: 'ફેમિલી સાઇઝ' },
      { en: 'Superb Cleaning', gu: 'ઉત્તમ સફાઈ' },
    ],
    sizes: { en: 'Net Wt. 1.5 KG', gu: 'નેટ વજન ૧.૫ કિલો' },
  },
  {
    id: 'big-bar-detergent-cake',
    category: 'cake',
    icon: 'bigBar',
    accent: '#ec407a',
    accent2: '#ad1457',
    tag: { en: 'Big Bar · ₹12', gu: 'બિગ બાર · ₹૧૨' },
    name: { en: 'Big Bar Detergent Cake', gu: 'બિગ બાર ડિટર્જન્ટ કેક' },
    subtitle: { en: 'Extra Brightness at Just ₹12', gu: 'માત્ર ₹૧૨ માં એક્સ્ટ્રા બ્રાઇટનેસ' },
    desc: {
      en: 'A big value bar that delivers extra brightness at an unbeatable price of just ₹12. Maximum cleaning power for every household.',
      gu: 'માત્ર ₹૧૨ ની અજોડ કિંમતે એક્સ્ટ્રા બ્રાઇટનેસ આપતી બિગ વેલ્યુ બાર. દરેક ઘર માટે મહત્તમ સફાઈ શક્તિ.',
    },
    features: [
      { en: 'Only ₹12', gu: 'માત્ર ₹૧૨' },
      { en: 'Big Bar', gu: 'બિગ બાર' },
      { en: 'Extra Brightness', gu: 'એક્સ્ટ્રા બ્રાઇટનેસ' },
    ],
    sizes: { en: 'Big Bar · MRP ₹12', gu: 'બિગ બાર · MRP ₹૧૨' },
  },
  {
    id: 'prasiddhi-coconut-shampoo',
    category: 'care',
    icon: 'shampoo',
    accent: '#8d6e63',
    accent2: '#4e342e',
    tag: { en: 'Herbal', gu: 'હર્બલ' },
    name: { en: 'Prasiddhi Coconut Herbal Shampoo', gu: 'પ્રસિદ્ધિ કોકોનટ હર્બલ શેમ્પૂ' },
    subtitle: { en: 'Shampoo + Conditioner', gu: 'શેમ્પૂ + કંડિશનર' },
    desc: {
      en: 'A herbal coconut shampoo with built-in conditioner for long, strong, shiny and black hair. The purity of Saurashtra in every wash.',
      gu: 'લાંબા, મજબૂત, ચમકદાર અને કાળા વાળ માટે કંડિશનર સાથેનું હર્બલ કોકોનટ શેમ્પૂ. દરેક વોશમાં સૌરાષ્ટ્રની શુદ્ધતા.',
    },
    features: [
      { en: 'Shampoo + Conditioner', gu: 'શેમ્પૂ + કંડિશનર' },
      { en: 'Long & Strong Hair', gu: 'લાંબા અને મજબૂત વાળ' },
      { en: 'Shiny & Black', gu: 'ચમકદાર અને કાળા' },
    ],
    sizes: { en: 'Herbal coconut formula', gu: 'હર્બલ કોકોનટ ફોર્મ્યુલા' },
  },
  {
    id: 'prasiddhi-amla-shampoo',
    category: 'care',
    icon: 'herbal',
    accent: '#66bb6a',
    accent2: '#2e7d32',
    tag: { en: 'Shikakai + Amla', gu: 'શિકાકાઈ + આમળા' },
    name: { en: 'Prasiddhi Herbal Shampoo', gu: 'પ્રસિદ્ધિ હર્બલ શેમ્પૂ' },
    subtitle: { en: 'Shampoo + Conditioner + Amla', gu: 'શેમ્પૂ + કંડિશનર + આમળા' },
    desc: {
      en: 'An ayurvedic-inspired herbal shampoo enriched with shikakai and amla. Nourishes the scalp and strengthens hair, naturally.',
      gu: 'શિકાકાઈ અને આમળાથી સમૃદ્ધ આયુર્વેદ-પ્રેરિત હર્બલ શેમ્પૂ. કુદરતી રીતે માથાની ત્વચાને પોષણ આપી વાળ મજબૂત કરે છે.',
    },
    features: [
      { en: 'Shikakai + Amla', gu: 'શિકાકાઈ + આમળા' },
      { en: 'Nourishes Scalp', gu: 'સ્કૅલ્પ પોષણ' },
      { en: 'Natural Care', gu: 'કુદરતી સંભાળ' },
    ],
    sizes: { en: 'Herbal ayurvedic formula', gu: 'હર્બલ આયુર્વેદિક ફોર્મ્યુલા' },
  },
]

// Attach each product's photo filename by id.
export const products: Product[] = baseProducts.map((p) => ({
  ...p,
  image: IMAGES[p.id],
}))
