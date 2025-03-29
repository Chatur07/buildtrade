"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    tl.from(".about-image", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ".about-content",
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .from(
        ".about-feature",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.6",
      )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="about-image relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About BuildTrade"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:w-1/2 about-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BuildTrade</h2>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience in the construction materials industry, BuildTrade has established itself
              as a trusted supplier for contractors, builders, and homeowners. We pride ourselves on offering premium
              quality products, competitive pricing, and exceptional customer service.
            </p>

            <div className="space-y-4 mb-8">
              <div className="about-feature flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    All our products undergo rigorous quality checks to ensure they meet industry standards.
                  </p>
                </div>
              </div>

              <div className="about-feature flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Timely Delivery</h3>
                  <p className="text-muted-foreground">
                    We understand the importance of deadlines in construction projects and ensure on-time delivery.
                  </p>
                </div>
              </div>

              <div className="about-feature flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Expert Consultation</h3>
                  <p className="text-muted-foreground">
                    Our team of experts provides guidance on selecting the right materials for your specific needs.
                  </p>
                </div>
              </div>

              <div className="about-feature flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Nationwide Distribution</h3>
                  <p className="text-muted-foreground">
                    With our extensive network, we can deliver materials to construction sites across the country.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

