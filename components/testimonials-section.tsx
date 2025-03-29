"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Construction Manager",
    company: "ABC Builders",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "BuildTrade has been our go-to supplier for construction materials for the past 5 years. Their quality products and reliable delivery have helped us complete numerous projects on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Architect",
    company: "Modern Designs",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I've recommended BuildTrade to all my clients. Their extensive range of high-quality materials and excellent customer service make them stand out in the industry.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Independent Contractor",
    company: "Brown Construction",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As an independent contractor, I value suppliers who provide quality materials at competitive prices. BuildTrade has consistently met my expectations and helped me deliver quality work to my clients.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Project Manager",
    company: "Davis & Associates",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at BuildTrade understands the importance of timely delivery in construction projects. Their reliable service has helped us avoid costly delays on multiple occasions.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "Interior Designer",
    company: "Elegant Interiors",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The quality of tiles and bath fixtures from BuildTrade is exceptional. My clients are always impressed with the final results, which has helped me grow my interior design business.",
    rating: 5,
  },
  {
    id: 6,
    name: "Jennifer Lee",
    role: "Home Builder",
    company: "Lee Custom Homes",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "BuildTrade's wide selection of construction materials has been invaluable for my custom home building business. Their expert advice has helped me choose the right materials for each project.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage,
    )
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".testimonials-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    const animateTestimonials = () => {
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
      )
    }

    animateTestimonials()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [currentIndex])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="testimonials-title text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, i) => (
              <Button
                key={i}
                variant={currentIndex / itemsPerPage === i ? "default" : "outline"}
                size="icon"
                className="w-8 h-8 rounded-full"
                onClick={() => setCurrentIndex(i * itemsPerPage)}
              >
                {i + 1}
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

