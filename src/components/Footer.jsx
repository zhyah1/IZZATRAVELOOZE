import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, QrCode, ExternalLink } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-top-container">
        {/* Brand Column with Official Logo */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="brand-logo-frame-large">
              <img 
                src="/logo.jpg" 
                alt="IZZA TRAVELOOZE Logo" 
                className="brand-logo-img-large" 
              />
            </div>
            <div>
              <h3 className="footer-brand-title">{RESORT_DATA.brand.name}</h3>
              <span className="footer-brand-sub">RESORT GROUP • PRIVATE SANCTUARY</span>
            </div>
          </div>
          <p className="footer-about-text">
            Where the architecture of quiet solitude blends with untouched Western Ghats rainforest. Committed to carbon-neutral luxury and authentic Malabar heritage conservation.
          </p>
          
          {/* Instagram Handles & QR Code Trigger */}
          <div className="footer-instagram-box glass-panel">
            <div className="ig-box-title">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c5a880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>OFFICIAL INSTAGRAM</span>
            </div>
            <div className="ig-handles-row">
              {RESORT_DATA.brand.instagram.map((ig) => (
                <a 
                  key={ig.handle} 
                  href={ig.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ig-handle-link"
                >
                  <span>{ig.handle}</span>
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
            <button onClick={() => setShowQRModal(true)} className="ig-qr-btn">
              <QrCode size={14} />
              <span>SCAN INSTAGRAM QR CODES</span>
            </button>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">RESORT CONCIERGE</h4>
          <ul className="footer-links-list">
            <li><a href="#villas">The Residences & Pavilions</a></li>
            <li><a href="#experience">Estate Spice Dining</a></li>
            <li><a href="#moments">Lotus Pond Ayurvedic Spa</a></li>
            <li><a href="#sanctuary-story">Rainforest Reserves</a></li>
            <li><a href="#villas">Private Helicopter Transfers</a></li>
            <li><a href="#moments">Tea Plantation Treks</a></li>
          </ul>
        </div>

        {/* Contact Office Column from User Image */}
        <div className="footer-col">
          <h4 className="footer-col-title">ESTATE CONTACT</h4>
          <div className="footer-contact-info">
            <div className="contact-row">
              <Phone size={16} className="contact-icon" />
              <a href={`tel:${RESORT_DATA.brand.phone}`} className="contact-bold-phone">
                {RESORT_DATA.brand.displayPhone}
              </a>
            </div>

            <div className="contact-row">
              <MapPin size={16} className="contact-icon" />
              <div>
                <strong>Western Ghats Reserve</strong>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  Private Rainforest Enclave, Kerala, India
                </div>
              </div>
            </div>

            <div className="contact-row">
              <Mail size={16} className="contact-icon" />
              <a href={`mailto:${RESORT_DATA.brand.email}`}>
                {RESORT_DATA.brand.email}
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col newsletter-col">
          <h4 className="footer-col-title">PRIVATE INVITATIONS</h4>
          <p className="newsletter-desc">
            Receive seasonal estate chronicles, private villa release notices, and exclusive monsoon retreat offerings.
          </p>

          {subscribed ? (
            <div className="newsletter-success">
              <CheckCircle size={18} color="#c5a880" />
              <span>You have been added to our private guest register.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn-gold newsletter-btn">
                <span>SUBSCRIBE</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} {RESORT_DATA.brand.name} • RESORT GROUP. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#terms">Terms of Sanctuary</a>
            <span className="dot-sep">•</span>
            <a href="#sustainability">Conservation Charter</a>
          </div>
        </div>
      </div>

      {/* QR Code Modal for Instagram */}
      {showQRModal && (
        <div className="modal-backdrop" onClick={() => setShowQRModal(false)}>
          <div className="qr-popup-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="qr-modal-header">
              <h3 className="qr-modal-title">Official Instagram & Contact QR</h3>
              <button onClick={() => setShowQRModal(false)} className="modal-close-btn">✕</button>
            </div>
            <div className="qr-modal-body">
              <img 
                src="/contact-info.png" 
                alt="IZZA Travelooze QR Codes and Contact Details" 
                className="qr-card-img"
              />
              <p className="qr-note">
                Scan with your phone camera to follow <strong>@IZZA_RESORTS</strong> and <strong>@IZZA_TRAVELOOZE_</strong> on Instagram.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
