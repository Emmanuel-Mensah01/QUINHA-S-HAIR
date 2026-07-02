import { MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Products } from "@/components/products"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { WHATSAPP_LINK } from "@/lib/site-data"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Products />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="size-7" />
      </a>
    </>
  )
}
