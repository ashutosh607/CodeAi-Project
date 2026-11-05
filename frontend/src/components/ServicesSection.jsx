import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'photo-editing',
    slug: 'image-editing',
    title: 'Photo Editing Services',
    badge: '48H RUSH SLA',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=85',
    desc: 'Professional skin retouching, color correction, skin smoothing, and lighting enhancement with guaranteed 48-72 hour proof turnarounds.',
    cta: 'EXPLORE EDITING SUITE',
    includes: [
      'Frequency Separation & Micro-Dodge Skin Retouching',
      'Consistent Ambient Color Grading & Exposure Sync',
      'Guaranteed 48–72h Turnaround with Unlimited Proofs',
      'Print-Ready 16-Bit TIFF & ICC Profile Exports'
    ]
  },
  {
    id: 'album-design',
    slug: 'album-designing',
    title: 'Album Layout Designing',
    badge: 'BESPOKE CURATION',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=85',
    desc: 'Bespoke storytelling layouts curated by seasoned book designers. Cloud soft-copy proofs with unlimited revisions until absolute satisfaction.',
    cta: 'REQUEST DESIGN SERVICE',
    includes: [
      'Narrative Storyline Sequencing & Curating',
      'Architectural Negative White Space Formatting',
      'Interactive Cloud Page-Turn Soft-Proof App',
      'Zero-Crease 180° Layflat Spread Calibration'
    ]
  },
  {
    id: 'photography',
    slug: 'wedding-photography',
    title: 'Wedding Photography Cover',
    badge: '100MP MEDIUM FORMAT',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    desc: 'Full-day candid documentary coverage, pre-wedding couple sessions, and 4K cinematic films capturing authentic rituals and emotion.',
    cta: 'VIEW WORK & SPECS',
    includes: [
      'Multi-Day High-Society Documentary Coverage',
      'Medium Format (Hasselblad & Leica Optical Latitude)',
      'Licensed 4K Aerial Drone Cinematography',
      'Handcrafted 180° Layflat Heirloom Album Included'
    ]
  }
];

export default function ServicesSection() {
  return <section id="services" className="editorial-section">
    <div className="section-container">
      <h2>Studio services</h2>
      <div className="editorial-items cols-3">
        {SERVICES.map(item => <article key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy"/>
          <h3>{item.title}</h3><p>{item.desc}</p>
          <details><summary>Service inclusions</summary><ul>{item.includes.map(line=><li key={line}>{line}</li>)}</ul></details>
          <Link className="text-action" to={'/services/' + item.slug}>View service <ArrowRight size={15}/></Link>
        </article>)}
      </div>
    </div>
  </section>;
}
