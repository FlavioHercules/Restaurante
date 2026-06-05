import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { MenuSection } from "@/components/menu-section"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Reservations } from "@/components/reservations"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <MenuSection />
      <About />
      <Gallery />
      <Testimonials />
      <Reservations />
      <Contact />
      <Footer />
    </main>
  )
}
