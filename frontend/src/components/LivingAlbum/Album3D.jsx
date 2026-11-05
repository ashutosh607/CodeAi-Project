import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import {
  createPaperTexture,
  createCoverDebossTexture,
  SPREADS
} from '../../utils/textureGenerator';

export default function Album3D({
  currentSpread,
  isOpen,
  setIsOpen,
  materialColor,
  materialName,
  isAutoAnimating,
  setIsAutoAnimating,
  onReplayReady
}) {
  const { camera } = useThree();
  const groupRef = useRef();
  const frontCoverRef = useRef();
  const flippingLeafRef = useRef();

  // Procedural textures
  const coverTexture = useMemo(() => {
    const dataUrl = createCoverDebossTexture(materialName);
    const texture = new THREE.TextureLoader().load(dataUrl);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, [materialName]);

  const paperTexture = useMemo(() => {
    const dataUrl = createPaperTexture();
    const texture = new THREE.TextureLoader().load(dataUrl);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  }, []);

  // Pre-load spreads
  const [spreadTextures, setSpreadTextures] = useState({});

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    SPREADS.forEach((spread) => {
      loader.load(
        spread.left.image,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          setSpreadTextures((prev) => ({ ...prev, [`${spread.id}-left`]: tex }));
        },
        undefined,
        () => {
          setSpreadTextures((prev) => ({ ...prev, [`${spread.id}-left`]: paperTexture }));
        }
      );

      loader.load(
        spread.right.image,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          setSpreadTextures((prev) => ({ ...prev, [`${spread.id}-right`]: tex }));
        },
        undefined,
        () => {
          setSpreadTextures((prev) => ({ ...prev, [`${spread.id}-right`]: paperTexture }));
        }
      );
    });
  }, [paperTexture]);

  // Physical album specifications
  const albumWidth = 2.45; // Width of one leaf
  const albumHeight = 3.15;
  const albumThickness = 0.22; // Substrate depth

  // 1. Initial Opening Choreography
  const playOpeningSequence = () => {
    setIsAutoAnimating(true);
    setIsOpen(false);

    // Initial closed camera perspective
    camera.position.set(1.6, 3.4, 5.8);
    camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      groupRef.current.rotation.set(0.32, -0.22, 0);
    }
    if (frontCoverRef.current) {
      frontCoverRef.current.rotation.y = 0;
    }

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        setIsAutoAnimating(false);
      }
    });

    // Step 2 & 3: Camera moves closer, album tilts to show spine thickness
    tl.to(camera.position, {
      x: 0,
      y: 2.1,
      z: 4.6,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => camera.lookAt(0, 0, 0)
    });

    tl.to(
      groupRef.current.rotation,
      {
        x: 0.24,
        y: 0,
        z: 0,
        duration: 1.6,
        ease: 'power2.out'
      },
      '-=1.4'
    );

    // Step 4 & 5: Front cover slowly rotates open around spine
    tl.to(
      frontCoverRef.current.rotation,
      {
        y: -Math.PI * 0.96,
        duration: 2.2,
        ease: 'power2.inOut',
        onStart: () => setIsOpen(true)
      },
      '-=0.7'
    );
  };

  useEffect(() => {
    playOpeningSequence();
  }, []);

  // Expose replay trigger
  useEffect(() => {
    if (onReplayReady) {
      onReplayReady(() => playOpeningSequence);
    }
  }, [onReplayReady]);

  // Close / Open Manual Toggle
  useEffect(() => {
    if (isAutoAnimating || !frontCoverRef.current) return;
    const targetY = isOpen ? -Math.PI * 0.96 : 0;
    gsap.to(frontCoverRef.current.rotation, {
      y: targetY,
      duration: 1.3,
      ease: 'power2.inOut'
    });
  }, [isOpen, isAutoAnimating]);

  // Page Turn Flip
  const prevSpreadRef = useRef(currentSpread);
  useEffect(() => {
    if (isAutoAnimating) return;
    if (prevSpreadRef.current === currentSpread) return;

    const isNext = currentSpread > prevSpreadRef.current;
    prevSpreadRef.current = currentSpread;

    if (flippingLeafRef.current) {
      const leaf = flippingLeafRef.current;
      leaf.visible = true;

      if (isNext) {
        leaf.rotation.y = 0;
        gsap.to(leaf.rotation, {
          y: -Math.PI * 0.96,
          duration: 0.85,
          ease: 'power2.inOut',
          onComplete: () => {
            leaf.visible = false;
            leaf.rotation.y = 0;
          }
        });
      } else {
        leaf.rotation.y = -Math.PI * 0.96;
        gsap.to(leaf.rotation, {
          y: 0,
          duration: 0.85,
          ease: 'power2.inOut',
          onComplete: () => {
            leaf.visible = false;
          }
        });
      }
    }
  }, [currentSpread, isAutoAnimating]);

  // Subtle natural idle float
  useFrame((state) => {
    if (groupRef.current && !isAutoAnimating) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = -0.05 + Math.sin(t * 0.75) * 0.018;
      groupRef.current.rotation.x = 0.24 + Math.sin(t * 0.5) * 0.006;
    }
  });

  const activeSpread = SPREADS.find((s) => s.id === currentSpread) || SPREADS[0];
  const leftTex = spreadTextures[`${activeSpread.id}-left`] || paperTexture;
  const rightTex = spreadTextures[`${activeSpread.id}-right`] || paperTexture;

  return (
    <group ref={groupRef} position={[0, -0.05, 0]} rotation={[0.24, 0, 0]}>
      {/* Warm Ivory Studio Pedestal Table */}
      <mesh position={[0, -albumThickness / 2 - 0.08, 0]} receiveShadow>
        <cylinderGeometry args={[4.4, 4.6, 0.12, 64]} />
        <meshStandardMaterial color="#EDE5DA" roughness={0.9} metalness={0.05} />
      </mesh>

      {/* Contact Shadow Plane */}
      <mesh position={[0, -albumThickness / 2 - 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6.8, 4.8]} />
        <shadowMaterial opacity={0.28} />
      </mesh>

      {/* BACK COVER BOARD */}
      <mesh position={[0, -albumThickness / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[albumWidth * 2 + 0.12, 0.06, albumHeight + 0.12]} />
        <meshStandardMaterial color={materialColor} roughness={0.7} metalness={0.1} />
      </mesh>

      {/* VISIBLE CENTRAL HINGE SPINE */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.16, albumThickness, albumHeight + 0.1]} />
        <meshStandardMaterial color={materialColor} roughness={0.65} />
      </mesh>

      {/* INNER PAGES BASE BLOCK (Archival 1.1mm core thickness) */}
      <mesh position={[-albumWidth / 2 - 0.04, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[albumWidth, albumThickness * 0.9, albumHeight]} />
        <meshStandardMaterial color="#FBF8F4" map={paperTexture} roughness={0.92} />
      </mesh>

      <mesh position={[albumWidth / 2 + 0.04, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[albumWidth, albumThickness * 0.9, albumHeight]} />
        <meshStandardMaterial color="#FBF8F4" map={paperTexture} roughness={0.92} />
      </mesh>

      {/* ACTIVE FLAT SPREAD PAGES */}
      {/* Left Wedding Spread Page */}
      <mesh position={[-albumWidth / 2 - 0.04, albumThickness * 0.45 + 0.002, 0]} receiveShadow>
        <planeGeometry args={[albumWidth - 0.06, albumHeight - 0.06]} />
        <meshStandardMaterial map={leftTex} roughness={0.32} metalness={0.04} side={THREE.DoubleSide} />
      </mesh>

      {/* Right Wedding Spread Page */}
      <mesh position={[albumWidth / 2 + 0.04, albumThickness * 0.45 + 0.002, 0]} receiveShadow>
        <planeGeometry args={[albumWidth - 0.06, albumHeight - 0.06]} />
        <meshStandardMaterial map={rightTex} roughness={0.32} metalness={0.04} side={THREE.DoubleSide} />
      </mesh>

      {/* Layflat Gutter Center Crease Shadow */}
      <mesh position={[0, albumThickness * 0.45 + 0.003, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.07, albumHeight - 0.06]} />
        <meshBasicMaterial color="#1A1918" transparent opacity={0.35} />
      </mesh>

      {/* ROTATING FRONT COVER AROUND SPINE HINGE (X = 0) */}
      <group position={[0, albumThickness * 0.45, 0]}>
        <group ref={frontCoverRef}>
          {/* Cover Hardboard */}
          <mesh position={[albumWidth / 2 + 0.04, 0.03, 0]} castShadow receiveShadow>
            <boxGeometry args={[albumWidth + 0.06, 0.05, albumHeight + 0.1]} />
            <meshStandardMaterial
              map={coverTexture}
              color={materialColor}
              roughness={0.65}
              metalness={0.12}
            />
          </mesh>

          {/* Inside Cover Flyleaf */}
          <mesh position={[albumWidth / 2 + 0.04, 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[albumWidth, albumHeight]} />
            <meshStandardMaterial color="#FBF8F4" map={paperTexture} roughness={0.92} />
          </mesh>
        </group>
      </group>

      {/* ANIMATED FLIPPING LEAF */}
      <group position={[0, albumThickness * 0.46, 0]}>
        <group ref={flippingLeafRef} visible={false}>
          <mesh position={[albumWidth / 2 + 0.04, 0.006, 0]} castShadow receiveShadow>
            <boxGeometry args={[albumWidth - 0.06, 0.008, albumHeight - 0.06]} />
            <meshStandardMaterial map={paperTexture} color="#FBF8F4" roughness={0.5} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
