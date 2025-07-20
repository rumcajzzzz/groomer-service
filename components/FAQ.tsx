"use client"

import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "Jak długo trwa wizyta?",
    answer: "Czas wizyty zależy od wybranej usługi i rozmiaru psa. Standardowa wizyta trwa od 1 do 3 godzin.",
  },
  {
    question: "Czy muszę być obecny podczas zabiegu?",
    answer: "Nie jest to konieczne, ale jeśli Twój pies jest nerwowy, Twoja obecność może go uspokoić.",
  },
  {
    question: "Jakie szczepienia są wymagane?",
    answer: "Wymagamy aktualnych szczepień podstawowych oraz przeciwko wściekliźnie.",
  },
  {
    question: "Czy obsługujecie agresywne psy?",
    answer: "Tak, mamy doświadczenie z psami o różnych temperamentach i stosujemy specjalne techniki.",
  },
]

export default function FAQ() {
  const faqRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={faqRef} className="faq-section fade-in py-32 relative">
      <div className="faq-bg-shapes"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="faq-layout">
          <div className="faq-header-organic">
            <h2 className="faq-title">
              <span className="faq-title-main">Pytania</span>
              <span className="faq-title-sub">& Odpowiedzi</span>
            </h2>
            <div className="question-mark-deco">?</div>
          </div>

          <div className="faq-accordion-organic">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item-organic ${openIndex === index ? "active" : ""}`}>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="faq-trigger">
                  <span className="faq-question">{faq.question}</span>
                  <div className="faq-icon">
                    <div className={`icon-line horizontal ${openIndex === index ? "rotate" : ""}`}></div>
                    <div className={`icon-line vertical ${openIndex === index ? "hide" : ""}`}></div>
                  </div>
                </button>

                <div className={`faq-answer-container ${openIndex === index ? "expanded" : ""}`}>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
