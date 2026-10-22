import React from 'react';
import { MapPin, Phone, Mail, Shield, Trees, Compass } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export default function SanctuaryStory({ onOpenBooking }) {
  return (
    <section id="sanctuary-story" className="section-container story-section">
      <div className="story-card glass-panel">
        <div className="story-grid">
          {/* Left: Sanctuary Narrative */}
          <div className="story-content">
            <span className="subheading-badge">DESTINATION SANCTUARY</span>
            <h2 className="section-title">The Rainforest Mist & Western Ghats</h2>
            <div className="gold-divider-left"></div>
            
            <p className="story-p">
              Nestled in the pristine highlands of the <strong>Western Ghats rainforest</strong>, surrounded by emerald valleys and living streams, IZZA TRAVELOOZE was envisioned as a timeless refuge from the noise of the world.
            </p>

            <div className="story-features-list">
              <div className="story-feat-item">
                <Trees size={18} className="text-gold" />
                <div>
                  <h4>Primary Rainforest Canopy</h4>
                  <p>Surrounded by protected biosphere reserves and century-old teak and cardamom groves.</p>
                </div>
              </div>

              <div className="story-feat-item">
                <Compass size={18} className="text-gold" />
                <div>
                  <h4>Secluded Private Valley Estates</h4>
                  <p>Seamlessly interconnected private grounds offering ultimate architectural solitude and tranquility.</p>
                </div>
              </div>

              <div className="story-feat-item">
                <Phone size={18} className="text-gold" />
                <div>
                  <h4>Direct Estate Concierge: {RESORT_DATA.brand.displayPhone}</h4>
                  <p>Immediate 24/7 personalized itinerary coordination and luxury estate transfers.</p>
                </div>
              </div>
            </div>

            <div className="story-cta-row">
              <button onClick={onOpenBooking} className="btn-gold">
                <span>INQUIRE ABOUT RETREATS</span>
              </button>
            </div>
          </div>

          {/* Right: Visual Contact & QR Banner from user's image */}
          <div className="story-media-card">
            <div className="story-img-box">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
                alt="Misty Mountain Rainforest Valley" 
                className="story-scenery-img"
              />
              <div className="story-img-glass-badge">
                <MapPin size={14} className="text-gold" />
                <span>Primary Rainforest Highlands</span>
              </div>
            </div>

            {/* Scanned Official QR / Contact Card */}
            <div className="contact-qr-showcase glass-panel">
              <div className="qr-badge-top">
                <img src="/logo.jpg" alt="Logo" className="mini-logo" />
                <div>
                  <div className="qr-title-brand">IZZA TRAVELOOZE</div>
                  <div className="qr-sub-brand">Instagram & Direct Concierge</div>
                </div>
              </div>

              <div className="qr-img-wrap">
                <img 
                  src="/contact-info.png" 
                  alt="Official Instagram QR and Contact Card" 
                  className="contact-card-img" 
                />
              </div>

              <div className="qr-details-strip">
                <div className="qr-detail-cell">
                  <Phone size={13} className="text-gold" />
                  <span>{RESORT_DATA.brand.displayPhone}</span>
                </div>
                <div className="qr-detail-cell">
                  <Mail size={13} className="text-gold" />
                  <span>{RESORT_DATA.brand.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
