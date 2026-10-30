import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight, Lightbulb } from 'lucide-react';
import { HOOK_TEMPLATES } from '../data/ugcData';

interface HookGeneratorProps {
  onUseHookInBrief: (hookText: string) => void;
}

export const HookGenerator: React.FC<HookGeneratorProps> = ({ onUseHookInBrief }) => {
  const [productName, setProductName] = useState('Hydrating Barrier Serum');
  const [productNiche, setProductNiche] = useState('skincare');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateHooksForProduct = () => {
    const prod = productName.trim() || 'your product';
    
    if (productNiche === 'skincare') {
      return [
        {
          angle: 'Negative / Loss Aversion',
          script: `“Stop using ${prod} unless you are ready for everyone to ask what dermatologist you went to...”`,
          type: 'Curiosity Spike',
        },
        {
          angle: 'Relatable Best-Friend POV',
          script: `“POV: You threw away your entire 8-step routine because this ${prod} fixed your skin in 4 days.”`,
          type: 'Social Proof',
        },
        {
          angle: 'Skeptic Breakdown',
          script: `“I was 100% convinced this viral ${prod} was pure TikTok marketing BS... until I saw my forehead redness disappear.”`,
          type: 'Objection Crusher',
        },
      ];
    }

    if (productNiche === 'tech') {
      return [
        {
          angle: 'Negative / Loss Aversion',
          script: `“Why nobody should buy a bulky smartwatch in 2026 when ${prod} exists...”`,
          type: 'Contrarian Hook',
        },
        {
          angle: 'Tactile Unboxing ASMR',
          script: `“Listen to this unboxing snap. This is the new ${prod} that everyone is freaking out over.”`,
          type: 'Sensory Hold',
        },
        {
          angle: 'Daily Routine Integration',
          script: `“The one minimalist gadget on my desk that saves me 40 minutes of battery anxiety every single day: ${prod}.”`,
          type: 'Problem-Solver',
        },
      ];
    }

    if (productNiche === 'wellness') {
      return [
        {
          angle: 'Negative / Loss Aversion',
          script: `“Do NOT drink another cup of coffee at 2 PM if you hate brain fog. Try this ${prod} instead.”`,
          type: 'Habit Interrupter',
        },
        {
          angle: 'Before vs After Agitation',
          script: `“Day 1 vs Day 14 of replacing my sugary afternoon energy drink with ${prod}...”`,
          type: 'Visual Transformation',
        },
        {
          angle: 'Honest Contrast',
          script: `“Most wellness powders taste like chalky ocean water, but this ${prod} tastes like iced citrus heaven.”`,
          type: 'Taste Skepticism',
        },
      ];
    }

    // Default fashion / lifestyle
    return [
      {
        angle: 'Styling Capsule Rule',
        script: `“How I style this single ${prod} into 6 expensive European summer outfits without checking a bag.”`,
        type: 'High AOV Driver',
      },
      {
        angle: 'Curious Discovery',
        script: `“The one clothing brand I gatekept for 2 years because their ${prod} fits like bespoke tailoring...”`,
        type: 'Scarcity / Insider',
      },
      {
        angle: 'Fabric & Quality Proof',
        script: `“Fast fashion fabrics shrink on wash 1. Look at the weight and drape of this ${prod} after 15 washes.”`,
        type: 'Longevity Proof',
      },
    ];
  };

  const hooks = generateHooksForProduct();

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="hook-lab" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Creative Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            The DTC Hook Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Test how I architect high-converting video openings for your brand. Type in your product to generate 3 proven hook formulas.
          </p>
        </div>

        {/* Generator Container */}
        <div className="max-w-4xl mx-auto bg-[#0D0F17] border border-white/[0.1] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Controls: Product Input & Niche Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
            <div className="sm:col-span-7 space-y-1.5">
              <label htmlFor="product-name-input" className="text-xs font-semibold text-slate-300 block">
                Your Product or Brand Name
              </label>
              <input
                id="product-name-input"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g. Cold-Pressed Squalane Serum"
                className="w-full bg-[#131622] border border-white/[0.12] rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>

            <div className="sm:col-span-5 space-y-1.5">
              <label htmlFor="niche-select" className="text-xs font-semibold text-slate-300 block">
                Category Niche
              </label>
              <select
                id="niche-select"
                value={productNiche}
                onChange={(e) => setProductNiche(e.target.value)}
                className="w-full bg-[#131622] border border-white/[0.12] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors cursor-pointer"
              >
                <option value="skincare">Skincare &amp; Clean Beauty</option>
                <option value="tech">Consumer Tech &amp; Gadgets</option>
                <option value="wellness">Wellness &amp; Functional Nutrition</option>
                <option value="fashion">Fashion &amp; Minimalist Apparel</option>
              </select>
            </div>
          </div>

          {/* Generated Hooks Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider">
                Instant Hook Variations for {productName || 'Your Product'}:
              </span>
              <span>Ready for TikTok &amp; Reels</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {hooks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-rose-400">{item.angle}</span>
                      <span aria-hidden="true" className="text-slate-500">·</span>
                      <span className="text-slate-400 font-mono text-[11px]">{item.type}</span>
                    </div>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      {item.script}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    <button
                      onClick={() => handleCopy(item.script, idx)}
                      className="px-3 py-2 text-xs font-medium rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onUseHookInBrief(item.script)}
                      className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap shadow-sm shadow-rose-950"
                    >
                      <span>Film This For Me</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
