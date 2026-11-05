import React, { useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../../utils/motion';

/**
 * React Bits-inspired 3D Tilted Card with Specular Spotlight Glow
 * 
 * Interactive 3D tilt following pointer position + specular light reflection.
 * Automatically respects prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
  onClick = undefined,
  ...restProps
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion() || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale,
      duration: 0.25,
      ease: 'power2.out',
      transformPerspective: 1000
    });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.25
      });
    }
  }, [maxTilt, scale, glare]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.55,
      ease: 'power3.out'
    });

    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...restProps}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 65%)`
          }}
        />
      )}
    </div>
  );
}

