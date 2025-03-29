// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem("theme") || "light"
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
  })

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")

    // Toggle hamburger to X
    const spans = this.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Mobile dropdown toggles
  const mobileDropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle")
  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault()
      const dropdownMenu = this.nextElementSibling
      dropdownMenu.classList.toggle("active")

      // Toggle dropdown icon
      if (dropdownMenu.classList.contains("active")) {
        this.style.fontWeight = "700"
        this.querySelector("::after").style.transform = "rotate(180deg)"
      } else {
        this.style.fontWeight = "500"
        this.querySelector("::after").style.transform = "rotate(0)"
      }
    })
  })

  // Scroll to top button
  const scrollToTopBtn = document.getElementById("scroll-to-top")
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // Show/hide scroll to top button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = "1"
      } else {
        scrollToTopBtn.style.opacity = "0"
      }
    })
  }

  // Header scroll effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      header.style.padding = "0.5rem 0"
      header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    } else {
      header.style.padding = "1rem 0"
      header.style.boxShadow = "none"
    }
  })

  // Initialize GSAP animations
  if (typeof gsap !== "undefined") {
    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Common animations for all pages
    gsap.from(".logo", {
      opacity: 0,
      x: -20,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    })

    gsap.from(".header-actions > *", {
      opacity: 0,
      x: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    })

    // Footer animations
    gsap.from(".footer-column", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom-=100",
      },
    })
  }
})

