import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdVault } from './components/AdVault';
import { CaseStudyModal } from './components/CaseStudyModal';
import { WhyUgc } from './components/WhyUgc';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { UgcAdItem } from './types/ugc';

export default function App() {
  const [selectedAd, setSelectedAd] = useState<UgcAdItem | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConcept = (_conceptTitle: string) => {
    scrollToSection('vault');
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onBookClick={() => scrollToSection('vault')} />

      <main className="flex-1">
        {/* Split-Screen Hero & Live 9:16 Mockup */}
        <Hero 
          onExploreVault={() => scrollToSection('vault')}
          onStartCampaign={() => scrollToSection('vault')}
        />

        {/* The UGC Ad Vault (Filterable Grid & Video Cards) */}
        <AdVault onSelectAd={(ad) => setSelectedAd(ad)} />

        {/* Why UGC Converts & Studio Equipment Specifications */}
        <WhyUgc />

        {/* Client Testimonials & Quantitative Social Proof */}
        <Testimonials />
      </main>

      {/* Case Study & Script Breakdown Modal */}
      <CaseStudyModal 
        ad={selectedAd}
        onClose={() => setSelectedAd(null)}
        onBookConcept={handleBookConcept}
      />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
