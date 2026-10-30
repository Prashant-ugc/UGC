import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090A0F]/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-rose-400 transition-colors font-display"
        >
          Prashant Work <span className="text-slate-400 font-normal text-sm font-sans">/ UGC Ads</span>
        </a>

        {/* Zone 2: clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a 
            href="#vault" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Ad Vault
          </a>
          <a 
            href="#why-ugc" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Conversion Formula
          </a>
          <a 
            href="#proof" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Case Studies
          </a>
          <a 
            href="#contact" 
            className="text-rose-400 hover:text-rose-300 transition-colors whitespace-nowrap shrink-0 font-semibold"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#090A0F] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
            <a 
              href="#vault" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Ad Vault
            </a>
            <a 
              href="#why-ugc" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Conversion Formula
            </a>
            <a 
              href="#proof" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-rose-400 hover:text-rose-300 transition-colors font-semibold"
            >
              Contact Details
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
