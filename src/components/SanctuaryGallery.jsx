import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';

export default function SanctuaryGallery() {
  const [activeTab, setActiveTab] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: "Misty Sunrise over Chembra Peak",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Tiered Infinity Waters at Twilight",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Open-Air Shirodhara Herb Pavilion",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Cardamom Estate Candlelight Gazebo",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Primary Canopy Glass Master Suite",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Mountain Rain Lotus Pond",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="section-container gallery-section">
      <div className="section-header-center">
        <span className="subheading-badge">VISUAL CHRONICLES</span>
        <h2 className="section-title">The Sanctuary in Frames</h2>
        <div className="gold-divider"></div>
        <p className="section-description">
          A glimpse into days steeped in emerald forest stillness, fragrant spice breezes, and starlit horizons.
        </p>
      </div>

      <div className="gallery-tabs">
        {['All', 'Architecture', 'Wellness', 'Dining', 'Landscape'].map((tab) => (
          <button
            key={tab}
            className={`gallery-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="gallery-masonry-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-card glass-panel">
            <img src={item.image} alt={item.title} className="gallery-card-img" loading="lazy" />
            <div className="gallery-card-overlay">
              <span className="gallery-card-category">{item.category}</span>
              <h4 className="gallery-card-title">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
