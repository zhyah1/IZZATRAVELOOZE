import React, { useState, useEffect } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = RESORT_DATA.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const current = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Subtle decorative gold quote watermark */}
        <Quote size={80} className="testimonial-watermark" />

        {/* 5 Stars */}
        <div className="testimonial-stars-row">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="#c5a880" color="#c5a880" />
          ))}
        </div>

        {/* Quote Text */}
        <blockquote className="testimonial-quote">
          “{current.quote}”
        </blockquote>

        {/* Author Info */}
        <div className="testimonial-author-box">
          <h4 className="testimonial-author">{current.author}</h4>
          <p className="testimonial-title">{current.title}</p>
          <span className="testimonial-source-badge">{current.source}</span>
        </div>

        {/* Carousel Dots & Controls */}
        <div className="testimonial-controls">
          <button onClick={handlePrev} className="testimonial-arrow-btn" aria-label="Previous review">
            <ChevronLeft size={18} />
          </button>

          <div className="testimonial-dots">
            {reviews.map((_, idx) => (
              <button 
                key={idx}
                className={`dot-indicator ${currentIndex === idx ? 'dot-active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button onClick={handleNext} className="testimonial-arrow-btn" aria-label="Next review">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
