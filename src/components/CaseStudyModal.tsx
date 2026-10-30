import React, { useEffect, useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { UgcAdItem } from '../types/ugc';
import { AdVaultGraphic } from './AdVaultGraphic';

interface CaseStudyModalProps {
  ad: UgcAdItem | null;
  onClose: () => void;
  onBookConcept?: (conceptTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ ad, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Unmuted with sound by default on click
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play unmuted (with sound) on modal open
  useEffect(() => {
    if (!ad) return;
    setIsMuted(false);
    setIsPlaying(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch((err) => {
            console.debug('Direct unmuted play blocked by browser policy, attempting muted fallback:', err);
            // In case the browser restricted sound autoplay, fallback to muted then let user unmute
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => {});
            }
          });
      }
    }
  }, [ad]);

  // Keep video element muted in sync with state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!ad) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-ad-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[380px] sm:max-w-[420px] bg-[#0D0F17] border border-white/[0.15] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#090A0F] z-20">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-rose-400">{ad.brand}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">{ad.formatLabel}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle Button with visual sound status */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
              title={isMuted ? 'Click to Turn Sound ON' : 'Sound is ON (Click to Mute)'}
              className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all border cursor-pointer ${
                !isMuted 
                  ? 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-950/50' 
                  : 'bg-black/60 text-slate-300 hover:text-white border-white/10'
              }`}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
                  <span className="text-[11px] font-semibold">Sound ON</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close video player"
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player 9:16 */}
        <div 
          onClick={() => togglePlay()}
          className="relative aspect-[9/16] w-full bg-black overflow-hidden flex items-center justify-center cursor-pointer select-none group"
        >
          {ad.videoUrl ? (
            <video
              ref={videoRef}
              src={ad.videoUrl}
              className="absolute inset-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-b ${ad.thumbnailTheme.bgGradient} flex items-center justify-center`}>
              <AdVaultGraphic id={ad.id} category={ad.category} />
              <div 
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 40%, ${ad.thumbnailTheme.accentColor} 0%, transparent 70%)`
                }}
              />
            </div>
          )}

          {/* Pause overlay icon */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Clean Minimal Bottom Controls */}
        <div className="p-3.5 bg-[#090A0F] border-t border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => togglePlay(e)}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="px-3.5 py-1.5 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
              className="px-3.5 py-1.5 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />}
              <span>{isMuted ? 'Unmute' : 'Mute'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm shadow-rose-950"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

