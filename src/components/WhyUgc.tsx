import React from 'react';
import { Camera, Mic, Sun, Video, Zap, CheckCircle2, TrendingUp, Sparkles, UserCheck, Mail, MessageCircle } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/ugcData';

export const WhyUgc: React.FC = () => {
  return (
    <section id="why-ugc" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400">
            <span>The Performance Advantage</span>
            <span aria-hidden="true">·</span>
            <span>Why UGC Converts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Engineered for Media Buyers, Loved by Algorithms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I don’t just film videos; I create high-retention direct-response assets built specifically to lower your cost-per-acquisition (CPA) on TikTok, Meta, and YouTube.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="p-6 rounded-2xl bg-[#0D0F17] border border-white/[0.08] space-y-3 hover:border-white/[0.18] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              01. Thumb-Stopping Hooks
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The first 3 seconds dictate 80% of video ad ROAS. Every concept includes 3-5 distinct hook angles (negative warning, curious POV, tactile ASMR) to maximize 3-second hold rates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0F17] border border-white/[0.08] space-y-3 hover:border-white/[0.18] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              02. Native Organic Pacing
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Polished corporate TV ads get swiped instantly. My content mimics authentic friend-to-friend FaceTime recommendations that blend natively into organic user feeds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0F17] border border-white/[0.08] space-y-3 hover:border-white/[0.18] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              03. Scale-Ready B-Roll
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Never get stuck with a single rigid edit. I provide organized raw 4K B-roll clips and unedited audio stems so your internal media buying team can test endless creative iterations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0F17] border border-white/[0.08] space-y-3 hover:border-white/[0.18] transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">
              04. Fast 48-72h Delivery
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When creative fatigue strikes your ad account, waiting 3 weeks kills performance. I deliver polished first drafts within 48 to 72 hours of receiving your product.
            </p>
          </div>

        </div>

        {/* Creator Bio & Production Studio Equipment */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0E101A] to-[#121422] border border-white/[0.1] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Creator Bio Profile (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-[#090A0F] flex items-center justify-center font-display font-bold text-lg text-white">
                    PW
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Prashant Work
                  </h3>
                  <p className="text-xs text-rose-400 font-medium">
                    {CREATOR_PROFILE.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Hi, I'm Prashant! Based in India, I specialize in creating authentic, thumb-stopping UGC video ads for DTC skincare, wellness, beauty, and modern consumer tech brands.
              </p>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                With a background in direct-response digital marketing and content creation, I understand the psychology of online shoppers. I don't just speak on camera; I speak the language of conversion metrics, watch time, and click-through rates.
              </p>

              {/* Demographics unboxed list */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-rose-400" />
                  <span>Audience Appeal: <strong>Women &amp; Men 20 - 38</strong></span>
                </div>
                <span aria-hidden="true">·</span>
                <div>Location: <strong>{CREATOR_PROFILE.location}</strong></div>
              </div>

              {/* Direct Contact Details */}
              <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${CREATOR_PROFILE.email || 'admin@prashantwork.us.ci'}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-rose-500/50 hover:bg-white/[0.08] text-xs text-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>{CREATOR_PROFILE.email || 'admin@prashantwork.us.ci'}</span>
                </a>
                <a
                  href={CREATOR_PROFILE.whatsappUrl || 'https://wa.me/919118959922'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/20 text-xs text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: {CREATOR_PROFILE.whatsapp || '+91 9118959922'}</span>
                </a>
              </div>
            </div>

            {/* Studio Specifications & Gear (6 cols) */}
            <div className="lg:col-span-6 bg-black/40 border border-white/[0.08] rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/[0.08] pb-3">
                Production Gear &amp; Audio Standards
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-rose-400 shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">4K 60fps ProRes</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">iPhone 16 Pro camera with cinematic depth</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-amber-400 shrink-0">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">DJI Mic 2 Wireless</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">32-bit float crystal-clear voiceover &amp; ASMR</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-emerald-400 shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Studio Diffusion</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Aputure Amaran softbox + natural sunny loft</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-cyan-400 shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">DaVinci &amp; CapCut Pro</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Clean color grading &amp; dynamic TikTok typography</div>
                  </div>
                </div>

              </div>

              <div className="pt-3 text-[11px] text-slate-400 border-t border-white/[0.06] flex items-center justify-between">
                <span>Deliverables: <strong>.MOV / .MP4 4K Vertical 9:16</strong></span>
                <span>Whitelisting: <strong>TikTok Spark &amp; Meta Partner</strong></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
