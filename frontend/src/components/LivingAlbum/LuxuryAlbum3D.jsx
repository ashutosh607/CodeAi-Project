import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X
} from 'lucide-react';

export const LUXURY_SPREADS = [
  {
    id: 1,
    title: 'The Preparations & Sacred Vows',
    venue: 'Castello di Celsa, Tuscany',
    left: {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 01 • The Morning Robe & French Chantilly Lace'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 02 • Exchange of Vows beneath the Ancient Olive Canopy'
    }
  },
  {
    id: 2,
    title: 'Golden Hour & Terraced Gardens',
    venue: 'Villa Balbianello, Lake Como',
    left: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 03 • First Steps as Husband & Wife across Cypress Allée'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 04 • Bespoke Solitaire Rings & Wild Botanical Suite'
    }
  },
  {
    id: 3,
    title: 'The Stately Banquet & Speeches',
    venue: 'Hedsor House, Buckinghamshire',
    left: {
      image: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 05 • The Grand Dining Hall under Victorian Chandeliers'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 06 • Father of the Bride Toast & Emotional Embraces'
    }
  },
  {
    id: 4,
    title: 'The First Dance & Midnight Lanterns',
    venue: 'The Glasshouse Orangery, Cotswolds',
    left: {
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 07 • Waltzing beneath Starlight & Cascading Florals'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 08 • Farewell Sparklers & Handcrafted Heirloom Volume'
    }
  }
];

