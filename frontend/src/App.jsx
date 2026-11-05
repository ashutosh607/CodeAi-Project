import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloating from './components/WhatsAppFloating';
import SmoothScroll from './components/motion/SmoothScroll';
import PageTransition from './components/motion/PageTransition';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import UKPage from './pages/UKPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogsPage from './pages/resources/BlogsPage';
import ContactPage from './pages/ContactPage';
import PayOnlinePage from './pages/PayOnlinePage';
import ProductEnquiryPage from './pages/ProductEnquiryPage';

// Modals (preserved for instant quick preview)
import ProductDetailModal from './components/ProductDetailModal';
import PayOnlineModal from './components/PayOnlineModal';
import ResourcesModal from './components/ResourcesModal';

import './App.css';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPayOnlineOpen, setIsPayOnlineOpen] = useState(false);
  const [resourceTopic, setResourceTopic] = useState(null);
  const [prefilledProduct, setPrefilledProduct] = useState('');

  const handleOpenEnquiry = (productName) => {
    setPrefilledProduct(productName || 'General Commission');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="ultraa-app-root">
          {/* Two-Tier Accessible Navigation Header */}
          <Header
            onOpenPayOnline={() => setIsPayOnlineOpen(true)}
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            onOpenResource={(topic) => setResourceTopic(topic)}
            onOpenEnquiry={handleOpenEnquiry}
          />

          {/* Dynamic Route View */}
          <main id="main-content">
            <PageTransition>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onSelectProduct={(prod) => setSelectedProduct(prod)}
                      prefilledProduct={prefilledProduct}
                    />
                  }
                />
                <Route path="/about" element={<AboutPage />} />
                
                {/* Products Routing */}
                <Route
                  path="/products"
                  element={<ProductDetailPage onSelectProduct={setSelectedProduct} onEnquire={handleOpenEnquiry} />}
                />
                <Route
                  path="/products/:slug"
                  element={<ProductDetailPage onSelectProduct={setSelectedProduct} onEnquire={handleOpenEnquiry} />}
                />

                {/* Services Routing */}
                <Route path="/services" element={<ServiceDetailPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />

                {/* UK Dedicated Pages */}
                <Route path="/for-uk" element={<UKPage />} />
                <Route path="/for-uk/:slug" element={<UKPage />} />

                {/* Resources & Knowledge Base */}
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/resources/blogs/:articleSlug" element={<BlogsPage />} />
                <Route path="/resources/:slug" element={<ResourcesPage />} />

                {/* Contact & Enquiries */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enquire" element={<ProductEnquiryPage />} />

                {/* Studio Payment Portal */}
                <Route path="/pay-online" element={<PayOnlinePage />} />

                {/* Fallback to Home */}
                <Route
                  path="*"
                  element={
                    <HomePage
                      onSelectProduct={(prod) => setSelectedProduct(prod)}
                      prefilledProduct={prefilledProduct}
                    />
                  }
                />
              </Routes>
            </PageTransition>
          </main>

          {/* Categorized Luxury 6-Column Footer */}
          <Footer
            onOpenPayOnline={() => setIsPayOnlineOpen(true)}
            onOpenProductDetail={(prod) => setSelectedProduct(prod)}
            onOpenResource={(topic) => setResourceTopic(topic)}
          />

          {/* Floating WhatsApp Action Trigger */}
          <WhatsAppFloating />

          {/* Instant Quick-Preview Modals */}
          {selectedProduct && (
            <ProductDetailModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onEnquire={(prodName) => handleOpenEnquiry(prodName)}
            />
          )}

          <PayOnlineModal
            isOpen={isPayOnlineOpen}
            onClose={() => setIsPayOnlineOpen(false)}
          />

          <ResourcesModal
            isOpen={!!resourceTopic}
            initialTopic={resourceTopic}
            onClose={() => setResourceTopic(null)}
          />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
