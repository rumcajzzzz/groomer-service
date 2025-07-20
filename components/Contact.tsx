"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={contactRef} className="contact-section fade-in py-32 relative">
      <div className="contact-bg-flow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="contact-asymmetric-layout">
          <div className="contact-info-side">
            <h2 className="contact-title-flow">
              <span className="flow-text-1">Skontaktuj</span>
              <span className="flow-text-2">się z nami</span>
            </h2>

            <div className="contact-items-organic">
              <Link href={"https://www.google.com/maps/place/Pieski/@52.4185218,15.4284161,1486m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4706f654350b7295:0x3e7212a6d20ebebb!8m2!3d52.4187996!4d15.4341653!16s%2Fm%2F05f300y?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"} target="_blank">
                <div className="contact-item-flow item-1">
                  <div className="contact-icon-organic">📍</div>
                  <div className="contact-details">
                    <h4>Lokalizacja</h4>
                    <p>
                      ul. Psich Przyjaciół 123
                      <br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"tel:+48123456789"}>
                <div className="contact-item-flow item-2">
                  <div className="contact-icon-organic">📞</div>
                  <div className="contact-details">
                    <h4>Telefon</h4>
                    <p>+48 123 456 789</p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:kontakt@psistyl.pl">
                <div className="contact-item-flow item-3">
                  <div className="contact-icon-organic">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>kontakt@psistyl.pl</p>
                  </div>
                </div>
              </Link>

              <div className="contact-item-flow item-4">
                <div className="contact-icon-organic">🕒</div>
                <div className="contact-details">
                  <h4>Godziny</h4>
                  <p>
                    Pon-Pt: 9:00-18:00
                    <br />
                    Sob: 9:00-16:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <div className="form-container-organic">
              <h3 className="form-title">Napisz do nas</h3>

              <form className="organic-form">
                <div className="form-group-flow">
                  <input type="text" placeholder="Twoje imię" className="input-organic" />
                  <input type="tel" placeholder="Telefon" className="input-organic" />
                </div>

                <input type="email" placeholder="Email" className="input-organic full" />
                <input type="text" placeholder="Rasa i imię psa" className="input-organic full" />

                <textarea placeholder="Opisz swoje potrzeby..." rows={4} className="textarea-organic"></textarea>

                <button type="submit" className="submit-btn-organic">
                  <span>Wyślij wiadomość</span>
                  <div className="btn-flow-effect"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
