import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import BookPage from './BookPage';
import { ChevronLeft, ChevronRight, BookOpen, X, Sparkles } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85',
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
      image: 'https://images.unsplash.com/photo-1519225433281-96db8b3260e5?auto=format&fit=crop&w=1000&q=85',
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
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85',
      caption: 'Plate 08 • Farewell Sparklers & Handcrafted Heirloom Volume'
    }
  }
];

export default function HeroBook({
  isOpen,
  setIsOpen,
  material
}) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [turnDirection, setTurnDirection] = useState(null); // 'next' | 'prev' | null
  const [targetSpreadIndex, setTargetSpreadIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [displayMaterial, setDisplayMaterial] = useState(material);

  // References
  const stageRef = useRef(null);
  const closedBookRef = useRef(null);
  const openSpreadRef = useRef(null);
  const turnLeafRef = useRef(null);
  const turnFrontShadowRef = useRef(null);
  const turnBackShadowRef = useRef(null);
  const floatTweenRef = useRef(null);
  const touchStartXRef = useRef(null);
  const prevMaterialIdRef = useRef(material?.id);

  const totalSpreads = LUXURY_SPREADS.length;
  const activeSpread = LUXURY_SPREADS[currentSpreadIndex];

  // 1. Preload spread images & motion check
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

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 2. Weightless floating animation when closed
  const resumeFloating = useCallback(() => {
    if (isOpen || prefersReducedMotion) return;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    if (isMobile) return;

    if (closedBookRef.current) {
      if (floatTweenRef.current) floatTweenRef.current.kill();
      floatTweenRef.current = gsap.timeline({ repeat: -1, yoyo: true });
      floatTweenRef.current.to(closedBookRef.current, {
        y: -6,
        rotateY: -9,
        rotateX: 1.5,
        duration: 4.5,
        ease: 'sine.inOut'
      });
    }
  }, [isOpen, prefersReducedMotion]);

  useEffect(() => {
    resumeFloating();
    return () => {
      if (floatTweenRef.current) floatTweenRef.current.kill();
    };
  }, [resumeFloating]);

  // 3. CINEMATIC ATELIER BOOK "PUSH & SLIDE" SWAP ANIMATION (When material changes)
  useEffect(() => {
    if (!material || material.id === prevMaterialIdRef.current) return;
    prevMaterialIdRef.current = material.id;

    if (!isOpen && closedBookRef.current) {
      if (floatTweenRef.current) floatTweenRef.current.pause();
      const bookElem = closedBookRef.current;

      gsap.to(bookElem, {
        x: -75,
        rotateY: -26,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
          setDisplayMaterial(material);
          gsap.fromTo(
            bookElem,
            {
              x: 85,
              rotateY: 8,
              rotateX: 4,
              opacity: 0,
              filter: 'blur(8px)'
            },
            {
              x: 0,
              rotateY: -13,
              rotateX: 3.5,
              opacity: 1,
              filter: 'blur(0px)',
              duration: 0.45,
              ease: 'power3.out',
              onComplete: () => {
                resumeFloating();
              }
            }
          );
        }
      });
    } else {
      setDisplayMaterial(material);
    }
  }, [material, isOpen, resumeFloating]);

  // 4. SMOOTH 3D BOOK OPENING ANIMATION
  const handleOpenAlbum = useCallback(() => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);
    if (floatTweenRef.current) floatTweenRef.current.kill();

    if (prefersReducedMotion) {
      setIsOpen(true);
      setIsAnimating(false);
      return;
    }

    const closedBook = closedBookRef.current;
    if (closedBook) {
      gsap.to(closedBook, {
        rotateY: -65,
        x: -40,
        scale: 1.02,
        opacity: 0,
        duration: 0.46,
        ease: 'power2.in',
        onComplete: () => {
          setIsOpen(true);
          setTimeout(() => {
            if (openSpreadRef.current) {
              gsap.fromTo(
                openSpreadRef.current,
                { scale: 0.96, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.42,
                  ease: 'power2.out',
                  onComplete: () => setIsAnimating(false)
                }
              );
            } else {
              setIsAnimating(false);
            }
          }, 30);
        }
      });
    } else {
      setIsOpen(true);
      setIsAnimating(false);
    }
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen]);

  // 5. SMOOTH 3D BOOK CLOSING ANIMATION
  const handleCloseAlbum = useCallback(() => {
    if (!isOpen || isAnimating) return;
    setIsAnimating(true);

    if (prefersReducedMotion) {
      setIsOpen(false);
      setCurrentSpreadIndex(0);
      setIsAnimating(false);
      return;
    }

    const openSpread = openSpreadRef.current;
    if (openSpread) {
      gsap.to(openSpread, {
        scale: 0.95,
        opacity: 0,
        duration: 0.36,
        ease: 'power2.in',
        onComplete: () => {
          setIsOpen(false);
          setCurrentSpreadIndex(0);
          setTimeout(() => {
            if (closedBookRef.current) {
              gsap.fromTo(
                closedBookRef.current,
                { x: 30, opacity: 0, filter: 'blur(4px)' },
                {
                  x: 0,
                  opacity: 1,
                  filter: 'blur(0px)',
                  duration: 0.42,
                  ease: 'power2.out',
                  onComplete: () => {
                    setIsAnimating(false);
                    resumeFloating();
                  }
                }
              );
            } else {
              setIsAnimating(false);
            }
          }, 30);
        }
      });
    } else {
      setIsOpen(false);
      setCurrentSpreadIndex(0);
      setIsAnimating(false);
    }
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen, resumeFloating]);

  // 6. SILKY SMOOTH PAGE TURN NEXT (0.76s Luxury Timeline with Zero Previous Photo Artifacts)
  const handleNextPage = useCallback(() => {
    if (!isOpen || isAnimating || currentSpreadIndex >= totalSpreads - 1) return;
    const targetIdx = currentSpreadIndex + 1;
    setIsAnimating(true);
    setTurnDirection('next');
    setTargetSpreadIndex(targetIdx);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;

    if (prefersReducedMotion || !leaf) {
      setCurrentSpreadIndex(targetIdx);
      setIsAnimating(false);
      setTurnDirection(null);
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
        setCurrentSpreadIndex(targetIdx);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsAnimating(false);
        setTurnDirection(null);
      }
    });

    // Continuous 3D rotation from 0deg to -180deg
    tl.to(leaf, {
      rotateY: -180,
      duration: 0.76,
      ease: 'power3.inOut'
    });

    // Natural paper curl peaking at mid-turn
    tl.to(leaf, { skewY: -2.4, duration: 0.36, ease: 'power2.in' }, 0);
    tl.to(leaf, { skewY: 0, duration: 0.4, ease: 'power2.out' }, 0.36);

    // Front specular shadow sweeps as page lifts
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0 }, { opacity: 0.45, duration: 0.36 }, 0);
      tl.to(frontShadow, { opacity: 0, duration: 0.15 }, 0.36);
    }

    // Back shadow dissolves as page settles flat on left stack
    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0.5 }, { opacity: 0, duration: 0.4 }, 0.36);
    }
  }, [isOpen, isAnimating, currentSpreadIndex, totalSpreads, prefersReducedMotion]);

  // 7. SILKY SMOOTH PAGE TURN PREV (-180deg to 0deg)
  const handlePrevPage = useCallback(() => {
    if (!isOpen || isAnimating || currentSpreadIndex <= 0) return;
    const targetIdx = currentSpreadIndex - 1;
    setIsAnimating(true);
    setTurnDirection('prev');
    setTargetSpreadIndex(targetIdx);

    const leaf = turnLeafRef.current;
    const frontShadow = turnFrontShadowRef.current;
    const backShadow = turnBackShadowRef.current;

    if (prefersReducedMotion || !leaf) {
      setCurrentSpreadIndex(targetIdx);
      setIsAnimating(false);
      setTurnDirection(null);
      return;
    }

    gsap.set(leaf, {
      display: 'block',
      left: '50%',
      rotateY: -180,
      transformOrigin: 'left center',
      zIndex: 40
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSpreadIndex(targetIdx);
        gsap.set(leaf, { display: 'none', rotateY: 0, skewY: 0 });
        setIsAnimating(false);
        setTurnDirection(null);
      }
    });

    tl.to(leaf, {
      rotateY: 0,
      duration: 0.76,
      ease: 'power3.inOut'
    });

    tl.to(leaf, { skewY: 2.4, duration: 0.36, ease: 'power2.in' }, 0);
    tl.to(leaf, { skewY: 0, duration: 0.4, ease: 'power2.out' }, 0.36);

    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0 }, { opacity: 0.45, duration: 0.36 }, 0);
      tl.to(backShadow, { opacity: 0, duration: 0.15 }, 0.36);
    }

    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0.5 }, { opacity: 0, duration: 0.4 }, 0.36);
    }
  }, [isOpen, isAnimating, currentSpreadIndex, prefersReducedMotion]);

  // 8. Touch Swipe Gestures
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;

    if (isOpen) {
      if (diff < -45) handleNextPage();
      else if (diff > 45) handlePrevPage();
    } else {
      if (diff < -30) handleOpenAlbum();
    }
    touchStartXRef.current = null;
  };

  // 9. Keyboard Navigation
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

  // Determine what each layer renders so that DURING the turn,
  // the page underneath reveals the TARGET spread, preventing duplicate/previous photo artifacts!
  const getUnderlyingLeftSpread = () => {
    if (isAnimating && turnDirection === 'prev') {
      return LUXURY_SPREADS[targetSpreadIndex]?.left || activeSpread.left;
    }
    return activeSpread.left;
  };

  const getUnderlyingRightSpread = () => {
    if (isAnimating && turnDirection === 'next') {
      return LUXURY_SPREADS[targetSpreadIndex]?.right || activeSpread.right;
    }
    return activeSpread.right;
  };

  const getTurningLeafFront = () => {
    if (turnDirection === 'next') {
      return activeSpread.right; // Page lifting off the right stack
    }
    if (turnDirection === 'prev') {
      return LUXURY_SPREADS[targetSpreadIndex]?.right || activeSpread.right; // Target right page landing down
    }
    return activeSpread.right;
  };

  const getTurningLeafBack = () => {
    if (turnDirection === 'next') {
      return LUXURY_SPREADS[targetSpreadIndex]?.left || activeSpread.left; // Target left page landing down
    }
    if (turnDirection === 'prev') {
      return activeSpread.left; // Page lifting off the left stack
    }
    return activeSpread.left;
  };

  return (
    <div
      ref={stageRef}
      className="hero-book-stage relative w-full flex flex-col items-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* =========================================================================
          1. 3D SCENE VIEWPORT (Contains ONLY the 3D book and side arrows)
          ========================================================================= */}
      <div
        className="hero-book-viewport relative w-full max-w-[480px] h-[270px] sm:h-[320px] md:h-[330px] flex items-center justify-center overflow-visible"
        style={{ perspective: '1800px' }}
      >
        {/* Soft Ambient Depth Shadow Suspended in Mid-Air */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full transition-all duration-700"
          style={{
            width: isOpen ? '90%' : '240px',
            maxWidth: isOpen ? '450px' : '260px',
            height: '260px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(32, 30, 27, 0.22) 0%, rgba(32, 30, 27, 0.05) 55%, transparent 72%)',
            filter: 'blur(30px)',
            opacity: isOpen ? 0.38 : 0.28,
            transform: 'translate(-50%, -50%) translateZ(-35px)'
          }}
        />

        {/* -----------------------------------------------------------------------
            STATE A: PRISTINE CLOSED 3D HEIRLOOM ALBUM (when !isOpen)
            - 100% physically closed volume with zero page leakage
            - Smooth atelier book-push animation on color change
            ----------------------------------------------------------------------- */}
        {!isOpen && (
          <div
            ref={closedBookRef}
            onClick={handleOpenAlbum}
            title="Click to Open Heirloom Album"
            className="relative cursor-pointer transform-style-3d will-change-transform group transition-transform duration-300 w-[175px] sm:w-[215px] h-[235px] sm:h-[290px]"
            style={{
              transform: 'rotateX(3.5deg) rotateY(-13deg) rotateZ(0.5deg)'
            }}
          >
            {/* Back Cover Board */}
            <div
              className="absolute inset-0 rounded-xs transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.25), 0 8px 24px -4px rgba(32, 30, 27, 0.12)',
                transform: 'translateZ(-16px)'
              }}
            >
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    displayMaterial.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.2) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />
            </div>

            {/* Left Spine Thickness (16px) */}
            <div
              className="absolute top-0 left-0 w-[16px] h-full rounded-l-xs flex flex-col justify-between py-5 px-0.5 items-center pointer-events-none transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                transformOrigin: 'left center',
                transform: 'rotateY(-90deg) translateZ(0px)',
                boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.12)'
              }}
            >
              <div className="flex flex-col gap-2 opacity-60">
                <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
                <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
              </div>
              <span
                className="font-serif text-[7px] uppercase tracking-[0.24em] font-medium transition-colors duration-500"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: displayMaterial.accent
                }}
              >
                ULTRAA ALBUMS • MMXXVI
              </span>
              <div className="flex flex-col gap-2 opacity-60">
                <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
                <span className="w-1.5 h-0.5 bg-black/40 rounded-full" />
              </div>
            </div>

            {/* Right Layered Archival Page Block Edge (14px) */}
            <div
              className="absolute top-1 right-0 w-[14px] h-[calc(100%-8px)] pointer-events-none"
              style={{
                transformOrigin: 'right center',
                transform: 'rotateY(90deg) translateZ(-14px)',
                background: 'repeating-linear-gradient(to bottom, #FAF7F2 0px, #FAF7F2 2.5px, #DED5C9 2.5px, #DED5C9 3.5px)',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.18)'
              }}
            />

            {/* Bottom Page Block Edge */}
            <div
              className="absolute bottom-0 left-2 w-[calc(100%-4px)] h-[14px] pointer-events-none"
              style={{
                transformOrigin: 'bottom center',
                transform: 'rotateX(-90deg) translateZ(-14px)',
                background: 'repeating-linear-gradient(to right, #FAF7F2 0px, #FAF7F2 2.5px, #DED5C9 2.5px, #DED5C9 3.5px)',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.15)'
              }}
            />

            {/* Front Cover Face (Top Layer) */}
            <div
              className="absolute inset-0 rounded-xs overflow-hidden flex items-center justify-center p-4 sm:p-5 transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 16px 36px rgba(32,30,27,0.22)',
                transform: 'translateZ(0px)'
              }}
            >
              <div
                className="absolute inset-0 opacity-22 pointer-events-none"
                style={{
                  backgroundImage:
                    displayMaterial.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.2) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />

              {/* Debossed Gold Frame & Monogram Typography */}
              <div
                className="relative w-full h-full border-[1.5px] flex flex-col items-center justify-center text-center p-3 transition-all duration-500"
                style={{
                  borderColor: displayMaterial.accent,
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                <div
                  className="text-[15px] sm:text-[17px] mb-1 font-serif transition-colors duration-500"
                  style={{ color: displayMaterial.accent }}
                >
                  ✦
                </div>

                <h3
                  className="font-serif text-[13px] sm:text-[16px] font-normal tracking-[0.22em] uppercase leading-tight m-0 transition-colors duration-500"
                  style={{ color: displayMaterial.accent, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  ULTRAA ALBUMS
                </h3>

                <div
                  className="w-8 sm:w-10 h-[1.2px] my-2 opacity-80 transition-colors duration-500"
                  style={{ backgroundColor: displayMaterial.accent }}
                />

                <p
                  className="font-serif text-[8px] sm:text-[9px] tracking-[0.18em] uppercase m-0 mb-1 opacity-90 transition-colors duration-500"
                  style={{ color: displayMaterial.accent }}
                >
                  HEIRLOOM WEDDING VOL. XII
                </p>

                <span
                  className="font-sans text-[6px] sm:text-[7px] font-medium tracking-[0.2em] uppercase opacity-75 transition-colors duration-500"
                  style={{ color: displayMaterial.accent }}
                >
                  FINE ART FLUSH MOUNT BINDERY
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-black/8 pointer-events-none" />
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            STATE B: OPEN 3D HEIRLOOM SPREAD (when isOpen)
            - Complete two-page panoramic spread: Left Page + Right Page
            - Strictly contained inside right column (width: 430px)
            - Centered zero-gutter crease shadow
            - Smooth page flip leaf when navigating
            ----------------------------------------------------------------------- */}
        {isOpen && (
          <div
            ref={openSpreadRef}
            className="relative transform-style-3d will-change-transform w-[310px] xs:w-[335px] sm:w-[410px] md:w-[430px] max-w-[94vw] h-[215px] xs:h-[230px] sm:h-[275px] md:h-[290px]"
            style={{
              transform: 'rotateX(3.5deg) rotateY(0deg) scale(1)'
            }}
          >
            {/* Hardcover Archival Base Board */}
            <div
              className="absolute -top-1.5 -left-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] rounded-xs overflow-hidden transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: '0 24px 64px -14px rgba(32, 30, 27, 0.28), 0 8px 24px -6px rgba(32, 30, 27, 0.12)',
                transform: 'translateZ(-14px)'
              }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    displayMaterial.type === 'pebbled-leather'
                      ? 'radial-gradient(rgba(0,0,0,0.18) 1.5px, transparent 0)'
                      : 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
                  backgroundSize: '4px 4px'
                }}
              />
            </div>

            {/* LEFT PAGE (0% to 50%) - Renders underlying page during turn */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full z-10"
              style={{ transformOrigin: 'right center' }}
            >
              <BookPage
                pageData={getUnderlyingLeftSpread()}
                pageNumber={
                  (isAnimating && turnDirection === 'prev' ? targetSpreadIndex : currentSpreadIndex) * 2 + 1
                }
                side="left"
                isGutterShadow={true}
              />
            </div>

            {/* RIGHT PAGE (50% to 100%) - Renders underlying page during turn */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full z-10"
              style={{ transformOrigin: 'left center' }}
            >
              <BookPage
                pageData={getUnderlyingRightSpread()}
                pageNumber={
                  (isAnimating && turnDirection === 'next' ? targetSpreadIndex : currentSpreadIndex) * 2 + 2
                }
                side="right"
                isGutterShadow={true}
              />
            </div>

            {/* Center Zero-Gutter Spine Seam Shadow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-full pointer-events-none z-20">
              <div className="w-full h-full bg-gradient-to-r from-black/15 via-black/35 to-black/15 opacity-60" />
            </div>

            {/* DYNAMIC 3D TURNING LEAF (Hinged at Center Spine x = 50%) */}
            <div
              ref={turnLeafRef}
              className="absolute top-0 w-1/2 h-full hidden pointer-events-none transform-style-3d will-change-transform z-35"
              style={{
                left: '50%',
                transformOrigin: 'left center'
              }}
            >
              {/* Front Face of Turning Leaf (Right Page turning away or landing) */}
              <div className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-r-xs shadow-xl">
                <BookPage
                  pageData={getTurningLeafFront()}
                  pageNumber={
                    (turnDirection === 'next' ? currentSpreadIndex : targetSpreadIndex) * 2 + 2
                  }
                  side="right"
                  isGutterShadow={true}
                />
                <div
                  ref={turnFrontShadowRef}
                  className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
                />
              </div>

              {/* Back Face of Turning Leaf (Left Page landing or turning away) */}
              <div
                className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-l-xs shadow-xl"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <BookPage
                  pageData={getTurningLeafBack()}
                  pageNumber={
                    (turnDirection === 'next' ? targetSpreadIndex : currentSpreadIndex) * 2 + 1
                  }
                  side="left"
                  isGutterShadow={true}
                />
                <div
                  ref={turnBackShadowRef}
                  className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/10 to-transparent pointer-events-none opacity-0"
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SIDE FLOATING ARROWS (Rendered inside viewport ONLY when isOpen)
            ========================================================================= */}
        {isOpen && (
          <>
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={isAnimating || currentSpreadIndex === 0}
              className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-md text-[#201E1B] items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-sm cursor-pointer"
              aria-label="Previous Page Spread"
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={isAnimating || currentSpreadIndex === totalSpreads - 1}
              className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#DED5C9] bg-[#FAF7F2]/95 backdrop-blur-md text-[#201E1B] items-center justify-center transition-all duration-200 hover:border-[#201E1B] hover:scale-105 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-sm cursor-pointer"
              aria-label="Next Page Spread"
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* =========================================================================
          2. BOTTOM CONTROL DOCK (Positioned centered cleanly BELOW the book)
          ========================================================================= */}
      <div className="hero-book-dock w-full mt-4 sm:mt-5 flex justify-center z-30 px-2">
        {!isOpen ? (
          <div className="flex flex-col items-center gap-2">
            {/* Spread Indicator */}
            <button
              type="button"
              onClick={handleOpenAlbum}
              disabled={isAnimating}
              className="group flex items-center gap-3 bg-transparent border-none cursor-pointer py-1 px-3 transition-transform hover:scale-105 disabled:cursor-wait"
              title="Click to Open Heirloom Album"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
              <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#777066]">
                01 / 04
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#A99B8A]/60 group-hover:bg-[#201E1B] transition-colors" />
            </button>

            {/* Pill Button to Open */}
            <button
              type="button"
              onClick={handleOpenAlbum}
              disabled={isAnimating}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#201E1B] !text-[#FAF7F2] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.16em] hover:bg-[#B99A69] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-50"
              style={{ color: '#FAF7F2' }}
            >
              <BookOpen size={12} className="text-[#B99A69]" />
              <span style={{ color: '#FAF7F2' }}>Open Heirloom Album</span>
              <Sparkles size={11} className="text-[#B99A69]" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 sm:gap-4 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#DED5C9] px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-sm max-w-full">
            {/* Prev Spread */}
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={isAnimating || currentSpreadIndex === 0}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-colors"
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            {/* Live Counter: —— 02 / 04 —— */}
            <div className="flex items-center gap-2 text-[#777066]">
              <span className="w-2.5 sm:w-4 h-[1px] bg-[#DED5C9]" />
              <span className="font-sans text-[10px] sm:text-[12px] font-bold tracking-[0.18em] text-[#201E1B]">
                0{currentSpreadIndex + 1} / 0{totalSpreads}
              </span>
              <span className="w-2.5 sm:w-4 h-[1px] bg-[#DED5C9]" />
            </div>

            {/* Next Spread */}
            <button
              type="button"
              onClick={handleNextPage}
              disabled={isAnimating || currentSpreadIndex === totalSpreads - 1}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>

            <span className="w-[1px] h-3.5 bg-[#DED5C9]" />

            {/* Close Cover */}
            <button
              type="button"
              onClick={handleCloseAlbum}
              disabled={isAnimating}
              className="flex items-center gap-1 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#777066] hover:text-[#201E1B] bg-transparent border-none cursor-pointer transition-colors"
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
