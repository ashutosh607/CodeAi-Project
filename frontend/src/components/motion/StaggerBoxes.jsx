import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * StaggerBoxes Component — Master Container for Staggered Cards, Boxes, and Grids
 * 
 * Automatically staggers each child element or elements matching `selector` as the container scrolls into view.
 * - Organic luxury editorial ease (power2.out / power3.out)
 * - Subtle lift + blur-to-clear + scale (0.98 -> 1.0)
 * - Respects prefers-reduced-motion
 * - Cleans up GSAP transforms upon completion so CSS hover effects remain responsive
 */
export default function StaggerBoxes({
  children,
  as: Component = 'div',
  className = '',
  selector = undefined, // if provided, targets elements matching selector; otherwise targets direct children
  stagger = undefined,
  distance = undefined,
  duration = undefined,
  delay = 0,
  threshold = 'top 88%',
  ...restProps
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (prefersReducedMotion()) {
      container.style.opacity = '1';
      return undefined;
    }

    const isMobile = isMobileViewport();
    const effectiveStagger = stagger !== undefined ? stagger : isMobile ? 0.08 : 0.11;
    const effectiveDistance = distance !== undefined ? distance : isMobile ? 22 : 36;
    const effectiveDuration = duration !== undefined ? duration : isMobile ? 0.72 : 0.88;
    const effectiveBlur = isMobile ? 3 : 6;

    const ctx = gsap.context(() => {
      const items = selector
        ? container.querySelectorAll(selector)
        : Array.from(container.children);

      if (!items || items.length === 0) return;

      const rect = container.getBoundingClientRect();
      const isAboveFold = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.9;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: effectiveDistance,
          scale: 0.98,
          filter: effectiveBlur ? `blur(${effectiveBlur}px)` : 'none'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: effectiveDuration,
          stagger: effectiveStagger,
          delay: isAboveFold ? delay : 0,
          ease: 'power2.out',
          scrollTrigger: isAboveFold
            ? undefined
            : {
                trigger: container,
                start: threshold,
                once: true
              },
          onComplete: () => {
            gsap.set(items, { clearProps: 'filter,transform,opacity' });
          }
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [selector, stagger, distance, duration, delay, threshold]);

  return (
    <Component ref={containerRef} className={className} {...restProps}>
      {children}
    </Component>
  );
}

