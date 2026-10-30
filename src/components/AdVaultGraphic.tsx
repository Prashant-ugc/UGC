import React from 'react';

interface AdVaultGraphicProps {
  id: string;
  category: string;
}

export const AdVaultGraphic: React.FC<AdVaultGraphicProps> = ({ id, category }) => {
  if (id === 'lumiere-serum') {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 300" className="w-48 h-72 text-amber-500/50" fill="none" stroke="currentColor">
          {/* Serum Bottle & Dropper Silhouette */}
          <path d="M90 30 L110 30 L110 60 L140 90 L140 240 Q140 260 120 260 L80 260 Q60 260 60 240 L60 90 L90 60 Z" strokeWidth="2" fill="rgba(245, 158, 11, 0.08)" />
          {/* Dropper bulb */}
          <path d="M92 30 Q100 10 108 30 Z" fill="rgba(245, 158, 11, 0.3)" />
          {/* Droplet */}
          <circle cx="100" cy="160" r="12" fill="rgba(245, 158, 11, 0.2)" />
          <path d="M100 144 Q108 156 108 162 Q108 170 100 170 Q92 170 92 162 Q92 156 100 144 Z" fill="rgba(245, 158, 11, 0.4)" />
        </svg>
      </div>
    );
  }

  if (id === 'aura-sleep-ring') {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 300" className="w-52 h-72 text-sky-400/50" fill="none" stroke="currentColor">
          {/* Ring Silhouette */}
          <circle cx="100" cy="140" r="60" strokeWidth="8" stroke="rgba(56, 189, 248, 0.3)" />
          <circle cx="100" cy="140" r="48" strokeWidth="2" stroke="rgba(56, 189, 248, 0.5)" />
          {/* Sensor Pulse */}
          <path d="M50 220 L75 220 L85 200 L95 240 L105 190 L115 230 L125 220 L150 220" strokeWidth="2.5" stroke="rgba(56, 189, 248, 0.6)" />
        </svg>
      </div>
    );
  }

  if (id === 'kite-matcha') {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 300" className="w-48 h-72 text-emerald-400/50" fill="none" stroke="currentColor">
          {/* Matcha Bowl */}
          <path d="M50 150 Q100 240 150 150 Q150 130 100 130 Q50 130 50 150 Z" strokeWidth="3" fill="rgba(16, 185, 129, 0.15)" />
          {/* Whisk Steam Waves */}
          <path d="M80 110 Q90 80 80 50" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M100 110 Q110 75 100 40" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M120 110 Q130 80 120 50" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
    );
  }

  if (id === 'nordic-thread') {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 300" className="w-48 h-72 text-rose-400/50" fill="none" stroke="currentColor">
          {/* Tailored Coat Hanger & Silhouette */}
          <path d="M100 50 L100 70 L160 110 L140 240 L60 240 L40 110 Z" strokeWidth="2.5" fill="rgba(251, 113, 133, 0.1)" />
          <path d="M100 50 Q100 30 115 40" strokeWidth="3" />
          <line x1="100" y1="110" x2="100" y2="240" strokeWidth="1.5" strokeDasharray="6 4" />
        </svg>
      </div>
    );
  }

  if (id === 'oasis-hydration') {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 200 300" className="w-48 h-72 text-cyan-400/50" fill="none" stroke="currentColor">
          {/* Glass & Ice Silhouette */}
          <path d="M60 70 L75 240 Q75 250 100 250 Q125 250 125 240 L140 70 Z" strokeWidth="2.5" fill="rgba(6, 182, 212, 0.1)" />
          <rect x="85" y="140" width="30" height="30" rx="6" strokeWidth="2" />
          <rect x="75" y="190" width="28" height="28" rx="6" strokeWidth="2" />
          {/* Straw */}
          <line x1="110" y1="40" x2="90" y2="230" strokeWidth="3" />
        </svg>
      </div>
    );
  }

  // Solace Circadian lamp
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <svg viewBox="0 0 200 300" className="w-48 h-72 text-orange-400/50" fill="none" stroke="currentColor">
        {/* Lamp Dome & Ambient Sunset Arc */}
        <path d="M50 160 Q100 80 150 160 Z" strokeWidth="3" fill="rgba(249, 115, 22, 0.2)" />
        <line x1="100" y1="160" x2="100" y2="240" strokeWidth="4" />
        <path d="M80 240 L120 240" strokeWidth="4" />
        <circle cx="100" cy="160" r="70" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
      </svg>
    </div>
  );
};
