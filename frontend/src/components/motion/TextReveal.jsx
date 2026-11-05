import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Editorial Headline Text Reveal
 * Reveals text word-by-word with subtle upward motion & blur-to-clear.
 */
export default function TextReveal({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0.05,
  stagger = undefined,
  threshold = 'top 90%',
  ...restProps
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;

    if (prefersReducedMotion()) {
      el.style.opacity = '1';
      return undefined;
    }

    const isMobile = isMobileViewport();
    const effectiveStagger = stagger !== undefined ? stagger : isMobile ? 0.03 : 0.045;

    const ctx = gsap.context(() => {
      // Find all inner words
      const words = el.querySelectorAll('.text-reveal-word');
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: isMobile ? 16 : 24,
          filter: isMobile ? 'blur(3px)' : 'blur(6px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: isMobile ? 0.65 : 0.85,
          stagger: effectiveStagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: threshold,
            once: true
          },
          onComplete: () => {
            gsap.set(words, { clearProps: 'filter' });
          }
        }
      );
    }, elRef);

    return () => {
      ctx.revert();
    };
  }, [delay, stagger, threshold]);

  // If children is a string, split into word spans
  const renderContent = () => {
    if (typeof children === 'string') {
      const words = children.split(' ');
      return words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <span className="text-reveal-word inline-block">{word}</span>
        </span>
      ));
    }
    return children;
  };

  return (
    <Component ref={elRef} className={className} {...restProps}>
      {renderContent()}
    </Component>
  );
}

