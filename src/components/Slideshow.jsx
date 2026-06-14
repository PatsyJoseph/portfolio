import React, { useState, useEffect, useRef } from 'react';
import slide1 from '../assets/self_illustration.png';
import slide2 from '../assets/self2.png';
import slide3 from '../assets/self3.png';
import slide4 from '../assets/self4.png';

const slides = [
  { src: slide1, alt: "Patrick Joseph Napud" },
  { src: slide2, alt: "A Communicator" },
  { src: slide3, alt: "Contributor" },
  { src: slide4, alt: "Champion" }
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slideshow-slides">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slideshow-slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="slideshow-image"
              width="500"
              height="500"
            />
            <div className="slideshow-caption">
              <span>{slide.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Chevrons */}
      <button
        onClick={prevSlide}
        className="slideshow-btn prev-btn"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onClick={nextSlide}
        className="slideshow-btn next-btn"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      {/* Indicator Dots */}
      <div className="slideshow-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
