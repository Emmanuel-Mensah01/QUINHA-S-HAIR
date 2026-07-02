import Image from "next/image"
import { Phone, Sparkles } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site-data"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            <Sparkles className="size-3.5" />
            Premium Styles. Beautiful You.
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Beautiful Braids.{" "}
            <span className="text-gold italic">Healthy Hair.</span> Confident
            You.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/80 lg:mx-0 lg:text-lg">
            At Quinha&apos;s Hair Galaxy, every hairstyle tells a story. We
            create neat, stylish and long-lasting braids while nourishing your
            natural hair with premium care products &mdash; all in one place.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105 sm:w-auto"
            >
              <Phone className="size-4" />
              Book Your Appointment
            </a>
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 sm:w-auto"
            >
              View Price List
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-cream/70 lg:justify-start">
            <div>
              <p className="font-heading text-2xl font-bold text-gold">500+</p>
              <p className="text-xs uppercase tracking-wider">Happy Clients</p>
            </div>
            <span className="h-8 w-px bg-cream/20" />
            <div>
              <p className="font-heading text-2xl font-bold text-gold">7+</p>
              <p className="text-xs uppercase tracking-wider">Braid Styles</p>
            </div>
            <span className="h-8 w-px bg-cream/20" />
            <div>
              <p className="font-heading text-2xl font-bold text-gold">Home</p>
              <p className="text-xs uppercase tracking-wider">Service Avail.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] border border-gold/40" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
            <Image
              src="/images/hero.png"
              alt="Client with beautiful long knotless braids"
              width={640}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
