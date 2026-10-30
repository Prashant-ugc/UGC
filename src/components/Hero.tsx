import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Music, CheckCircle2 } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/ugcData';

interface HeroProps {
  onExploreVault: () => void;
  onStartCampaign?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVault, onStartCampaign }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.debug('Hero autoplay prevented or deferred:', err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background ambient radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split-screen 2-column container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-wider uppercase text-rose-400">
              <span>Direct-Response UGC Video Ads</span>
              <span aria-hidden="true" className="text-slate-500">/</span>
              <span>TikTok &amp; Meta DTC Specialist</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.08]">
              High-converting UGC ads that turn scrollers into paying customers.
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Authentic, organic-style short form video ads designed specifically for direct-to-consumer brand performance. Engineered with thumb-stopping hooks, high watch time, and rapid 48-hour turnarounds.
            </p>

            {/* Credibility bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>3 to 5 tested hook cuts per video concept</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>iPhone 16 Pro 4K HDR + Studio lighting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Whitelisting &amp; Spark Ads authorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Delivered with raw B-roll &amp; separate voiceover</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreVault}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-rose-600 rounded-xl hover:bg-rose-500 active:scale-95 transition-all shadow-md shadow-rose-950/50 flex items-center gap-2 cursor-pointer"
              >
                <span>Watch UGC Ad Vault</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Availability ticker (Clean unboxed typography) */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Campaign Availability:</span>
              <span>Open for Q2/Q3 Brand Campaigns</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Next delivery slot: 3 business days</span>
            </div>

          </div>

          {/* Right Column: Real UGC Video 9:16 Mobile Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] aspect-[9/18] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-[6px] border-slate-800 shadow-rose-950/30">
              
              {/* Phone speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2" />
                <div className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Screen Container */}
              <div 
                onClick={togglePlay}
                className="relative w-full h-full rounded-[30px] overflow-hidden bg-black flex flex-col justify-between p-4 text-white select-none cursor-pointer group"
              >
                {/* Embedded Real UGC Video */}
                <video
                  ref={(el) => {
                    if (el) {
                      el.muted = isMuted;
                      videoRef.current = el;
                    }
                  }}
                  src="/assets/aistudio/9JGIYgY6_mQ_720_727927a9.mp4"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Scrim gradients to guarantee WCAG contrast on text & controls */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 z-10 pointer-events-none" />

                {/* Top Video Header Bar */}
                <div className="pt-6 flex items-center justify-end z-20">
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={toggleMute} 
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      title={isMuted ? 'Click to Unmute Sound' : 'Click to Mute'}
                      className={`p-1.5 backdrop-blur-md rounded-full transition-all border flex items-center justify-center cursor-pointer ${
                        !isMuted 
                          ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-950/50' 
                          : 'bg-black/60 text-slate-300 hover:text-white border-white/10'
                      }`}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />}
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="p-1.5 bg-black/60 backdrop-blur-md rounded-full text-slate-300 hover:text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                  </div>
                </div>

                {/* Center Pause/Play Indicator (when paused) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Bottom Video Metadata */}
                <div className="z-20 space-y-1.5 text-left pb-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>@prashantwork.ugc</span>
                    <span className="text-[10px] text-rose-400 font-medium">· Cosy House Partner</span>
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-2 leading-snug">
                    The sheets that ended my soaked 2 AM wake ups are up to 80% off! 100% bamboo viscose.
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                    <Music className="w-3 h-3 text-rose-400 animate-spin" />
                    <span className="truncate max-w-[220px]">Original Sound · Prashant Work Voiceover</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-width Key Performance Metrics strip below hero split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              {CREATOR_PROFILE.averageRoas}
            </div>
            <div className="text-xs font-medium text-slate-400">
              Average TikTok &amp; Meta ROAS
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              {CREATOR_PROFILE.totalImpressions}
            </div>
            <div className="text-xs font-medium text-slate-400">
              Paid Direct-Response Views
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              {CREATOR_PROFILE.brandsScaled}
            </div>
            <div className="text-xs font-medium text-slate-400">
              DTC Consumer Brands Scaled
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-rose-400 font-display tabular-nums tracking-tight">
              {CREATOR_PROFILE.turnaroundTime}
            </div>
            <div className="text-xs font-medium text-slate-400">
              Standard Turnaround Speed
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
