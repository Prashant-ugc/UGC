import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateUgcQuote, formatMetricNumber, formatCurrency } from './pricing';

test('standard single video without add-ons calculates base price correctly', () => {
  const quote = calculateUgcQuote({
    videoCount: 1,
    hookVariationsPerVideo: 0,
    rawFootage: false,
    whitelistingDays: 30,
    turnaroundDays: 'standard',
  });

  assert.equal(quote.baseVideosCost, 350);
  assert.equal(quote.hooksCost, 0);
  assert.equal(quote.rawFootageCost, 0);
  assert.equal(quote.whitelistingSurcharge, 0);
  assert.equal(quote.volumeDiscountPercent, 0);
  assert.equal(quote.volumeDiscountAmount, 0);
  assert.equal(quote.total, 350);
  assert.equal(quote.estimatedDeliveryDays, '5 - 7 business days');
});

test('multi-video tier applies 10% volume discount for 3 videos', () => {
  const quote = calculateUgcQuote({
    videoCount: 3,
    hookVariationsPerVideo: 0,
    rawFootage: false,
    whitelistingDays: 30,
    turnaroundDays: 'standard',
  });

  // Base: 3 * 350 = 1050
  assert.equal(quote.baseVideosCost, 1050);
  assert.equal(quote.volumeDiscountPercent, 10);
  assert.equal(quote.volumeDiscountAmount, 105);
  assert.equal(quote.total, 945);
});

test('hooks, raw footage, and 60-day whitelisting surcharge calculate predictably', () => {
  const quote = calculateUgcQuote({
    videoCount: 1,
    hookVariationsPerVideo: 2, // 2 * $75 = $150
    rawFootage: true,          // 30% of $350 = $105
    whitelistingDays: 60,      // +15%
    turnaroundDays: 'standard',
  });

  assert.equal(quote.baseVideosCost, 350);
  assert.equal(quote.hooksCost, 150);
  assert.equal(quote.rawFootageCost, 105);
  // Production subtotal: 350 + 150 + 105 = 605
  assert.equal(quote.subtotal, 605);
  // 15% whitelisting on 605 = 91 (rounded)
  assert.equal(quote.whitelistingSurcharge, 91);
  assert.equal(quote.total, 605 + 91);
});

test('rush turnaround 48h adds 25% surcharge and updates delivery message', () => {
  const quote = calculateUgcQuote({
    videoCount: 2,
    hookVariationsPerVideo: 0,
    rawFootage: false,
    whitelistingDays: 30,
    turnaroundDays: 'rush_48h',
  });

  // 2 * 350 = 700. Rush 25% = 175. Total = 875.
  assert.equal(quote.total, 875);
  assert.equal(quote.turnaroundSurcharge, 175);
  assert.match(quote.estimatedDeliveryDays, /48 hours/);
});

test('formatMetricNumber formats thousands and millions concisely', () => {
  assert.equal(formatMetricNumber(15000000), '15.0M+');
  assert.equal(formatMetricNumber(45000), '45k+');
  assert.equal(formatMetricNumber(350), '350');
});

test('formatCurrency outputs standard USD formatting', () => {
  assert.equal(formatCurrency(1200), '$1,200');
  assert.equal(formatCurrency(350), '$350');
});
