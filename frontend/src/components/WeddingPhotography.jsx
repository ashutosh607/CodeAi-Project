import React, { useState } from 'react';
import { Camera, Film, Sparkles, MapPin } from 'lucide-react';

const GALLERIES = [
  {
    title: 'Ananya & Rohan',
    venue: 'Udaivilas Palace, Udaipur',
    category: 'Palace Heritage Wedding',
    cover: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    notes: 'Three-day royal celebration captured with dual medium-format cameras and cinematic drone.'
  },
  {
    title: 'Sophie & James',
    venue: 'Kew Royal Botanic Gardens, London',
    category: 'Contemporary English Wedding',
    cover: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1200&q=85',
    notes: 'Intimate greenhouse vows framed with lush Victorian botanicals and evening jazz reception.'
  },
  {
    title: 'Tara & Kabir',
    venue: 'Alila Fort Bishangarh, Rajasthan',
    category: 'Sunset Fort Nuptials',
    cover: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
    notes: 'Golden hour portraits against centuries-old stone ramparts, followed by candlelit courtyard banquet.'
  }
];

export default function WeddingPhotography() {
  const [selectedGallery, setSelectedGallery] = useState(GALLERIES[0]);

  return (
    <section id="photography" className="editorial-section photography-section">
      <div className="section-container">
        <div className="editorial-section-intro">
          <div className="intro-badge">Visual Storytelling & Cinema</div>
          <h2 className="editorial-h2">Wedding Photography & Cinema</h2>
          <p className="editorial-lead">
            Documentary intimacy paired with high-fashion editorial rigor. We capture weddings not as a checklist of posed smiles, but as living, emotional heirlooms designed specifically for the physical printed page.
          </p>
        </div>

        {/* Photography Disciplines */}
        <div className="photography-disciplines-grid">
          <div className="discipline-card">
            <Camera className="discipline-icon" size={24} />
            <h3 className="discipline-title">Candid Documentary</h3>
            <p className="discipline-text">
              Unobtrusive photojournalism capturing unscripted tears, quiet glances between parents, and electric dance floors.
            </p>
          </div>

          <div className="discipline-card">
            <Sparkles className="discipline-icon" size={24} />
            <h3 className="discipline-title">Editorial Couple Portraits</h3>
            <p className="discipline-text">
              Magazine-style art direction during quiet portrait sessions, maximizing architectural light and natural garment movement.
            </p>
          </div>

          <div className="discipline-card">
            <Film className="discipline-icon" size={24} />
            <h3 className="discipline-title">4K Cinematic Wedding Films</h3>
            <p className="discipline-text">
              Masterfully edited feature films and 3-minute highlight trailers incorporating high-fidelity audio vows and film color grading.
            </p>
          </div>
        </div>

        {/* Featured Wedding Stories Diptych */}
        <div className="wedding-stories-showcase">
          <div className="stories-gallery-frame">
            <img
              src={selectedGallery.cover}
              alt={selectedGallery.title}
              className="featured-story-photo"
              loading="lazy"
            />
            <div className="story-photo-overlay">
              <div className="overlay-details">
                <span className="story-cat">{selectedGallery.category}</span>
                <h3 className="story-title">{selectedGallery.title}</h3>
                <span className="story-loc">
                  <MapPin size={14} /> {selectedGallery.venue}
                </span>
                <p className="story-notes">{selectedGallery.notes}</p>
              </div>
            </div>
          </div>

          <div className="stories-selection-list">
            <h4 className="selection-list-title">Curated Wedding Stories</h4>
            <div className="stories-pills">
              {GALLERIES.map((gal, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`story-selector-btn ${selectedGallery.title === gal.title ? 'active' : ''}`}
                  onClick={() => setSelectedGallery(gal)}
                >
                  <span className="selector-index">0{idx + 1}</span>
                  <div className="selector-text">
                    <strong>{gal.title}</strong>
                    <span>{gal.venue}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="photo-consultation-box">
              <p>Planning an intimate destination wedding or multi-day royal celebration?</p>
              <a href="#contact" className="consultation-btn">
                Inquire for Photography Dates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

