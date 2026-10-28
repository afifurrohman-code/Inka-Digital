import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSavings, formatRupiah } from './calculator.ts';

test('calculateSavings computes correct physical cost and total savings for 500 guests', () => {
  const result = calculateSavings(500);
  // print: 500 * 12000 = 6000000
  // total physical: 6000000 + 350000 = 6350000
  // digital: 149000
  // savings: 6350000 - 149000 = 6201000
  assert.equal(result.guestCount, 500);
  assert.equal(result.physicalBreakdown.printCost, 6000000);
  assert.equal(result.physicalBreakdown.shippingFee, 350000);
  assert.equal(result.totalPhysical, 6350000);
  assert.equal(result.digitalCost, 149000);
  assert.equal(result.savings, 6201000);
  assert.equal(result.savingsPercentage, 98);
});

test('calculateSavings handles minimum guest count gracefully', () => {
  const result = calculateSavings(0);
  assert.equal(result.guestCount, 1);
  assert.equal(result.totalPhysical, 12000 + 350000);
});

test('formatRupiah formats Indonesian numbers with dot thousands separator', () => {
  assert.equal(formatRupiah(6201000), 'Rp 6.201.000');
  assert.equal(formatRupiah(149000), 'Rp 149.000');
  assert.equal(formatRupiah(0), 'Rp 0');
});
