import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SHOWROOM_ALBUMS } from './albumShowroomData';
import Album3DCard from './Album3DCard';
import AlbumInteriorPage from './AlbumInteriorPage';
import TextReveal from '../motion/TextReveal';
import RevealOnScroll from '../motion/RevealOnScroll';
import './AlbumShowroom.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AlbumShowroom Component — Master Editorial Album Showcase & Carousel
 * 
 * Features:
 * 1. Synchronized dual-track GSAP editorial carousel:
 *    - Next: Outgoing cards glide left (x: -70px, opacity: 0, scale: 0.98), incoming glide from right (x: 70px -> 0px)
 *    - Prev: Outgoing cards glide right (x: 70px, opacity: 0, scale: 0.98), incoming glide from left (x: -70px -> 0px)
 *    - Power3.inOut luxury easing curve with natural 0.08s card stagger
 *    - Single active transition guard (isAnimatingRef) preventing rapid-click desync & overlapping
 *    - Image preloading preventing white flashes & layout shifts
 * 2. In-Place 3D Expansion:
 *    - Clicking any album physically opens it in 3D right in the section
 *    - Other albums smoothly shrink into a companion miniature selector shelf
 *    - Full page-turning (Next / Prev) with format-specific interiors
 *    - Prominent "Open Dedicated Album Page →" button
 * 3. Responsive behaviour:
 *    - Desktop: 4 cards visible per page (2 pages for 8 signature albums)
 *    - Tablet: 2 cards visible per page (4 pages)
 *    - Mobile: 1 card visible per page (8 pages with touch swipe)
 * 4. Keyboard navigation & accessible indicator:
 *    - ArrowLeft / ArrowRight support
 *    - Live synchronized counter: —— 01 / 02 ——
 */
