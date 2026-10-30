import React from 'react';
import { Quote, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/ugcData';

export const Testimonials: React.FC = () => {
  return (
    <section id="proof" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400">
            <span>Verified Results</span>
            <span aria-hidden="true">·</span>
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Trusted by Fast-Growing DTC Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            See how performance marketing teams and direct-to-consumer brand founders scale their ROAS using these video ad creatives.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-[#0D0F17] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all space-y-6"
            >
              <div className="space-y-4">
                {/* Metric Header highlight */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="text-2xl font-bold text-rose-400 font-display tabular-nums">
                      {t.metric}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {t.metricLabel}
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Brand Credits (Clean unboxed layout) */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-200">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.role} · <span className="text-rose-400/90">{t.brand}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* UGC vs Traditional Ad Comparison Bar */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center sm:text-left">
            Why High-Growth Brands Switch to Creator UGC:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2 p-4 rounded-xl bg-black/30 border border-white/[0.05]">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-500" />
                <span>3.2x Higher CTR</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Native smartphone vertical video ads generate over 300% more link clicks compared to polished studio graphics.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-black/30 border border-white/[0.05]">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-500" />
                <span>-35% Lower CPAs</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Tested hook variations bypass ad fatigue, keeping cost-per-acquisition consistent even at $10k+/day spend.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-black/30 border border-white/[0.05]">
              <div className="font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-rose-500" />
                <span>48-Hour Agility</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Jump on trending sounds and viral TikTok hooks in days, not months of traditional agency production cycles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
