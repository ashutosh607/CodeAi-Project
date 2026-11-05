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
 * Supports:
 * - direction: 'up' | 'alternate' (left & right alternating) | 'left' | 'right'
 * - Blur-to-clear text and image resolution
 * - Organic luxury easing (power3.out)
 * - Automatic transform cleanup for interactive CSS hover states
 */
export default function StaggerBoxes({
  children,
  as: Component = 'div',
  className = '',
  selector = undefined,
  direction = 'alternate', // 'alternate' (cards left/right) | 'up' | 'left' | 'right'
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
    const effectiveStagger = stagger !== undefined ? stagger : isMobile ? 0.08 : 0.12;
    const effectiveDistance = distance !== undefined ? distance : isMobile ? 24 : 45;
    const effectiveDuration = duration !== undefined ? duration : isMobile ? 0.76 : 0.95;
    const effectiveBlur = isMobile ? 3 : 6;

    const ctx = gsap.context(() => {
      const items = selector
        ? container.querySelectorAll(selector)
        : Array.from(container.children);

      if (!items || items.length === 0) return;

      const rect = container.getBoundingClientRect();
      const isAboveFold = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.9;

      if (direction === 'alternate') {
        items.forEach((item, idx) => {
          const fromX = idx % 2 === 0 ? -effectiveDistance : effectiveDistance;
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: fromX,
              y: 14,
              scale: 0.97,
              filter: effectiveBlur ? `blur(${effectiveBlur}px)` : 'none'
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: effectiveDuration,
              delay: (isAboveFold ? delay : 0) + idx * effectiveStagger,
              ease: 'power3.out',
              scrollTrigger: isAboveFold
                ? undefined
                : {
                    trigger: container,
                    start: threshold,
                    once: true
                  },
              onComplete: () => {
                gsap.set(item, { clearProps: 'filter,transform,opacity' });
              }
            }
          );
        });
      } else {
        let fromX = 0;
        let fromY = 0;
        if (direction === 'left') fromX = -effectiveDistance;
        else if (direction === 'right') fromX = effectiveDistance;
        else fromY = effectiveDistance; // default 'up'

        gsap.fromTo(
          items,
          {
            opacity: 0,
            x: fromX,
            y: fromY,
            scale: 0.98,
            filter: effectiveBlur ? `blur(${effectiveBlur}px)` : 'none'
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: effectiveDuration,
            stagger: effectiveStagger,
            delay: isAboveFold ? delay : 0,
            ease: 'power3.out',
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
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [selector, direction, stagger, distance, duration, delay, threshold]);

  return (
    <Component ref={containerRef} className={className} {...restProps}>
      {children}
    </Component>
  );
}
