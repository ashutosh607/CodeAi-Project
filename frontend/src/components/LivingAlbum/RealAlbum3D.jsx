import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  X,
  RotateCcw,
  Maximize2
} from 'lucide-react';

export const ALBUM_SPREADS = [
  {
    id: 1,
    title: 'The Preparations & Sacred Vows',
    venue: 'Castello di Celsa, Tuscany',
    date: 'Autumn Solstice',
    left: {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 01 • The Morning Robe & French Chantilly Lace'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 02 • Exchange of Vows beneath the Ancient Olive Canopy'
    }
  },
  {
    id: 2,
    title: 'Golden Hour & Terraced Gardens',
    venue: 'Villa Balbiano, Lake Como',
    date: 'Summer Twilight',
    left: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 03 • First Steps as Husband & Wife across Cypress Allée'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 04 • Bespoke Solitaire Rings & Wild Botanical Suite'
    }
  },
  {
    id: 3,
    title: 'The Stately Banquet & Speeches',
    venue: 'Hedsor House, Buckinghamshire',
    date: 'Candlelit Evening',
    left: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 05 • The Grand Dining Hall under Victorian Chandeliers'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 06 • Father of the Bride Toast & Emotional Embraces'
    }
  },
  {
    id: 4,
    title: 'The First Dance & Midnight Lanterns',
    venue: 'The Glasshouse Orangery, Cotswolds',
    date: 'Midnight Stars',
    left: {
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 07 • The First Waltz beneath Wrought-Iron Glass Vaults'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
      caption: 'Plate 08 • Midnight Sparkler Send-Off across the Meadow'
    }
  }
];

