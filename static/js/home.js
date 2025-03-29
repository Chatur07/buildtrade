document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current button and content
      this.classList.add("active")
      document.getElementById("tab-" + tabId).classList.add("active")

      // Animate the new content
      gsap.fromTo(
        "#tab-" + tabId + " .product-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" },
      )
    })
  })

  // Project slider functionality
  const projectSlides = document.querySelectorAll(".project-slide")
  const projectIndicators = document.querySelectorAll(".project-indicator")
  const projectPrev = document.getElementById("project-prev")
  const projectNext = document.getElementById("project-next")
  let currentProjectIndex = 0

  function showProject(index) {
    // Hide all slides
    projectSlides.forEach((slide) => {
      slide.classList.remove("active")
      gsap.set(slide, { opacity: 0 })
    })

    // Remove active class from all indicators
    projectIndicators.forEach((indicator) => {
      indicator.classList.remove("active")
    })

    // Show current slide
    projectSlides[index].classList.add("active")
    projectIndicators[index].classList.add("active")

    // Animate current slide
    gsap.to(projectSlides[index], { opacity: 1, duration: 0.5 })

    // Animate project content
    gsap.fromTo(
      projectSlides[index].querySelector(".project-info"),
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
    )

    gsap.fromTo(
      projectSlides[index].querySelector(".project-image"),
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    )
  }

  if (projectPrev && projectNext) {
    projectPrev.addEventListener("click", () => {
      currentProjectIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length
      showProject(currentProjectIndex)
    })

    projectNext.addEventListener("click", () => {
      currentProjectIndex = (currentProjectIndex + 1) % projectSlides.length
      showProject(currentProjectIndex)
    })

    projectIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentProjectIndex = index
        showProject(currentProjectIndex)
      })
    })
  }

  // Testimonial slider functionality
  const testimonialWrapper = document.getElementById("testimonials-wrapper")
  const testimonialPrev = document.getElementById("testimonial-prev")
  const testimonialNext = document.getElementById("testimonial-next")
  const paginationDots = document.querySelectorAll(".pagination-dot")
  let currentTestimonialIndex = 0

  function showTestimonial(index) {
    if (!testimonialWrapper) return

    const testimonialCards = testimonialWrapper.querySelectorAll(".testimonial-card")
    const cardWidth = testimonialCards[0].offsetWidth
    const gap = 16 // Gap between cards

    // Calculate the translation value
    let translateValue
    if (window.innerWidth >= 768) {
      // On tablets and larger, show 2 testimonials at once
      translateValue = -index * (cardWidth + gap)
    } else {
      // On mobile, show 1 testimonial at once
      translateValue = -index * (cardWidth + gap)
    }

    // Apply the translation
    gsap.to(testimonialWrapper, {
      x: translateValue,
      duration: 0.5,
      ease: "power2.out",
    })

    // Update pagination dots
    paginationDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  if (testimonialPrev && testimonialNext) {
    testimonialPrev.addEventListener("click", () => {
      const testimonialCards = testimonialWrapper.querySelectorAll(".testimonial-card")
      const maxIndex =
        window.innerWidth >= 768 ? Math.ceil(testimonialCards.length / 2) - 1 : testimonialCards.length - 1

      currentTestimonialIndex = (currentTestimonialIndex - 1 + maxIndex + 1) % (maxIndex + 1)
      showTestimonial(currentTestimonialIndex)
    })

    testimonialNext.addEventListener("click", () => {
      const testimonialCards = testimonialWrapper.querySelectorAll(".testimonial-card")
      const maxIndex =
        window.innerWidth >= 768 ? Math.ceil(testimonialCards.length / 2) - 1 : testimonialCards.length - 1

      currentTestimonialIndex = (currentTestimonialIndex + 1) % (maxIndex + 1)
      showTestimonial(currentTestimonialIndex)
    })

    paginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTestimonialIndex = index
        showTestimonial(currentTestimonialIndex)
      })
    })

    // Handle window resize
    window.addEventListener("resize", () => {
      showTestimonial(currentTestimonialIndex)
    })
  }

  // GSAP animations for home page
  if (typeof gsap !== "undefined") {
    // Hero section animations
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    })

    gsap.from(".hero-buttons .btn", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
    })

    gsap.from(".hero-image", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    })

    // Section title animations
    const sectionTitles = document.querySelectorAll(".section-title")
    sectionTitles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top bottom-=100",
        },
      })
    })

    // Product card animations
    const productCards = document.querySelectorAll(".product-card")
    productCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
        },
      })
    })

    // Offer card animations
    const offerCards = document.querySelectorAll(".offer-card")
    offerCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
        },
      })

      // Pulse animation for offer icons
      gsap.to(card.querySelector("i"), {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    })

    // About section animations
    gsap.from(".about-image", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom-=100",
      },
    })

    gsap.from(".about-text", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom-=100",
      },
    })

    gsap.from(".about-feature", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-features",
        start: "top bottom-=50",
      },
    })

    // Service card animations
    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
        },
      })

      // Hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        })

        gsap.to(card.querySelector(".service-icon"), {
          scale: 1.1,
          rotation: 5,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        })

        gsap.to(card.querySelector(".service-icon"), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
        })
      })
    })

    // CTA section animations
    gsap.from(".cta-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom-=100",
      },
    })

    gsap.from(".cta-text", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom-=100",
      },
    })

    gsap.from(".cta-buttons .btn", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top bottom-=100",
      },
    })
  }
})

