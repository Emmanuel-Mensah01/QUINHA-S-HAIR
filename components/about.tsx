import Image from "next/image"
import { Heart, GraduationCap, Star } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 hidden size-24 rounded-tl-[2rem] border-l-2 border-t-2 border-gold sm:block" />
          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
            <Image
              src="/images/founder.jpeg"
              alt="Laurinda Francesquinha Amorin, founder of Quinha's Hair Galaxy"
              width={640}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-lg sm:right-6">
            <p className="font-heading text-lg font-bold text-gold">Laurinda</p>
            <p className="text-xs uppercase tracking-wider text-cream/70">
              Founder & Stylist
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Meet the Founder
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Hi, I&apos;m Laurinda Francesquinha Amorin
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a passionate entrepreneur with a love for beauty,
              creativity, and helping people feel confident through
              hairstyling. Quinha&apos;s Hair Galaxy was created to give clients
              quality braiding, excellent customer care, and trusted hair care
              products &mdash; all in one place.
            </p>
            <p>
              Alongside running my business, I have a background in Disability
              and Rehabilitation Studies and aspire to work with professionals
              in physiotherapy, speech therapy, and audiology, while continuing
              to grow my beauty brand.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Heart, label: "Made with care & love" },
              { icon: Star, label: "Attention to every detail" },
              { icon: GraduationCap, label: "Professional & trusted" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <item.icon className="size-6 text-accent" />
                <p className="mt-2 text-sm font-medium text-card-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-gold pl-5 font-heading text-lg italic text-foreground">
            &ldquo;To help every client leave feeling beautiful, confident, and
            valued.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
