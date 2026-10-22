import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ArrowRight } from 'lucide-react';

export default function BookingBar({ onSearchAvailability }) {
  const [checkIn, setCheckIn] = useState('2026-11-10');
  const [checkOut, setCheckOut] = useState('2026-11-14');
  const [guests, setGuests] = useState('2 Guests');
  const [villaType, setVillaType] = useState('All Villas & Pavilions');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchAvailability({
      checkIn,
      checkOut,
      guests,
      villaType
    });
  };

  return (
    <div id="booking-widget" className="booking-bar-wrapper">
      <div className="booking-bar-container glass-panel">
        <form onSubmit={handleSearch} className="booking-bar-form">
          {/* Check-In */}
          <div className="booking-input-group">
            <label className="booking-label">
              <Calendar size={14} className="input-icon" />
              <span>CHECK-IN</span>
            </label>
            <input 
              type="date" 
              className="booking-date-input" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div className="booking-divider"></div>

          {/* Check-Out */}
          <div className="booking-input-group">
            <label className="booking-label">
              <Calendar size={14} className="input-icon" />
              <span>CHECK-OUT</span>
            </label>
            <input 
              type="date" 
              className="booking-date-input" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className="booking-divider"></div>

          {/* Guests */}
          <div className="booking-input-group">
            <label className="booking-label">
              <Users size={14} className="input-icon" />
              <span>SANCTUARY GUESTS</span>
            </label>
            <select 
              className="booking-select-input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1 Guest">1 Guest (Solo Retreat)</option>
              <option value="2 Guests">2 Guests (Couple / Duo)</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4 Guests">4 Guests (Family / Suite)</option>
              <option value="5+ Guests">5+ Guests (Full Pavilion)</option>
            </select>
          </div>

          <div className="booking-divider"></div>

          {/* Villa Type */}
          <div className="booking-input-group">
            <label className="booking-label">
              <Home size={14} className="input-icon" />
              <span>EXPERIENCE VILLA</span>
            </label>
            <select 
              className="booking-select-input"
              value={villaType}
              onChange={(e) => setVillaType(e.target.value)}
            >
              <option value="All Villas & Pavilions">All Villas & Pavilions</option>
              <option value="The Cardamom Pavilion Villa">The Cardamom Pavilion Villa</option>
              <option value="Amber Canopy Resort & Villas">Amber Canopy Resort & Villas</option>
              <option value="Emerald Mist Pool Sanctuary">Emerald Mist Pool Sanctuary</option>
              <option value="The Bamboo Sanctum Cottage">The Bamboo Sanctum Cottage</option>
            </select>
          </div>

          {/* Action CTA */}
          <div className="booking-action-group">
            <button type="submit" className="btn-gold booking-submit-btn">
              <span>CHECK AVAILABILITY</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        {/* Subtle Luxury Guarantee Footnote */}
        <div className="booking-bar-perks">
          <span>✦ Best Rate & Complimentary Plantation High Tea Guaranteed</span>
          <span>✦ Flexible 48-Hour Cancellation</span>
          <span>✦ 24/7 Dedicated Estate Butler</span>
        </div>
      </div>
    </div>
  );
}
