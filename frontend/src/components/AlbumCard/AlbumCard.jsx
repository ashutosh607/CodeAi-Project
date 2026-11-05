import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS_CATALOG } from '../../data/catalogData';
import './AlbumCard.css';

// Ensure ScrollTrigger plugin is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AlbumCard Component
 * 
 * Camera-inspired luxury product card featuring:
 * 1. APERTURE REVEAL: Image opens like a camera iris (clip-path circle(0% -> 75%))
 *    while zooming down from 1.4 to 1 on scroll enter.
 * 2. LENS MAGNIFIER: Circular optic lens with a brass ring follows cursor over photo
 *    at 1.9x zoom with back.out spring entrance.
 * 3. 3D TILT + GLARE: 12deg tilt toward cursor via gsap.quickTo with dynamic light glare,
 *    returning with elastic ease on mouse leave.
 * 4. TEXT & LINK MICRO-INTERACTION: Staggered reveal, 10px lift, and sliding brass arrow.
 */
export default function AlbumCard({
  prod,
  index = 0,
  onSelectProduct
}) {
  const navigate = useNavigate();

  // Element Refs
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const mediaWrapRef = useRef(null);
  const irisRef = useRef(null);
  const basePhotoRef = useRef(null);
  const lensRef = useRef(null);
  const lensPhotoRef = useRef(null);
  const glareRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    // Wrap all GSAP animations in a context for 100% clean teardown (no memory leaks / StrictMode bugs)
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // ------------------------------------------------------------------------
      // 1. APERTURE REVEAL & ENTRANCE SEQUENCE (ScrollTrigger)
      // ------------------------------------------------------------------------
      if (prefersReduced) {
        gsap.set([cardRef.current, irisRef.current, basePhotoRef.current, titleRef.current, descRef.current, linkRef.current], {
          opacity: 1,
          clipPath: 'circle(100% at 50% 50%)',
          y: 0,
          rotateX: 0,
          scale: 1
        });
        return;
      }

      // Initial dormant states
      gsap.set(cardRef.current, {
        y: 40,
        rotateX: 10,
        opacity: 0,
        transformPerspective: 1200
      });
      gsap.set(irisRef.current, {
        clipPath: 'circle(0% at 50% 50%)'
      });
      gsap.set(basePhotoRef.current, {
        scale: 1.4
      });
      gsap.set([titleRef.current, descRef.current, linkRef.current], {
        opacity: 0,
        y: 15
      });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
          once: true
        }
      });

      revealTl
        .delay(index * 0.12)
        .to(cardRef.current, {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.95,
          ease: 'power3.out'
        }, 0)
        .to(irisRef.current, {
          clipPath: 'circle(75% at 50% 50%)',
          duration: 1.15,
          ease: 'power3.inOut'
        }, 0.05)
        .to(basePhotoRef.current, {
          scale: 1,
          duration: 1.15,
          ease: 'power3.out'
        }, 0.05)
        .to([titleRef.current, descRef.current, linkRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out'
        }, 0.5);

      // ------------------------------------------------------------------------
      // 2. DESKTOP ONLY: 3D TILT, GLARE & LENS MAGNIFIER (hover: hover)
      // ------------------------------------------------------------------------
      const mm = gsap.matchMedia();

      mm.add('(hover: hover)', () => {
        // High-performance quickTo setters (zero React re-renders)
        const tiltXTo = gsap.quickTo(cardRef.current, 'rotateX', { duration: 0.35, ease: 'power2.out' });
        const tiltYTo = gsap.quickTo(cardRef.current, 'rotateY', { duration: 0.35, ease: 'power2.out' });
        const liftYTo = gsap.quickTo(cardRef.current, 'y', { duration: 0.35, ease: 'power2.out' });

        const lensXTo = gsap.quickTo(lensRef.current, 'x', { duration: 0.15, ease: 'power2.out' });
        const lensYTo = gsap.quickTo(lensRef.current, 'y', { duration: 0.15, ease: 'power2.out' });
        const lensPhotoXTo = gsap.quickTo(lensPhotoRef.current, 'x', { duration: 0.15, ease: 'power2.out' });
        const lensPhotoYTo = gsap.quickTo(lensPhotoRef.current, 'y', { duration: 0.15, ease: 'power2.out' });

        const MAGNIFICATION = 1.9;
        const LENS_RADIUS = 55; // Half of 110px

        // Card 3D Tilt + Glare Handlers
        const handleCardMouseMove = (e) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          const normX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const normY = (e.clientY - rect.top) / rect.height - 0.5;

          tiltXTo(-normY * 12);
          tiltYTo(normX * 12);
          liftYTo(-10);

          // Glare spotlight position
          if (glareRef.current) {
            const glareX = ((e.clientX - rect.left) / rect.width) * 100;
            const glareY = ((e.clientY - rect.top) / rect.height) * 100;
            glareRef.current.style.setProperty('--glare-x', `${glareX}%`);
            glareRef.current.style.setProperty('--glare-y', `${glareY}%`);
          }
        };

        const handleCardMouseEnter = () => {
          if (glareRef.current) {
            gsap.to(glareRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' });
          }
        };

        const handleCardMouseLeave = () => {
          // Elastic recovery
          gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.85,
            ease: 'elastic.out(1, 0.45)'
          });
          if (glareRef.current) {
            gsap.to(glareRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out' });
          }
        };

        // Lens Magnifier Handlers
        const handleMediaMouseEnter = () => {
          if (lensRef.current) {
            gsap.to(lensRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.35,
              ease: 'back.out(1.7)'
            });
          }
        };

        const handleMediaMouseMove = (e) => {
          if (!mediaWrapRef.current) return;
          const rect = mediaWrapRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          lensXTo(x - LENS_RADIUS);
          lensYTo(y - LENS_RADIUS);

          // Synchronize magnified image under the lens
          lensPhotoXTo(-x * MAGNIFICATION + LENS_RADIUS);
          lensPhotoYTo(-y * MAGNIFICATION + LENS_RADIUS);
        };

        const handleMediaMouseLeave = () => {
          if (lensRef.current) {
            gsap.to(lensRef.current, {
              scale: 0,
              opacity: 0,
              duration: 0.25,
              ease: 'power2.in'
            });
          }
        };

        // Synchronize lens magnified photo dimensions with parent image wrapper
        const syncLensDimensions = () => {
          if (mediaWrapRef.current && lensPhotoRef.current) {
            const rect = mediaWrapRef.current.getBoundingClientRect();
            lensPhotoRef.current.style.width = `${rect.width * MAGNIFICATION}px`;
            lensPhotoRef.current.style.height = `${rect.height * MAGNIFICATION}px`;
          }
        };

        syncLensDimensions();
        window.addEventListener('resize', syncLensDimensions);

        const cardEl = cardRef.current;
        const mediaEl = mediaWrapRef.current;

        cardEl.addEventListener('mousemove', handleCardMouseMove);
        cardEl.addEventListener('mouseenter', handleCardMouseEnter);
        cardEl.addEventListener('mouseleave', handleCardMouseLeave);

        mediaEl.addEventListener('mouseenter', handleMediaMouseEnter);
        mediaEl.addEventListener('mousemove', handleMediaMouseMove);
        mediaEl.addEventListener('mouseleave', handleMediaMouseLeave);

        return () => {
          window.removeEventListener('resize', syncLensDimensions);
          cardEl.removeEventListener('mousemove', handleCardMouseMove);
          cardEl.removeEventListener('mouseenter', handleCardMouseEnter);
          cardEl.removeEventListener('mouseleave', handleCardMouseLeave);

          mediaEl.removeEventListener('mouseenter', handleMediaMouseEnter);
          mediaEl.removeEventListener('mousemove', handleMediaMouseMove);
          mediaEl.removeEventListener('mouseleave', handleMediaMouseLeave);
        };
      });
    }, rootRef);

    return () => ctx.revert();
  }, [index]);

  const handleCardClick = () => {
    const fullProd = PRODUCTS_CATALOG.find((p) => p.slug === prod.slug) || prod;
    if (onSelectProduct) {
      onSelectProduct(fullProd);
    } else {
      navigate(`/products/${prod.slug}`);
    }
  };

  return (
    <div ref={rootRef} className="album-card-viewport">
      <div
        ref={cardRef}
        onClick={handleCardClick}
        className="album-card-root"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        {/* ===================================================================
            1. CAMERA APERTURE IRIS & PHOTO CONTAINER
            =================================================================== */}
        <div ref={mediaWrapRef} className="album-card-media-wrap">
          {/* Circular Iris Viewport */}
          <div ref={irisRef} className="album-card-iris">
            <img
              ref={basePhotoRef}
              src={prod.image}
              alt={prod.name}
              className="album-card-photo"
              loading="lazy"
            />
          </div>

          {/* Aperture hairline ring */}
          <div className="album-card-aperture-ring" />

          {/* Category Hallmark Badge */}
          {prod.category && (
            <div className="album-card-badge">
              {prod.category}
            </div>
          )}

          {/* =================================================================
              2. LENS MAGNIFIER (1.9x Optic Zoom)
              ================================================================= */}
          <div ref={lensRef} className="album-card-lens">
            <div className="album-card-lens-glass">
              <img
                ref={lensPhotoRef}
                src={prod.image}
                alt={`${prod.name} magnified inspection`}
                className="album-card-lens-photo"
                aria-hidden="true"
              />
              <div className="album-card-lens-specular" />
              <div className="album-card-lens-reticle" />
            </div>
          </div>
        </div>

        {/* ===================================================================
            3. LIGHT GLARE OVERLAY
            =================================================================== */}
        <div ref={glareRef} className="album-card-glare" />

        {/* ===================================================================
            4. EDITORIAL BODY CONTENT & MICRO-INTERACTION
            =================================================================== */}
        <div className="album-card-body">
          <div>
            <h3 ref={titleRef} className="album-card-title">
              {prod.name}
            </h3>
            <p ref={descRef} className="album-card-desc">
              {prod.desc}
            </p>
          </div>

          <Link
            ref={linkRef}
            to={`/products/${prod.slug}`}
            className="album-card-link"
            onClick={(e) => {
              e.stopPropagation();
              const fullProd = PRODUCTS_CATALOG.find((p) => p.slug === prod.slug) || prod;
              if (onSelectProduct) onSelectProduct(fullProd);
            }}
          >
            <span>View Specifications</span>
            <ArrowRight size={13} className="album-card-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

