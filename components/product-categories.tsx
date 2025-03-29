"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Product categories
const categories = [
  {
    id: "aac-blocks",
    name: "AAC Blocks",
    description: "Lightweight, eco-friendly building blocks with excellent thermal insulation.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "Standard AAC Block", price: "$2.50/piece" },
      { id: 2, name: "Jumbo AAC Block", price: "$4.75/piece" },
      { id: 3, name: "AAC Block Adhesive", price: "$15.00/bag" },
    ],
  },
  {
    id: "iron",
    name: "Iron & Steel",
    description: "High-quality structural steel, TMT bars, and iron products for construction.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "TMT Steel Bars (8mm)", price: "$85/quintal" },
      { id: 2, name: "MS Angle Iron", price: "$95/piece" },
      { id: 3, name: "GI Wire Mesh", price: "$25/sq.meter" },
    ],
  },
  {
    id: "sand",
    name: "Sand & Aggregates",
    description: "Various grades of sand and aggregates for concrete mixing and construction.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "River Sand", price: "$45/ton" },
      { id: 2, name: "M-Sand", price: "$40/ton" },
      { id: 3, name: "20mm Aggregate", price: "$35/ton" },
    ],
  },
  {
    id: "hardware",
    name: "Hardware Items",
    description: "Essential hardware tools and accessories for construction and maintenance.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "Masonry Tools Set", price: "$120/set" },
      { id: 2, name: "Construction Nails (1kg)", price: "$8/pack" },
      { id: 3, name: "Safety Helmet", price: "$15/piece" },
    ],
  },
  {
    id: "tiles",
    name: "Tiles & Flooring",
    description: "Premium tiles, marbles, and flooring solutions for beautiful interiors.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "Ceramic Floor Tiles", price: "$8/sq.ft" },
      { id: 2, name: "Vitrified Tiles", price: "$12/sq.ft" },
      { id: 3, name: "Marble Flooring", price: "$25/sq.ft" },
    ],
  },
  {
    id: "tappees",
    name: "Tappees & Faucets",
    description: "Modern and durable tappees and faucets for kitchens and bathrooms.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "Kitchen Sink Mixer", price: "$45/piece" },
      { id: 2, name: "Bathroom Faucet", price: "$35/piece" },
      { id: 3, name: "Shower System", price: "$120/set" },
    ],
  },
  {
    id: "bathtubs",
    name: "Bath Tubs",
    description: "Luxurious bath tubs and bathroom fixtures for modern homes.",
    image: "/placeholder.svg?height=300&width=400",
    products: [
      { id: 1, name: "Acrylic Bathtub", price: "$350/piece" },
      { id: 2, name: "Jacuzzi Bathtub", price: "$850/piece" },
      { id: 3, name: "Freestanding Bathtub", price: "$650/piece" },
    ],
  },
]

export default function ProductCategories() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState("aac-blocks")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = gsap.utils.toArray(".category-card")

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
        delay: i * 0.1,
      })
    })

    // Animation for tab change
    const animateTabChange = () => {
      gsap.fromTo(
        `.tab-content-${activeTab} .category-card`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
      )
    }

    animateTabChange()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [activeTab])

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive range of high-quality construction materials
          </p>
        </div>

        <Tabs defaultValue="aac-blocks" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-muted">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className={`tab-content-${category.id}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <Card key={product.id} className="category-card overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={`${product.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">
                        Premium quality construction material for your projects.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">{product.price}</span>
                        <Link
                          href={`/products/${category.id}/${product.id}`}
                          className="text-primary font-medium hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

