"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Percent, TrendingDown } from "lucide-react"

export default function SpecialOffers() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    tl.from(".offers-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(
        ".offers-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.6",
      )
      .from(
        ".offer-card",
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.4",
      )

    // Pulsing animation for limited time offers
    gsap.to(".pulse-icon", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="offers-title text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="offers-subtitle text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our limited-time deals and discounts on premium construction materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="offer-card overflow-hidden border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-primary mr-3 pulse-icon" />
                <h3 className="text-xl font-bold">Limited Time Offer</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get 15% off on all AAC blocks and cement purchases. Valid until the end of the month.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-primary">15% OFF</p>
                <p className="text-sm">Use code: BUILD15</p>
              </div>
              <Button className="w-full">Claim Offer</Button>
            </CardContent>
          </Card>

          <Card className="offer-card overflow-hidden border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Percent className="h-8 w-8 text-primary mr-3 pulse-icon" />
                <h3 className="text-xl font-bold">Bulk Purchase Discount</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Save up to 20% when you purchase construction materials in bulk quantities.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-primary">SAVE 20%</p>
                <p className="text-sm">Minimum order: $1000</p>
              </div>
              <Button className="w-full">Get Quote</Button>
            </CardContent>
          </Card>

          <Card className="offer-card overflow-hidden border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <TrendingDown className="h-8 w-8 text-primary mr-3 pulse-icon" />
                <h3 className="text-xl font-bold">Clearance Sale</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Up to 30% off on selected tiles, bath tubs, and hardware items. While stocks last.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mb-4">
                <p className="text-2xl font-bold text-primary">UP TO 30% OFF</p>
                <p className="text-sm">Limited stock available</p>
              </div>
              <Button className="w-full">Shop Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

