"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Luxury Apartment Complex",
    description: "Supplied premium construction materials for a 200-unit luxury apartment complex.",
    image: "/placeholder.svg?height=400&width=600",
    location: "New York, NY",
    materials: ["AAC Blocks", "TMT Steel", "Marble Flooring"],
  },
  {
    id: 2,
    title: "Modern Office Building",
    description: "Provided high-quality materials for a 15-story commercial office building.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Chicago, IL",
    materials: ["Glass Panels", "Steel Beams", "Ceramic Tiles"],
  },
  {
    id: 3,
    title: "Residential Housing Development",
    description: "Supplied materials for a 50-home residential development project.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Austin, TX",
    materials: ["AAC Blocks", "Sand", "Hardware Items"],
  },
  {
    id: 4,
    title: "Luxury Hotel Renovation",
    description: "Provided premium bath fixtures and tiles for a 5-star hotel renovation.",
    image: "/placeholder.svg?height=400&width=600",
    location: "Miami, FL",
    materials: ["Bath Tubs", "Tappees", "Marble Tiles"],
  },
]

export default function ProjectShowcase() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= projects.length ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    tl.from(".project-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
    }).from(
      ".project-subtitle",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
      },
      "-=0.6",
    )

    // Animation for project change
    const animateProjectChange = () => {
      gsap.fromTo(".project-content", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })

      gsap.fromTo(
        ".project-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      )
    }

    animateProjectChange()

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [currentIndex])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="project-title text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="project-subtitle text-muted-foreground max-w-2xl mx-auto">
            Explore some of the major construction projects we've supplied materials for
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="project-image relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]">
              <Image
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 project-content">
            <h3 className="text-2xl font-bold mb-3">{projects[currentIndex].title}</h3>
            <p className="text-muted-foreground mb-4">{projects[currentIndex].description}</p>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">Location:</span>
                <span>{projects[currentIndex].location}</span>
              </div>

              <div className="flex flex-col mb-2">
                <span className="font-semibold mb-1">Materials Supplied:</span>
                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].materials.map((material, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={prevProject}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button variant="outline" onClick={nextProject}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

