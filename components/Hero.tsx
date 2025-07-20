"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="hero-section fade-in min-h-screen relative overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
        <div className="geometric-accent-1"></div>
        <div className="geometric-accent-2"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-12 sm:py-0">
        <div className="container mx-auto">
          <div className="flex justify-around flex-col-reverse md:flex-row items-center">
            
            {/* IMAGE – First on mobile */}
            <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9 relative">
              <div className="floating-image-container">
                <div className="image-frame">
                  <Image
                    src="/1.jpg"
                    alt="Elegancko wystrzyżony pies"
                    width={500}
                    height={600}
                    className="hero-image max-h-[40vh] sm:max-h-[50vh] w-auto object-contain mx-auto"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="floating-element-1">🐕</div>
                <div className="floating-element-2">✨</div>
                <div className="floating-element-3">🎨</div>
              </div>
            </div>

            {/* TEXT */}
            <div className="order-2 lg:order-1 lg:col-span-7 lg:col-start-2 text-center lg:text-left">
              <div className="diagonal-text-container">
                <h1 className="hero-title text-5xl sm:text-6xl font-bold leading-tight">
                  <span className="title-line-1 block">Psi</span>
                  <span className="title-line-2 block">Styl</span>
                  <span className="title-accent inline-block">✂️</span>
                </h1>
                <div className="hero-subtitle-container mt-4 w-full lg:w-[380px] mx-auto lg:mx-0">
                  <p className="hero-subtitle text-lg sm:text-xl text-center lg:text-left">
                    Gdzie każdy pies
                    <br />
                    <span className="highlight-text font-semibold">staje się gwiazdą</span>
                  </p>
                </div>


              </div>

              <div className="cta-container mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="btn-organic primary">
                  <Link href="#contact">Umów wizytę</Link>
                  <div className="btn-blob"></div>
                </button>
                <button className="btn-organic secondary my-4">
                  <span>Poznaj nas</span>
                  <div className="btn-blob"></div>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="curved-transition"></div>
    </section>
  )
}
