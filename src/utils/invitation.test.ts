import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateInvitationSlug,
  generatePersonalLink,
  generateWhatsAppMessage,
  calculateCountdown,
} from './invitation.ts';

test('generateInvitationSlug produces clean hyphenated slug', () => {
  assert.equal(generateInvitationSlug('Sarah', 'Alex'), 'sarah-alex');
  assert.equal(generateInvitationSlug('Nabila', 'Arya Pratama'), 'nabila-aryapratama');
  assert.equal(generateInvitationSlug('', 'Alex'), 'alex');
});

test('generatePersonalLink creates properly URL-encoded link', () => {
  const link = generatePersonalLink('https://inkadigital.id', 'arya-nabila', 'Bpk. Hendra & Rekan');
  assert.equal(link, 'https://inkadigital.id/arya-nabila?to=Bpk.%20Hendra%20%26%20Rekan');
});

test('generateWhatsAppMessage contains recipient name and link', () => {
  const msg = generateWhatsAppMessage(
    'Budi Santoso',
    'Arya & Nabila',
    'https://inkadigital.id/arya-nabila'
  );
  assert.match(msg, /Budi Santoso/);
  assert.match(msg, /Arya & Nabila/);
  assert.match(msg, /https:\/\/inkadigital\.id\/arya-nabila/);
});

test('calculateCountdown calculates positive diff correctly', () => {
  const now = new Date('2026-01-01T00:00:00Z');
  const target = '2026-01-03T05:30:15Z';
  const cd = calculateCountdown(target, now);
  assert.equal(cd.days, 2);
  assert.equal(cd.hours, 5);
  assert.equal(cd.minutes, 30);
  assert.equal(cd.seconds, 15);
  assert.equal(cd.isPast, false);
});
