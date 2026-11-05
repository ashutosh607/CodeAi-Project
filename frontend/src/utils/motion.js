import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if current viewport is mobile/touch
 */
export function isMobileViewport() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || ('ontouchstart' in window && navigator.maxTouchPoints > 0);
}

/**
 * Signature Blur-to-Clear Reveal
 * @param {HTMLElement | string} target
 * @param {Object} options
 */
export function createBlurReveal(target, options = {}) {
  if (!target || prefersReducedMotion()) {
    if (target) {
      gsap.set(target, { opacity: 1, filter: 'none', x: 0, y: 0, clearProps: 'all' });
    }
    return null;
  }

  const isMobile = isMobileViewport();
  const {
    direction = 'up', // 'up' | 'left' | 'right' | 'none'
    distance = isMobile ? 24 : 42,
    blur = isMobile ? 4 : 8,
    duration = isMobile ? 0.75 : 0.95,
    ease = 'power2.out',
    delay = 0,
    stagger = 0,
    trigger = target,
    start = 'top 88%',
    toggleActions = 'play none none none',
    onComplete = null
  } = options;

  let x = 0;
  let y = 0;

  if (direction === 'left') x = -distance;
  else if (direction === 'right') x = distance;
  else if (direction === 'up') y = distance;
  else if (direction === 'down') y = -distance;

  return gsap.fromTo(
    target,
    {
      opacity: 0,
      x,
      y,
      filter: blur ? `blur(${blur}px)` : 'none'
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      duration,
      ease,
      delay,
      stagger,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions,
            once: true
          }
        : null,
      onComplete: () => {
        // Clean up filter and transforms after animation completes to avoid blur lingering or subpixel anti-aliasing issues
        gsap.set(target, { clearProps: 'filter' });
        if (onComplete) onComplete();
      }
    }
  );
}

/**
 * Editorial Headline Text Reveal (word-by-word or lines)
 * @param {HTMLElement} element
 * @param {Object} options
 */
export function createTextReveal(element, options = {}) {
  if (!element || prefersReducedMotion()) {
    if (element) gsap.set(element, { opacity: 1, y: 0, clearProps: 'all' });
    return null;
  }

  const isMobile = isMobileViewport();
  const {
    stagger = isMobile ? 0.03 : 0.05,
    duration = isMobile ? 0.65 : 0.85,
    ease = 'power3.out',
    delay = 0.1,
    trigger = element,
    start = 'top 90%'
  } = options;

  // Split text into words if not already split
  const originalText = element.textContent.trim();
  if (!originalText) return null;

  const words = originalText.split(/\s+/);
  element.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden"><span class="motion-word inline-block">${word}</span></span>`
    )
    .join(' ');

  const wordSpans = element.querySelectorAll('.motion-word');

  return gsap.fromTo(
    wordSpans,
    {
      opacity: 0,
      y: isMobile ? 18 : 28,
      filter: isMobile ? 'blur(3px)' : 'blur(5px)'
    },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            once: true
          }
        : null,
      onComplete: () => {
        gsap.set(wordSpans, { clearProps: 'filter' });
      }
    }
  );
}

/**
 * Image Reveal Mask
 * @param {HTMLElement} container
 * @param {HTMLElement} image
 * @param {Object} options
 */
export function createImageMaskReveal(container, image, options = {}) {
  if (!container || prefersReducedMotion()) {
    if (image) gsap.set(image, { opacity: 1, scale: 1, clearProps: 'all' });
    return null;
  }

  const isMobile = isMobileViewport();
  const {
    duration = isMobile ? 0.85 : 1.1,
    ease = 'power2.out',
    delay = 0.1,
    trigger = container,
    start = 'top 85%'
  } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start,
      once: true
    }
  });

  tl.fromTo(
    container,
    {
      opacity: 0,
      y: isMobile ? 20 : 35,
      filter: isMobile ? 'blur(4px)' : 'blur(8px)'
    },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      ease,
      delay,
      onComplete: () => {
        gsap.set(container, { clearProps: 'filter' });
      }
    }
  );

  if (image) {
    tl.fromTo(
      image,
      {
        scale: 1.06,
        opacity: 0.85
      },
      {
        scale: 1.0,
        opacity: 1,
        duration: duration * 1.1,
        ease: 'power2.out'
      },
      0
    );
  }

  return tl;
}

/**
 * Staggered Card Grid Reveal
 * @param {NodeList | Array} items
 * @param {Object} options
 */
export function createStaggerReveal(items, options = {}) {
  if (!items || items.length === 0 || prefersReducedMotion()) {
    if (items) gsap.set(items, { opacity: 1, y: 0, filter: 'none', clearProps: 'all' });
    return null;
  }

  const isMobile = isMobileViewport();
  const {
    stagger = isMobile ? 0.08 : 0.12,
    distance = isMobile ? 20 : 35,
    blur = isMobile ? 3 : 6,
    duration = 0.85,
    ease = 'power2.out',
    trigger = items[0],
    start = 'top 88%'
  } = options;

  return gsap.fromTo(
    items,
    {
      opacity: 0,
      y: distance,
      filter: blur ? `blur(${blur}px)` : 'none'
    },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger,
        start,
        once: true
      },
      onComplete: () => {
        gsap.set(items, { clearProps: 'filter' });
      }
    }
  );
}

