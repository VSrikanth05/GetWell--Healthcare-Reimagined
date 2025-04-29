
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
