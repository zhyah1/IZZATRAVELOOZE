import React, { useState, useEffect } from 'react';
import { Phone, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { toggleRainforestAmbience } from '../utils/audioAmbience';
import { RESORT_DATA } from '../data/resortData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    toggleRainforestAmbience((state) => setIsAudioPlaying(state));
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'OUR STAYS & VILLAS', href: '#villas' },
    { label: 'CURATED MOMENTS', href: '#moments' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'THE SANCTUARY', href: '#sanctuary-story' },
    { label: 'CONTACT US', href: '#contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Bar with Brand & Quick Actions */}
      <div className="navbar-top-container">
        {/* Brand Logo with Official User Logo */}
        <a href="#home" className="navbar-brand">
          <div className="brand-logo-frame">
            <img 
              src="/logo.jpg" 
              alt="IZZA TRAVELOOZE Official Logo" 
              className="brand-logo-img" 
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">{RESORT_DATA.brand.name}</span>
            <span className="brand-sub">
              RESORT GROUP • PRIVATE SANCTUARY
            </span>
          </div>
        </a>

        {/* Right Actions: Sound, Phone & CTA */}
        <div className="navbar-actions">
          {/* Rainforest Audio Toggle */}
          <button 
            onClick={handleAudioToggle} 
            className={`audio-toggle-btn ${isAudioPlaying ? 'audio-active' : ''}`}
            title={isAudioPlaying ? "Mute Rainforest Sounds" : "Play Rainforest Ambience"}
          >
            {isAudioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="audio-label">{isAudioPlaying ? 'Rainforest Sound: On' : 'Rainforest Ambience'}</span>
            {isAudioPlaying && (
              <span className="audio-wave">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
              </span>
            )}
          </button>

          {/* Phone Contact from User Image */}
          <a href={`tel:${RESORT_DATA.brand.phone}`} className="phone-badge">
            <Phone size={13} />
            <span>{RESORT_DATA.brand.displayPhone}</span>
          </a>

          {/* Book CTA */}
          <button onClick={() => onOpenBooking()} className="btn-gold nav-book-btn">
            <span>BOOK YOUR ESCAPE</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <nav className="navbar-nav-row">
        <ul className="nav-links-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link-item">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-header">
            <div className="navbar-brand">
              <img src="/logo.jpg" alt="Logo" className="brand-logo-img" style={{ width: '38px', height: '38px' }} />
              <span className="brand-name">IZZA TRAVELOOZE</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="close-mobile-btn">
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-links-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="mobile-link-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-actions">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }} 
              className="btn-gold" 
              style={{ width: '100%' }}
            >
              BOOK YOUR ESCAPE
            </button>
            <a href={`tel:${RESORT_DATA.brand.phone}`} className="phone-badge" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              <Phone size={14} />
              <span>{RESORT_DATA.brand.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
