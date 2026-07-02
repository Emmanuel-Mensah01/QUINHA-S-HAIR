export const CONTACT = {
  brand: "Quinha's Hair Galaxy",
  tagline: "Beauty Becomes Universal",
  phonePrimary: "0557303555",
  phoneSecondary: "0507509467",
  whatsapp: "233557303555",
  email: "galaxy_q@yahoo.com",
  location: "Accra - Kokomlemle",
  instagram: "Quinha's Hair Galaxy",
  tiktok: "Quinha's Hair Galaxy",
}

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi Quinha's Hair Galaxy! I'd love to book an appointment.",
)}`

export type PriceTier = { label: string; price: string }
export type PriceGroup = {
  name: string
  note?: string
  tiers: PriceTier[]
}

export const PRICE_GROUPS: PriceGroup[] = [
  {
    name: "Knotless Braids",
    tiers: [
      { label: "Shoulder length", price: "GHS 80" },
      { label: "Back length", price: "GHS 130" },
      { label: "Waist length", price: "GHS 170" },
    ],
  },
  {
    name: "Goddess Braids",
    note: "Knotless",
    tiers: [
      { label: "Shoulder length", price: "GHS 100" },
      { label: "Back length", price: "GHS 150" },
      { label: "Waist length", price: "GHS 200" },
    ],
  },
  {
    name: "Watermelon Braids",
    note: "Knotless",
    tiers: [
      { label: "Shoulder length", price: "GHS 100" },
      { label: "Back length", price: "GHS 150" },
      { label: "Waist length", price: "GHS 200" },
    ],
  },
  {
    name: "Cornrows",
    note: "Natural — no extensions",
    tiers: [
      { label: "Small", price: "GHS 20" },
      { label: "Big", price: "GHS 10" },
    ],
  },
  {
    name: "Natural Twist",
    note: "Natural — no extensions",
    tiers: [
      { label: "With cornrows", price: "GHS 35" },
      { label: "Twist only", price: "GHS 45" },
      { label: "Micro twist", price: "GHS 80" },
    ],
  },
  {
    name: "Signature Styles",
    tiers: [
      { label: "Kinky Twist Mini", price: "GHS 100" },
      { label: "Normal Braids", price: "GHS 80" },
    ],
  },
]

export const SERVICES = [
  {
    title: "Knotless Braids",
    description:
      "Lightweight, natural-looking braids that are gentle on your edges and built to last for weeks.",
  },
  {
    title: "Goddess & Watermelon Braids",
    description:
      "Elegant knotless styles finished with soft curls for a stunning, head-turning look.",
  },
  {
    title: "Kinky Twist & Mini Twist",
    description:
      "Bouncy, textured twists that celebrate volume, movement and effortless beauty.",
  },
  {
    title: "Cornrows & Protective Styles",
    description:
      "Neat, intricate cornrow patterns and protective styles that keep your natural hair healthy.",
  },
  {
    title: "Natural Hairstyles",
    description:
      "Beautiful twists and styles without extensions — perfect for embracing your natural texture.",
  },
  {
    title: "Custom Braiding Styles",
    description:
      "Bring your inspiration and we'll craft a bespoke style designed just for you.",
  },
]

export const PRODUCTS = [
  {
    name: "Essential Hair Oil",
    detail: "50ml & 150ml",
    description:
      "A nourishing blend that strengthens strands and promotes healthy, fast hair growth.",
  },
  {
    name: "Essential Hair Butter",
    detail: "50g",
    description:
      "Rich, deeply moisturising butter that seals in hydration and adds a healthy sheen.",
  },
  {
    name: "Hair Moisturizer",
    detail: "Daily care",
    description:
      "Lightweight daily moisture to keep braids and natural hair soft, fresh and revived.",
  },
]

export const WHY_US = [
  "Neat and long-lasting hairstyles",
  "Quality hair care products",
  "Affordable, transparent pricing",
  "Friendly, professional service",
  "Healthy hair is always our priority",
  "Personalized recommendations for you",
]

// Each gallery item is either an "image" or a "video".
// - image items render with next/image (optimized, needs width/height)
// - video items render with a native <video> tag (autoplay, muted, looping — like a silent preview)
export type GalleryItem = {
  type: "image" | "video"
  src: string
  alt: string
  label: string
}

export const GALLERY: GalleryItem[] = [
  { type: "image", src: "/images/gallery-knotless.png", alt: "Long knotless braids styled elegantly", label: "Knotless Braids" },
  { type: "image", src: "/images/gallery-goddess.png", alt: "Goddess braids with curly ends", label: "Goddess Braids" },
  { type: "image", src: "/images/beauty.jpeg", alt: "Beautiful braided hairstyle on client", label: "Beauty Braids" },
  { type: "video", src: "/images/nice.mp4", alt: "Braided style in motion", label: "In Motion" },
  { type: "image", src: "/images/gallery-kinky-twist.png", alt: "Kinky twist mini hairstyle", label: "Kinky Twist Mini" },
  { type: "image", src: "/images/gallery-cornrows.png", alt: "Neat straight-back cornrows", label: "Cornrows" },
  { type: "image", src: "/images/cutie.jpeg", alt: "Cute braided style on client", label: "Cutie Braids" },
  { type: "image", src: "/images/nice-mum.jpeg", alt: "Client showing off her braided style", label: "Nice Mum" },
  { type: "image", src: "/images/gallery-natural-twist.png", alt: "Natural micro twist style", label: "Natural Twist" },
  { type: "image", src: "/images/hero.png", alt: "Client with long flowing braids", label: "Signature Braids" },
]

export const TESTIMONIALS = [
  {
    quote:
      "I loved my braids! They were neat, lightweight, and lasted for weeks. Best salon experience I've had.",
    name: "Ama K.",
  },
  {
    quote:
      "Excellent customer service and quality products. My hair has never felt healthier. Highly recommended!",
    name: "Efua D.",
  },
  {
    quote:
      "Quinha's Hair Galaxy never disappoints. Every visit I leave feeling beautiful and confident. I'll definitely be back!",
    name: "Nana Adjoa",
  },
]

export const FAQS = [
  {
    q: "Do I need to book before coming?",
    a: "Yes. Braiding services are by appointment so each client receives our full, dedicated attention.",
  },
  {
    q: "Do you provide the hair extensions?",
    a: "It depends on the client. For the fastest service, we recommend sending money for the extensions and your preferred colors so they can be prepped ahead of your appointment.",
  },
  {
    q: "How long does braiding take?",
    a: "It depends on your chosen style, but most appointments take approximately 4 hours.",
  },
  {
    q: "Do you sell hair products separately?",
    a: "Yes! Our hair care products are available to purchase even if you're not booking a braiding appointment.",
  },
]

export const HOURS = [
  { day: "Monday – Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "12:00 Noon – 8:00 PM" },
]