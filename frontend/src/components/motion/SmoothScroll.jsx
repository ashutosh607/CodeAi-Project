import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global SmoothScroll Provider using Lenis + GSAP ScrollTrigger integration
 */
export default function SmoothScroll({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // If reduced motion is preferred, keep default browser scrolling
    if (prefersReducedMotion()) {
      return undefined;
    }

    const isMobile = isMobileViewport();
    let tickerCallback = null;

    try {
      // Initialize Lenis with gentle, luxury editorial damping
      const lenis = new Lenis({
        duration: isMobile ? 0.9 : 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential curve
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: isMobile ? 1.0 : 0.92,
        touchMultiplier: 1.25,
        infinite: false
      });

      lenisRef.current = lenis;

      // Synchronize Lenis scroll position with GSAP ScrollTrigger
      if (ScrollTrigger && typeof ScrollTrigger.update === 'function') {
        lenis.on('scroll', ScrollTrigger.update);
      }

      // Sync GSAP ticker to Lenis requestAnimationFrame
      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch (err) {
      console.warn('Lenis smooth scroll initialization skipped:', err);
    }

    // Clean up on unmount
    return () => {
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Handle route change: smoothly reset scroll to top without jarring jumps
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return <>{children}</>;
}

