import Hero from "@/components/hero"
import Features from "@/components/features"
import AboutUs from "@/components/about-us"
import Solutions from "@/components/solutions"
import ContactUs from "@/components/contact-us"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutUs />
        <Solutions />
        <Testimonials />
        <FAQ />
        <ContactUs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
