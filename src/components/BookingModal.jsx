import React, { useState } from 'react';
import { X, Calendar, Users, Check, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { RESORT_DATA } from '../data/resortData';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [villaId, setVillaId] = useState(initialData?.villaId || 'cardamom-pavilion');
  const [checkIn, setCheckIn] = useState(initialData?.checkIn || '2026-11-10');
  const [checkOut, setCheckOut] = useState(initialData?.checkOut || '2026-11-14');
  const [guests, setGuests] = useState(initialData?.guests || '2 Guests');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAddons, setSelectedAddons] = useState(['butler']);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const selectedVilla = RESORT_DATA.villas.find(v => v.id === villaId) || RESORT_DATA.villas[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime <= 0 ? 3 : diffTime;

  const addonsList = [
    { id: 'butler', name: 'Dedicated 24/7 Estate Butler', price: 0, tag: 'Complimentary' },
    { id: 'shirodhara', name: 'Ayurvedic Shirodhara & Herbal Glade Therapy', price: 140 },
    { id: 'lantern-dinner', name: 'Private Lantern-Lit Spice Plantation Dinner', price: 180 },
    { id: 'airport-transfer', name: 'Kozhikode (CCJ) Luxury Range Rover Transfer', price: 120 }
  ];

  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find(a => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const subtotal = (selectedVilla.pricePerNight * nights) + addonsTotal;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  const toggleAddon = (id) => {
    if (id === 'butler') return; // Always included
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="booking-modal-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="modal-header">
          <div>
            <span className="subheading-badge">RESERVATION CONCIERGE</span>
            <h3 className="modal-title">Book Your Secluded Escape</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {confirmed ? (
          <div className="confirmation-card">
            <div className="confirm-icon-box">
              <Sparkles size={36} color="#c5a880" />
            </div>
            <h3 className="confirm-title">Sanctuary Reserved</h3>
            <p className="confirm-p">
              Thank you, <strong>{name || 'Distinguished Guest'}</strong>. Your provisional reservation for <strong>{selectedVilla.name}</strong> has been secured for {nights} nights.
            </p>
            <div className="confirm-receipt glass-panel">
              <div className="receipt-row">
                <span>Check-in:</span>
                <strong>{checkIn}</strong>
              </div>
              <div className="receipt-row">
                <span>Check-out:</span>
                <strong>{checkOut}</strong>
              </div>
              <div className="receipt-row">
                <span>Guests:</span>
                <strong>{guests}</strong>
              </div>
              <div className="receipt-row">
                <span>Estimated Total:</span>
                <strong className="text-gold">${total.toLocaleString()} USD</strong>
              </div>
            </div>
            <p className="confirm-footnote">
              Our Chief Estate Concierge will connect with you via WhatsApp and email within 30 minutes to curate your bespoke itinerary and airport transfer.
            </p>
            <button onClick={onClose} className="btn-gold" style={{ width: '100%', marginTop: '1.5rem' }}>
              RETURN TO SANCTUARY
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirmReservation} className="booking-drawer-content">
            {/* Villa Selection */}
            <div className="form-section">
              <label className="form-section-title">1. Selected Residence</label>
              <div className="villa-selector-grid">
                {RESORT_DATA.villas.map((v) => (
                  <div 
                    key={v.id}
                    className={`villa-select-pill ${villaId === v.id ? 'active' : ''}`}
                    onClick={() => setVillaId(v.id)}
                  >
                    <img src={v.image} alt={v.name} className="pill-thumb" />
                    <div className="pill-info">
                      <div className="pill-name">{v.name}</div>
                      <div className="pill-rate">${v.pricePerNight} / night</div>
                    </div>
                    {villaId === v.id && <Check size={16} className="pill-check" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="form-section">
              <label className="form-section-title">2. Dates & Occupancy</label>
              <div className="dates-row">
                <div className="field-group">
                  <span className="field-label">Check-in</span>
                  <input 
                    type="date" 
                    value={checkIn} 
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="drawer-input"
                    required
                  />
                </div>
                <div className="field-group">
                  <span className="field-label">Check-out</span>
                  <input 
                    type="date" 
                    value={checkOut} 
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="drawer-input"
                    required
                  />
                </div>
                <div className="field-group">
                  <span className="field-label">Guests</span>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    className="drawer-input"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Curated Addons */}
            <div className="form-section">
              <label className="form-section-title">3. Curated In-Villa Enhancements</label>
              <div className="addons-list">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div 
                      key={addon.id}
                      className={`addon-row ${isChecked ? 'addon-checked' : ''}`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="addon-check-box">
                        {isChecked && <Check size={14} />}
                      </div>
                      <div className="addon-text">
                        <span className="addon-name">{addon.name}</span>
                      </div>
                      <span className="addon-price">
                        {addon.price === 0 ? 'Complimentary' : `+$${addon.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Details */}
            <div className="form-section">
              <label className="form-section-title">4. Guest Details</label>
              <div className="contact-fields-grid">
                <input 
                  type="text" 
                  placeholder="Full Legal Name *" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="drawer-input"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="drawer-input"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp / Mobile Number *" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  className="drawer-input"
                  required
                />
              </div>
            </div>

            {/* Cost Summary Breakdown */}
            <div className="cost-summary glass-panel">
              <div className="summary-line">
                <span>{selectedVilla.name} ({nights} nights @ ${selectedVilla.pricePerNight})</span>
                <span>${selectedVilla.pricePerNight * nights}</span>
              </div>
              {addonsTotal > 0 && (
                <div className="summary-line">
                  <span>Enhancements</span>
                  <span>+${addonsTotal}</span>
                </div>
              )}
              <div className="summary-line">
                <span>Luxury Goods & Resort Tax (12%)</span>
                <span>${taxes}</span>
              </div>
              <div className="summary-total-line">
                <span>Total Estimated Investment</span>
                <span className="total-gold">${total.toLocaleString()} USD</span>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '1.1rem' }}>
              <span>CONFIRM SANCTUARY RESERVATION</span>
            </button>
            <p className="no-charge-note">
              <ShieldCheck size={14} /> No immediate charge required. Provisional reservation held for 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
