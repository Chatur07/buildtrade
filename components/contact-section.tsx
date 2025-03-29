"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".contact-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })

    gsap.from(".contact-info", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top bottom-=50",
      },
    })

    gsap.from(".contact-form", {
      opacity: 0,
      x: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top bottom-=50",
      },
    })

    // Add input focus animations
    const inputs = document.querySelectorAll(".animated-input")
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        gsap.to(input, {
          scale: 1.02,
          boxShadow: "0 0 0 2px rgba(var(--primary), 0.3)",
          duration: 0.3,
        })
      })

      input.addEventListener("blur", () => {
        gsap.to(input, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="contact-title text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need a quote? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="contact-info space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground">123 Construction Avenue, Building District, City, 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-muted-foreground">info@buildtrade.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Warehouse Locations</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Main Warehouse</h4>
                  <p className="text-muted-foreground">456 Industrial Park, Warehouse District, City, 12345</p>
                </div>
                <div>
                  <h4 className="font-medium">North Distribution Center</h4>
                  <p className="text-muted-foreground">789 North Highway, Industrial Zone, City, 67890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="animated-input" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="animated-input" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" className="animated-input" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." rows={5} className="animated-input" />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

