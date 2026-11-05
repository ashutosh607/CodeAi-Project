// High-resolution procedural textures and wedding photo spreads

export function createLinenTexture(color = '#EDE5DA', accentColor = '#D8CEBF') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 512, 512);

  ctx.fillStyle = accentColor;
  ctx.globalAlpha = 0.2;
  for (let x = 0; x < 512; x += 3.5) {
    ctx.fillRect(x, 0, 1.2, 512);
  }
  for (let y = 0; y < 512; y += 3.5) {
    ctx.fillRect(0, y, 512, 1.2);
  }

  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 4000; i++) {
    const rx = Math.random() * 512;
    const ry = Math.random() * 512;
    ctx.fillStyle = Math.random() > 0.5 ? '#FFFFFF' : '#2B2B2B';
    ctx.fillRect(rx, ry, 1.5, 1.5);
  }

  ctx.globalAlpha = 1.0;
  return canvas.toDataURL('image/png');
}

export function createPaperTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FBF8F4';
  ctx.fillRect(0, 0, 512, 512);

  ctx.globalAlpha = 0.05;
  ctx.fillStyle = '#2B2B2B';
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const len = 2 + Math.random() * 3;
    ctx.fillRect(x, y, len, 0.75);
  }

  ctx.globalAlpha = 1.0;
  return canvas.toDataURL('image/png');
}

export function createCoverDebossTexture(materialName = 'Linen Sand') {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  let baseColor = '#EDE5DA';
  let foilColor = '#C5A880';

  if (materialName.includes('Charcoal') || materialName.includes('Onyx')) {
    baseColor = '#242320';
    foilColor = '#D4AF37';
  } else if (materialName.includes('Blush')) {
    baseColor = '#F6DCD7';
    foilColor = '#B8860B';
  } else if (materialName.includes('Sage')) {
    baseColor = '#D7E5D8';
    foilColor = '#C5A880';
  }

  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 1024);

  // Subtle weave
  ctx.fillStyle = '#000000';
  ctx.globalAlpha = 0.07;
  for (let x = 0; x < 1024; x += 3.5) {
    ctx.fillRect(x, 0, 1.2, 1024);
  }
  for (let y = 0; y < 1024; y += 3.5) {
    ctx.fillRect(0, y, 1024, 1.2);
  }
  ctx.globalAlpha = 1.0;

  // Thin debossed border framing
  ctx.strokeStyle = foilColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(95, 95, 834, 834);
  ctx.strokeStyle = 'rgba(0,0,0,0.15)';
  ctx.lineWidth = 1;
  ctx.strokeRect(98, 98, 828, 828);

  // Foil Debossed Typography
  ctx.textAlign = 'center';
  ctx.fillStyle = foilColor;

  ctx.font = '500 52px "Cormorant Garamond", Georgia, serif';
  ctx.letterSpacing = '5px';
  ctx.fillText('ULTRAA ALBUMS', 512, 450);

  ctx.strokeStyle = foilColor;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(420, 485);
  ctx.lineTo(604, 485);
  ctx.stroke();

  ctx.font = '400 24px "Cormorant Garamond", Georgia, serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('HEIRLOOM WEDDING VOL. XII', 512, 535);

  ctx.font = '500 15px "DM Sans", sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText('FINE ART FLUSH MOUNT BINDERY', 512, 595);

  return canvas.toDataURL('image/png');
}

export const SPREADS = [
  {
    id: 1,
    title: 'The Ceremony & Preparations',
    subtitle: 'Castello di Celsa, Tuscany',
    left: {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      caption: 'The Bridal Veil — Hand-loomed French lace in morning light'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      caption: 'Exchange of Vows — Olive grove chapel altar'
    }
  },
  {
    id: 2,
    title: 'The Golden Hour Portraits',
    subtitle: 'Villa Balbianello, Lake Como',
    left: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      caption: 'First Walk as Husband & Wife — Terraced cypress gardens'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
      caption: 'Artisan Floral Settings & Bespoke Heirloom Rings'
    }
  },
  {
    id: 3,
    title: 'The Twilight Reception & Toast',
    subtitle: 'The Glasshouse Orangery, Cotswolds UK',
    left: {
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85',
      caption: 'First Dance under the wrought-iron vaulted dome'
    },
    right: {
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
      caption: 'Sunset Embrace across the limestone meadow'
    }
  }
];
