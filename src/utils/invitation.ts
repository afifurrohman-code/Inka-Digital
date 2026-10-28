/**
 * Invitation link generator and formatting utilities.
 */

export function generateInvitationSlug(brideNick: string, groomNick: string): string {
  const cleanBride = brideNick.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const cleanGroom = groomNick.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  if (!cleanBride && !cleanGroom) return 'undangan-bahagia';
  if (!cleanBride) return cleanGroom;
  if (!cleanGroom) return cleanBride;
  return `${cleanBride}-${cleanGroom}`;
}

export function generatePersonalLink(baseDomain: string, slug: string, guestName: string): string {
  const cleanDomain = baseDomain.replace(/\/+$/, '');
  const encodedName = encodeURIComponent(guestName.trim());
  return `${cleanDomain}/${slug}?to=${encodedName}`;
}

export function generateWhatsAppMessage(
  guestName: string,
  coupleName: string,
  invitationUrl: string
): string {
  const cleanGuest = guestName.trim() || 'Bapak/Ibu/Saudara/i';
  return (
    `Kepada Yth. *${cleanGuest}*,\n\n` +
    `Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk menghadiri acara pernikahan kami:\n\n` +
    `*${coupleName}*\n\n` +
    `Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.\n\n` +
    `Tautan undangan resmi:\n${invitationUrl}\n\n` +
    `Terima kasih atas doa restunya.\n` +
    `Salam hangat,\n*${coupleName}*`
  );
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function calculateCountdown(targetDateIso: string, now: Date = new Date()): CountdownState {
  const target = new Date(targetDateIso).getTime();
  const current = now.getTime();
  const diff = target - current;

  if (diff <= 0 || isNaN(diff)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, isPast: false };
}
