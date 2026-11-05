import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Editorial Image Reveal Mask Component
 * Reveals through a smooth clipping/opacity transition with scale 1.05 -> 1.0
 * and subtle desktop hover zoom.
 */
export default function ImageReveal({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  aspectRatio = 'aspect-[16/10]',
  delay = 0.05,
  threshold = 'top 85%',
  enableHoverZoom = true,
  parallax = false,
  ...restProps
}) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return undefined;

    if (prefersReducedMotion()) {
      container.style.opacity = '1';
      img.style.opacity = '1';
      img.style.transform = 'none';
      return undefined;
    }

    const isMobile = isMobileViewport();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: threshold,
          once: true
        }
      });

      tl.fromTo(
        container,
        {
          opacity: 0,
          y: isMobile ? 18 : 30,
          filter: isMobile ? 'blur(3px)' : 'blur(7px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: isMobile ? 0.75 : 0.95,
          ease: 'power2.out',
          delay,
          onComplete: () => {
            gsap.set(container, { clearProps: 'filter' });
          }
        }
      );

      tl.fromTo(
        img,
        {
          scale: 1.05,
          opacity: 0.88
        },
        {
          scale: 1.0,
          opacity: 1,
          duration: isMobile ? 0.85 : 1.15,
          ease: 'power2.out'
        },
        0
      );

      // Subtle desktop pointer parallax if requested and not on mobile
      if (parallax && !isMobile) {
        const handleMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(img, {
            x: relX * 10,
            y: relY * 10,
            duration: 0.6,
            ease: 'power1.out'
          });
        };

        const handleMouseLeave = () => {
          gsap.to(img, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power1.out'
          });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [delay, threshold, parallax]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#141310] ${aspectRatio} ${className} group`}
      {...restProps}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          enableHoverZoom ? 'transition-transform duration-700 ease-out group-hover:scale-[1.03]' : ''
        } ${imageClassName}`}
      />
    </div>
  );
}

