/**
 * Pure calculation logic for UGC Ads Package Pricing, Volume Discounts,
 * Whitelisting Licensing Rights, and Performance Benchmarks.
 */

export interface PricingOptions {
  videoCount: number; // 1 to 15
  hookVariationsPerVideo: number; // 0 to 4 additional hooks
  rawFootage: boolean; // include unedited b-roll & audio
  whitelistingDays: 30 | 60 | 90 | 365; // ad usage rights duration
  turnaroundDays: 'standard' | 'rush_48h' | 'priority_24h';
}

export interface ItemizedQuote {
  baseVideosCost: number;
  hooksCost: number;
  rawFootageCost: number;
  whitelistingSurcharge: number;
  subtotal: number;
  volumeDiscountPercent: number;
  volumeDiscountAmount: number;
  turnaroundSurcharge: number;
  total: number;
  estimatedDeliveryDays: string;
}

const BASE_PRICE_PER_VIDEO = 350; // Standard DTC quality, 30-60s 4K UGC with hooks, voiceover, dynamic captions
const PRICE_PER_HOOK_VARIATION = 75; // Tested A/B hook variations for Meta/TikTok algorithm testing

export function calculateUgcQuote(options: PricingOptions): ItemizedQuote {
  const count = Math.max(1, Math.floor(options.videoCount || 1));
  const hooks = Math.max(0, Math.floor(options.hookVariationsPerVideo || 0));

  const baseVideosCost = count * BASE_PRICE_PER_VIDEO;
  const hooksCost = count * hooks * PRICE_PER_HOOK_VARIATION;

  let rawFootageCost = 0;
  if (options.rawFootage) {
    rawFootageCost = Math.round(baseVideosCost * 0.3); // 30% for all raw B-roll and high-res audio
  }

  // Base production subtotal before licensing & turnaround
  const productionSubtotal = baseVideosCost + hooksCost + rawFootageCost;

  // Volume discount tiers
  let volumeDiscountPercent = 0;
  if (count >= 10) {
    volumeDiscountPercent = 0.20; // 20% off
  } else if (count >= 5) {
    volumeDiscountPercent = 0.15; // 15% off
  } else if (count >= 3) {
    volumeDiscountPercent = 0.10; // 10% off
  }

  const volumeDiscountAmount = Math.round(productionSubtotal * volumeDiscountPercent);
  const discountedProduction = productionSubtotal - volumeDiscountAmount;

  // Whitelisting / Paid Usage Rights
  // 30 days is included by default; longer periods add a multiplier
  let whitelistingMultiplier = 0;
  if (options.whitelistingDays === 60) {
    whitelistingMultiplier = 0.15; // +15%
  } else if (options.whitelistingDays === 90) {
    whitelistingMultiplier = 0.25; // +25%
  } else if (options.whitelistingDays === 365) {
    whitelistingMultiplier = 0.50; // +50%
  }
  const whitelistingSurcharge = Math.round(discountedProduction * whitelistingMultiplier);

  // Turnaround speed surcharge
  let turnaroundMultiplier = 0;
  let deliveryDays = '5 - 7 business days';
  if (options.turnaroundDays === 'rush_48h') {
    turnaroundMultiplier = 0.25;
    deliveryDays = '48 hours guaranteed';
  } else if (options.turnaroundDays === 'priority_24h') {
    turnaroundMultiplier = 0.50;
    deliveryDays = '24 hours lightning turnaround';
  }

  const turnaroundSurcharge = Math.round(discountedProduction * turnaroundMultiplier);

  const total = discountedProduction + whitelistingSurcharge + turnaroundSurcharge;

  return {
    baseVideosCost,
    hooksCost,
    rawFootageCost,
    whitelistingSurcharge,
    subtotal: productionSubtotal,
    volumeDiscountPercent: Math.round(volumeDiscountPercent * 100),
    volumeDiscountAmount,
    turnaroundSurcharge,
    total,
    estimatedDeliveryDays: deliveryDays,
  };
}

export function formatMetricNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M+`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(0)}k+`;
  }
  return num.toString();
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
