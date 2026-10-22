import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import SanctuaryPillars from './components/SanctuaryPillars';
import FeaturedVillas from './components/FeaturedVillas';
import CuratedMoments from './components/CuratedMoments';
import SanctuaryStory from './components/SanctuaryStory';
import Testimonial from './components/Testimonial';
import SanctuaryGallery from './components/SanctuaryGallery';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import VillaDetailModal from './components/VillaDetailModal';
import ExperienceModal from './components/ExperienceModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { RESORT_DATA } from './data/resortData';
import './App.css';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [isVillaDetailOpen, setIsVillaDetailOpen] = useState(false);
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [isMomentDetailOpen, setIsMomentDetailOpen] = useState(false);

  // Handlers
  const handleOpenBooking = (initialParams = null) => {
    setBookingInitialData(initialParams);
    setIsBookingOpen(true);
  };

  const handleSearchAvailability = (params) => {
    let matchedVillaId = 'cardamom-pavilion';
    if (params.villaType && params.villaType !== 'All Villas & Pavilions') {
      const match = RESORT_DATA.villas.find(v => v.name.toLowerCase().includes(params.villaType.toLowerCase()));
      if (match) matchedVillaId = match.id;
    }
    handleOpenBooking({
      ...params,
      villaId: matchedVillaId
    });
  };

  const handleOpenVillaDetail = (villa) => {
    setSelectedVilla(villa);
    setIsVillaDetailOpen(true);
  };

  const handleBookSpecificVilla = (villa) => {
    handleOpenBooking({
      villaId: villa.id,
      guests: '2 Guests'
    });
  };

  const handleOpenMomentDetail = (moment) => {
    setSelectedMoment(moment);
    setIsMomentDetailOpen(true);
  };

  const handleBookExperience = (moment) => {
    handleOpenBooking({
      notes: `Interested in reserving ${moment.title}`
    });
  };

  return (
    <div className="resort-app-wrapper">
      {/* Top Floating Glass Navigation with Official Logo */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sanctuary Presentation */}
      <main>
        {/* Cinematic Hero */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreVillas={() => {
            const el = document.getElementById('villas');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Booking & Availability Bar */}
        <BookingBar onSearchAvailability={handleSearchAvailability} />

        {/* Exclusive Stays / Sanctuary Pillars (01, 02, 03) */}
        <SanctuaryPillars 
          onSelectPillar={(pillar) => handleOpenBooking()}
        />

        {/* Featured Villas & Pavilions Showcase */}
        <FeaturedVillas 
          onOpenVillaDetail={handleOpenVillaDetail}
          onBookVilla={handleBookSpecificVilla}
        />

        {/* Sanctuary Destination Story & User Contact Card */}
        <SanctuaryStory 
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Curated Moments (2x2 Grid) */}
        <CuratedMoments 
          onSelectMoment={handleOpenMomentDetail}
        />

        {/* Editorial Guest Reviews & Stars */}
        <Testimonial />

        {/* Visual Chronicles / Gallery */}
        <SanctuaryGallery />
      </main>

      {/* Grand Luxury Footer */}
      <Footer />

      {/* 24/7 Estate Concierge WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Reservation Drawer Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingInitialData}
      />

      {/* Villa Gallery & Specs Modal */}
      <VillaDetailModal 
        isOpen={isVillaDetailOpen}
        onClose={() => setIsVillaDetailOpen(false)}
        villa={selectedVilla}
        onBookVilla={handleBookSpecificVilla}
      />

      {/* Curated Moment Experience Modal */}
      <ExperienceModal 
        isOpen={isMomentDetailOpen}
        onClose={() => setIsMomentDetailOpen(false)}
        moment={selectedMoment}
        onBookExperience={handleBookExperience}
      />
    </div>
  );
}
