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

/**
 * HeroBook Component — Master Physical 3D Heirloom Album
 * 
 * Engineered for authentic physical presence:
 * - Single unified 3D physical book rig (zero React unmount pop-ins/pop-outs)
 * - Physical front cover leaf swing (rotateY: 0deg -> -180deg) hinged along the left spine
 * - Organic paper curl, specular dynamic light sweep, and contact shadow diffusion
 * - Zero previous-photo flicker and full-bleed image coverage
 * - Smooth physical book closing with damped settle
 * - Keyboard & touch swipe support
 */
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

  // References to Physical Rig
  const stageRef = useRef(null);
  const bookRigRef = useRef(null);
  const ambientShadowRef = useRef(null);
  const leftWingRef = useRef(null);
  const rightWingRef = useRef(null);
  const coverLeafRef = useRef(null);
  const coverFrontFaceRef = useRef(null);
  const coverBackFaceRef = useRef(null);
  const coverFrontShadowRef = useRef(null);
  const coverBackShadowRef = useRef(null);
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

    if (bookRigRef.current) {
      if (floatTweenRef.current) floatTweenRef.current.kill();
      floatTweenRef.current = gsap.timeline({ repeat: -1, yoyo: true });
      floatTweenRef.current.to(bookRigRef.current, {
        y: -7,
        rotateY: -9,
        rotateX: 2,
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

  // 3. Cinematic material change transition
  useEffect(() => {
    if (!material || material.id === prevMaterialIdRef.current) return;
    prevMaterialIdRef.current = material.id;

    if (!isOpen && bookRigRef.current && !prefersReducedMotion) {
      gsap.to(bookRigRef.current, {
        scale: 0.96,
        rotateY: -16,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          setDisplayMaterial(material);
          gsap.to(bookRigRef.current, {
            scale: 1,
            rotateY: -12,
            duration: 0.45,
            ease: 'back.out(1.4)'
          });
        }
      });
    } else {
      setDisplayMaterial(material);
    }
  }, [material, isOpen, prefersReducedMotion]);

  // Initial rig position setup on mount
  useEffect(() => {
    if (!bookRigRef.current || !coverLeafRef.current || !leftWingRef.current) return;

    if (!isOpen) {
      // Rig set to closed position: centered offset (x: -25%), tilted, left wing hidden, cover closed at 0deg
      gsap.set(bookRigRef.current, {
        x: '-25%',
        rotateY: -12,
        rotateX: 3.5,
        rotateZ: 0.5,
        scale: 1
      });
      gsap.set(coverLeafRef.current, {
        rotateY: 0,
        skewY: 0,
        display: 'block',
        zIndex: 60
      });
      if (coverFrontFaceRef.current) {
        coverFrontFaceRef.current.style.display = 'block';
        gsap.set(coverFrontFaceRef.current, { opacity: 1, visibility: 'visible' });
      }
      if (coverBackFaceRef.current) {
        coverBackFaceRef.current.style.display = 'none';
        gsap.set(coverBackFaceRef.current, { opacity: 0, visibility: 'hidden' });
      }
      gsap.set(leftWingRef.current, {
        opacity: 0,
        scaleX: 0.15
      });
    } else {
      // Set to fully open position
      gsap.set(bookRigRef.current, {
        x: '0%',
        rotateY: 0,
        rotateX: 3,
        rotateZ: 0,
        scale: 1
      });
      gsap.set(coverLeafRef.current, {
        rotateY: -180,
        skewY: 0,
        display: 'none',
        zIndex: 15
      });
      gsap.set(leftWingRef.current, {
        opacity: 1,
        scaleX: 1
      });
    }
  }, []);

  // 4. MASTER 3D BOOK OPENING ANIMATION (Physical 180° Cover Swing)
  const handleOpenAlbum = useCallback(() => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    if (floatTweenRef.current) floatTweenRef.current.kill();

    const rig = bookRigRef.current;
    const cover = coverLeafRef.current;
    const frontFace = coverFrontFaceRef.current;
    const backFace = coverBackFaceRef.current;
    const leftWing = leftWingRef.current;
    const shadow = ambientShadowRef.current;
    const frontShadow = coverFrontShadowRef.current;
    const backShadow = coverBackShadowRef.current;

    if (prefersReducedMotion || !rig || !cover || !leftWing) {
      setIsOpen(true);
      setCurrentSpreadIndex(0);
      setIsAnimating(false);
      return;
    }

    // Ensure initial closed state before timeline: front face visible, back face hidden
    gsap.set(rig, { x: '-25%', rotateY: -12, rotateX: 3.5, rotateZ: 0.5 });
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

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(true);
        setCurrentSpreadIndex(0);
        // Hide the cover leaf once docked at -180deg so left wing spread is 100% visible & crisp
        if (cover) cover.style.display = 'none';
        gsap.set(cover, { display: 'none' });
        setIsAnimating(false);
      }
    });

    // 1. The whole book centers and levels with synchronized easing
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
        maxWidth: '460px',
        opacity: 0.4,
        duration: 1.15,
        ease: 'power3.inOut'
      }, 0);
    }

    // 3. Left wing baseboard smoothly emerges from center spine
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
        // Midpoint face toggle: when passing perpendicular (-88deg), completely toggle display
        // to prevent Chromium 3D compositing from ever showing reversed/mirrored monogram text
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

    // Timeline deterministic face swap at exact perpendicular midpoint (t = 0.55s)
    if (frontFace) tl.set(frontFace, { display: 'none', visibility: 'hidden' }, 0.55);
    if (backFace) tl.set(backFace, { display: 'block', visibility: 'visible', opacity: 1 }, 0.55);
    // At swing completion, hide cover leaf completely so leftWing page is 100% visible
    tl.set(cover, { display: 'none' }, 1.15);

    // 5. Authentic cover flexion during swing
    tl.to(cover, { skewY: -2.6, duration: 0.52, ease: 'power2.in' }, 0);
    tl.to(cover, { skewY: 0, duration: 0.63, ease: 'power2.out' }, 0.52);

    // 6. Specular shadow sweep across front cover as it lifts into perspective
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0 }, { opacity: 0.5, duration: 0.52 }, 0);
      tl.to(frontShadow, { opacity: 0, duration: 0.2 }, 0.52);
    }

    // 7. Back shadow dissolves as inside cover / Plate 01 docks on left stack
    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0.6 }, { opacity: 0, duration: 0.58 }, 0.52);
    }
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen]);

  // 5. MASTER 3D BOOK CLOSING ANIMATION (-180° back to 0° Snap Shut)
  const handleCloseAlbum = useCallback(() => {
    if (!isOpen || isAnimating) return;
    setIsAnimating(true);

    const rig = bookRigRef.current;
    const cover = coverLeafRef.current;
    const frontFace = coverFrontFaceRef.current;
    const backFace = coverBackFaceRef.current;
    const leftWing = leftWingRef.current;
    const shadow = ambientShadowRef.current;
    const frontShadow = coverFrontShadowRef.current;
    const backShadow = coverBackShadowRef.current;

    if (prefersReducedMotion || !rig || !cover || !leftWing) {
      setIsOpen(false);
      setCurrentSpreadIndex(0);
      setIsAnimating(false);
      resumeFloating();
      return;
    }

    // Reset spread to 0 so cover lands on first spread
    setCurrentSpreadIndex(0);

    // Ensure cover is visible at -180deg with back face visible, front face hidden
    gsap.set(cover, { display: 'block', rotateY: -180, zIndex: 60 });
    if (frontFace) {
      frontFace.style.display = 'none';
      gsap.set(frontFace, { opacity: 0, visibility: 'hidden' });
    }
    if (backFace) {
      backFace.style.display = 'block';
      gsap.set(backFace, { opacity: 1, visibility: 'visible' });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        resumeFloating();
      }
    });

    // 1. Front cover swings shut from -180deg back to 0deg
    tl.to(cover, {
      rotateY: 0,
      duration: 1.1,
      ease: 'power3.inOut',
      onUpdate: () => {
        const curRot = parseFloat(gsap.getProperty(cover, 'rotateY')) || 0;
        // When rotation swings forward past -92deg, reveal front face and hide back face
        if (curRot >= -92) {
          if (frontFace && frontFace.style.display !== 'block') {
            frontFace.style.display = 'block';
            gsap.set(frontFace, { opacity: 1, visibility: 'visible' });
          }
          if (backFace && backFace.style.display !== 'none') {
            backFace.style.display = 'none';
          }
        } else {
          if (frontFace && frontFace.style.display !== 'none') {
            frontFace.style.display = 'none';
          }
          if (backFace && backFace.style.display !== 'block') {
            backFace.style.display = 'block';
            gsap.set(backFace, { opacity: 1, visibility: 'visible' });
          }
        }
      }
    }, 0);

    // Timeline deterministic face swap at exact perpendicular midpoint (t = 0.55s)
    if (backFace) tl.set(backFace, { display: 'none', visibility: 'hidden' }, 0.55);
    if (frontFace) tl.set(frontFace, { display: 'block', visibility: 'visible', opacity: 1 }, 0.55);

    // 2. Cover flex during closing swing
    tl.to(cover, { skewY: 2.2, duration: 0.48, ease: 'power2.in' }, 0);
    tl.to(cover, { skewY: 0, duration: 0.57, ease: 'power2.out' }, 0.48);

    // 3. Rig shifts back to centered closed position with identical ease
    tl.to(rig, {
      x: '-25%',
      rotateY: -12,
      rotateX: 3.5,
      rotateZ: 0.5,
      duration: 1.1,
      ease: 'power3.inOut'
    }, 0);

    // 4. Ambient shadow contracts to closed book footprint
    if (shadow) {
      tl.to(shadow, {
        width: '240px',
        maxWidth: '260px',
        opacity: 0.28,
        duration: 1.1,
        ease: 'power3.inOut'
      }, 0);
    }

    // 5. Left wing folds away behind spine
    tl.to(leftWing, {
      opacity: 0,
      scaleX: 0.15,
      duration: 0.95,
      ease: 'power2.in'
    }, 0.1);

    // 6. Lighting sweeps across back and front
    if (backShadow) {
      tl.fromTo(backShadow, { opacity: 0 }, { opacity: 0.5, duration: 0.48 }, 0);
      tl.to(backShadow, { opacity: 0, duration: 0.2 }, 0.48);
    }
    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0.5 }, { opacity: 0, duration: 0.57 }, 0.48);
    }

    // 7. Damped physical settle bounce as cover snaps shut
    tl.to(rig, {
      rotateX: 5,
      duration: 0.12,
      ease: 'power1.out'
    }, 1.1);
    tl.to(rig, {
      rotateX: 3.5,
      duration: 0.28,
      ease: 'bounce.out'
    }, 1.22);
  }, [isOpen, isAnimating, prefersReducedMotion, setIsOpen, resumeFloating]);

  // 6. SILKY SMOOTH PAGE TURN NEXT (0.76s Timeline)
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
      zIndex: 45
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
      rotateY: -180,
      duration: 0.76,
      ease: 'power3.inOut'
    });

    tl.to(leaf, { skewY: -2.4, duration: 0.36, ease: 'power2.in' }, 0);
    tl.to(leaf, { skewY: 0, duration: 0.4, ease: 'power2.out' }, 0.36);

    if (frontShadow) {
      tl.fromTo(frontShadow, { opacity: 0 }, { opacity: 0.45, duration: 0.36 }, 0);
      tl.to(frontShadow, { opacity: 0, duration: 0.15 }, 0.36);
    }
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
      zIndex: 45
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

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
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
      if (e.key === 'ArrowRight' || e.key === ' ') {
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

  // Underlying Spread Getters (Eliminates all image ghosting during turns)
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
      return activeSpread.right;
    }
    if (turnDirection === 'prev') {
      return LUXURY_SPREADS[targetSpreadIndex]?.right || activeSpread.right;
    }
    return activeSpread.right;
  };

  const getTurningLeafBack = () => {
    if (turnDirection === 'next') {
      return LUXURY_SPREADS[targetSpreadIndex]?.left || activeSpread.left;
    }
    if (turnDirection === 'prev') {
      return activeSpread.left;
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
          1. 3D SCENE VIEWPORT (Contains the Master Physical Book Rig)
          ========================================================================= */}
      <div
        className="hero-book-viewport relative w-full max-w-[480px] h-[270px] sm:h-[320px] md:h-[330px] flex items-center justify-center overflow-visible"
        style={{ perspective: '1800px' }}
      >
        {/* Soft Ambient Depth Shadow Suspended in Mid-Air */}
        <div
          ref={ambientShadowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full transition-all duration-700"
          style={{
            width: isOpen ? '94%' : '240px',
            maxWidth: isOpen ? '460px' : '260px',
            height: '260px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(32, 30, 27, 0.24) 0%, rgba(32, 30, 27, 0.05) 55%, transparent 72%)',
            filter: 'blur(30px)',
            opacity: isOpen ? 0.4 : 0.28,
            transform: 'translate(-50%, -50%) translateZ(-35px)'
          }}
        />

        {/* =======================================================================
            THE MASTER PHYSICAL 3D BOOK RIG
            - Single unified DOM entity: Never unmounts or jumps
            - Spine hinged at Center (x = 50%)
            - When closed: rig shifted x: -25%, front cover at 0deg over right stack
            - When open: rig centered x: 0%, front cover at -180deg on left stack
            ======================================================================= */}
        <div
          ref={bookRigRef}
          onClick={!isOpen ? handleOpenAlbum : undefined}
          title={!isOpen ? "Click to Open Heirloom Album" : undefined}
          className={`relative transform-style-3d will-change-transform w-[280px] xs:w-[320px] sm:w-[410px] md:w-[440px] max-w-[92vw] h-[195px] xs:h-[220px] sm:h-[275px] md:h-[290px] ${
            !isOpen ? 'cursor-pointer group' : ''
          }`}
          style={{
            transform: 'rotateX(3.5deg) rotateY(-12deg) rotateZ(0.5deg)'
          }}
        >
          {/* -------------------------------------------------------------------
              1. LEFT WING (0% to 50%): Left Hardcover Baseboard + Left Spread Page
              - Hidden when closed (opacity: 0, scaleX: 0.15)
              - Unfolds smoothly from spine as cover swings open
              ------------------------------------------------------------------- */}
          <div
            ref={leftWingRef}
            className="absolute top-0 left-0 w-1/2 h-full transform-style-3d will-change-transform z-10"
            style={{
              transformOrigin: 'right center'
            }}
          >
            {/* Left Base Board */}
            <div
              className="absolute -top-1.5 -left-1.5 w-[calc(100%+6px)] h-[calc(100%+12px)] rounded-l-xs overflow-hidden transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.25), 0 8px 24px -4px rgba(32, 30, 27, 0.12)',
                transform: 'translateZ(-14px)'
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

            {/* Left Page (Spread Page 1, 3, 5, etc.) */}
            <div className="absolute inset-0">
              <BookPage
                pageData={getUnderlyingLeftSpread()}
                pageNumber={
                  (isAnimating && turnDirection === 'prev' ? targetSpreadIndex : currentSpreadIndex) * 2 + 1
                }
                side="left"
                isGutterShadow={true}
              />
            </div>
          </div>

          {/* -------------------------------------------------------------------
              2. RIGHT WING (50% to 100%): Right Hardcover Baseboard + Right Page Stack
              - Always present: represents the book stack when closed
              - Underneath the front cover leaf
              ------------------------------------------------------------------- */}
          <div
            ref={rightWingRef}
            className="absolute top-0 left-1/2 w-1/2 h-full transform-style-3d will-change-transform z-10"
            style={{
              transformOrigin: 'left center'
            }}
          >
            {/* Right Base Board */}
            <div
              className="absolute -top-1.5 -right-1.5 w-[calc(100%+6px)] h-[calc(100%+12px)] rounded-r-xs overflow-hidden transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: '0 24px 60px -12px rgba(32, 30, 27, 0.25), 0 8px 24px -4px rgba(32, 30, 27, 0.12)',
                transform: 'translateZ(-14px)'
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

            {/* Right Page (Spread Page 2, 4, 6, etc.) */}
            <div className="absolute inset-0">
              <BookPage
                pageData={getUnderlyingRightSpread()}
                pageNumber={
                  (isAnimating && turnDirection === 'next' ? targetSpreadIndex : currentSpreadIndex) * 2 + 2
                }
                side="right"
                isGutterShadow={true}
              />
            </div>

            {/* Right Layered Archival Page Block Edge (14px thickness) */}
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

          {/* -------------------------------------------------------------------
              3. CENTER SPINE HINGE & THICKNESS (x = 50%)
              - Spine thickness (16px) visible when closed along the left edge
              - Zero-gutter spine crease shadow when open
              ------------------------------------------------------------------- */}
          {/* 3D Spine Thickness Box */}
          <div
            className="absolute top-0 left-1/2 -translate-x-full w-[16px] h-full rounded-l-xs flex flex-col justify-between py-5 px-0.5 items-center pointer-events-none transition-colors duration-500 z-20"
            style={{
              backgroundColor: displayMaterial.color,
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

          {/* Center Zero-Gutter Spine Crease Shadow (visible when open) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-full pointer-events-none z-25">
            <div className="w-full h-full bg-gradient-to-r from-black/15 via-black/35 to-black/15 opacity-60" />
          </div>

          {/* -------------------------------------------------------------------
              4. DYNAMIC 3D TURNING LEAF (Active during Next / Prev page turns)
              - Hinged at Center Spine (left: 50%, transformOrigin: left center)
              ------------------------------------------------------------------- */}
          <div
            ref={turnLeafRef}
            className="absolute top-0 w-1/2 h-full hidden pointer-events-none transform-style-3d will-change-transform z-45"
            style={{
              left: '50%',
              transformOrigin: 'left center'
            }}
          >
            {/* Front Face of Turning Leaf (Right Page turning away or landing) */}
            <div
              className="absolute inset-0 backface-hidden overflow-hidden bg-[#FAF7F2] rounded-r-xs shadow-xl"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg) translateZ(1px)'
              }}
            >
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
              style={{
                transform: 'rotateY(180deg) translateZ(1px)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
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

          {/* -------------------------------------------------------------------
              5. THE MASTER 3D FRONT COVER LEAF
              - Hinged along the center spine (left: 50%, transformOrigin: left center)
              - At rotateY: 0deg: Rests closed over the right stack (exterior cover)
              - At rotateY: -180deg: Rests open flat on the left stack (inside front / Plate 01)
              ------------------------------------------------------------------- */}
          <div
            ref={coverLeafRef}
            className="absolute top-0 w-1/2 h-full pointer-events-none transform-style-3d will-change-transform z-50"
            style={{
              left: '50%',
              transformOrigin: 'left center',
              display: isOpen ? 'none' : 'block'
            }}
          >
            {/* FRONT FACE OF COVER (Facing user when closed at rotateY: 0deg) */}
            <div
              ref={coverFrontFaceRef}
              className="absolute inset-0 backface-hidden rounded-r-xs flex items-center justify-center p-3 sm:p-5 shadow-2xl transition-colors duration-500"
              style={{
                backgroundColor: displayMaterial.color,
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 16px 36px rgba(32,30,27,0.22)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(0deg) translateZ(1px)',
                display: 'block'
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

              {/* Debossed Foil Stamped Monogram Frame */}
              <div
                className="relative w-full h-full border-[1.5px] flex flex-col items-center justify-center text-center p-3 transition-all duration-500"
                style={{
                  borderColor: displayMaterial.accent,
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                <div
                  className="text-[14px] sm:text-[17px] mb-1 font-serif"
                  style={{ color: displayMaterial.accent }}
                >
                  ✦
                </div>
                <h3
                  className="font-serif text-[12px] sm:text-[16px] font-normal tracking-[0.22em] uppercase leading-tight m-0"
                  style={{ color: displayMaterial.accent, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                >
                  ULTRAA ALBUMS
                </h3>
                <div
                  className="w-7 sm:w-10 h-[1.2px] my-1.5 sm:my-2 opacity-80"
                  style={{ backgroundColor: displayMaterial.accent }}
                ></div>
                <p
                  className="font-serif text-[7.5px] sm:text-[9px] tracking-[0.18em] uppercase m-0 mb-1 opacity-90"
                  style={{ color: displayMaterial.accent }}
                >
                  HEIRLOOM WEDDING VOL. XII
                </p>
                <span
                  className="font-sans text-[5.5px] sm:text-[7px] font-medium tracking-[0.2em] uppercase opacity-75"
                  style={{ color: displayMaterial.accent }}
                >
                  FINE ART FLUSH MOUNT BINDERY
                </span>
              </div>

              {/* Specular lighting sheen across cover */}
              <div
                ref={coverFrontShadowRef}
                className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none opacity-0"
              />
            </div>

            {/* BACK FACE OF COVER (Inside front cover / Plate 01 resting on left stack at rotateY: -180deg) */}
            <div
              ref={coverBackFaceRef}
              className="absolute inset-0 backface-hidden rounded-l-xs shadow-2xl"
              style={{
                transform: 'rotateY(180deg) translateZ(1px)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'none'
              }}
            >
              <BookPage
                pageData={LUXURY_SPREADS[0].left}
                pageNumber={1}
                side="left"
                isGutterShadow={true}
              />
              <div
                ref={coverBackShadowRef}
                className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/15 to-transparent pointer-events-none opacity-0"
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            SIDE FLOATING ARROWS (Visible ONLY when isOpen)
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
            {/* Click to Open Pill */}
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
