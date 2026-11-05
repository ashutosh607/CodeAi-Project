import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AlbumDesignsPage from './resources/AlbumDesignsPage';
import WeddingPhotoAlbumsPage from './resources/WeddingPhotoAlbumsPage';
import BlogsPage from './resources/BlogsPage';
import FAQKnowledgeBasePage from './resources/FAQKnowledgeBasePage';
import CatalogSpecifierPage from './resources/CatalogSpecifierPage';

/**
 * ResourcesPage Master Route Dispatcher
 * Dispatches to the 5 dedicated Luxury Atelier resources pages:
 *  - /resources/album-designs
 *  - /resources/wedding-photo-albums
 *  - /resources/blogs (and /resources/blogs/:articleSlug handled via App.jsx)
 *  - /resources/faq
 *  - /resources/catalog (or default /resources)
 */
export default function ResourcesPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  switch (slug) {
    case 'album-designs':
      return <AlbumDesignsPage />;

    case 'wedding-photo-albums':
      return <WeddingPhotoAlbumsPage />;

    case 'blogs':
      return <BlogsPage />;

    case 'faq':
      return <FAQKnowledgeBasePage />;

    case 'catalog':
      return <CatalogSpecifierPage />;

    case undefined:
    case '':
      // Default /resources renders the Master Catalog & Swatch Compendium
      return <CatalogSpecifierPage />;

    default:
      // If legacy slug or unrecognized, redirect to catalog
      return <CatalogSpecifierPage />;
  }
}
