# Design System — Ultraa Albums

<!-- impeccable:design-schema 1 -->

## Visual World

**Minimal Luxury Editorial:** A calm, spacious, and tactile aesthetic inspired by international high-end wedding bookbinders and fine-art publishing monographs. Built around the primary Google Stitch reference layout.

## Color System

- **Warm Ivory:** `#FBF8F4` — The primary canvas ground across hero and body sections.
- **Warm Beige:** `#EDE5DA` — Natural pedestal surface and subtle container fills.
- **Soft Blush:** `#F6DCD7` — Accent wash for testimonial card ground and delicate label chips.
- **Muted Sage:** `#D7E5D8` — Botanical accent tone for craft tags and sustainability accents.
- **Soft Lavender:** `#E3DDF3` — Very restrained micro-accent for special finishes.
- **Charcoal:** `#2B2B2B` — Deep carbon typography, primary pill CTA buttons, and header/footer accents.
- **Deep Charcoal (Footer):** `#1A1918` — Luxury dark anchor footer.
- **White:** `#FFFFFF` — Crisp card surfaces and bright specular highlights.

## Typography

- **Headings (Display, H1, H2, H3):** `Cormorant Garamond`
  - Display Hero: `clamp(2.75rem, 5.5vw, 4.5rem)`
  - Section Headings: `clamp(2.1rem, 3.8vw, 3.25rem)`
  - Subsections: `clamp(1.25rem, 2vw, 1.75rem)`
- **Body & Controls:** `DM Sans`
  - Regular Text: `1rem` (16px), line-height `1.65`
  - Navigation & Small Labels: `DM Sans Medium` (`font-weight: 500`), letter-spacing `0.06em` to `0.14em`

## The Living Album 3D Centerpiece

- **Framework:** Three.js / React Three Fiber & GSAP timeline orchestration.
- **3D Geometry:**
  - Front cover board with realistic linen/leather texture and golden foil deboss.
  - Visible spine with physical book thickness.
  - Back cover resting on studio pedestal.
  - Multiple individual internal pages with authentic paper texture.
  - Real double-page wedding photo spreads with zero-gutter layflat continuity.
  - Reverse sides of pages rendered during rotation.
- **Choreographed Sequence:**
  1. Closed album resting on warm ivory surface.
  2. Camera smoothly moves closer.
  3. Album tilts slightly showing thickness and spine.
  4. Front cover rotates open around spine.
  5. First wedding spread reveals with natural soft contact shadows.
  6. Settles naturally with elegant instruction: "Explore the album".
- **Interactive Page Turning:**
  - Next page / Previous page buttons.
  - Drag / swipe page turning gesture.
  - Keyboard arrow keys (`←` / `→`).
  - Close / Replay experience toggle.
