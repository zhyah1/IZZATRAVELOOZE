import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const phone = '919188410752';

  const handleSendMessage = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(msg || "Hello, I would like to inquire about reserving a secluded villa at IZZA TRAVELOOZE.");
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    setPopupOpen(false);
  };

  return (
    <div className="whatsapp-floating-wrapper">
      {/* Floating Chat Box Popup */}
      {popupOpen && (
        <div className="whatsapp-chat-popup glass-panel">
          <div className="wa-popup-header">
            <div className="wa-avatar-box">
              <div className="wa-avatar-online"></div>
              <img 
                src="/logo.jpg" 
                alt="IZZA Logo" 
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #c5a880' }} 
              />
            </div>
            <div className="wa-header-info">
              <div className="wa-header-name">IZZA Estate Butler</div>
              <div className="wa-header-status">Online • Instant Assistance</div>
            </div>
            <button onClick={() => setPopupOpen(false)} className="wa-close-btn" aria-label="Close WhatsApp chat">
              <X size={18} />
            </button>
          </div>

          <div className="wa-popup-body">
            <div className="wa-msg-bubble">
              <p>Welcome to <strong>IZZA TRAVELOOZE</strong>. How may our estate concierge assist your retreat planning today?</p>
              <span className="wa-msg-time">Direct WhatsApp: +91 9188410752</span>
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="wa-popup-footer">
            <input 
              type="text" 
              placeholder="Inquire about sanctuary villas..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="wa-input"
            />
            <button type="submit" className="wa-send-btn" aria-label="Send WhatsApp message">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Circular WhatsApp Button with Badge */}
      <button 
        onClick={() => setPopupOpen(!popupOpen)} 
        className="whatsapp-btn"
        aria-label="Chat with Estate Concierge on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
          <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A11.5 11.5 0 1 1 16 27.4zm6.3-8.6c-.3-.2-2-.1-2.3-1.1-.3-.2-.5-.3-.7.1-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1a8.9 8.9 0 0 1-5.7-5c-.2-.4 0-.6.1-.8l.5-.6.3-.5a.6.6 0 0 0 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.2.3 2.4 3.7 5.8 5.2 2.8 1.2 3.4 1 4 .9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.4z"/>
        </svg>
        <span className="wa-unread-badge">1</span>
      </button>
    </div>
  );
}
