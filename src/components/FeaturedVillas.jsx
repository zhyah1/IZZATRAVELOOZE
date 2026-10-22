import React, { useState } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Bed, Maximize2, Waves, Eye, ArrowRight, Star, Sparkles } from 'lucide-react';

export default function FeaturedVillas({ onOpenVillaDetail, onBookVilla }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'INR'

  const categories = ['All', 'Private Pool', 'Canopy', 'Ayurvedic Cottages'];

  const filteredVillas = activeFilter === 'All' 
    ? RESORT_DATA.villas 
    : RESORT_DATA.villas.filter(v => v.category === activeFilter);

  return (
    <section id="villas" className="section-container featured-villas-section">
      <div className="section-header-split">
        <div>
          <span className="subheading-badge">BESPOKE RESIDENCES</span>
          <h2 className="section-title">Featured Villas</h2>
        </div>
        <div className="section-header-right">
          <p className="section-tagline">
            Curated secluded suites and expansive cantilevered architecture designed for absolute privacy.
          </p>

          {/* Currency Switcher */}
          <div className="currency-pill">
            <span className="currency-label">Currency:</span>
            <button 
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </button>
            <button 
              className={`currency-btn ${currency === 'INR' ? 'active' : ''}`}
              onClick={() => setCurrency('INR')}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="villa-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`villa-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Villas Grid */}
      <div className="villas-grid">
        {filteredVillas.map((villa) => (
          <div key={villa.id} className="villa-card glass-panel">
            {/* Card Image Container with Hover Zoom & Badge */}
            <div className="villa-image-wrapper" onClick={() => onOpenVillaDetail(villa)}>
              <img 
                src={villa.image} 
                alt={villa.name} 
                className="villa-card-img" 
                loading="lazy"
              />
              <div className="villa-img-gradient"></div>

              <div className="villa-card-top-badges">
                <span className="villa-tag-badge">{villa.tag}</span>
                <span className="villa-rating-badge">
                  <Star size={13} fill="#c5a880" color="#c5a880" />
                  <span>{villa.rating}</span>
                </span>
              </div>

              <div className="villa-hover-preview">
                <Eye size={18} />
                <span>VIEW GALLERY & SUITE DETAILS</span>
              </div>
            </div>

            {/* Villa Card Info */}
            <div className="villa-card-content">
              <div className="villa-header-row">
                <h3 className="villa-title" onClick={() => onOpenVillaDetail(villa)}>
                  {villa.name}
                </h3>
                <div className="villa-price-box">
                  <span className="villa-price-amount">
                    {currency === 'USD' ? `$${villa.pricePerNight}` : villa.priceINR}
                  </span>
                  <span className="villa-price-unit">/ night</span>
                </div>
              </div>

              <p className="villa-summary">
                {villa.description}
              </p>

              {/* Villa Spec Badges */}
              <div className="villa-specs-grid">
                <div className="spec-item">
                  <Maximize2 size={14} className="spec-icon" />
                  <span>{villa.sqft}</span>
                </div>
                <div className="spec-item">
                  <Waves size={14} className="spec-icon" />
                  <span>{villa.category === 'Private Pool' ? 'Heated Plunge Pool' : 'Canopy Veranda'}</span>
                </div>
                <div className="spec-item">
                  <Bed size={14} className="spec-icon" />
                  <span>{villa.bed}</span>
                </div>
              </div>

              {/* Villa Card CTA Actions */}
              <div className="villa-actions-row">
                <button 
                  onClick={() => onOpenVillaDetail(villa)} 
                  className="btn-outline-gold villa-detail-btn"
                >
                  <span>EXPLORE SUITE</span>
                </button>
                <button 
                  onClick={() => onBookVilla(villa)} 
                  className="btn-gold villa-reserve-btn"
                >
                  <span>RESERVE NOW</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