export default function RealAlbum3D({
  isOpen = false,
  setIsOpen = () => {},
  material = { id: 'sand', name: 'Linen Sand', hex: '#EDE5DA', accent: '#C5A880' },
  onExploreClick
}) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); // 'next' | 'prev'
  const [dragStartX, setDragStartX] = useState(null);

  const bookRef = useRef(null);
  const coverRef = useRef(null);
  const leafRef = useRef(null);
  const shadowRef = useRef(null);

  const totalSpreads = ALBUM_SPREADS.length;
  const activeSpread = ALBUM_SPREADS[currentSpreadIndex];

  // Helper to get next/prev spread for the flipping leaf
  const nextSpreadIndex = Math.min(currentSpreadIndex + 1, totalSpreads - 1);
  const prevSpreadIndex = Math.max(currentSpreadIndex - 1, 0);

  // 1. OPEN ALBUM ANIMATION
  const handleOpenAlbum = useCallback(() => {
    if (isOpen || isFlipping) return;
    setIsOpen(true);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const tl = gsap.timeline();
    // Smooth camera perspective transition
    tl.to(bookRef.current, {
      rotateX: isMobile ? 6 : 12,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      duration: 1.1,
      ease: 'power2.out'
    });

    // Front Cover unfolds around spine hinge
    tl.to(
      coverRef.current,
      {
        rotateY: -180,
        duration: 1.25,
        ease: 'power2.inOut'
      },
      '-=0.9'
    );

    // Expand contact shadow smoothly
    tl.to(
      shadowRef.current,
      {
        scaleX: isMobile ? 1.35 : 1.8,
        opacity: 0.35,
        duration: 1.1,
        ease: 'power2.out'
      },
      '-=1.2'
    );
  }, [isOpen, isFlipping, setIsOpen]);

  // 2. CLOSE ALBUM ANIMATION
  const handleCloseAlbum = useCallback(() => {
    if (!isOpen || isFlipping) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setCurrentSpreadIndex(0);
      }
    });

    // Close Front Cover back onto the book block
    tl.to(coverRef.current, {
      rotateY: 0,
      duration: 1.15,
      ease: 'power2.inOut'
    });

    // Return to elegant resting 3D isometric angle
    tl.to(
      bookRef.current,
      {
        rotateX: isMobile ? 16 : 22,
        rotateY: isMobile ? -12 : -16,
        rotateZ: 2,
        scale: 0.94,
        duration: 1.1,
        ease: 'power2.out'
      },
      '-=0.9'
    );

    tl.to(
      shadowRef.current,
      {
        scaleX: 1,
        opacity: 0.28,
        duration: 1.1,
        ease: 'power2.out'
      },
      '-=1.0'
    );
  }, [isOpen, isFlipping, setIsOpen]);

  // 3. PAGE TURN NEXT
  const handleNextPage = useCallback(() => {
    if (!isOpen || isFlipping || currentSpreadIndex >= totalSpreads - 1) return;
    setIsFlipping(true);
    setFlipDirection('next');

    const leaf = leafRef.current;
    if (!leaf) return;

    // Reset leaf to right side
    gsap.set(leaf, { rotateY: 0, display: 'block', zIndex: 30 });

    gsap.to(leaf, {
      rotateY: -180,
      duration: 0.85,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev + 1);
        gsap.set(leaf, { display: 'none', rotateY: 0 });
        setIsFlipping(false);
      }
    });
  }, [isOpen, isFlipping, currentSpreadIndex, totalSpreads]);

  // 4. PAGE TURN PREV
  const handlePrevPage = useCallback(() => {
    if (!isOpen || isFlipping || currentSpreadIndex <= 0) return;
    setIsFlipping(true);
    setFlipDirection('prev');

    const leaf = leafRef.current;
    if (!leaf) return;

    // Position leaf on left side (-180deg) and animate to right (0deg)
    gsap.set(leaf, { rotateY: -180, display: 'block', zIndex: 30 });

    gsap.to(leaf, {
      rotateY: 0,
      duration: 0.85,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev - 1);
        gsap.set(leaf, { display: 'none' });
        setIsFlipping(false);
      }
    });
  }, [isOpen, isFlipping, currentSpreadIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        if (!isOpen) handleOpenAlbum();
        else handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        if (isOpen) handlePrevPage();
      } else if (e.key === 'Escape') {
        if (isOpen) handleCloseAlbum();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleOpenAlbum, handleNextPage, handlePrevPage, handleCloseAlbum]);

  // Touch and Drag swipe handling
  const handleTouchStart = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStartX(x);
  };

  const handleTouchEnd = (e) => {
    if (dragStartX === null) return;
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = x - dragStartX;
    if (diff < -40) {
      if (!isOpen) handleOpenAlbum();
      else handleNextPage();
    } else if (diff > 40) {
      if (isOpen) handlePrevPage();
    }
    setDragStartX(null);
  };

  return (
    <div
      className="real-album-presentation-wrap"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      {/* 3D Scene Viewport */}
      <div className="real-album-3d-scene">
        {/* Soft Tabletop Ambient Shadow */}
        <div
          ref={shadowRef}
          className={`real-album-studio-shadow ${isOpen ? 'open' : 'closed'}`}
        />

        {/* The 3D Physical Book Block */}
        <div
          ref={bookRef}
          className={`real-album-book-root ${isOpen ? 'is-open' : 'is-closed'}`}
          onClick={!isOpen ? handleOpenAlbum : undefined}
          title={!isOpen ? 'Click Album to Open Spread' : undefined}
        >
          {/* =========================================================
              1. BACK COVER BOARD (Wrapped in fine leather/linen)
              ========================================================= */}
          <div
            className="real-album-back-cover"
            style={{ backgroundColor: material.hex }}
          >
            <div className="album-cover-texture-overlay" />
            <div className="album-board-edge-highlight" />
          </div>

          {/* =========================================================
              2. SPINE HINGE (Left when closed; Center when open)
              ========================================================= */}
          <div
            className="real-album-spine"
            style={{ backgroundColor: material.hex }}
          >
            <div className="album-spine-emboss-hubs">
              <span className="spine-hub" />
              <span className="spine-hub" />
              <span className="spine-hub" />
              <span className="spine-hub" />
            </div>
            <div className="album-spine-foil-text" style={{ color: material.accent }}>
              ULTRAA ALBUMS • 2026
            </div>
          </div>

          {/* =========================================================
              3. ARCHIVAL 1.2mm RIGID PAGE BLOCK EDGES (Closed State)
              ========================================================= */}
          <div className="real-album-page-block-edges">
            <div className="page-edge-lines" />
          </div>

          {/* =========================================================
              4. INNER SPREAD PAGES (Visible when Open)
              ========================================================= */}
          <div className="real-album-inner-spread">
            {/* LEFT PAGE */}
            <div
              className="album-page-leaf left-leaf"
              onClick={isOpen ? handlePrevPage : undefined}
              title={currentSpreadIndex > 0 ? 'Click to Flip Previous Page' : undefined}
            >
              <div className="album-fine-art-paper-surface">
                <div className="photo-mat-frame">
                  <img
                    src={activeSpread.left.image}
                    alt={activeSpread.left.caption}
                    className="album-spread-photograph"
                    loading="eager"
                  />
                  <div className="spread-editorial-caption">
                    <span className="caption-venue">{activeSpread.venue}</span>
                    <span className="caption-text">{activeSpread.left.caption}</span>
                  </div>
                </div>
                <div className="page-number-indicator left-num">
                  0{currentSpreadIndex * 2 + 1}
                </div>
              </div>
              {/* Center Gutter Crease Ambient Shadow */}
              <div className="gutter-depth-shadow-left" />
            </div>

            {/* RIGHT PAGE */}
            <div
              className="album-page-leaf right-leaf"
              onClick={isOpen ? handleNextPage : undefined}
              title={currentSpreadIndex < totalSpreads - 1 ? 'Click to Flip Next Page' : undefined}
            >
              <div className="album-fine-art-paper-surface">
                <div className="photo-mat-frame">
                  <img
                    src={activeSpread.right.image}
                    alt={activeSpread.right.caption}
                    className="album-spread-photograph"
                    loading="eager"
                  />
                  <div className="spread-editorial-caption">
                    <span className="caption-venue">{activeSpread.title}</span>
                    <span className="caption-text">{activeSpread.right.caption}</span>
                  </div>
                </div>
                <div className="page-number-indicator right-num">
                  0{currentSpreadIndex * 2 + 2}
                </div>
              </div>
              {/* Center Gutter Crease Ambient Shadow */}
              <div className="gutter-depth-shadow-right" />
            </div>
          </div>

          {/* =========================================================
              5. ANIMATED FLIPPING LEAF (Double-Sided 3D Page)
              ========================================================= */}
          <div ref={leafRef} className="real-album-turning-leaf" style={{ display: 'none' }}>
            {/* Front of Turning Leaf (Right Page of Current Spread) */}
            <div className="turning-face turning-front">
              <div className="album-fine-art-paper-surface">
                <div className="photo-mat-frame">
                  <img
                    src={
                      flipDirection === 'next'
                        ? activeSpread.right.image
                        : ALBUM_SPREADS[prevSpreadIndex].right.image
                    }
                    alt="Page turn surface"
                    className="album-spread-photograph"
                  />
                </div>
              </div>
              <div className="turning-dynamic-shadow front-shadow" />
            </div>

            {/* Back of Turning Leaf (Left Page of Next Spread) */}
            <div className="turning-face turning-back">
              <div className="album-fine-art-paper-surface">
                <div className="photo-mat-frame">
                  <img
                    src={
                      flipDirection === 'next'
                        ? ALBUM_SPREADS[nextSpreadIndex].left.image
                        : activeSpread.left.image
                    }
                    alt="Page turn surface back"
                    className="album-spread-photograph"
                  />
                </div>
              </div>
              <div className="turning-dynamic-shadow back-shadow" />
            </div>
          </div>

          {/* =========================================================
              6. HARDCOVER FRONT (Opens around spine hinge -180deg)
              ========================================================= */}
          <div
            ref={coverRef}
            className="real-album-front-cover"
            style={{ backgroundColor: material.hex }}
          >
            {/* OUTSIDE COVER (Gold Debossed Monogram) */}
            <div className="cover-face cover-front-face">
              <div className="album-cover-texture-overlay" />
              <div
                className="cover-debossed-frame"
                style={{ borderColor: material.accent }}
              >
                <div className="cover-gold-crest" style={{ color: material.accent }}>
                  ✦
                </div>
                <h3
                  className="cover-foil-title"
                  style={{ color: material.accent }}
                >
                  ULTRAA ALBUMS
                </h3>
                <div
                  className="cover-gold-hairline"
                  style={{ backgroundColor: material.accent }}
                />
                <p
                  className="cover-foil-subtitle"
                  style={{ color: material.accent }}
                >
                  HEIRLOOM WEDDING VOL. XII
                </p>
                <span
                  className="cover-foil-edition"
                  style={{ color: material.accent }}
                >
                  FINE ART FLUSH MOUNT BINDERY
                </span>
              </div>
              {/* Glossy Sheen Highlight Reflection */}
              <div className="cover-specular-highlight" />
            </div>

            {/* INSIDE COVER (Flyleaf Endpaper) */}
            <div className="cover-face cover-back-face">
              <div className="cover-inside-flyleaf">
                <div className="flyleaf-bookplate">
                  <span className="bookplate-seal">EX LIBRIS</span>
                  <span className="bookplate-text">Ultraa Atelier Master Registry</span>
                  <span className="bookplate-num">Specimen No. 2026-UA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE HUD & ATELIER CONTROLS
          ========================================================= */}
      <div className="album-controls-dock w-full px-2">
        {!isOpen ? (
          <button
            type="button"
            className="album-open-cta-btn"
            onClick={handleOpenAlbum}
          >
            <BookOpen size={14} className="shrink-0" />
            <span className="hidden sm:inline">Click or Tap to Open Heirloom Album</span>
            <span className="sm:hidden">Tap to Open Album</span>
            <Sparkles size={13} className="sparkle-icon shrink-0" />
          </button>
        ) : (
          <div className="album-open-controls-bar">
            {/* Prev Button */}
            <button
              type="button"
              className="album-step-btn"
              onClick={handlePrevPage}
              disabled={currentSpreadIndex === 0}
              title="Previous Page Spread"
            >
              <ChevronLeft size={14} className="shrink-0" />
              <span className="hidden sm:inline">Prev Spread</span>
              <span className="sm:hidden">Prev</span>
            </button>

            {/* Spread Counter & Metadata */}
            <div className="album-spread-docket">
              <span className="docket-counter">
                0{currentSpreadIndex + 1} / 0{totalSpreads}
              </span>
              <span className="docket-title hidden md:block">
                {activeSpread.title}
              </span>
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="album-step-btn"
              onClick={handleNextPage}
              disabled={currentSpreadIndex === totalSpreads - 1}
              title="Next Page Spread"
            >
              <span className="hidden sm:inline">Next Spread</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight size={14} className="shrink-0" />
            </button>

            {/* Close Album Button */}
            <button
              type="button"
              className="album-close-btn"
              onClick={handleCloseAlbum}
              title="Close Album"
            >
              <X size={13} className="shrink-0" />
              <span>Close</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
