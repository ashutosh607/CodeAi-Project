import { useRef, useState } from 'react';

export default function ProductGallery({ images }) {
  const [index, setIndex] = useState(0);
  const [unavailable, setUnavailable] = useState(false);
  const request = useRef(0);
  const buttons = useRef([]);
  async function select(next) {
    const id = ++request.current;
    setUnavailable(false);
    const photo = new Image();
    photo.src = images[next].src;
    try {
      await photo.decode();
      if (request.current === id) setIndex(next);
    } catch {
      if (request.current === id) setUnavailable(true);
    }
  }
  return <figure className="product-gallery">
    <div className="gallery-frame">{images.map((img, i) =>
      <img key={img.src} src={img.src} alt={img.desc || img.plate || img.label}
        aria-hidden={i !== index} className={i === index ? 'selected' : ''}/>
    )}</div>
    <figcaption aria-live="polite">{unavailable ? 'This photograph could not load. Choose another view.' : images[index].desc || images[index].plate || images[index].label}</figcaption>
    <div className="gallery-thumbnails" role="group" aria-label="Product photographs">{images.map((img,i) =>
      <button key={img.src} ref={el => { buttons.current[i] = el; }} type="button" aria-label={img.label || img.plate} aria-pressed={index === i}
        onClick={() => select(i)} onKeyDown={event => {
          if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
          event.preventDefault();
          const next = (i + (event.key === 'ArrowLeft' ? -1 : 1) + images.length) % images.length;
          buttons.current[next]?.focus();
          select(next);
        }}><img src={img.src} alt=""/></button>
    )}</div>
  </figure>;
}
