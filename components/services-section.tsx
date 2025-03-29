"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Headset, Calculator, PenToolIcon as Tools, Shield } from "lucide-react"

const services = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Delivery Services",
    description:
      "We offer reliable and timely delivery of construction materials to your project site, ensuring you never face delays.",
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "Material Packaging",
    description:
      "Our products are properly packaged to ensure they reach you in perfect condition, ready for immediate use.",
  },
  {
    icon: <Headset className="h-10 w-10 text-primary" />,
    title: "Customer Support",
    description:
      "Our dedicated customer support team is available to assist you with any queries or concerns regarding your orders.",
  },
  {
    icon: <Calculator className="h-10 w-10 text-primary" />,
    title: "Material Estimation",
    description:
      "We provide accurate material estimation services to help you determine the exact quantities needed for your project.",
  },
  {
    icon: <Tools className="h-10 w-10 text-primary" />,
    title: "Installation Support",
    description:
      "Our team can connect you with certified professionals for proper installation of specialized materials.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Quality Guarantee",
    description:
      "All our products come with a quality guarantee, ensuring peace of mind for your construction projects.",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".services-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top bottom-=50",
      },
    })

    // Add hover animations
    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        })
        gsap.to(card.querySelector(".service-icon"), {
          scale: 1.1,
          rotation: 5,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        })
        gsap.to(card.querySelector(".service-icon"), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="services-title text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a range of services to make your construction experience seamless
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 service-icon">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

