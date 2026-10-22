import React, { useState } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Compass, Flower2, Utensils, ArrowUpRight, Sparkles } from 'lucide-react';

export default function SanctuaryPillars({ onSelectPillar }) {
  const [activeHover, setActiveHover] = useState(null);

  const getPillarIcon = (id) => {
    switch (id) {
      case '01':
        return <Compass size={24} className="pillar-icon" />;
      case '02':
        return <Flower2 size={24} className="pillar-icon" />;
      case '03':
        return <Utensils size={24} className="pillar-icon" />;
      default:
        return <Sparkles size={24} className="pillar-icon" />;
    }
  };

  return (
    <section id="experience" className="section-container pillars-section">
      <div className="section-header-center">
        <span className="subheading-badge">DISCOVER THE SANCTUARY</span>
        <h2 className="section-title">Exclusive Stays</h2>
        <div className="gold-divider"></div>
        <p className="section-description">
          Where primeval rainforest meets sophisticated seclusion and authentic Malabar heritage.
        </p>
      </div>

      <div className="pillars-grid">
        {RESORT_DATA.pillars.map((pillar, idx) => (
          <div 
            key={pillar.id}
            className={`pillar-card glass-panel ${activeHover === idx ? 'pillar-card-hovered' : ''}`}
            onMouseEnter={() => setActiveHover(idx)}
            onMouseLeave={() => setActiveHover(null)}
          >
            <div className="pillar-card-top">
              <div className="pillar-number">{pillar.id}</div>
              <div className="pillar-icon-box">
                {getPillarIcon(pillar.id)}
              </div>
            </div>

            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-subtitle">{pillar.subtitle}</p>
            <p className="pillar-description">{pillar.description}</p>

            <div className="pillar-footer">
              <span className="pillar-highlight-tag">
                <Sparkles size={13} />
                <span>{pillar.highlight}</span>
              </span>
            </div>

            <div className="pillar-glow-accent"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
