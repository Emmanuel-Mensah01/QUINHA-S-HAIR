import Image from "next/image"
import { Camera, Music2, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/site-data"

const BADGES = [
  "Clean & Neat",
  "Professional Service",
  "Quality Guaranteed",
  "Customer Satisfaction",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-gold/50">
              <Image
                src="/images/logo.jpeg"
                alt="Quinha's Hair Galaxy logo"
                width={48}
                height={48}
                className="size-12 object-cover"
              />
            </span>
            <div className="text-left">
              <p className="font-heading text-xl font-bold text-cream">
                {CONTACT.brand}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                {CONTACT.tagline}
              </p>
            </div>
          </div>

          <p className="max-w-md text-pretty leading-relaxed text-cream/70">
            Creating beautiful hairstyles while promoting healthy hair care.
            Book your appointment today and let your hair shine with confidence.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Camera, label: "Instagram" },
              { icon: Music2, label: "TikTok" },
              { icon: MessageCircle, label: "WhatsApp Channel" },
            ].map((s) => (
              <span
                key={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-gold"
                aria-label={s.label}
              >
                <s.icon className="size-5" />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-y border-cream/10 py-6 sm:grid-cols-4">
          {BADGES.map((b) => (
            <p
              key={b}
              className="text-center text-xs font-medium uppercase tracking-wider text-cream/70"
            >
              {b}
            </p>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream/50">
          &copy; {new Date().getFullYear()} {CONTACT.brand}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
