import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Reviews from "@/components/Reviews"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