export default function LuxuryAlbum3D({
  isOpen,
  setIsOpen,
  material,
  onOpenFilm
}) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [dragStartX, setDragStartX] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const closedBookRef = useRef(null);
  const openBookRef = useRef(null);
  const leafRef = useRef(null);
  const floatTweenRef = useRef(null);

  const totalSpreads = LUXURY_SPREADS.length;
  const activeSpread = LUXURY_SPREADS[currentSpreadIndex];
  const nextSpreadIndex = Math.min(currentSpreadIndex + 1, totalSpreads - 1);
  const prevSpreadIndex = Math.max(currentSpreadIndex - 1, 0);

  // 1. Subtle, slow vertical floating and rotation when suspended in studio air (Closed State)
  useEffect(() => {
    if (isOpen || isHovered) {
      if (floatTweenRef.current) {
        floatTweenRef.current.pause();
      }
      return;
    }

    const isMobile = window.innerWidth < 640;
    if (isMobile) return;

    if (closedBookRef.current) {
      floatTweenRef.current = gsap.timeline({ repeat: -1, yoyo: true });
      floatTweenRef.current.to(closedBookRef.current, {
        y: -7,
        rotateY: -12.5,
        rotateX: 2,
        duration: 5.5,
        ease: 'sine.inOut'
      });
    }

    return () => {
      if (floatTweenRef.current) {
        floatTweenRef.current.kill();
      }
    };
  }, [isOpen, isHovered]);

  // 2. Open Album Action (Clean transition without overlapping the left column)
  const handleOpenAlbum = useCallback(() => {
    if (isOpen || isFlipping) return;
    if (floatTweenRef.current) floatTweenRef.current.kill();
    setIsFlipping(true);

    // Animate closed book opening slightly then reveal layflat spread
    if (closedBookRef.current) {
      gsap.to(closedBookRef.current, {
        rotateY: -35,
        scale: 1.02,
        duration: 0.45,
        ease: 'power2.in',
        onComplete: () => {
          setIsOpen(true);
          setIsFlipping(false);
          // Animate open spread entry
          if (openBookRef.current) {
            gsap.fromTo(
              openBookRef.current,
              { opacity: 0, scale: 0.94, rotateX: 6 },
              { opacity: 1, scale: 1, rotateX: 4, duration: 0.55, ease: 'power2.out' }
            );
          }
        }
      });
    } else {
      setIsOpen(true);
      setIsFlipping(false);
    }
  }, [isOpen, isFlipping, setIsOpen]);

  // 3. Close Album Action (Returns strictly to suspended closed book)
  const handleCloseAlbum = useCallback(() => {
    if (!isOpen || isFlipping) return;
    setIsFlipping(true);

    if (openBookRef.current) {
      gsap.to(openBookRef.current, {
        opacity: 0,
        scale: 0.94,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setIsOpen(false);
          setIsFlipping(false);
          setCurrentSpreadIndex(0);
          if (closedBookRef.current) {
            gsap.fromTo(
              closedBookRef.current,
              { rotateY: -28, scale: 0.94 },
              { rotateY: -15, scale: 0.98, rotateX: 2.5, y: 0, duration: 0.6, ease: 'power2.out' }
            );
          }
        }
      });
    } else {
      setIsOpen(false);
      setIsFlipping(false);
      setCurrentSpreadIndex(0);
    }
  }, [isOpen, isFlipping, setIsOpen]);

  // 4. Page Turning: Next
  const handleNextPage = useCallback(() => {
    if (!isOpen || isFlipping || currentSpreadIndex >= totalSpreads - 1) return;
    setIsFlipping(true);
    setFlipDirection('next');

    const leaf = leafRef.current;
    if (!leaf) {
      setCurrentSpreadIndex((prev) => prev + 1);
      setIsFlipping(false);
      return;
    }

    gsap.set(leaf, {
      display: 'block',
      left: '50%',
      rotateY: 0,
      transformOrigin: 'left center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev + 1);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsFlipping(false);
      }
    });

    tl.to(leaf, {
      rotateY: -90,
      skewY: -3,
      duration: 0.35,
      ease: 'power2.in'
    });

    tl.to(leaf, {
      rotateY: -180,
      skewY: 0,
      duration: 0.35,
      ease: 'power2.out'
    });
  }, [isOpen, isFlipping, currentSpreadIndex, totalSpreads]);

  // 5. Page Turning: Prev
  const handlePrevPage = useCallback(() => {
    if (!isOpen || isFlipping || currentSpreadIndex <= 0) return;
    setIsFlipping(true);
    setFlipDirection('prev');

    const leaf = leafRef.current;
    if (!leaf) {
      setCurrentSpreadIndex((prev) => prev - 1);
      setIsFlipping(false);
      return;
    }

    gsap.set(leaf, {
      display: 'block',
      left: '0%',
      rotateY: -180,
      transformOrigin: 'right center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev - 1);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsFlipping(false);
      }
    });

    tl.to(leaf, {
      rotateY: -90,
      skewY: 3,
      duration: 0.35,
      ease: 'power2.in'
    });

    tl.to(leaf, {
      rotateY: 0,
      skewY: 0,
      duration: 0.35,
      ease: 'power2.out'
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

  // Drag rotation when closed
  const handleTouchStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };

  const handleTouchMove = (e) => {
    if (dragStartX === null || isOpen) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - dragStartX) * 0.2;
    const newYaw = Math.max(-40, Math.min(10, -15 + delta));
    if (closedBookRef.current) {
      gsap.to(closedBookRef.current, { rotateY: newYaw, duration: 0.1, overwrite: 'auto' });
    }
  };

  const handleTouchEnd = (e) => {
    if (dragStartX === null) return;
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = clientX - dragStartX;

    if (isOpen) {
      if (diff < -40) handleNextPage();
      else if (diff > 40) handlePrevPage();
    } else {
      if (closedBookRef.current) {
        gsap.to(closedBookRef.current, { rotateY: -15, rotateX: 2.5, duration: 0.8, ease: 'power2.out' });
      }
    }
    setDragStartX(null);
  };

  return (
    <div
      className="luxury-album-stage relative w-full flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      {/* 1. Ambient Circular Halo Orbit (Behind Album) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full border border-[#B99A69]/20 opacity-60" />
        <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-radial from-[#FAF7F2] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. Side Floating Chevrons (Direct Navigation) */}
      <button
        type="button"
        onClick={isOpen ? handlePrevPage : () => {
          if (closedBookRef.current) gsap.to(closedBookRef.current, { rotateY: -28, duration: 0.5, yoyo: true, repeat: 1 });
        }}
        disabled={isOpen && currentSpreadIndex === 0}
        className="absolute left-1 sm:left-2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-sm text-[#201E1B] flex items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs cursor-pointer"
        aria-label="Previous Page Spread"
        title="Previous Page"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        type="button"
        onClick={isOpen ? handleNextPage : handleOpenAlbum}
        disabled={isOpen && currentSpreadIndex === totalSpreads - 1}
        className="absolute right-1 sm:right-2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-sm text-[#201E1B] flex items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed shadow-xs cursor-pointer"
        aria-label="Next Page Spread"
        title={isOpen ? "Next Page" : "Open Album"}
      >
        <ChevronRight size={16} />
      </button>

      {/* 3. The 3D Scene Viewport: Constrained to 480px width so it NEVER overflows into left text */}
      <div className="real-album-3d-scene relative w-full max-w-[480px] h-[340px] sm:h-[420px] flex items-center justify-center perspective-[1600px]">
        
        {/* Soft Ambient Depth Shadow Suspended Behind the Album (No floor/glass line) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] pointer-events-none rounded-full transition-all duration-700"
          style={{
            width: isOpen ? '460px' : '280px',
            height: isOpen ? '340px' : '340px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(32, 30, 27, 0.18) 0%, rgba(32, 30, 27, 0.05) 50%, transparent 72%)',
            filter: 'blur(30px)',
            opacity: isOpen ? 0.35 : 0.28,
            transform: 'translate(-50%, -48%) translateZ(-30px)'
          }}
        />

        {/* =========================================================================
            STATE A: CLOSED ALBUM (Standing Upright in Studio Air, Suspended)
            ========================================================================= */}
        {!isOpen && (
          <div
            ref={closedBookRef}
            onClick={handleOpenAlbum}
            title="Click to Open Heirloom Album"
            className="real-album-closed-container relative cursor-pointer transform-style-3d will-change-transform"
            style={{
              width: '230px',
              height: '310px',
              transform: 'rotateX(2.5deg) rotateY(-15deg) rotateZ(0deg) scale(0.98)'
            }}
          >
            {/* 1. Back Cover Underlay */}
            <div
              className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-xs overflow-hidden"
              style={{
                backgroundColor: material.color,
                transform: 'translateZ(-18px)',
                boxShadow: '0 20px 48px -10px rgba(32, 30, 27, 0.22), 0 8px 18px -4px rgba(32, 30, 27, 0.1)'
              }}
            >
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    material.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.18) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />
            </div>

            {/* 2. Spine Hinge with Debossed Monogram */}
            <div
              className="absolute top-0 -left-[14px] w-[14px] h-full rounded-l-xs flex flex-col justify-between py-6 px-0.5 items-center z-20 pointer-events-none"
              style={{
                backgroundColor: material.color,
                transform: 'rotateY(-90deg) translateZ(7px)',
                boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.12)'
              }}
            >
              <div className="flex flex-col gap-2.5 opacity-60">
                <span className="w-2 h-0.5 bg-black/40 rounded-full" />
                <span className="w-2 h-0.5 bg-black/40 rounded-full" />
              </div>
              <span
                className="font-serif text-[7.5px] uppercase tracking-[0.24em] font-medium"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: material.accent
                }}
              >
                ULTRAA ALBUMS • MMXXVI
              </span>
              <div className="flex flex-col gap-2.5 opacity-60">
                <span className="w-2 h-0.5 bg-black/40 rounded-full" />
                <span className="w-2 h-0.5 bg-black/40 rounded-full" />
              </div>
            </div>

            {/* 3. Archival 1.1mm Core Paper Edges (Right side) */}
            <div
              className="absolute top-1 right-0 w-[14px] h-[calc(100%-8px)] pointer-events-none"
              style={{
                transform: 'rotateY(90deg) translateZ(-7px)',
                background: 'repeating-linear-gradient(to bottom, #FAF7F2 0px, #FAF7F2 2px, #DED5C9 2px, #DED5C9 3px)',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.15)'
              }}
            />

            {/* 4. Inside Peek */}
            <div
              className="absolute top-1 left-2 w-[calc(100%-8px)] h-[calc(100%-8px)] bg-[#FAF7F2] rounded-xs overflow-hidden z-10 pointer-events-none"
              style={{
                transform: 'rotateY(-2.5deg) translateZ(-6px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
              }}
            >
              <img
                src={activeSpread.right.image}
                alt="Inside Peek"
                className="w-full h-full object-cover filter grayscale contrast-110 opacity-70"
              />
            </div>

            {/* 5. Hardcover Front (Debossed Gold Foil) */}
            <div
              className="absolute top-0 left-0 w-full h-full rounded-xs z-25 overflow-hidden flex items-center justify-center p-5 sm:p-6"
              style={{
                backgroundColor: material.color,
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 16px 36px rgba(32,30,27,0.22)'
              }}
            >
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    material.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.18) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />

              {/* Debossed Gold Frame & Monogram */}
              <div
                className="cover-debossed-frame relative w-full h-full border-[1.5px] flex flex-col items-center justify-center text-center p-4 transition-colors"
                style={{
                  borderColor: material.accent,
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                <div
                  className="cover-gold-crest text-[16px] sm:text-[18px] mb-2 font-serif"
                  style={{ color: material.accent }}
                >
                  ✦
                </div>

                <h3
                  className="cover-foil-title font-serif text-[15px] sm:text-[19px] font-normal tracking-[0.22em] uppercase leading-tight m-0"
                  style={{ color: material.accent, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  ULTRAA ALBUMS
                </h3>

                <div
                  className="w-10 sm:w-12 h-[1.2px] my-2 sm:my-2.5 opacity-80"
                  style={{ backgroundColor: material.accent }}
                />

                <p
                  className="font-serif text-[8.5px] sm:text-[10px] tracking-[0.18em] uppercase m-0 mb-2 opacity-90"
                  style={{ color: material.accent }}
                >
                  HEIRLOOM WEDDING VOL. XII
                </p>

                <span
                  className="font-sans text-[6.5px] sm:text-[7.5px] font-medium tracking-[0.2em] uppercase opacity-75"
                  style={{ color: material.accent }}
                >
                  FINE ART FLUSH MOUNT BINDERY
                </span>
              </div>

              {/* Matte studio diffused daylight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-black/8 pointer-events-none" />
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE B: OPEN ALBUM (Layflat Panoramic Spreads, Strictly 460px Wide)
            ========================================================================= */}
        {isOpen && (
          <div
            ref={openBookRef}
            className="real-album-open-container relative mx-auto transform-style-3d will-change-transform"
            style={{
              width: '100%',
              maxWidth: '460px',
              height: '300px',
              transform: 'rotateX(4deg) rotateY(0deg) scale(1)'
            }}
          >
            {/* 1. Underlying Archival Hardcover Casing Board (In Chosen Material) */}
            <div
              className="absolute -top-1.5 -left-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] rounded-sm overflow-hidden"
              style={{
                backgroundColor: material.color,
                boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.28), 0 8px 24px -6px rgba(32, 30, 27, 0.12)'
              }}
            >
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    material.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.18) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />
            </div>

            {/* 2. Panoramic Dual-Page Layflat Spread */}
            <div className="relative w-full h-full flex rounded-xs overflow-hidden shadow-lg border border-[#DED5C9]">
              
              {/* LEFT PAGE */}
              <div
                className="w-1/2 h-full bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between border-r border-[#DED5C9] cursor-pointer relative"
                onClick={handlePrevPage}
                title={currentSpreadIndex > 0 ? "Click to flip previous page" : undefined}
              >
                <div className="relative w-full h-[calc(100%-18px)] overflow-hidden border border-black/10 shadow-xs">
                  <img
                    src={activeSpread.left.image}
                    alt={activeSpread.left.caption}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 pt-4 flex flex-col text-white">
                    <span className="font-serif text-[9px] sm:text-[10px] tracking-wide font-medium leading-tight">
                      {activeSpread.venue}
                    </span>
                    <span className="font-sans text-[7.5px] opacity-80 mt-0.5 truncate hidden sm:block">
                      {activeSpread.left.caption}
                    </span>
                  </div>
                </div>
                <div className="font-serif text-[8.5px] sm:text-[9.5px] tracking-widest text-[#777066] text-left">
                  0{currentSpreadIndex * 2 + 1}
                </div>
                {/* Zero-Gutter Layflat Center Fold Shadow */}
                <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
              </div>

              {/* RIGHT PAGE */}
              <div
                className="w-1/2 h-full bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between border-l border-[#DED5C9] cursor-pointer relative"
                onClick={handleNextPage}
                title={currentSpreadIndex < totalSpreads - 1 ? "Click to flip next page" : undefined}
              >
                <div className="relative w-full h-[calc(100%-18px)] overflow-hidden border border-black/10 shadow-xs">
                  <img
                    src={activeSpread.right.image}
                    alt={activeSpread.right.caption}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 pt-4 flex flex-col text-white">
                    <span className="font-serif text-[9px] sm:text-[10px] tracking-wide font-medium leading-tight">
                      {activeSpread.title}
                    </span>
                    <span className="font-sans text-[7.5px] opacity-80 mt-0.5 truncate hidden sm:block">
                      {activeSpread.right.caption}
                    </span>
                  </div>
                </div>
                <div className="font-serif text-[8.5px] sm:text-[9.5px] tracking-widest text-[#777066] text-right">
                  0{currentSpreadIndex * 2 + 2}
                </div>
                {/* Zero-Gutter Layflat Center Fold Shadow */}
                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
              </div>

              {/* 3. Dynamic Page Turn Leaf (Bends with Realistic Physics during Flip) */}
              <div
                ref={leafRef}
                className="real-album-turning-leaf absolute top-0 w-1/2 h-full hidden pointer-events-none transform-style-3d shadow-2xl"
              >
                {/* Front of Turning Leaf */}
                <div className="turning-face turning-front absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between">
                  <div className="relative w-full h-[calc(100%-18px)] overflow-hidden border border-black/10">
                    <img
                      src={
                        flipDirection === 'next'
                          ? activeSpread.right.image
                          : LUXURY_SPREADS[prevSpreadIndex].right.image
                      }
                      alt="Turning Surface"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Back of Turning Leaf */}
                <div
                  className="turning-face turning-back absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] p-2.5 sm:p-3 flex flex-col justify-between"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="relative w-full h-[calc(100%-18px)] overflow-hidden border border-black/10">
                    <img
                      src={
                        flipDirection === 'next'
                          ? LUXURY_SPREADS[nextSpreadIndex].left.image
                          : activeSpread.left.image
                      }
                      alt="Turning Back Surface"
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* 4. Controls Dock at Bottom: Both Closed & Open States */}
      <div className="album-controls-dock mt-4 sm:mt-5 flex flex-col items-center justify-center w-full z-30">
        {!isOpen ? (
          <div className="flex flex-col items-center gap-2">
            {/* Reference Indicator: —— 01 / 04 —— */}
            <button
              type="button"
              onClick={handleOpenAlbum}
              className="group flex items-center gap-3 bg-transparent border-none cursor-pointer py-1 px-3 transition-transform hover:scale-105"
              title="Click to Open Heirloom Album"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
              <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] text-[#201E1B]">
                0{currentSpreadIndex + 1} / 0{totalSpreads}
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
            </button>

            {/* Clean Pill Button to Open */}
            <button
              type="button"
              onClick={handleOpenAlbum}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#201E1B] text-[#FAF7F2] text-[10px] font-sans font-medium uppercase tracking-[0.16em] hover:bg-[#B99A69] transition-all cursor-pointer shadow-xs"
            >
              <BookOpen size={11} className="text-[#B99A69]" />
              <span>Open Heirloom Album</span>
              <span className="text-[#B99A69]">✦</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-5 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DED5C9] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-sm">
            {/* Prev Spread */}
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={currentSpreadIndex === 0}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-30 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            {/* Reference Indicator: —— 01 / 04 —— */}
            <div className="flex items-center gap-2 text-[#777066]">
              <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[#201E1B]">
                0{currentSpreadIndex + 1} / 0{totalSpreads}
              </span>
              <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
            </div>

            {/* Next Spread */}
            <button
              type="button"
              onClick={handleNextPage}
              disabled={currentSpreadIndex === totalSpreads - 1}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-30 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>

            <span className="w-[1px] h-3.5 bg-[#DED5C9]" />

            {/* Close Cover */}
            <button
              type="button"
              onClick={handleCloseAlbum}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#777066] hover:text-[#201E1B] bg-transparent border-none cursor-pointer"
              title="Close Album Cover"
            >
              <X size={12} />
              <span>Close</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
