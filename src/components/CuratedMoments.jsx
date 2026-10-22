import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Clock, Sparkles, ArrowUpRight } from 'lucide-react';

export default function CuratedMoments({ onSelectMoment }) {
  return (
    <section id="moments" className="section-container curated-moments-section">
      <div className="section-header-split">
        <div>
          <span className="subheading-badge">SANCTUARY EXPERIENCES</span>
          <h2 className="section-title">Curated Moments</h2>
        </div>
        <div>
          <p className="section-tagline">
            Immersive morning cloud walks, restorative Ayurvedic forest healing, and private spice degustations under the starlight.
          </p>
        </div>
      </div>

      <div className="moments-grid">
        {RESORT_DATA.curatedMoments.map((moment) => (
          <div 
            key={moment.id} 
            className="moment-card glass-panel"
            onClick={() => onSelectMoment(moment)}
          >
            <div className="moment-img-container">
              <img 
                src={moment.image} 
                alt={moment.title} 
                className="moment-card-img"
                loading="lazy" 
              />
              <div className="moment-overlay-gradient"></div>

              {/* Tag & Time */}
              <div className="moment-top-row">
                <span className="moment-tag-pill">{moment.tag}</span>
                <span className="moment-time-pill">
                  <Clock size={12} />
                  <span>{moment.time}</span>
                </span>
              </div>

              {/* Card Bottom Floating Info */}
              <div className="moment-bottom-info">
                <div className="moment-title-row">
                  <h3 className="moment-title">{moment.title}</h3>
                  <div className="moment-action-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p className="moment-description">
                  {moment.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