export default function AlbumShowroom({ onSelectProduct }) {
  const navigate = useNavigate();

  // Root & Structural References
  const sectionRef = useRef(null);
  const carouselStageRef = useRef(null);
  const currentTrackRef = useRef(null);
  const incomingTrackRef = useRef(null);
  const spotlightRef = useRef(null);
  const bookRigRef = useRef(null);
  const ambientShadowRef = useRef(null);
  const leftWingRef = useRef(null);
  const rightWingRef = useRef(null);
  const coverLeafRef = useRef(null);
  const showroomCoverFrontRef = useRef(null);
  const showroomCoverBackRef = useRef(null);
  const coverFrontShadowRef = useRef(null);
  const coverBackShadowRef = useRef(null);
  const turnLeafRef = useRef(null);

  // Animation Lock & Timeline Refs
  const isAnimatingRef = useRef(false);
  const activeTimelineRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Carousel & Spotlight States
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [transitionState, setTransitionState] = useState(null); // { direction: 'next' | 'prev', targetPageIndex: number } | null
  const [activeAlbumId, setActiveAlbumId] = useState(null);
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isTurnAnimating, setIsTurnAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Active expanded album
  const activeAlbum = SHOWROOM_ALBUMS.find((a) => a.id === activeAlbumId) || null;
  const otherAlbums = SHOWROOM_ALBUMS.filter((a) => a.id !== activeAlbumId);
  const totalSpreads = activeAlbum?.spreads?.length || 1;
  const activeSpread = activeAlbum?.spreads[currentSpreadIndex] || activeAlbum?.spreads?.[0];

  // 1. Responsive Cards Per View Detection
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(SHOWROOM_ALBUMS.length / cardsPerView);

  // Keep currentPageIndex bounded if screen resized
  useEffect(() => {
    if (currentPageIndex >= totalPages) {
      setCurrentPageIndex(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPageIndex]);

  // Sliced albums for current view
  const currentCards = useMemo(() => {
    const start = currentPageIndex * cardsPerView;
    return SHOWROOM_ALBUMS.slice(start, start + cardsPerView);
  }, [currentPageIndex, cardsPerView]);

  // Sliced albums for incoming view during transition
  const incomingCards = useMemo(() => {
    if (!transitionState) return [];
    const start = transitionState.targetPageIndex * cardsPerView;
    return SHOWROOM_ALBUMS.slice(start, start + cardsPerView);
  }, [transitionState, cardsPerView]);

  // 2. Preload all album cover images on mount (Zero white flashes / zero load lag)
  useEffect(() => {
    SHOWROOM_ALBUMS.forEach((album) => {
      if (album.spreads) {
        album.spreads.forEach((spread) => {
          if (spread.left?.image) {
            const imgL = new Image();
            imgL.src = spread.left.image;
          }
          if (spread.right?.image) {
            const imgR = new Image();
            imgR.src = spread.right.image;
          }
        });
      }
    });
  }, []);

  // 3. Staggered section entrance on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const podiums = currentTrackRef.current?.querySelectorAll('.album-product-podium');
      if (podiums && podiums.length > 0) {
        gsap.fromTo(
          podiums,
          { y: 45, opacity: 0, rotateX: 10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: currentTrackRef.current,
              start: 'top 82%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 4. MASTER CAROUSEL TRANSITION ENGINE (Dual-Track GSAP Animation)
  const triggerCarouselTransition = useCallback((direction, targetIdx) => {
    if (isAnimatingRef.current) return;
    if (targetIdx === currentPageIndex) return;
    if (targetIdx < 0 || targetIdx >= totalPages) return;

    isAnimatingRef.current = true;
    setTransitionState({ direction, targetPageIndex: targetIdx });
  }, [currentPageIndex, totalPages]);

  // Run the GSAP timeline once the incoming track has mounted in the DOM
  useEffect(() => {
    if (!transitionState || !incomingTrackRef.current || !currentTrackRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const { direction, targetPageIndex } = transitionState;

    if (prefersReduced) {
      setCurrentPageIndex(targetPageIndex);
      setTransitionState(null);
      isAnimatingRef.current = false;
      return;
    }

    const outgoingCards = currentTrackRef.current.querySelectorAll('.album-product-podium');
    const incomingCardsEls = incomingTrackRef.current.querySelectorAll('.album-product-podium');

    const exitX = direction === 'next' ? -65 : 65;
    const enterX = direction === 'next' ? 65 : -65;

    // Set initial position of incoming cards
    gsap.set(incomingCardsEls, {
      x: enterX,
      opacity: 0,
      scale: 0.98
    });

    if (activeTimelineRef.current) activeTimelineRef.current.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        // Synchronously finalize state
        setCurrentPageIndex(targetPageIndex);
        setTransitionState(null);
        isAnimatingRef.current = false;
        activeTimelineRef.current = null;
      }
    });
    activeTimelineRef.current = tl;

    // 1. Outgoing cards glide away
    tl.to(outgoingCards, {
      x: exitX,
      opacity: 0,
      scale: 0.98,
      duration: 0.88,
      stagger: direction === 'next' ? 0.07 : -0.07,
      ease: 'power3.inOut'
    }, 0);

    // 2. Incoming cards glide naturally into place
    tl.to(incomingCardsEls, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.94,
      stagger: direction === 'next' ? 0.07 : -0.07,
      ease: 'power3.inOut'
    }, 0.1);

    return () => {
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
        isAnimatingRef.current = false;
      }
    };
  }, [transitionState]);

  // Next / Prev Handlers
  const handleNextPage = useCallback(() => {
    if (currentPageIndex < totalPages - 1) {
      triggerCarouselTransition('next', currentPageIndex + 1);
    }
  }, [currentPageIndex, totalPages, triggerCarouselTransition]);

  const handlePrevPage = useCallback(() => {
    if (currentPageIndex > 0) {
      triggerCarouselTransition('prev', currentPageIndex - 1);
    }
  }, [currentPageIndex, triggerCarouselTransition]);

  // Touch Swipe for Mobile Carousel
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current || isAnimatingRef.current) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextPage();
      else handlePrevPage();
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeAlbumId) return; // Keyboard reserved for spreads when in spotlight
      if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextPage, handlePrevPage, activeAlbumId]);

  // 5. Authentic Physical 3D Cover Opening Animation when an album is selected
  useEffect(() => {
    if (!activeAlbum || !coverLeafRef.current || !bookRigRef.current || !leftWingRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setCurrentSpreadIndex(0);

    if (spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const rig = bookRigRef.current;
    const cover = coverLeafRef.current;
    const frontFace = showroomCoverFrontRef.current;
    const backFace = showroomCoverBackRef.current;
    const leftWing = leftWingRef.current;
    const shadow = ambientShadowRef.current;
    const frontShadow = coverFrontShadowRef.current;
    const backShadow = coverBackShadowRef.current;

    if (prefersReduced) {
      gsap.set(rig, { x: '0%', rotateY: 0, rotateX: 3, rotateZ: 0 });
      gsap.set(leftWing, { opacity: 1, scaleX: 1 });
      gsap.set(cover, { display: 'none' });
      return;
    }

    // Set initial closed state: Rig centered as a closed book (x: -25%), Left wing folded inside spine, Cover closed at 0deg
    gsap.set(rig, { x: '-25%', rotateY: -12, rotateX: 3.5, rotateZ: 0.5, scale: 1 });
    gsap.set(cover, { rotateY: 0, skewY: 0, display: 'block', zIndex: 60 });
    if (frontFace) {
      frontFace.style.display = 'block';
      gsap.set(frontFace, { opacity: 1, visibility: 'visible' });
    }
    if (backFace) {
      backFace.style.display = 'none';
      gsap.set(backFace, { opacity: 0, visibility: 'hidden' });
    }
    gsap.set(leftWing, { opacity: 0, scaleX: 0.15, transformOrigin: 'right center' });
    if (shadow) gsap.set(shadow, { width: '220px', maxWidth: '240px', opacity: 0.28 });

    const tl = gsap.timeline({
      onComplete: () => {
        // Dock cover and hide leaf so left spread is 100% sharp and interactive
        if (cover) cover.style.display = 'none';
        gsap.set(cover, { display: 'none' });
      }
    });

    // 1. The whole book centers and levels with synchronized power3.inOut
    tl.to(rig, {
      x: '0%',
      rotateY: 0,
      rotateX: 3,
      rotateZ: 0,
      duration: 1.15,
      ease: 'power3.inOut'
    }, 0);

    // 2. Ambient shadow expands to encompass full open spread
    if (shadow) {
      tl.to(shadow, {
        width: '94%',
        maxWidth: '480px',
        opacity: 0.4,
        duration: 1.15,
        ease: 'power3.inOut'
      }, 0);
    }

    // 3. Left wing baseboard smoothly unfolds outward from center spine
    tl.to(leftWing, {
      opacity: 1,
      scaleX: 1,
      duration: 1.1,
      ease: 'power3.inOut'
    }, 0.05);

    // 4. Front cover leaf swings 180 degrees from spine hinge
    tl.to(cover, {
      rotateY: -180,
      duration: 1.15,
      ease: 'power3.inOut',
      onUpdate: () => {
        const curRot = parseFloat(gsap.getProperty(cover, 'rotateY')) || 0;
        // Midpoint face toggle: when passing perpendicular (-88deg), toggle display
        // to prevent reversed/mirrored typography
        if (curRot <= -88) {
          if (frontFace && frontFace.style.display !== 'none') {
            frontFace.style.display = 'none';
          }
          if (backFace && backFace.style.display !== 'block') {
            backFace.style.display = 'block';
            gsap.set(backFace, { opacity: 1, visibility: 'visible' });
          }
        } else {
          if (frontFace && frontFace.style.display !== 'block') {
            frontFace.style.display = 'block';
            gsap.set(frontFace, { opacity: 1, visibility: 'visible' });
          }
          if (backFace && backFace.style.display !== 'none') {
            backFace.style.display = 'none';
          }
        }
      }
    }, 0);

    // Deterministic timeline face swap at exact perpendicular midpoint (t = 0.55s)
    if (frontFace) tl.set(frontFace, { display: 'none', visibility: 'hidden' }, 0.55);
    if (backFace) tl.set(backFace, { display: 'block', visibility: 'visible', opacity: 1 }, 0.55);
    // At swing completion, hide cover leaf completely
    tl.set(cover, { display: 'none' }, 1.15);

    // 5. Authentic cover flexion during swing
    tl.to(cover, { skewY: -2.6, duration: 0.52, ease: 'power2.in' }, 0);
    tl.to(cover, { skewY: 0, duration: 0.63, ease: 'power2.out' }, 0.52);

    // 6. Dynamic lighting shadows
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0 }, { opacity: 0.5, duration: 0.52 }, 0);
      tl.to(frontShadow, { opacity: 0, duration: 0.2 }, 0.52);
    }
    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0.6 }, { opacity: 0, duration: 0.58 }, 0.52);
    }
  }, [activeAlbumId]);

  // 6. Navigation to dedicated album page
  const handleNavigateToAlbumPage = useCallback((slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  // 7. Spotlight Spread Navigation (Next / Prev)
  const handleNextSpread = () => {
    if (isTurnAnimating || currentSpreadIndex >= totalSpreads - 1) return;
    setIsTurnAnimating(true);
    const targetIdx = currentSpreadIndex + 1;

    const leaf = turnLeafRef.current;
    if (!leaf) {
      setCurrentSpreadIndex(targetIdx);
      setIsTurnAnimating(false);
      return;
    }

    gsap.set(leaf, { display: 'block', rotateY: 0, zIndex: 45 });
    gsap.to(leaf, {
      rotateY: -180,
      duration: 0.72,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentSpreadIndex(targetIdx);
        gsap.set(leaf, { display: 'none', rotateY: 0 });
        setIsTurnAnimating(false);
      }
    });
  };

  const handlePrevSpread = () => {
    if (isTurnAnimating || currentSpreadIndex <= 0) return;
    setIsTurnAnimating(true);
    const targetIdx = currentSpreadIndex - 1;

    const leaf = turnLeafRef.current;
    if (!leaf) {
      setCurrentSpreadIndex(targetIdx);
      setIsTurnAnimating(false);
      return;
    }

    gsap.set(leaf, { display: 'block', rotateY: -180, zIndex: 45 });
    gsap.to(leaf, {
      rotateY: 0,
      duration: 0.72,
      ease: 'power3.inOut',
      onComplete: () => {
        setCurrentSpreadIndex(targetIdx);
        gsap.set(leaf, { display: 'none', rotateY: 0 });
        setIsTurnAnimating(false);
      }
    });
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="album-showroom-section py-20 sm:py-28"
    >
      {/* Studio Lighting Radial Highlight */}
      <div className="showroom-studio-lighting" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE7DC] border border-[#DED5C9] text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#777066] mb-4 shadow-xs">
              <Compass size={11} className="text-[#B99A69]" />
              <span>EXCLUSIVE 3D ATELIER SHOWROOM</span>
            </div>
          </RevealOnScroll>

          <TextReveal
            as="h2"
            delay={0.08}
            className="font-serif text-[34px] sm:text-[44px] lg:text-[50px] font-normal text-[#201E1B] leading-[1.12] mb-4"
          >
            Our Signature Format Families
          </TextReveal>

          <RevealOnScroll direction="up" delay={0.18} distance={18}>
            <p className="font-sans text-[14px] sm:text-[16px] text-[#777066] leading-[1.7] max-w-[640px] mx-auto">
              Experience our eight handcrafted signature formats. Glide through the collection, or click any book to expand its 3D interior spread, compare bindery specifications, and open its dedicated studio page.
            </p>
          </RevealOnScroll>
        </div>

        {/* =========================================================================
            STATE 1: THE MASTER EDITORIAL 3D ALBUM CAROUSEL (When no book expanded)
            ========================================================================= */}
        {!activeAlbum && (
          <div className="w-full flex flex-col items-center">
            
            {/* Carousel Navigation Header Bar (Prev / Live Page Counter / Next) */}
            <div className="w-full flex items-center justify-between mb-8 sm:mb-10 px-2 sm:px-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#777066] hidden sm:inline">
                Atelier Collection • {SHOWROOM_ALBUMS.length} Signature Formats
              </span>

              {/* Prev / Counter / Next Dock */}
              <div className="flex items-center gap-3 sm:gap-4 ml-auto bg-[#FAF7F2]/90 backdrop-blur-md border border-[#DED5C9] px-4 py-2 rounded-full shadow-xs">
                {/* PREV BUTTON */}
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={currentPageIndex === 0}
                  className="flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-all duration-200"
                  aria-label="Previous Albums"
                  title="Previous Collection Set"
                >
                  <ChevronLeft size={14} />
                  <span className="hidden xs:inline">Prev</span>
                </button>

                {/* Synchronized Page Indicator: —— 01 / 02 —— */}
                <div className="flex items-center gap-2 text-[#777066] select-none">
                  <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
                  <span className="font-sans text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#201E1B]">
                    0{currentPageIndex + 1} / 0{totalPages}
                  </span>
                  <span className="w-3 sm:w-5 h-[1px] bg-[#DED5C9]" />
                </div>

                {/* NEXT BUTTON */}
                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={currentPageIndex === totalPages - 1}
                  className="flex items-center gap-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer transition-all duration-200"
                  aria-label="Next Albums"
                  title="Next Collection Set"
                >
                  <span className="hidden xs:inline">Next</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Carousel Viewport Container (Guarantees zero horizontal page spill) */}
            <div
              ref={carouselStageRef}
              className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[490px]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* CURRENT OUTGOING TRACK */}
              <div
                ref={currentTrackRef}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-8 items-end justify-center will-change-transform"
              >
                {currentCards.map((album, index) => (
                  <Album3DCard
                    key={album.id}
                    album={album}
                    index={index}
                    onOpenViewer={(alb) => setActiveAlbumId(alb.id)}
                  />
                ))}
              </div>

              {/* TRANSITION INCOMING TRACK (Rendered only during active GSAP slide) */}
              {transitionState && (
                <div
                  ref={incomingTrackRef}
                  className="absolute inset-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-8 items-end justify-center pointer-events-none will-change-transform"
                >
                  {incomingCards.map((album, index) => (
                    <Album3DCard
                      key={album.id}
                      album={album}
                      index={index}
                      onOpenViewer={(alb) => setActiveAlbumId(alb.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Pagination Dots Below Carousel */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2.5 mt-8 sm:mt-10">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const isActive = idx === currentPageIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (idx > currentPageIndex) triggerCarouselTransition('next', idx);
                        else if (idx < currentPageIndex) triggerCarouselTransition('prev', idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                        isActive
                          ? 'w-8 bg-[#B99A69]'
                          : 'w-2 bg-[#DED5C9] hover:bg-[#A99B8A]'
                      }`}
                      aria-label={`Go to carousel page ${idx + 1}`}
                      title={`Page ${idx + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            STATE 2: EXPANDED 3D SPOTLIGHT VIEW (When user clicks any album)
            - Selected album OPENS in 3D right here showing real spreads & features
            - Other albums become compact companion books below
            - Direct button to navigate to respective album page
            ========================================================================= */}
        {activeAlbum && (
          <div ref={spotlightRef} className="w-full flex flex-col gap-10 animate-fadeIn">
            
            {/* Top Toolbar: Active Indicator + Close/Back Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DED5C9]/80">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B99A69] animate-pulse" />
                <span className="font-sans text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[#201E1B]">
                  Spotlight Viewing: <span className="font-serif italic font-normal text-[15px] sm:text-[16px] lowercase tracking-normal text-[#B99A69]">{activeAlbum.name}</span>
                </span>
              </div>

              {/* Reset to 4-book view button */}
              <button
                type="button"
                onClick={() => setActiveAlbumId(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#DED5C9] text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-[#777066] hover:text-[#201E1B] hover:border-[#201E1B] transition-all cursor-pointer shadow-xs"
              >
                <X size={13} />
                <span>Show All Formats</span>
              </button>
            </div>

            {/* Main Stage Grid: 3D Open Book on Left + Editorial Specifications on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAF7F2] border border-[#DED5C9] rounded-2xl p-6 sm:p-10 shadow-[0_24px_64px_-16px_rgba(32,30,27,0.12)]">
              
              {/* Left Column: 3D Open Heirloom Book Stage */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
                
                {/* 3D Spread Viewport */}
                <div
                  className="relative w-full max-w-[540px] h-[270px] xs:h-[300px] sm:h-[350px] md:h-[370px] flex items-center justify-center overflow-visible"
                  style={{ perspective: '1800px' }}
                >
                  {/* Ambient Depth Shadow */}
                  <div
                    ref={ambientShadowRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
                    style={{
                      width: '94%',
                      maxWidth: '480px',
                      height: '280px',
                      background: 'radial-gradient(ellipse at 50% 50%, rgba(32, 30, 27, 0.28) 0%, rgba(32, 30, 27, 0.06) 55%, transparent 72%)',
                      filter: 'blur(30px)',
                      transform: 'translate(-50%, -50%) translateZ(-35px)'
                    }}
                  />

                  {/* Physical 3D Book Rig */}
                  <div
                    ref={bookRigRef}
                    className="relative transform-style-3d will-change-transform w-[280px] xs:w-[320px] sm:w-[420px] md:w-[480px] max-w-[92vw] h-[195px] xs:h-[220px] sm:h-[290px] md:h-[310px]"
                    style={{
                      transform: 'rotateX(3deg) rotateY(0deg)'
                    }}
                  >
                    {/* -------------------------------------------------------------
                        1. LEFT WING (0% to 50%): Left Hardcover Baseboard + Left Spread
                        - Folds inside spine (scaleX: 0.15, opacity: 0) when closed
                        - Unfolds outward (scaleX: 1, opacity: 1) when opening
                        ------------------------------------------------------------- */}
                    <div
                      ref={leftWingRef}
                      className="absolute top-0 left-0 w-1/2 h-full transform-style-3d will-change-transform z-10"
                      style={{ transformOrigin: 'right center' }}
                    >
                      {/* Hardcover Archival Baseboard Left */}
                      <div
                        className="absolute -top-1.5 -left-1.5 w-[calc(100%+6px)] h-[calc(100%+12px)] rounded-l-xs overflow-hidden transition-colors duration-500"
                        style={{
                          backgroundColor: activeAlbum.coverColor,
                          boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.25), 0 8px 24px -4px rgba(32, 30, 27, 0.12)',
                          transform: 'translateZ(-14px)'
                        }}
                      />
                      {/* Left Page Spread */}
                      <div className="absolute inset-0 overflow-hidden rounded-l-xs">
                        <AlbumInteriorPage
                          pageData={activeSpread?.left}
                          side="left"
                          albumType={activeAlbum.slug}
                          pageNumber={currentSpreadIndex * 2 + 1}
                        />
                      </div>
                    </div>

                    {/* -------------------------------------------------------------
                        2. RIGHT WING (50% to 100%): Right Hardcover Baseboard + Right Spread
                        ------------------------------------------------------------- */}
                    <div
                      ref={rightWingRef}
                      className="absolute top-0 left-1/2 w-1/2 h-full transform-style-3d will-change-transform z-10"
                      style={{ transformOrigin: 'left center' }}
                    >
                      {/* Hardcover Archival Baseboard Right */}
                      <div
                        className="absolute -top-1.5 -right-1.5 w-[calc(100%+6px)] h-[calc(100%+12px)] rounded-r-xs overflow-hidden transition-colors duration-500"
                        style={{
                          backgroundColor: activeAlbum.coverColor,
                          boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.25), 0 8px 24px -4px rgba(32, 30, 27, 0.12)',
                          transform: 'translateZ(-14px)'
                        }}
                      />
                      {/* Right Page Spread */}
                      <div className="absolute inset-0 overflow-hidden rounded-r-xs">
                        <AlbumInteriorPage
                          pageData={activeSpread?.right}
                          side="right"
                          albumType={activeAlbum.slug}
                          pageNumber={currentSpreadIndex * 2 + 2}
                        />
                      </div>
                      {/* Layered Page Block Edge (14px thickness) */}
                      <div
                        className="absolute top-1 right-0 w-[14px] h-[calc(100%-8px)] pointer-events-none"
                        style={{
                          transformOrigin: 'right center',
                          transform: 'rotateY(90deg) translateZ(-14px)',
                          background: 'repeating-linear-gradient(to bottom, #FAF7F2 0px, #FAF7F2 2.5px, #DED5C9 2.5px, #DED5C9 3.5px)',
                          boxShadow: 'inset 0 0 4px rgba(0,0,0,0.18)'
                        }}
                      />
                    </div>

                    {/* -------------------------------------------------------------
                        3. 3D CENTER SPINE HINGE & THICKNESS (x = 50%)
                        ------------------------------------------------------------- */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-full w-[16px] h-full rounded-l-xs flex flex-col justify-between py-4 px-0.5 items-center pointer-events-none transition-colors duration-500 z-20"
                      style={{
                        backgroundColor: activeAlbum.coverColor,
                        transformOrigin: 'right center',
                        transform: 'rotateY(-90deg) translateZ(0px)',
                        boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.12)'
                      }}
                    >
                      <span
                        className="font-serif text-[7px] uppercase tracking-[0.22em] font-medium transition-colors duration-500"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                          color: activeAlbum.accentColor
                        }}
                      >
                        {activeAlbum.spineTitle}
                      </span>
                    </div>

                    {/* Center Zero-Gutter Spine Crease Shadow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-full pointer-events-none z-25">
                      <div className="w-full h-full bg-gradient-to-r from-black/15 via-black/35 to-black/15 opacity-60" />
                    </div>

                    {/* -------------------------------------------------------------
                        4. DYNAMIC 3D TURNING LEAF (Active during Next / Prev spread turns)
                        ------------------------------------------------------------- */}
                    <div
                      ref={turnLeafRef}
                      className="absolute top-0 w-1/2 h-full hidden pointer-events-none transform-style-3d will-change-transform z-45"
                      style={{ left: '50%', transformOrigin: 'left center' }}
                    >
                      <div
                        className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-r-xs shadow-xl"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg) translateZ(1px)'
                        }}
                      >
                        <AlbumInteriorPage
                          pageData={activeSpread?.right}
                          side="right"
                          albumType={activeAlbum.slug}
                          pageNumber={currentSpreadIndex * 2 + 2}
                        />
                      </div>
                      <div
                        className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-l-xs shadow-xl"
                        style={{
                          transform: 'rotateY(180deg) translateZ(1px)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      >
                        <AlbumInteriorPage
                          pageData={activeAlbum?.spreads[Math.min(currentSpreadIndex + 1, totalSpreads - 1)]?.left}
                          side="left"
                          albumType={activeAlbum.slug}
                          pageNumber={(currentSpreadIndex + 1) * 2 + 1}
                        />
                      </div>
                    </div>

                    {/* -------------------------------------------------------------
                        5. MASTER 3D FRONT COVER LEAF (180° swing from closed to open)
                        ------------------------------------------------------------- */}
                    <div
                      ref={coverLeafRef}
                      className="absolute top-0 w-1/2 h-full pointer-events-none transform-style-3d will-change-transform z-50"
                      style={{ left: '50%', transformOrigin: 'left center' }}
                    >
                      {/* FRONT FACE OF COVER (Facing user when closed at rotateY: 0deg) */}
                      <div
                        ref={showroomCoverFrontRef}
                        className="absolute inset-0 backface-hidden rounded-r-xs flex items-center justify-center p-3 sm:p-5 shadow-2xl transition-colors duration-500"
                        style={{
                          backgroundColor: activeAlbum.coverColor,
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 16px 36px rgba(32,30,27,0.22)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg) translateZ(1px)',
                          display: 'block'
                        }}
                      >
                        <div
                          className="relative w-full h-full border-[1.5px] flex flex-col items-center justify-center text-center p-3"
                          style={{ borderColor: activeAlbum.accentColor }}
                        >
                          <span className="text-[14px] font-serif mb-1" style={{ color: activeAlbum.accentColor }}>✦</span>
                          <h4 className="font-serif text-[12px] sm:text-[14px] font-normal tracking-[0.2em] uppercase leading-tight m-0" style={{ color: activeAlbum.accentColor }}>
                            {activeAlbum.frontTitle}
                          </h4>
                          <div className="w-8 h-[1px] my-1.5 opacity-80" style={{ backgroundColor: activeAlbum.accentColor }} />
                          <span className="font-sans text-[6.5px] sm:text-[7.5px] font-semibold tracking-[0.18em] uppercase opacity-85" style={{ color: activeAlbum.accentColor }}>
                            {activeAlbum.frontSubtitle}
                          </span>
                        </div>
                        <div ref={coverFrontShadowRef} className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none opacity-0" />
                      </div>

                      {/* BACK FACE OF COVER (Inside spread Plate 01 resting on left stack at rotateY: -180deg) */}
                      <div
                        ref={showroomCoverBackRef}
                        className="absolute inset-0 backface-hidden rounded-l-xs shadow-2xl"
                        style={{
                          transform: 'rotateY(180deg) translateZ(1px)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          display: 'none'
                        }}
                      >
                        <AlbumInteriorPage
                          pageData={activeAlbum?.spreads[0]?.left}
                          side="left"
                          albumType={activeAlbum.slug}
                          pageNumber={1}
                        />
                        <div ref={coverBackShadowRef} className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/15 to-transparent pointer-events-none opacity-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spread Navigation Controls Below 3D Book */}
                {totalSpreads > 1 && (
                  <div className="mt-4 flex items-center gap-3 bg-white/90 backdrop-blur-xs border border-[#DED5C9] px-4 py-1.5 rounded-full shadow-xs">
                    <button
                      type="button"
                      onClick={handlePrevSpread}
                      disabled={isTurnAnimating || currentSpreadIndex === 0}
                      className="flex items-center gap-1 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
                    >
                      <ChevronLeft size={13} />
                      <span>Prev</span>
                    </button>
                    <span className="text-[11px] font-sans font-bold tracking-widest text-[#777066]">
                      0{currentSpreadIndex + 1} / 0{totalSpreads}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextSpread}
                      disabled={isTurnAnimating || currentSpreadIndex === totalSpreads - 1}
                      className="flex items-center gap-1 text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-[#201E1B] hover:text-[#B99A69] disabled:opacity-25 disabled:cursor-not-allowed bg-transparent border-none cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Key Format Specifications & Direct Navigation */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B99A69] font-medium mb-1.5">
                  {activeAlbum.category}
                </span>
                <h3 className="font-serif text-[28px] sm:text-[34px] font-normal text-[#201E1B] leading-tight mb-2">
                  {activeAlbum.name}
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#777066] leading-[1.65] mb-6">
                  {activeAlbum.desc}
                </p>

                {/* Key Format Feature Badges (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                  <div className="p-3 rounded-xl bg-white/80 border border-[#DED5C9] shadow-2xs">
                    <span className="block font-sans text-[9px] uppercase tracking-[0.16em] text-[#777066] font-semibold mb-1">
                      Paper &amp; Substrate
                    </span>
                    <span className="font-serif text-[12.5px] text-[#201E1B] leading-snug block">
                      {activeAlbum.paperType.split('(')[0].trim()}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-[#DED5C9] shadow-2xs">
                    <span className="block font-sans text-[9px] uppercase tracking-[0.16em] text-[#777066] font-semibold mb-1">
                      Artisanal Binding
                    </span>
                    <span className="font-serif text-[12.5px] text-[#201E1B] leading-snug block">
                      {activeAlbum.binding.split(',')[0].trim()}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-[#DED5C9] shadow-2xs">
                    <span className="block font-sans text-[9px] uppercase tracking-[0.16em] text-[#777066] font-semibold mb-1">
                      Popular Dimensions
                    </span>
                    <span className="font-serif text-[12.5px] text-[#201E1B] leading-snug block">
                      {activeAlbum.sizes.map((s) => s.name).slice(0, 3).join(' • ')}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/80 border border-[#DED5C9] shadow-2xs">
                    <span className="block font-sans text-[9px] uppercase tracking-[0.16em] text-[#777066] font-semibold mb-1">
                      Finishing Standard
                    </span>
                    <span className="font-serif text-[12.5px] text-[#201E1B] leading-snug block">
                      {activeAlbum.finishing.split(':')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Primary Action Row: Direct Route to Album Page */}
                <div className="flex flex-wrap items-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => handleNavigateToAlbumPage(activeAlbum.slug)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#201E1B] !text-[#FAF7F2] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B99A69] hover:shadow-lg cursor-pointer group shadow-sm flex-1 sm:flex-initial"
                    style={{ color: '#FAF7F2' }}
                  >
                    <span style={{ color: '#FAF7F2' }}>Open {activeAlbum.name} Page</span>
                    <ArrowRight size={14} className="text-[#B99A69] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white border border-[#DED5C9] text-[#201E1B] font-sans font-medium text-[11px] sm:text-[12px] uppercase tracking-[0.16em] hover:border-[#201E1B] transition-colors cursor-pointer text-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Request Swatch</span>
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================================
                COMPANION MINIATURE SHELF ("Other Format Families" Made Small!)
                ===================================================================== */}
            <div className="w-full mt-4 pt-6 border-t border-[#DED5C9]/80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#B99A69] text-xs">✦</span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#777066]">
                    Compare Other Format Families (Click to Open)
                  </span>
                </div>
                <span className="text-[11px] font-sans text-[#777066] hidden sm:inline">
                  {otherAlbums.length} Other Formats Ready for 3D Inspection
                </span>
              </div>

              {/* Miniature Companion Shelf — Horizontal Scroll on Mobile, Full Grid on Tablet/Desktop */}
              <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 overflow-x-auto sm:overflow-x-visible pb-3 sm:pb-0 snap-x snap-mandatory scroll-smooth">
                {otherAlbums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => {
                      setActiveAlbumId(album.id);
                      if (spotlightRef.current) {
                        spotlightRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="shrink-0 w-[150px] sm:w-auto snap-start group relative bg-[#FAF7F2] hover:bg-white border border-[#DED5C9] hover:border-[#B99A69] rounded-xl p-3 transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between items-start text-left min-h-[140px]"
                    title={`Click to open ${album.name} in 3D`}
                  >
                    <div className="w-full flex items-center justify-between gap-2 mb-2">
                      {/* Miniature 3D Book Volume */}
                      <div
                        className="w-[42px] h-[58px] rounded-xs shrink-0 flex flex-col justify-between p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 relative"
                        style={{
                          backgroundColor: album.coverColor,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <div className="w-full flex justify-between items-center opacity-70">
                          <span className="text-[5px] font-serif" style={{ color: album.accentColor }}>✦</span>
                          <span className="text-[5px] font-mono tracking-tighter" style={{ color: album.accentColor }}>MMXXVI</span>
                        </div>
                        <span
                          className="font-serif text-[5.5px] uppercase tracking-wider text-center leading-tight truncate block"
                          style={{ color: album.accentColor }}
                        >
                          {album.name.split(' ')[0]}
                        </span>
                        {/* Page block edge simulation */}
                        <div
                          className="absolute top-0.5 right-0 w-[3px] h-[calc(100%-4px)] bg-[#FAF7F2] rounded-r-2xs border-l border-black/10"
                        />
                      </div>

                      {/* Direct Page Quick Link Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigateToAlbumPage(album.slug);
                        }}
                        title={`Open dedicated ${album.name} page`}
                        className="w-6 h-6 rounded-full border border-[#DED5C9] bg-white text-[#777066] hover:text-[#201E1B] hover:border-[#201E1B] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                      >
                        <ArrowUpRight size={11} />
                      </button>
                    </div>

                    <div className="w-full min-w-0">
                      <span className="block font-sans text-[7.5px] uppercase tracking-[0.18em] text-[#B99A69] font-medium truncate mb-0.5">
                        {album.category}
                      </span>
                      <h4 className="font-serif text-[12px] sm:text-[13px] font-normal text-[#201E1B] leading-tight truncate group-hover:text-[#B99A69] transition-colors">
                        {album.name}
                      </h4>
                      <div className="inline-flex items-center gap-1 mt-1 text-[9px] font-sans font-medium text-[#777066] group-hover:text-[#201E1B]">
                        <span>Open 3D</span>
                        <Sparkles size={8} className="text-[#B99A69]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
