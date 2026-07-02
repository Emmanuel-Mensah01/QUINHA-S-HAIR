import { BadgeCheck } from "lucide-react"
import { WHY_US } from "@/lib/site-data"

export function WhyUs() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-secondary p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Beauty You Can Trust
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <BadgeCheck className="size-6 shrink-0 text-gold" />
                <span className="text-sm font-medium text-card-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
