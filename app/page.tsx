import Hero from "@/components/hero"
import ProductCategories from "@/components/product-categories"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FeaturedProducts from "@/components/featured-products"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SpecialOffers from "@/components/special-offers"
import ProjectShowcase from "@/components/project-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <SpecialOffers />
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

