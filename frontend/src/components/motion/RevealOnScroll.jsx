import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Signature Left/Right/Up Blur-To-Clear Scroll Reveal Component
 *
 * Left-to-right reveal for text columns on the left & editorial section intros.
 * Right-to-left reveal for images on the right & supporting product imagery.
 * Bottom-to-top reveal for product cards, gallery images, spec sections, FAQ groups.
 */
export default function RevealOnScroll({
  children,
  direction = 'up', // 'up' | 'left' | 'right' | 'down' | 'none'
  blur = true,
  distance = undefined,
  duration = undefined,
  delay = 0,
  stagger = 0,
  className = '',
  as: Component = 'div',
  threshold = 'top 88%',
  ...restProps
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;

    // Respect reduced motion immediately
    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return undefined;
    }

    const isMobile = isMobileViewport();
    const effectiveDistance = distance !== undefined ? distance : isMobile ? 22 : 40;
    const effectiveBlur = blur ? (isMobile ? 4 : 8) : 0;
    const effectiveDuration = duration !== undefined ? duration : isMobile ? 0.75 : 0.95;

    let initX = 0;
    let initY = 0;

    if (direction === 'left') initX = -effectiveDistance;
    else if (direction === 'right') initX = effectiveDistance;
    else if (direction === 'up') initY = effectiveDistance;
    else if (direction === 'down') initY = -effectiveDistance;

    const ctx = gsap.context(() => {
      // Check if element is already inside initial viewport
      const rect = el.getBoundingClientRect();
      const isAlreadyInView = rect.top < (window.innerHeight || document.documentElement.clientHeight);

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: initX,
          y: initY,
          filter: effectiveBlur ? `blur(${effectiveBlur}px)` : 'none'
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: 'blur(0px)',
          duration: effectiveDuration,
          delay: isAlreadyInView ? delay : 0,
          stagger,
          ease: 'power2.out',
          scrollTrigger: isAlreadyInView
            ? undefined
            : {
                trigger: el,
                start: threshold,
                once: true
              },
          onComplete: () => {
            gsap.set(el, { clearProps: 'filter,opacity,transform' });
          }
        }
      );
    }, elRef);

    return () => {
      ctx.revert(); // Automatically kills tweens and removes ScrollTriggers safely
    };
  }, [direction, blur, distance, duration, delay, stagger, threshold]);

  return (
    <Component ref={elRef} className={className} {...restProps}>
      {children}
    </Component>
  );
}

