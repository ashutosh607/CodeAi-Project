import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroBook from './LivingAlbum/HeroBook';
import TextReveal from './motion/TextReveal';
import './Showroom.css';

const MATERIALS = [
  { id: 'sand', name: 'Linen Sand', color: '#EDE5DA', hex: '#EDE5DA', accent: '#B99A69', type: 'linen', label: 'Belgian Linen' },
  { id: 'onyx', name: 'Onyx Leather', color: '#201E1B', hex: '#201E1B', accent: '#D4AF37', type: 'pebbled-leather', label: 'Italian Leather' },
  { id: 'blush', name: 'Soft Blush', color: '#E8DCD4', hex: '#E8DCD4', accent: '#B99A69', type: 'linen', label: 'Woven Rose' },
  { id: 'sage', name: 'Muted Sage', color: '#D4DDD3', hex: '#D4DDD3', accent: '#8F9E8B', type: 'linen', label: 'Botanical Linen' }
];

export default function HeroSection() {
  const [finish, setFinish] = useState(MATERIALS[0]);
  return (
    <section id="hero" className="showroom-hero" aria-labelledby="showroom-title">
      <div className="hero-editorial">
        <p className="bindery-origin">Handcrafted in Mumbai</p>
        <TextReveal as="h1" id="showroom-title" playOnMount distance={14} duration={0.82} stagger={0.055}>
          Wedding albums,<br/><em>bound by hand.</em>
        </TextReveal>
        <p className="hero-intro">Fine art paper, carefully matched hides and hand-sewn bindings. Made in our atelier to hold a lifetime of photographs.</p>
        <Link className="studio-link primary" to="/products">Explore albums <ArrowRight size={17}/></Link>
      </div>
      <figure className="hero-specimen">
        <div className="specimen-stage">
          <img className="atelier-backdrop" src="/images/hero-slide-1.jpg" alt="" width="1024" height="500" fetchPriority="high" />
          <HeroBook material={finish}/>
        </div>
        <figcaption className="finish-selector">
          <div><span>Cover finish</span><strong aria-live="polite">{finish.name}</strong></div>
          <div className="finish-options">{MATERIALS.map(mat => (
            <button key={mat.id} aria-label={'Select ' + mat.name} title={mat.label} aria-pressed={mat.id === finish.id} onClick={() => setFinish(mat)} style={{'--swatch':mat.hex}}/>
          ))}</div>
        </figcaption>
      </figure>
    </section>
  );
}
