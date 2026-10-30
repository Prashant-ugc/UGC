import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/ugcData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CREATOR_PROFILE.email || 'admin@prashantwork.us.ci');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-white/[0.08] bg-[#07080C] pt-14 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1: Brand & Creator Title (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-display text-lg tracking-tight">
                {CREATOR_PROFILE.name}
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-xs text-rose-400 font-medium">UGC Video Creator</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              High-converting direct-response video ads for DTC brands across TikTok, Meta Reels, and YouTube Shorts. Tested hooks, authentic delivery, and 48-72h turnaround.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Brand Campaigns &amp; Retainers</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#vault" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Ad Vault</span>
                </a>
              </li>
              <li>
                <a href="#why-ugc" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Conversion Formula</span>
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Case Studies</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details Column (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white font-display flex items-center gap-2">
              <span>Contact Details</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            </div>
            <p className="text-slate-400 text-xs">
              Reach out directly for custom concept pitches, sample scripts, or campaign rates:
            </p>
            
            <div className="space-y-2.5 pt-1">
              {/* Email item */}
              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-rose-500/40 transition-colors group">
                <a
                  href={`mailto:${CREATOR_PROFILE.email || 'admin@prashantwork.us.ci'}`}
                  className="flex items-center gap-2.5 min-w-0 flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Email</div>
                    <div className="text-xs font-medium text-slate-200 group-hover:text-rose-400 truncate">
                      {CREATOR_PROFILE.email || 'admin@prashantwork.us.ci'}
                    </div>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* WhatsApp item */}
              <a
                href={CREATOR_PROFILE.whatsappUrl || 'https://wa.me/919118959922'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">WhatsApp</div>
                    <div className="text-xs font-medium text-slate-200 group-hover:text-emerald-400 truncate">
                      {CREATOR_PROFILE.whatsapp || '+91 9118959922'}
                    </div>
                  </div>
                </div>
                <div className="p-1.5 rounded-md text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {CREATOR_PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Location: {CREATOR_PROFILE.location}</span>
            <span>·</span>
            <span>Direct-Response UGC</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
