import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Album3D from './Album3D';
import { SPREADS } from '../../utils/textureGenerator';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  RotateCcw,
  Sparkles,
  Maximize2,
  Compass,
  Layers,
  ArrowRight
} from 'lucide-react';

const MATERIALS = [
  { id: 'sand', name: 'Linen Sand', hex: '#EDE5DA', accent: '#C5A880' },
  { id: 'charcoal', name: 'Onyx Leather', hex: '#242320', accent: '#D4AF37' },
  { id: 'blush', name: 'Rosewater Silk', hex: '#F3E4E1', accent: '#B8860B' },
  { id: 'sage', name: 'Muted Sage Linen', hex: '#DCE5DA', accent: '#8F9E8B' }
];

export default function LivingAlbumHero() {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [cameraView, setCameraView] = useState('reading'); // 'reading', 'top', 'angle', 'detail'
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const [dragStart, setDragStart] = useState(null);

  const totalSpreads = SPREADS.length;
  const activeSpread = SPREADS[currentSpreadIndex];

  // Navigation handlers
  const handleNextSpread = () => {
    if (currentSpreadIndex < totalSpreads - 1) {
      setCurrentSpreadIndex((prev) => prev + 1);
    }
  };

  const handlePrevSpread = () => {
    if (currentSpreadIndex > 0) {
      setCurrentSpreadIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextSpread();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSpread();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpreadIndex, totalSpreads]);

  // Touch and Drag Gestures for Page Turning
  const handleTouchStart = (e) => {
    setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchEnd = (e) => {
    if (!dragStart) return;
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = clientX - dragStart;
    if (delta < -50) {
      handleNextSpread();
    } else if (delta > 50) {
      handlePrevSpread();
    }
    setDragStart(null);
  };

  return (
    <section
      id="living-album"
      className="living-album-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      <div className="album-hero-container">
        {/* Editorial Brand Intro */}
        <div className="album-editorial-header">
          <h1 className="album-hero-title">
            The Living Album
          </h1>
          <p className="album-hero-subtitle">
            An interactive, realistic photo album experience. Handcrafted heirloom flush-mount binding, Fuji Crystal Archive photographic silver halide paper, and bespoke Italian linen covers.
          </p>
        </div>

        {/* 3D Viewport Stage */}
        <div className="album-viewport-wrapper">
          <div className="canvas-container">
            <Canvas
              shadows
              camera={{ fov: 40, position: [0, 3.8, 6.2] }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
            >
              <color attach="background" args={['#FAF8F4']} />
              <ambientLight intensity={1.4} color="#FFFDF9" />
              <directionalLight
                position={[3.5, 7, 4.5]}
                intensity={2.8}
                color="#FFF8ED"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
              />
              <directionalLight
                position={[-4, 3, -2]}
                intensity={0.9}
                color="#FAF8F4"
              />
              <spotLight
                position={[0, 6, 2]}
                intensity={1.2}
                angle={0.6}
                penumbra={0.8}
                color="#FFFFFF"
              />

              <Album3D
                currentSpread={activeSpread.id}
                setCurrentSpread={setCurrentSpreadIndex}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                materialColor={selectedMaterial.hex}
                materialName={selectedMaterial.name}
                cameraView={cameraView}
                isAutoAnimating={isAutoAnimating}
                setIsAutoAnimating={setIsAutoAnimating}
              />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.1}
                minPolarAngle={Math.PI / 6}
                maxAzimuthAngle={Math.PI / 4}
                minAzimuthAngle={-Math.PI / 4}
                dampingFactor={0.08}
              />
            </Canvas>

            {/* Status Indicator */}
            {isAutoAnimating && (
              <div className="animation-badge">
                <Sparkles size={14} className="sparkle-icon" />
                <span>Opening Living Album...</span>
              </div>
            )}
          </div>

          {/* Interactive Album Controls Overlay */}
          <div className="album-controls-bar">
            {/* Page Navigation */}
            <div className="spread-navigation">
              <button
                type="button"
                className="control-nav-btn"
                onClick={handlePrevSpread}
                disabled={currentSpreadIndex === 0}
                aria-label="Previous Spread"
              >
                <ChevronLeft size={20} />
                <span className="btn-label-desktop">Prev Spread</span>
              </button>

              <div className="spread-counter">
                <span className="counter-current">Spread 0{currentSpreadIndex + 1}</span>
                <span className="counter-divider">/</span>
                <span className="counter-total">0{totalSpreads}</span>
              </div>

              <button
                type="button"
                className="control-nav-btn"
                onClick={handleNextSpread}
                disabled={currentSpreadIndex === totalSpreads - 1}
                aria-label="Next Spread"
              >
                <span className="btn-label-desktop">Next Spread</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Material Texture Selector */}
            <div className="material-selector-strip">
              <span className="strip-title">Cover Material:</span>
              <div className="swatch-group">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    type="button"
                    className={`material-swatch-btn ${selectedMaterial.id === mat.id ? 'active' : ''}`}
                    onClick={() => setSelectedMaterial(mat)}
                    title={mat.name}
                    aria-label={`Select ${mat.name}`}
                  >
                    <span
                      className="swatch-circle"
                      style={{ backgroundColor: mat.hex, borderColor: mat.accent }}
                    />
                    <span className="swatch-text">{mat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Camera View Switcher */}
            <div className="camera-view-strip">
              <button
                type="button"
                className={`view-btn ${cameraView === 'reading' ? 'active' : ''}`}
                onClick={() => setCameraView('reading')}
              >
                Reading View
              </button>
              <button
                type="button"
                className={`view-btn ${cameraView === 'top' ? 'active' : ''}`}
                onClick={() => setCameraView('top')}
              >
                Overhead View
              </button>
              <button
                type="button"
                className={`view-btn ${cameraView === 'angle' ? 'active' : ''}`}
                onClick={() => setCameraView('angle')}
              >
                Studio Perspective
              </button>
            </div>
          </div>

          {/* Current Spread Metadata Panel */}
          <div className="spread-metadata-editorial">
            <div className="metadata-column">
              <span className="meta-label">Currently Viewing</span>
              <h2 className="meta-spread-title">{activeSpread.title}</h2>
              <span className="meta-location">{activeSpread.subtitle}</span>
            </div>
            <div className="metadata-column diptych-info">
              <div className="meta-detail-row">
                <span className="plate-tag">Left Plate:</span>
                <span className="plate-caption">{activeSpread.left.caption}</span>
              </div>
              <div className="meta-detail-row">
                <span className="plate-tag">Right Plate:</span>
                <span className="plate-caption">{activeSpread.right.caption}</span>
              </div>
            </div>
            <div className="metadata-actions">
              <a href="#collections" className="btn-primary-action">
                <span>Explore Album Specifications</span>
                <ArrowRight size={16} />
              </a>
              <span className="keyboard-hint">Drag album or use [ ← / → ] keys to turn pages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

