"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const aboutRef = useRef<HTMLElement>(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={aboutRef} className="about-section fade-in py-32 relative">
      <div className="diagonal-bg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="asymmetric-grid">
          {/* Content side */}
          <div className="content-side">
            <div className="section-header-organic">
              <h2 className="organic-title">
                <span className="title-part-1">O</span>
                <span className="title-part-2">nas</span>
              </h2>
              <div className="title-decoration"></div>
            </div>

            <div className="content-flow">
              <p className="flowing-text primary">
                PsiStyl to nie tylko salon - to miejsce, gdzie magia spotyka się z profesjonalizmem. Każdy pies opuszcza
                nas jako prawdziwa gwiazda.
              </p>

              <div className="stats-organic">
                <div className="stat-bubble stat-1">
                  <div className="stat-number"><div className="odometer" data-value="500">0</div>+</div>
                  <div className="stat-label">
                    Szczęśliwych
                    <br />
                    psów
                  </div>
                </div>
                <div className="stat-bubble stat-2">
                  <div className="stat-number"><div className="odometer" data-value="5">0</div></div>
                  <div className="stat-label">
                    Lat
                    <br />
                    doświadczenia
                  </div>
                </div>
                <div className="stat-bubble stat-3">
                  <div className="stat-number"><div className="odometer" data-value="100">0</div>%</div>
                  <div className="stat-label">Zadowolenia</div>
                </div>
              </div>

              <p className="flowing-text secondary">
                Nasze podejście łączy tradycyjne techniki z nowoczesnymi trendami. Używamy wyłącznie produktów premium,
                bezpiecznych dla Twojego pupila.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="image-side">
            <div className="tilted-image-container">
              <div className="image-stack">
                <Image
                  src="/2.jpg"
                  alt="Profesjonalny groomer"
                  width={350}
                  height={400}
                  className="stacked-image main"
                />
                <div className="image-accent-shape"></div>
              </div>
              <div className="floating-badge">
                <span>
                  Certyfikowani
                  <br />
                  specjaliści
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
