import React from 'react';
import AlbumShowroom from './AlbumShowroom/AlbumShowroom';

/**
 * ProductShowcase Component
 * Renders the Premium Interactive 3D Album Showroom for the 4 Signature Format Families:
 * 1. Slip-in Albums
 * 2. Flush Mount Albums
 * 3. Photo Book
 * 4. Leather Albums
 */
export default function ProductShowcase({ onSelectProduct }) {
  return <AlbumShowroom onSelectProduct={onSelectProduct} />;
}
