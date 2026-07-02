import { Home, Phone } from "lucide-react"
import { PRICE_GROUPS, WHATSAPP_LINK } from "@/lib/site-data"

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Price List
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Premium styles at affordable prices. Neat &bull; Stylish &bull; Long
            Lasting.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICE_GROUPS.map((group) => (
            <div
              key={group.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="font-heading text-lg font-bold text-primary-foreground">
                  {group.name}
                </h3>
                {group.note && (
                  <p className="text-xs uppercase tracking-wider text-gold">
                    {group.note}
                  </p>
                )}
              </div>
              <ul className="flex-1 divide-y divide-border px-6">
                {group.tiers.map((tier) => (
                  <li
                    key={tier.label}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-sm text-muted-foreground">
                      {tier.label}
                    </span>
                    <span className="font-heading text-lg font-bold text-primary">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-gold/40 bg-secondary p-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Home className="size-6" />
            </span>
            <div>
              <p className="font-heading text-lg font-bold text-foreground">
                Home Service Available
              </p>
              <p className="text-sm text-muted-foreground">
                At an extra cost from GHS 20+, depending on your location.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
          >
            <Phone className="size-4" />
            Book This Style
          </a>
        </div>
      </div>
    </section>
  )
}
