"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"

export default function Footer() {
  useEffect(() => {
    // Footer animation
    gsap.from(".footer-column", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    })

    // Scroll to top button
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    document.getElementById("scroll-to-top")?.addEventListener("click", scrollToTop)

    return () => {
      document.getElementById("scroll-to-top")?.removeEventListener("click", scrollToTop)
    }
  }, [])

  return (
    <footer className="bg-muted dark:bg-gray-900 text-foreground dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-column">
            <h3 className="text-lg font-bold mb-4">BuildTrade</h3>
            <p className="mb-4 text-muted-foreground dark:text-gray-400">
              Your trusted partner for all construction materials. Quality products, competitive prices, reliable
              delivery.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  AAC Blocks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Iron & Steel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Sand & Aggregates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Hardware Items
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Tiles & Flooring
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Tappees & Faucets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Bath Tubs
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-muted-foreground dark:text-gray-400">
              Subscribe to our newsletter to receive updates on new products and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background dark:bg-gray-800"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border dark:border-gray-800 mt-12 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BuildTrade. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <Button id="scroll-to-top" variant="outline" size="icon" className="rounded-full">
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

