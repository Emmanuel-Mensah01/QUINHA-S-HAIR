import Image from "next/image"
import { Leaf, Check, Phone } from "lucide-react"
import { PRODUCTS, WHATSAPP_LINK } from "@/lib/site-data"

export function Products() {
  return (
    <section id="products" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40 lg:order-1">
          <Image
            src="/images/products.jpeg"
            alt="Quinha's Hair Galaxy essential hair oils and hair butter"
            width={1024}
            height={980}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            <Leaf className="size-4" />
            Made with Love & Nature
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
            Nourish Naturally, Glow Beautifully
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-cream/80">
            Our premium hair oils and hair butter are crafted to nourish,
            strengthen and promote healthy hair growth. Pure. Natural.
            Effective &mdash; available even if you&apos;re not booking a
            braiding appointment.
          </p>

          <div className="mt-8 space-y-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="flex gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-5"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-4" />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-heading text-lg font-bold text-cream">
                      {product.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-gold">
                      {product.detail}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-cream/75">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            <Phone className="size-4" />
            Order Products
          </a>
        </div>
      </div>
    </section>
  )
}
