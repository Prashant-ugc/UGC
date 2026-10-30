import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { UGC_ADS } from '../data/ugcData';
import { UgcAdItem, CategoryType } from '../types/ugc';
import { AdVaultGraphic } from './AdVaultGraphic';

interface AdVaultProps {
  onSelectAd: (ad: UgcAdItem) => void;
}

interface AdVaultCardProps {
  ad: UgcAdItem;
  onSelectAd: (ad: UgcAdItem) => void;
  isUnmuted: boolean;
  onToggleMute: (id: string) => void;
}

const AdVaultCard: React.FC<AdVaultCardProps> = ({
  ad,
  onSelectAd,
  isUnmuted,
  onToggleMute,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-run video on mount (muted by default to comply with browser autoplay policies)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.debug('Autoplay hindered:', err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Update muted state on element whenever isUnmuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
    }
  }, [isUnmuted]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMute(ad.id);
  };

  return (
    <article className="group relative rounded-2xl bg-[#0D0F17] border border-white/[0.08] overflow-hidden flex flex-col transition-all duration-300 hover:border-white/[0.2] hover:shadow-xl hover:shadow-rose-950/20">
      {/* 9:16 Video Container */}
      <div 
        onClick={() => onSelectAd(ad)}
        className="relative aspect-[9/15] w-full overflow-hidden bg-slate-900 cursor-pointer select-none"
      >
        {/* Real Video or Styled Dynamic Background */}
        {ad.videoUrl ? (
          <>
            <video
              ref={(el) => {
                if (el) {
                  el.muted = !isUnmuted;
                  videoRef.current = el;
                }
              }}
              src={ad.videoUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted={!isUnmuted}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Contrast scrim for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 z-5 pointer-events-none" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${ad.thumbnailTheme.bgGradient} transition-transform duration-500 group-hover:scale-105`}>
            {/* Visual lifestyle & product graphic silhouette */}
            <AdVaultGraphic id={ad.id} category={ad.category} />
            
            {/* Radial ambient glow */}
            <div 
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 30%, ${ad.thumbnailTheme.accentColor} 0%, transparent 60%)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F17] via-transparent to-black/60" />
          </div>
        )}

        {/* Top Bar with audio and playback controls */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
          <button
            onClick={handleToggleMute}
            aria-label={isUnmuted ? 'Mute video audio' : 'Unmute video audio'}
            title={isUnmuted ? 'Click to Mute' : 'Click to Unmute Sound'}
            className={`p-1.5 backdrop-blur-md rounded-full transition-all border flex items-center justify-center cursor-pointer ${
              isUnmuted
                ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-950/50'
                : 'bg-black/60 text-slate-300 hover:text-white border-white/10'
            }`}
          >
            {isUnmuted ? (
              <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>
          
          <button
            onClick={handleTogglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="p-1.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-rose-600 transition-colors border border-white/10 flex items-center justify-center cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          </button>
        </div>

        {/* Center Content for cards without real video */}
        {!ad.videoUrl ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center z-10 pointer-events-none">
            {isPlaying ? (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-black/85 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-xl">
                  <p className="text-xs sm:text-sm font-bold text-amber-100 leading-snug">
                    {ad.captions[0]}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:bg-rose-600 transition-all shadow-lg">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <p className="text-xs text-slate-300 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm inline-block">
                  Click to watch video
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Real video card: subtle play icon when paused */
          !isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>
          )
        )}
      </div>

      {/* Card Details & Action Footer */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="font-semibold text-rose-400">{ad.brand}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{ad.formatLabel}</span>
          </div>

          <h3 
            onClick={() => onSelectAd(ad)}
            className="text-base font-bold text-white group-hover:text-rose-400 transition-colors cursor-pointer"
          >
            {ad.title}
          </h3>
        </div>
      </div>
    </article>
  );
};

export const AdVault: React.FC<AdVaultProps> = ({ onSelectAd }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [unmutedVideoId, setUnmutedVideoId] = useState<string | null>(null);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Ad Formats' },
    { id: 'skincare', label: 'Skincare & Beauty' },
    { id: 'wellness', label: 'Wellness & Nutrition' },
    { id: 'fashion', label: 'Fashion & Apparel' },
  ];

  const filteredAds = selectedCategory === 'all' 
    ? UGC_ADS 
    : UGC_ADS.filter(ad => ad.category === selectedCategory);

  const handleToggleMute = (id: string) => {
    setUnmutedVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="vault" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400">
              <span>Verified Creative Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Direct-Response Formats</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              The High-Converting UGC Ad Vault
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore live ad concepts tested across TikTok and Meta feeds. Click any video to open and watch with full sound.
            </p>
          </div>

          {/* Interactive Category Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Ads Grid (3-column responsive layout for 9:16 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAds.map((ad) => (
            <AdVaultCard
              key={ad.id}
              ad={ad}
              onSelectAd={onSelectAd}
              isUnmuted={unmutedVideoId === ad.id}
              onToggleMute={handleToggleMute}
            />
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredAds.length === 0 && (
          <div className="text-center py-16 bg-[#0D0F17] rounded-2xl border border-white/[0.08]">
            <p className="text-slate-300 text-sm">No ads found in this category.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs text-rose-400 hover:underline"
            >
              Reset to All Ad Formats
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
