export type NavView =
  | 'beranda'
  | 'tema'
  | 'fitur'
  | 'keunggulan'
  | 'bantuan'
  | 'dashboard'
  | 'buat';

export type ThemeCategory = 'all' | 'minimalist' | 'adat' | 'luxury' | 'floral' | 'modern';

export interface ThemeItem {
  id: string;
  name: string;
  category: 'minimalist' | 'adat' | 'luxury' | 'floral' | 'modern';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  tagColor: string;
  rating: number;
  clientCount: string;
  musicTitle: string;
  accentColor: string;
  primaryColor: string;
}

export interface ClientEvent {
  id: string;
  coupleName: string;
  groomName: string;
  groomNick: string;
  brideName: string;
  brideNick: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  quota: number;
  rsvpCount: number;
  wishesCount: number;
  themeId: string;
  themeName: string;
  musicTitle: string;
  passCode: string;
  bankAccount: string;
  bankName: string;
  accountHolder: string;
  status: 'active' | 'completed' | 'draft';
}

export interface WishMessage {
  id: string;
  guestName: string;
  presence: 'hadir' | 'tidak_hadir' | 'masih_ragu';
  message: string;
  timeAgo: string;
}

export interface SupportTicket {
  id: string;
  name: string;
  whatsapp: string;
  category: string;
  message: string;
  createdAt: string;
}
