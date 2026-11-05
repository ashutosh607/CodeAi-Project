import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';

/**
 * Editorial Page Transition Wrapper
 * Applies a short, restrained opacity fade-in on route changes without blocking navigation.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el || prefersReducedMotion()) return undefined;

    // Fast, elegant editorial reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0.35,
          y: 8
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.38,
          ease: 'power2.out',
          clearProps: 'opacity,transform'
        }
      );
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <div ref={pageRef} className="w-full">
      {children}
    </div>
  );
}

