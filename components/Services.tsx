"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    title: "Kąpiel & Relaks",
    description: "Aromatyczna kąpiel z masażem relaksacyjnym",
    price: "od 40 zł",
    image: "/3.jpg",
    accent: "🛁",
  },
  {
    title: "Stylizacja Premium",
    description: "Autorskie strzyżenie według najnowszych trendów",
    price: "od 80 zł",
    image: "/4.jpg",
    accent: "✂️",
  },
  {
    title: "Manicure & Pedicure",
    description: "Profesjonalna pielęgnacja pazurków",
    price: "od 25 zł",
    image: "/5.jpg",
    accent: "💅",
  },
  {
    title: "Spa Experience",
    description: "Kompletny pakiet relaksacyjny z aromaterapią",
    price: "od 120 zł",
    image: "/6.jpg",
    accent: "🌸",
  },
]

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null)

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={servicesRef} className="services-section fade-in py-32 relative">
      <div className="wavy-bg"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="services-header">
          <h2 className="curved-title">
            <span className="curved-text">Nasze</span>
            <span className="curved-text offset">Usługi</span>
          </h2>
          <div className="header-decoration">
            <div className="deco-circle"></div>
            <div className="deco-line"></div>
          </div>
        </div>

        <div className="services-mosaic">
          {services.map((service, index) => (
            <div key={index} className={`service-tile tile-${index + 1}`}>
              <div className="tile-content">
                <div className="tile-image-container">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="tile-image"
                  />
                  <div className="image-overlay-gradient"></div>
                  <div className="service-accent">{service.accent}</div>
                </div>

                <div className="tile-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-footer">
                    <span className="service-price">{service.price}</span>
                    <button className="select-btn">
                      <span>Wybierz</span>
                      <div className="btn-ripple"></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile-shadow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
