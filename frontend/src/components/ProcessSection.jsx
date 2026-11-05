import React from 'react';
import RevealOnScroll from './motion/RevealOnScroll';

const STEPS = [
  {
    num: '01',
    title: 'Transfer Photos Online',
    desc: 'Upload high-resolution camera files or client selects via Dropbox, WeTransfer, Google Drive, or our studio portal.'
  },
  {
    num: '02',
    title: 'Get Design Proof',
    desc: 'Receive a complete digital page-turn soft-copy proof within 3 business days. Request unlimited revisions until approved.'
  },
  {
    num: '03',
    title: 'Archival Printing',
    desc: 'Exposed on Fuji Crystal Archive photographic paper, mounted on rigid boards, and bound in handcrafted covers.'
  },
  {
    num: '04',
    title: 'Express Shipping',
    desc: 'Every album is nestled in custom presentation boxes and shipped with door-to-door tracked delivery across India & worldwide.'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="how-we-work-section">
      <div className="section-container">
        <RevealOnScroll direction="up" className="how-we-work-header-center">
          <div className="section-eyebrow-chip">
            <span>STREAMLINED STUDIO METHODOLOGY</span>
          </div>
          <h2 className="how-we-work-heading">How We Work?</h2>
        </RevealOnScroll>

        <div className="how-we-work-timeline-container">
          <div className="horizontal-connector-line" />
          <div className="how-we-work-four-grid">
            {STEPS.map((step, index) => (
              <RevealOnScroll
                key={step.num}
                direction="up"
                delay={index * 0.08}
                className="step-process-card"
              >
                <div className="step-badge-circle">
                  <span className="step-num-text">{step.num}</span>
                </div>
                <h3 className="step-title-text">{step.title}</h3>
                <p className="step-desc-text">{step.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
