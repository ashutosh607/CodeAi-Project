import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global SmoothScroll Provider using Lenis + GSAP ScrollTrigger integration
 */
export default function SmoothScroll({ children }) {
  const location = useLocation();

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(min-width: 769px) and (hover: hover) and (prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.92 });
      const tick = time => lenis.raf(time * 1000);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => media.revert();
  }, []);

  // Recalculate section positions after the route has settled.
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <>{children}</>;
}

