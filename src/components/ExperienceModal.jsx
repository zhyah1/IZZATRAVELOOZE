import React from 'react';
import { X, Clock, Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ExperienceModal({ moment, isOpen, onClose, onBookExperience }) {
  if (!isOpen || !moment) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="experience-detail-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-floating" aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="exp-modal-img-wrap">
          <img src={moment.image} alt={moment.title} className="exp-modal-img" />
          <div className="exp-modal-badge">{moment.tag}</div>
        </div>

        <div className="exp-modal-body">
          <div className="exp-meta-row">
            <span className="exp-meta-item">
              <Clock size={14} className="text-gold" />
              <span>{moment.time}</span>
            </span>
            <span className="exp-meta-item">
              <Sparkles size={14} className="text-gold" />
              <span>Personal Estate Concierge Guided</span>
            </span>
          </div>

          <h3 className="exp-modal-title">{moment.title}</h3>
          <p className="exp-modal-text">{moment.description}</p>

          <div className="exp-highlights-box glass-panel">
            <h4 className="exp-box-title">Experience Inclusions:</h4>
            <ul className="exp-list">
              <li>Private attendant and chilled herbal refreshments</li>
              <li>Hand-blended aromatic oils and organic plantation botanicals</li>
              <li>Photographic memories captured by in-house artist (optional)</li>
              <li>Flexible rescheduling based on rainforest weather conditions</li>
            </ul>
          </div>

          <button 
            onClick={() => {
              onClose();
              onBookExperience(moment);
            }} 
            className="btn-gold" 
            style={{ width: '100%', marginTop: '1.2rem' }}
          >
            <span>ARRANGE WITH CONCIERGE</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
