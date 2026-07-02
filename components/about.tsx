import Image from "next/image"
import { Heart, Sparkles, Globe2 } from "lucide-react"

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
            Hello, I&apos;m Laurinda Francesquinha Amorin
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              My passion for beauty goes beyond creating beautiful
              hairstyles &mdash; it&apos;s about helping people feel confident,
              empowered, and proud of who they are. I founded Quinha&apos;s Hair
              Galaxy with a simple vision: to make beauty accessible while
              delivering high-quality braiding services and hair care
              solutions that leave every client feeling their best.
            </p>
            <p>
              Every braid I create reflects my dedication to precision,
              creativity, and professionalism. As a young entrepreneur, I&apos;m
              committed to continuously learning and growing Quinha&apos;s Hair
              Galaxy into a trusted beauty brand across Ghana and,
              ultimately, Africa &mdash; including mentoring aspiring braiders
              along the way.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Heart, label: "Made with care & love" },
              { icon: Sparkles, label: "Precision in every braid" },
              { icon: Globe2, label: "Growing across Africa" },
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
            &ldquo;Where Beauty Becomes Universal.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}