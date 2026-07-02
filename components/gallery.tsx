import Image from "next/image"
import { GALLERY } from "@/lib/site-data"

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Our Gallery
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Clients We&apos;ve Braided For
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A glimpse of the beautiful, long-lasting styles our clients love.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl shadow-md ${
                i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {item.type === "video" ? (
                // Silent looping preview — same visual treatment as the images.
                // muted + playsInline are required for autoplay to work on mobile Safari/Chrome.
                <video
                  src={item.src}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={640}
                  height={i === 0 ? 900 : 640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-5 font-heading text-lg font-bold text-cream">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}