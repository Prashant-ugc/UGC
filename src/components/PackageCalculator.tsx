import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';
import { PACKAGE_TIERS } from '../data/ugcData';
import { calculateUgcQuote, formatCurrency, PricingOptions } from '../utils/pricing';

interface PackageCalculatorProps {
  onSelectPackage: (packageName: string, quoteTotal?: number) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onSelectPackage }) => {
  // Custom calculator state
  const [videoCount, setVideoCount] = useState(3);
  const [hooksCount, setHooksCount] = useState(2);
  const [includeRawFootage, setIncludeRawFootage] = useState(true);
  const [whitelistingDays, setWhitelistingDays] = useState<30 | 60 | 90 | 365>(60);
  const [turnaround, setTurnaround] = useState<'standard' | 'rush_48h' | 'priority_24h'>('standard');

  const quote = calculateUgcQuote({
    videoCount,
    hookVariationsPerVideo: hooksCount,
    rawFootage: includeRawFootage,
    whitelistingDays,
    turnaroundDays: turnaround,
  });

  return (
    <section id="packages" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400">
            <span>Transparent DTC Pricing</span>
            <span aria-hidden="true">·</span>
            <span>Zero Agency Markup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Curated UGC Packages &amp; Custom Rate Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Choose a proven direct-response bundle or configure your exact video count, hook variations, and ad usage rights with instant pricing.
          </p>
        </div>

        {/* 3 Pre-built Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {PACKAGE_TIERS.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.featured
                  ? 'bg-gradient-to-b from-[#181926] to-[#0E101A] border-2 border-rose-500 shadow-xl shadow-rose-950/30'
                  : 'bg-[#0D0F17] border border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular for Scaling</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Package Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white font-display">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[36px] leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 pb-4 border-b border-white/[0.08]">
                  <span className="text-4xl font-extrabold text-white font-display tabular-nums">
                    {formatCurrency(pkg.price)}
                  </span>
                  <span className="text-xs text-slate-400">/ package</span>
                </div>

                {/* Turnaround speed indicator */}
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.05]">
                  <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Delivery: <strong className="text-white">{pkg.turnaround}</strong></span>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPackage(pkg.name, pkg.price)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.featured
                      ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-950'
                      : 'bg-white/[0.06] hover:bg-white/[0.12] text-white'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Package Builder Interactive Console */}
        <div className="bg-[#0D0F17] border border-white/[0.1] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Build a Custom UGC Campaign Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Adjust video count, hook variations, raw footage, and ad usage rights. Volume discounts automatically apply.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Control 1: Video Count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Number of Video Concepts (30-60s each)</span>
                  <span className="text-rose-400 font-bold tabular-nums text-sm">{videoCount} Videos</span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5, 8, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setVideoCount(num)}
                      className={`flex-1 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        videoCount === num
                          ? 'bg-rose-600 border-rose-500 text-white'
                          : 'bg-white/[0.03] border-white/[0.08] text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                {videoCount >= 3 && (
                  <p className="text-[11px] text-emerald-400 font-medium">
                    ✓ {quote.volumeDiscountPercent}% Volume discount unlocked!
                  </p>
                )}
              </div>

              {/* Control 2: Hook Variations per video */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Tested Hook Cuts Per Video (0-3s thumb-stoppers)</span>
                  <span className="text-rose-400 font-bold tabular-nums text-sm">+{hooksCount} Hooks/video</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setHooksCount(num)}
                      className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        hooksCount === num
                          ? 'bg-rose-600 border-rose-500 text-white'
                          : 'bg-white/[0.03] border-white/[0.08] text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      {num === 0 ? 'Base Only' : `+${num} Hooks ($${num * 75})`}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400">
                  Recommended: testing at least 2 hooks per concept lowers CPAs by 30-40%.
                </p>
              </div>

              {/* Control 3: Whitelisting & Ad Rights */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Paid Ad Usage &amp; Spark Whitelisting Rights</span>
                  <span className="text-white font-medium">{whitelistingDays} Days</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { days: 30, label: '30 Days', tag: 'Included' },
                    { days: 60, label: '60 Days', tag: '+15%' },
                    { days: 90, label: '90 Days', tag: '+25%' },
                    { days: 365, label: 'Perpetual', tag: '+50%' },
                  ].map((tier) => (
                    <button
                      key={tier.days}
                      onClick={() => setWhitelistingDays(tier.days as any)}
                      className={`py-2.5 px-2 text-center rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        whitelistingDays === tier.days
                          ? 'bg-rose-600 border-rose-500 text-white'
                          : 'bg-white/[0.03] border-white/[0.08] text-slate-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div>{tier.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{tier.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 4: Raw Footage & Turnaround */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Raw footage checkbox */}
                <div 
                  onClick={() => setIncludeRawFootage(!includeRawFootage)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    includeRawFootage ? 'bg-rose-950/20 border-rose-500/50' : 'bg-white/[0.02] border-white/[0.08]'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white">Include Raw B-Roll</div>
                    <div className="text-[11px] text-slate-400">+30% of base price</div>
                  </div>
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    includeRawFootage ? 'bg-rose-600 border-rose-500 text-white' : 'border-white/20'
                  }`}>
                    {includeRawFootage && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Turnaround speed selector */}
                <div className="space-y-1">
                  <label htmlFor="turnaround-select" className="text-xs font-semibold text-slate-300 block">
                    Turnaround Speed
                  </label>
                  <select
                    id="turnaround-select"
                    value={turnaround}
                    onChange={(e) => setTurnaround(e.target.value as any)}
                    className="w-full bg-[#131622] border border-white/[0.12] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500 cursor-pointer"
                  >
                    <option value="standard">Standard (5 - 7 business days)</option>
                    <option value="rush_48h">Rush 48-Hour Guarantee (+25%)</option>
                    <option value="priority_24h">Priority 24-Hour Lightning (+50%)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right Column: Live Receipt & Inquire CTA (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#131622] to-[#0A0D14] border border-white/[0.12] rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Itemized Estimate
                </span>
                <span className="text-xs text-rose-400 font-medium">Instant Live Quote</span>
              </div>

              {/* Receipt lines */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>{videoCount} Video Concepts (30-60s)</span>
                  <span className="tabular-nums text-white">{formatCurrency(quote.baseVideosCost)}</span>
                </div>

                {quote.hooksCost > 0 && (
                  <div className="flex justify-between">
                    <span>{videoCount * hooksCount} Additional Hook Cuts</span>
                    <span className="tabular-nums text-white">+{formatCurrency(quote.hooksCost)}</span>
                  </div>
                )}

                {quote.rawFootageCost > 0 && (
                  <div className="flex justify-between">
                    <span>Raw B-Roll &amp; Separate Voiceover</span>
                    <span className="tabular-nums text-white">+{formatCurrency(quote.rawFootageCost)}</span>
                  </div>
                )}

                {quote.volumeDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-medium">
                    <span>{quote.volumeDiscountPercent}% Volume Savings</span>
                    <span className="tabular-nums">-{formatCurrency(quote.volumeDiscountAmount)}</span>
                  </div>
                )}

                {quote.whitelistingSurcharge > 0 && (
                  <div className="flex justify-between">
                    <span>{whitelistingDays}-Day Whitelisting Rights</span>
                    <span className="tabular-nums text-white">+{formatCurrency(quote.whitelistingSurcharge)}</span>
                  </div>
                )}

                {quote.turnaroundSurcharge > 0 && (
                  <div className="flex justify-between text-amber-400">
                    <span>Expedited Turnaround Fee</span>
                    <span className="tabular-nums">+{formatCurrency(quote.turnaroundSurcharge)}</span>
                  </div>
                )}
              </div>

              {/* Delivery ETA */}
              <div className="pt-2 pb-3 border-t border-white/[0.08] flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Estimated Delivery: <strong className="text-white">{quote.estimatedDeliveryDays}</strong></span>
              </div>

              {/* Grand Total */}
              <div className="pt-2 border-t border-white/[0.08] flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-slate-400">Total Campaign Estimate</div>
                  <div className="text-xs text-slate-500">Includes 1 round of revisions</div>
                </div>
                <div className="text-3xl font-extrabold text-white font-display tabular-nums">
                  {formatCurrency(quote.total)}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => onSelectPackage(`Custom Package (${videoCount} Videos, ${hooksCount} Hooks/video, ${whitelistingDays}d Rights)`, quote.total)}
                className="w-full py-3.5 text-xs font-semibold text-white bg-rose-600 rounded-xl hover:bg-rose-500 active:scale-95 transition-all shadow-md shadow-rose-950 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Inquire With This Exact Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligation · 50% deposit on contract start</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
