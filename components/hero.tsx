"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-button",
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-image",
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6",
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Premium Building Materials for Your Projects
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mb-8">
              Your trusted partner for all construction materials. We provide high-quality products at competitive
              prices with reliable delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="hero-button" size="lg">
                Explore Products
              </Button>
              <Button className="hero-button" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="hero-image rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Construction materials"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

