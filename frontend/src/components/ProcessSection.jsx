import React from 'react';
import RevealOnScroll from './motion/RevealOnScroll';
import TextReveal from './motion/TextReveal';
import StaggerBoxes from './motion/StaggerBoxes';

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
        <div className="how-we-work-header-center">
          <RevealOnScroll direction="down" delay={0.05} distance={12} blur={false}>
            <div className="section-eyebrow-chip">
              <span>STREAMLINED STUDIO METHODOLOGY</span>
            </div>
          </RevealOnScroll>
          <TextReveal as="h2" className="how-we-work-heading" delay={0.08}>
            How We Work?
          </TextReveal>
        </div>

        <div className="how-we-work-timeline-container">
          <div className="horizontal-connector-line" />
          <StaggerBoxes className="how-we-work-four-grid" stagger={0.1}>
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="step-process-card"
              >
                <div className="step-badge-circle">
                  <span className="step-num-text">{step.num}</span>
                </div>
                <h3 className="step-title-text">{step.title}</h3>
                <p className="step-desc-text">{step.desc}</p>
              </div>
            ))}
          </StaggerBoxes>
        </div>
      </div>
    </section>
  );
}
