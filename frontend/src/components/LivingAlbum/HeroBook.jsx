import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import BookPage from './BookPage';
import BookControls from './BookControls';

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
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85',
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
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 08 • Farewell Sparklers & Handcrafted Heirloom Volume'
    }
  }
];

// Luxury atelier easing curves
const LUXURY_EASE = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
const GSAP_LUXURY_EASE = 'power2.inOut';

/**
 * HeroBook Component
 * 
 * Rebuilt 3D heirloom album featuring:
 * - Strict containment in right column (zero text overlap)
 * - 3D hinged covers and multi-segment curved page flips
 * - Preloaded imagery with graceful fallback
 * - Natural mid-air suspension (no floor or table)
 * - Accessible controls, touch swipe, keyboard navigation, and prefers-reduced-motion support
 */
export default function HeroBook({
  isOpen,
  setIsOpen,
  material
}) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // References
  const stageRef = useRef(null);
  const bookContainerRef = useRef(null);
  const frontCoverRef = useRef(null);
  const turnLeafRef = useRef(null);
  const turnFrontShadowRef = useRef(null);
  const turnBackShadowRef = useRef(null);
  const underlyingLeftShadowRef = useRef(null);
  const underlyingRightShadowRef = useRef(null);
  const floatTweenRef = useRef(null);

  // Touch gesture state
  const touchStartXRef = useRef(null);

  const totalSpreads = LUXURY_SPREADS.length;
  const activeSpread = LUXURY_SPREADS[currentSpreadIndex];
  const nextSpreadIndex = Math.min(currentSpreadIndex + 1, totalSpreads - 1);
  const prevSpreadIndex = Math.max(currentSpreadIndex - 1, 0);

  // Responsive page width: 210px desktop, 150px mobile
  const getPageWidth = () => (typeof window !== 'undefined' && window.innerWidth < 640 ? 150 : 210);

  // 1. Preload all spread images on mount to prevent stutter
  useEffect(() => {
    LUXURY_SPREADS.forEach((spread) => {
      if (spread.left?.image) {
        const imgL = new Image();
        imgL.src = spread.left.image;
      }
      if (spread.right?.image) {
        const imgR = new Image();
        imgR.src = spread.right.image;
      }
    });

    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 2. Subtle, slow vertical floating when closed (weightlessly suspended in studio air)
  useEffect(() => {
    if (isOpen || prefersReducedMotion) {
      if (floatTweenRef.current) floatTweenRef.current.pause();
      return;
    }

    const isMobile = window.innerWidth < 640;
    if (isMobile) return;

    if (bookContainerRef.current) {
      floatTweenRef.current = gsap.timeline({ repeat: -1, yoyo: true });
      floatTweenRef.current.to(bookContainerRef.current, {
        y: -6,
        rotateY: -11,
        rotateX: 2,
        duration: 5.2,
        ease: 'sine.inOut'
      });
    }

    return () => {
      if (floatTweenRef.current) floatTweenRef.current.kill();
    };
  }, [isOpen, prefersReducedMotion]);

  // 3. Open Album Action (Cover rotates -180deg around spine while book centers balance)
  const handleOpenAlbum = useCallback(() => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);
    if (floatTweenRef.current) floatTweenRef.current.kill();

    const pageWidth = getPageWidth();
    const cover = frontCoverRef.current;
    const container = bookContainerRef.current;

    if (prefersReducedMotion) {
      setIsOpen(true);
      setIsAnimating(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      }
    });

    // A. Book container slides from translateX(-pageWidth / 2) to translateX(0) so the spine centers
    tl.to(container, {
      x: 0,
      y: 0,
      rotateX: 3.5,
      rotateY: 0,
      scale: 1,
      duration: 1.1,
      ease: GSAP_LUXURY_EASE
    });

    // B. Front Cover rotates -180deg around left spine edge
    if (cover) {
      tl.to(
        cover,
        {
          rotateY: -180,
          duration: 1.1,
          ease: GSAP_LUXURY_EASE
        },
        '-=1.1'
      );
    }
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen]);

  // 4. Close Album Action (Reverses open animation smoothly)
  const handleCloseAlbum = useCallback(() => {
    if (!isOpen || isAnimating) return;
    setIsAnimating(true);

    const pageWidth = getPageWidth();
    const cover = frontCoverRef.current;
    const container = bookContainerRef.current;

    if (prefersReducedMotion) {
      setIsOpen(false);
      setCurrentSpreadIndex(0);
      setIsAnimating(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setCurrentSpreadIndex(0);
        setIsAnimating(false);
      }
    });

    // A. Front Cover rotates back from -180deg to 0deg
    if (cover) {
      tl.to(cover, {
        rotateY: 0,
        duration: 1.05,
        ease: GSAP_LUXURY_EASE
      });
    }

    // B. Book container slides back so closed cover is centered (translateX = -pageWidth / 2)
    tl.to(
      container,
      {
        x: -pageWidth / 2,
        y: 0,
        rotateX: 2.5,
        rotateY: -14,
        scale: 0.98,
        duration: 1.05,
        ease: GSAP_LUXURY_EASE
      },
      '-=1.05'
    );
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen]);

  // 5. Page Turn NEXT (Turning right leaf from 0deg to -180deg)
  const handleNextPage = useCallback(() => {
    if (!isOpen || isAnimating || currentSpreadIndex >= totalSpreads - 1) return;
    setIsAnimating(true);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;
    const underRightShadow = underlyingRightShadowRef.current;
    const underLeftShadow = underlyingLeftShadowRef.current;

    if (prefersReducedMotion || !leaf) {
      setCurrentSpreadIndex((prev) => prev + 1);
      setIsAnimating(false);
      return;
    }

    // Set leaf on the right side
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
        setIsAnimating(false);
      }
    });

    // Phase 1: Lift from right page, curl slightly (0deg -> -90deg)
    tl.to(leaf, {
      rotateY: -90,
      skewY: -2,
      duration: 0.42,
      ease: 'power2.in'
    });

    // Fade in moving gradient shadow on front face
    if (frontShadow) {
      tl.to(frontShadow, { opacity: 0.4, duration: 0.42 }, 0);
    }
    // Fade in soft shadow on underlying right page
    if (underRightShadow) {
      tl.to(underRightShadow, { opacity: 0.3, duration: 0.42 }, 0);
    }

    // Phase 2: Settle flat onto left page (-90deg -> -180deg)
    tl.to(leaf, {
      rotateY: -180,
      skewY: 0,
      duration: 0.48,
      ease: 'power2.out'
    });

    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0.45 }, { opacity: 0, duration: 0.48 }, '-=0.48');
    }
    if (underLeftShadow) {
      tl.fromTo(underLeftShadow, { opacity: 0.35 }, { opacity: 0, duration: 0.48 }, '-=0.48');
    }
    if (underRightShadow) {
      tl.to(underRightShadow, { opacity: 0, duration: 0.3 }, '-=0.3');
    }
  }, [isOpen, isAnimating, currentSpreadIndex, totalSpreads, prefersReducedMotion]);

  // 6. Page Turn PREV (Turning left leaf from -180deg back to 0deg)
  const handlePrevPage = useCallback(() => {
    if (!isOpen || isAnimating || currentSpreadIndex <= 0) return;
    setIsAnimating(true);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;
    const underLeftShadow = underlyingLeftShadowRef.current;
    const underRightShadow = underlyingRightShadowRef.current;

    if (prefersReducedMotion || !leaf) {
      setCurrentSpreadIndex((prev) => prev - 1);
      setIsAnimating(false);
      return;
    }

    // Set leaf on the right side with pivot at left center, starting at -180deg
    gsap.set(leaf, {
      display: 'block',
      left: '50%',
      rotateY: -180,
      transformOrigin: 'left center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex((prev) => prev - 1);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsAnimating(false);
      }
    });

    // Phase 1: Lift from left page (-180deg -> -90deg)
    tl.to(leaf, {
      rotateY: -90,
      skewY: 2,
      duration: 0.42,
      ease: 'power2.in'
    });

    if (backShadow) {
      tl.to(backShadow, { opacity: 0.4, duration: 0.42 }, 0);
    }
    if (underLeftShadow) {
      tl.to(underLeftShadow, { opacity: 0.3, duration: 0.42 }, 0);
    }

    // Phase 2: Settle flat onto right page (-90deg -> 0deg)
    tl.to(leaf, {
      rotateY: 0,
      skewY: 0,
      duration: 0.48,
      ease: 'power2.out'
    });

    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0.45 }, { opacity: 0, duration: 0.48 }, '-=0.48');
    }
    if (underRightShadow) {
      tl.fromTo(underRightShadow, { opacity: 0.35 }, { opacity: 0, duration: 0.48 }, '-=0.48');
    }
    if (underLeftShadow) {
      tl.to(underLeftShadow, { opacity: 0, duration: 0.3 }, '-=0.3');
    }
  }, [isOpen, isAnimating, currentSpreadIndex, prefersReducedMotion]);

  // 7. Keyboard Navigation (ArrowLeft, ArrowRight, Escape)
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

  // 8. Touch Swipe Gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;

    if (isOpen) {
      if (diff < -45) handleNextPage();
      else if (diff > 45) handlePrevPage();
    } else {
      if (diff < -30) handleOpenAlbum();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      ref={stageRef}
      className="hero-book-stage relative w-full flex flex-col items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Ambient Circular Halo Orbit (Suspended studio atmosphere behind album) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full border border-[#B99A69]/20 opacity-60" />
        <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-gradient-radial from-[#FAF7F2] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. The 3D Scene Viewport (perspective: 2200px, strictly contained) */}
      <div
        className="hero-book-viewport relative w-full max-w-[460px] h-[300px] sm:h-[320px] flex items-center justify-center"
        style={{ perspective: '2200px' }}
      >
        {/* Soft Ambient Depth Shadow Suspended in Mid-Air Behind Album (No floor/glass line) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full transition-all duration-700"
          style={{
            width: isOpen ? '450px' : '260px',
            height: isOpen ? '310px' : '310px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(32, 30, 27, 0.20) 0%, rgba(32, 30, 27, 0.05) 50%, transparent 72%)',
            filter: 'blur(32px)',
            opacity: isOpen ? 0.38 : 0.28,
            transform: 'translate(-50%, -50%) translateZ(-35px)'
          }}
        />

        {/* =========================================================================
            3D BOOK BODY CONTAINER
            - Closed: translateX(-pageWidth / 2) so the closed book is centered
            - Open: translateX(0) so the spine is centered
            ========================================================================= */}
        <div
          ref={bookContainerRef}
          className="relative transform-style-3d will-change-transform"
          style={{
            width: '420px', // Total open spread width (2 * 210px desktop)
            height: '280px',
            transform: isOpen
              ? 'translateX(0px) rotateX(3.5deg) rotateY(0deg) scale(1)'
              : 'translateX(-105px) rotateX(2.5deg) rotateY(-14deg) scale(0.98)'
          }}
        >
          {/* A. Hardcover Archival Base Board (Forms the underlying casing) */}
          <div
            className="absolute -top-1.5 -left-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] rounded-xs overflow-hidden"
            style={{
              backgroundColor: material.color,
              boxShadow: '0 24px 64px -14px rgba(32, 30, 27, 0.28), 0 8px 24px -6px rgba(32, 30, 27, 0.12)',
              transform: 'translateZ(-14px)'
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

          {/* B. Spine Ribs & Headband (Visible on the left when closed) */}
          <div
            className={`absolute top-0 left-[210px] -translate-x-1/2 w-[16px] h-full transition-opacity duration-500 z-10 pointer-events-none ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Center zero-gutter fold creasing shadow */}
            <div className="w-full h-full bg-gradient-to-r from-black/15 via-black/35 to-black/15 opacity-60" />
          </div>

          {/* C. LEFT PAGE (Current Spread Left) */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full z-10"
            style={{ transformOrigin: 'right center' }}
          >
            <BookPage
              pageData={activeSpread.left}
              pageNumber={currentSpreadIndex * 2 + 1}
              side="left"
              isGutterShadow={true}
            />
            {/* Soft shadow cast on left page during turns */}
            <div
              ref={underlyingLeftShadowRef}
              className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none opacity-0 transition-opacity"
            />
          </div>

          {/* D. RIGHT PAGE (Current Spread Right) */}
          <div
            className="absolute top-0 left-1/2 w-1/2 h-full z-10"
            style={{ transformOrigin: 'left center' }}
          >
            <BookPage
              pageData={activeSpread.right}
              pageNumber={currentSpreadIndex * 2 + 2}
              side="right"
              isGutterShadow={true}
            />
            {/* Soft shadow cast on right page during turns */}
            <div
              ref={underlyingRightShadowRef}
              className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none opacity-0 transition-opacity"
            />
          </div>

          {/* E. DYNAMIC 3D TURNING LEAF (Hinged at Center Spine x = 50%) */}
          <div
            ref={turnLeafRef}
            className="absolute top-0 w-1/2 h-full hidden pointer-events-none transform-style-3d will-change-transform z-35"
            style={{
              left: '50%',
              transformOrigin: 'left center'
            }}
          >
            {/* Front Face of Turning Leaf (Right Page turning away) */}
            <div className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-r-xs shadow-xl">
              <BookPage
                pageData={
                  isAnimating && currentSpreadIndex < totalSpreads - 1
                    ? activeSpread.right
                    : LUXURY_SPREADS[prevSpreadIndex].right
                }
                pageNumber={currentSpreadIndex * 2 + 2}
                side="right"
                isGutterShadow={true}
              />
              {/* Dynamic shadow on front face during turn */}
              <div
                ref={turnFrontShadowRef}
                className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
              />
            </div>

            {/* Back Face of Turning Leaf (Next Left Page settling down) */}
            <div
              className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-l-xs shadow-xl"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <BookPage
                pageData={
                  isAnimating && currentSpreadIndex < totalSpreads - 1
                    ? LUXURY_SPREADS[nextSpreadIndex].left
                    : activeSpread.left
                }
                pageNumber={(currentSpreadIndex + 1) * 2 + 1}
                side="left"
                isGutterShadow={true}
              />
              {/* Dynamic shadow on back face during turn */}
              <div
                ref={turnBackShadowRef}
                className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
              />
            </div>
          </div>

          {/* =========================================================================
              F. 3D HINGED FRONT COVER LEAF
              - Origin: left center (the spine at x = 50% = 210px)
              - 0deg when closed (covers the right half [210px, 420px])
              - -180deg when open (folds over to left half [0px, 210px], beneath spread)
              ========================================================================= */}
          <div
            ref={frontCoverRef}
            onClick={!isOpen ? handleOpenAlbum : undefined}
            title={!isOpen ? "Click to Open Heirloom Album" : undefined}
            className={`absolute top-0 left-1/2 w-1/2 h-full rounded-r-xs transform-style-3d will-change-transform ${
              !isOpen ? 'cursor-pointer z-30' : 'pointer-events-none z-5'
            }`}
            style={{
              transformOrigin: 'left center',
              transform: isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* 1. OUTSIDE COVER (Debossed Gold Foil Monogram) */}
            <div
              className="absolute inset-0 backface-hidden rounded-r-xs overflow-hidden flex items-center justify-center p-4 sm:p-5"
              style={{
                backgroundColor: material.color,
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 16px 36px rgba(32,30,27,0.22)'
              }}
            >
              {/* Cover Material Texture */}
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

              {/* Debossed Gold Frame & Typography */}
              <div
                className="relative w-full h-full border-[1.5px] flex flex-col items-center justify-center text-center p-3.5 transition-colors"
                style={{
                  borderColor: material.accent,
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                <div
                  className="text-[15px] sm:text-[17px] mb-1.5 font-serif"
                  style={{ color: material.accent }}
                >
                  ✦
                </div>

                <h3
                  className="font-serif text-[14px] sm:text-[18px] font-normal tracking-[0.22em] uppercase leading-tight m-0"
                  style={{ color: material.accent, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  ULTRAA ALBUMS
                </h3>

                <div
                  className="w-8 sm:w-10 h-[1.2px] my-2 opacity-80"
                  style={{ backgroundColor: material.accent }}
                />

                <p
                  className="font-serif text-[8px] sm:text-[9.5px] tracking-[0.18em] uppercase m-0 mb-1.5 opacity-90"
                  style={{ color: material.accent }}
                >
                  HEIRLOOM WEDDING VOL. XII
                </p>

                <span
                  className="font-sans text-[6px] sm:text-[7px] font-medium tracking-[0.2em] uppercase opacity-75"
                  style={{ color: material.accent }}
                >
                  FINE ART FLUSH MOUNT BINDERY
                </span>
              </div>

              {/* Matte Diffused Natural Daylight Sheen */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-black/8 pointer-events-none" />
            </div>

            {/* 2. INSIDE COVER (Fine-art Flyleaf Endpaper) */}
            <div
              className="absolute inset-0 backface-hidden rounded-l-xs overflow-hidden bg-[#FAF7F2] p-4 flex items-center justify-center"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <div className="w-full h-full border border-dashed border-[#DED5C9] bg-[#EEE7DC]/40 flex flex-col items-center justify-center p-3 text-center">
                <span className="font-serif text-[11px] tracking-[0.2em] font-semibold text-[#201E1B]">
                  EX LIBRIS
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.16em] text-[#777066] mt-1">
                  Ultraa Atelier Registry
                </span>
                <span className="font-mono text-[7px] text-[#A99B8A] mt-1">
                  Vol. XII • MMXXVI
                </span>
              </div>
            </div>
          </div>

          {/* G. Spine Outer Wrap (Visible on the left edge when closed) */}
          <div
            className={`absolute top-0 left-[210px] w-[14px] h-full rounded-l-xs flex flex-col justify-between py-5 px-0.5 items-center z-35 pointer-events-none transition-opacity duration-500 ${
              !isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundColor: material.color,
              transformOrigin: 'right center',
              transform: 'rotateY(-90deg) translateZ(0px)',
              boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.12)'
            }}
          >
            <div className="flex flex-col gap-2 opacity-60">
              <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
              <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
            </div>
            <span
              className="font-serif text-[7px] uppercase tracking-[0.24em] font-medium"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                color: material.accent
              }}
            >
              ULTRAA ALBUMS • MMXXVI
            </span>
            <div className="flex flex-col gap-2 opacity-60">
              <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
              <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
            </div>
          </div>

          {/* H. Layered Archival Paper Block Edge (Visible on the right edge when closed) */}
          <div
            className={`absolute top-1 right-0 w-[14px] h-[calc(100%-8px)] pointer-events-none transition-opacity duration-300 z-15 ${
              !isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: 'rotateY(90deg) translateZ(-7px)',
              background: 'repeating-linear-gradient(to bottom, #FAF7F2 0px, #FAF7F2 2px, #DED5C9 2px, #DED5C9 3px)',
              boxShadow: 'inset 0 0 4px rgba(0,0,0,0.15)'
            }}
          />
        </div>

        {/* =========================================================================
            SIDE ARROWS & CONTROLS (Positioned outside the book boundary)
            ========================================================================= */}
        <BookControls
          isOpen={isOpen}
          currentSpreadIndex={currentSpreadIndex}
          totalSpreads={totalSpreads}
          isAnimating={isAnimating}
          onOpen={handleOpenAlbum}
          onClose={handleCloseAlbum}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
        />
      </div>
    </div>
  );
}

