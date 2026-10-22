import React from 'react';
import { Sparkles, Compass, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenBooking, onExploreVillas }) {
  return (
    <section id="home" className="hero-section">
      {/* Background Image with Ambient Zoom Effect & Gradient Overlay */}
      <div className="hero-background-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=88" 
          alt="IZZA Travelooze Secluded Luxury Resort in Rainforest Mist" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
        <div className="hero-mist-overlay"></div>
      </div>

      {/* Hero Central Content */}
      <div className="hero-content-container">
        <div className="hero-badge-pill">
          <span className="badge-dot"></span>
          <span className="badge-text">WESTERN GHATS • RAINFOREST HIGHLANDS</span>
        </div>

        <h1 className="hero-title">
          TIMELESS<br />
          <span className="hero-title-italic">SECLUSION</span>
        </h1>

        <p className="hero-subtitle">
          Curated luxury retreats deep in the mist of primary highland forests. Where primeval rainforest whispers serenity and architectural solitude awaits.
        </p>

        <div className="hero-cta-group">
          <button onClick={onOpenBooking} className="btn-gold hero-primary-btn">
            <span>RESERVE SANCTUARY</span>
          </button>
          <a href="#villas" className="btn-outline-gold hero-secondary-btn">
            <span>EXPLORE VILLAS</span>
          </a>
        </div>
      </div>

      {/* Hero Bottom Floating Scroll Indicator */}
      <a href="#booking-widget" className="hero-scroll-indicator" aria-label="Scroll down to availability">
        <span className="scroll-text">DISCOVER SANCTUARY</span>
        <ChevronDown size={18} className="scroll-arrow" />
      </a>
    </section>
  );
}
