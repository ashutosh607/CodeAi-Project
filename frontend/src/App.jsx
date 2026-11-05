import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloating from './components/WhatsAppFloating';
import SmoothScroll from './components/motion/SmoothScroll';
import PageTransition from './components/motion/PageTransition';

// Pages
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const UKPage = lazy(() => import('./pages/UKPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const BlogsPage = lazy(() => import('./pages/resources/BlogsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PayOnlinePage = lazy(() => import('./pages/PayOnlinePage'));
const ProductEnquiryPage = lazy(() => import('./pages/ProductEnquiryPage'));

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="ultraa-app-root">
          {/* Two-Tier Accessible Navigation Header */}
          <Header />

          {/* Dynamic Route View */}
          <main id="main-content">
            <Suspense fallback={<p role="status" className="route-loading">Loading page…</p>}>
              <ScrollToTop />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />

                  {/* Products Routing */}
                  <Route path="/products" element={<ProductDetailPage />} />
                  <Route path="/products/:slug" element={<ProductDetailPage />} />

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
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </PageTransition>
            </Suspense>
          </main>

          {/* Categorized Luxury 6-Column Footer */}
          <Footer />

          {/* Floating WhatsApp Action Trigger */}
          <WhatsAppFloating />

        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
