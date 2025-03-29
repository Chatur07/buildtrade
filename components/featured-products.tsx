"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Premium AAC Blocks",
    category: "AAC Blocks",
    price: "$120/m³",
    image: "/placeholder.svg?height=300&width=400",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "TMT Steel Bars",
    category: "Iron",
    price: "$85/quintal",
    image: "/placeholder.svg?height=300&width=400",
    badge: "New",
  },
  {
    id: 3,
    name: "River Sand",
    category: "Sand",
    price: "$45/ton",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    name: "Ceramic Floor Tiles",
    category: "Tiles",
    price: "$8/sq.ft",
    image: "/placeholder.svg?height=300&width=400",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Luxury Bathtub",
    category: "Bath Tubs",
    price: "$450/piece",
    image: "/placeholder.svg?height=300&width=400",
    badge: "Premium",
  },
  {
    id: 6,
    name: "Modern Faucet Set",
    category: "Tappees",
    price: "$75/set",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    name: "Power Tools Kit",
    category: "Hardware",
    price: "$220/kit",
    image: "/placeholder.svg?height=300&width=400",
    badge: "Limited",
  },
  {
    id: 8,
    name: "Marble Flooring",
    category: "Tiles",
    price: "$25/sq.ft",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedProducts() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    gsap.from(".product-card", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".product-grid",
        start: "top bottom-=50",
      },
    })

    // Add hover animations
    const cards = document.querySelectorAll(".product-card")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".card-button"), {
          y: 0,
          opacity: 1,
          duration: 0.3,
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card.querySelector(".card-button"), {
          y: 20,
          opacity: 0,
          duration: 0.3,
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular construction materials chosen by professionals
          </p>
        </div>

        <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="product-card overflow-hidden hover:shadow-lg transition-shadow relative group"
            >
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && <Badge className="absolute top-2 right-2 bg-primary">{product.badge}</Badge>}
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{product.price}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    View Details
                  </Button>
                </div>
                <Button className="card-button w-full mt-4 opacity-0 translate-y-5" size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

