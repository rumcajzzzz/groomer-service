"use client"

import { useEffect, useRef } from "react"

const reviews = [
  {
    name: "Anna K.",
    dog: "Golden Retriever",
    text: "Max nigdy nie wyglądał lepiej! Obsługa na najwyższym poziomie.",
    rating: 5,
    avatar: "👩‍🦰",
  },
  {
    name: "Piotr N.",
    dog: "Yorkshire Terrier",
    text: "Bella uwielbia tu przychodzić. Atmosfera bardzo przyjazna.",
    rating: 5,
    avatar: "👨‍🦲",
  },
  {
    name: "Maria W.",
    dog: "Poodle",
    text: "Charlie wygląda jak z wystawy! Polecam każdemu.",
    rating: 5,
    avatar: "👩‍🦳",
  },
]

export default function Reviews() {
  const reviewsRef = useRef<HTMLElement>(null)

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={reviewsRef} className="reviews-section fade-in py-32 relative">
      <div className="reviews-bg-pattern"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="reviews-layout">
          <div className="reviews-header-side">
            <h2 className="vertical-title">
              <span className="vertical-text">O</span>
              <span className="vertical-text">P</span>
              <span className="vertical-text">I</span>
              <span className="vertical-text">N</span>
              <span className="vertical-text">I</span>
              <span className="vertical-text">E</span>
            </h2>
            <div className="reviews-subtitle">
              <p>
                Co mówią
                <br />
                nasi klienci
              </p>
            </div>
          </div>

          <div className="reviews-content-side">
            <div className="reviews-spiral">
              {reviews.map((review, index) => (
                <div key={index} className={`review-bubble bubble-${index + 1}`}>
                  <div className="bubble-content">
                    <div className="review-header">
                      <div className="avatar">{review.avatar}</div>
                      <div className="reviewer-info">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="dog-breed">{review.dog}</div>
                      </div>
                    </div>

                    <div className="stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="star">
                          ⭐
                        </span>
                      ))}
                    </div>

                    <p className="review-text">"{review.text}"</p>
                  </div>
                  <div className="bubble-tail"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
