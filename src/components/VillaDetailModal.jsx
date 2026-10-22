import React, { useState } from 'react';
import { X, Bed, Maximize2, Waves, Eye, ArrowRight, Check, Star, Shield, Coffee } from 'lucide-react';

export default function VillaDetailModal({ villa, isOpen, onClose, onBookVilla }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !villa) return null;

  const images = villa.gallery && villa.gallery.length > 0 ? villa.gallery : [villa.image];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="villa-detail-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} className="modal-close-floating" aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="villa-detail-grid">
          {/* Left: Gallery & Visuals */}
          <div className="villa-detail-gallery">
            <div className="detail-main-img-wrap">
              <img 
                src={images[activeImageIndex]} 
                alt={villa.name} 
                className="detail-main-img" 
              />
              <div className="detail-img-badge">
                <Star size={14} fill="#c5a880" color="#c5a880" />
                <span>{villa.rating} ({villa.reviewsCount} verified stays)</span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="detail-thumbnails-row">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img} alt={`Gallery view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Suite Narrative & Booking */}
          <div className="villa-detail-content">
            <div className="detail-header">
              <span className="subheading-badge">{villa.category} RESIDENCE</span>
              <h2 className="detail-title">{villa.name}</h2>
              <div className="gold-divider-left"></div>
              <div className="detail-price-line">
                <span className="detail-price-val">${villa.pricePerNight}</span>
                <span className="detail-price-sub">USD / night ({villa.priceINR})</span>
              </div>
            </div>

            <p className="detail-long-desc">
              {villa.description}
            </p>

            {/* Specs Bar */}
            <div className="detail-specs-bar glass-panel">
              <div className="detail-spec-item">
                <Maximize2 size={16} className="text-gold" />
                <div>
                  <div className="spec-label">Area</div>
                  <div className="spec-val">{villa.sqft}</div>
                </div>
              </div>
              <div className="detail-spec-item">
                <Bed size={16} className="text-gold" />
                <div>
                  <div className="spec-label">Bedding</div>
                  <div className="spec-val">{villa.bed}</div>
                </div>
              </div>
              <div className="detail-spec-item">
                <Waves size={16} className="text-gold" />
                <div>
                  <div className="spec-label">Feature</div>
                  <div className="spec-val">Heated Pool</div>
                </div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="detail-amenities-section">
              <h4 className="detail-amenities-title">Curated Inclusions & Amenities</h4>
              <div className="amenities-check-grid">
                {villa.amenities.map((item, i) => (
                  <div key={i} className="amenity-check-item">
                    <Check size={14} className="text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="detail-actions-footer">
              <button 
                onClick={() => {
                  onClose();
                  onBookVilla(villa);
                }} 
                className="btn-gold" 
                style={{ width: '100%', padding: '1rem' }}
              >
                <span>RESERVE THIS RESIDENCE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
