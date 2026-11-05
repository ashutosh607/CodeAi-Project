import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isMobileViewport } from '../../utils/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Recursively wraps words within strings, JSX elements, and arrays
 * into animated span wrappers (.text-reveal-word).
 */
function wrapWordsRecursively(node, keyPrefix = 'tw') {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return node;
  }

  // Plain string: split into words and wrap
  if (typeof node === 'string') {
    const tokens = node.split(/(\s+)/); // Preserves whitespace
    return tokens.map((token, i) => {
      if (/^\s+$/.test(token)) {
        return token; // Preserve spaces as-is
      }
      if (!token) return null;
      return (
        <span
          key={`${keyPrefix}-${i}`}
          className="inline-block overflow-hidden align-top"
          style={{ verticalAlign: 'top' }}
        >
          <span className="text-reveal-word inline-block will-change-transform">
            {token}
          </span>
        </span>
      );
    });
  }

  // Number: render as a word
  if (typeof node === 'number') {
    return (
      <span key={`${keyPrefix}-num`} className="inline-block overflow-hidden align-top">
        <span className="text-reveal-word inline-block will-change-transform">
          {node}
        </span>
      </span>
    );
  }

  // Array of children
  if (Array.isArray(node)) {
    return node.map((child, idx) => wrapWordsRecursively(child, `${keyPrefix}-${idx}`));
  }

  // React element (e.g., <span className="italic">...</span> or <br />)
  if (React.isValidElement(node)) {
    // Preserve break tags and void elements
    if (node.type === 'br' || node.type === 'hr') {
      return node;
    }

    // Clone element and recursively wrap its children
    return React.cloneElement(
      node,
      { key: node.key || `${keyPrefix}-el` },
      wrapWordsRecursively(node.props.children, `${keyPrefix}-child`)
    );
  }

  return node;
}

/**
 * Editorial Headline & Text Reveal Component
 * 
 * Reveals words with an organic, subtle blur-to-clear and upward translation.
 * - Handles plain text, styled nested elements (spans, italic, accents), and line breaks.
 * - Senses if element is above the fold for immediate entrance on page load.
 * - Supports GSAP ScrollTrigger with Lenis synchronization.
 * - Automatically cleans up filter/transforms on complete for crisp font anti-aliasing.
 */
export default function TextReveal({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0.05,
  stagger = undefined,
  threshold = 'top 92%',
  distance = undefined,
  duration = undefined,
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
    const effectiveStagger = stagger !== undefined ? stagger : isMobile ? 0.028 : 0.042;
    const effectiveDistance = distance !== undefined ? distance : isMobile ? 18 : 26;
    const effectiveDuration = duration !== undefined ? duration : isMobile ? 0.68 : 0.88;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll('.text-reveal-word');
      if (words.length === 0) return;

      const rect = el.getBoundingClientRect();
      const isAboveFold = rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.9;

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: effectiveDistance,
          filter: isMobile ? 'blur(3px)' : 'blur(6px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: effectiveDuration,
          stagger: effectiveStagger,
          delay: isAboveFold ? delay : 0,
          ease: 'power3.out',
          scrollTrigger: isAboveFold
            ? undefined
            : {
                trigger: el,
                start: threshold,
                once: true
              },
          onComplete: () => {
            gsap.set(words, { clearProps: 'filter,transform,opacity' });
          }
        }
      );
    }, elRef);

    return () => {
      ctx.revert();
    };
  }, [delay, stagger, threshold, distance, duration]);

  return (
    <Component ref={elRef} className={className} {...restProps}>
      {wrapWordsRecursively(children)}
    </Component>
  );
}
