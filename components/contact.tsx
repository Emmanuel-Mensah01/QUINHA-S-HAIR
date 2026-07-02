import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { CONTACT, HOURS, WHATSAPP_LINK } from "@/lib/site-data"

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Get in Touch
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
                Book Your Appointment Today
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-cream/80">
                Appointments are required for all braiding services. Reach out
                on WhatsApp, phone or Instagram &mdash; let your hair shine with
                confidence.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                    <MessageCircle className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream/60">
                      WhatsApp / Call
                    </span>
                    <span className="font-heading text-lg font-bold text-cream">
                      {CONTACT.phonePrimary} / {CONTACT.phoneSecondary}
                    </span>
                  </span>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-gold">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream/60">
                      Email
                    </span>
                    <span className="font-heading text-lg font-bold text-cream">
                      {CONTACT.email}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-cream/60">
                      Location
                    </span>
                    <span className="font-heading text-lg font-bold text-cream">
                      {CONTACT.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cream/15 bg-cream/5 p-7">
              <div className="flex items-center gap-3">
                <Clock className="size-6 text-gold" />
                <h3 className="font-heading text-xl font-bold text-cream">
                  Business Hours
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-cream/10 pb-4"
                  >
                    <span className="text-sm text-cream/80">{h.day}</span>
                    <span className="font-medium text-gold">{h.time}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-105"
              >
                <Phone className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
