import React, { useState, useEffect } from 'react';
import { ThemeItem, WishMessage } from '../types/index.ts';
import { INITIAL_WISHES } from '../data/mockData.ts';
import confetti from 'canvas-confetti';
import {
  X,
  Music,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  ExternalLink,
  Gift,
} from 'lucide-react';

interface LiveInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  invitationData?: {
    coupleName?: string;
    groomName?: string;
    brideName?: string;
    eventDate?: string;
    eventTime?: string;
    venueName?: string;
    venueAddress?: string;
    theme?: ThemeItem;
    bankName?: string;
    bankAccount?: string;
    accountHolder?: string;
  } | null;
}

export const LiveInvitationModal: React.FC<LiveInvitationModalProps> = ({
  isOpen,
  onClose,
  invitationData,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  // Wishes state
  const [wishes, setWishes] = useState<WishMessage[]>(INITIAL_WISHES);
  const [guestNameInput, setGuestNameInput] = useState('');
  const [presenceInput, setPresenceInput] = useState<'hadir' | 'tidak_hadir' | 'masih_ragu'>('hadir');
  const [messageInput, setMessageInput] = useState('');

  // Default values fallback
  const coupleName = invitationData?.coupleName || 'Arya & Nabila';
  const groomName = invitationData?.groomName || 'Arya Pratama, S.Kom.';
  const brideName = invitationData?.brideName || 'Nabila Safitri, S.Ked.';
  const eventDate = invitationData?.eventDate || '2025-10-24';
  const eventTime = invitationData?.eventTime || '19:00 - 22:00 WIB';
  const venueName = invitationData?.venueName || 'Grand Ballroom Hotel Mulia Senayan';
  const venueAddress = invitationData?.venueAddress || 'Jl. Asia Afrika, Gelora, Senayan, Jakarta Pusat';
  const bankName = invitationData?.bankName || 'BCA';
  const bankAccount = invitationData?.bankAccount || '1234567890';
  const accountHolder = invitationData?.accountHolder || 'Arya Pratama';
  const themeImage =
    invitationData?.theme?.image ||
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';

  useEffect(() => {
    if (!isOpen) {
      setIsOpened(false);
      setIsPlayingMusic(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // safe fallback
    }
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(bankAccount);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestNameInput.trim() || !messageInput.trim()) return;

    const newWish: WishMessage = {
      id: `w-${Date.now()}`,
      guestName: guestNameInput.trim(),
      presence: presenceInput,
      message: messageInput.trim(),
      timeAgo: 'Baru saja',
    };

    setWishes([newWish, ...wishes]);
    setGuestNameInput('');
    setMessageInput('');

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17233A]/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {/* Container simulating a mobile phone viewport inside the modal */}
      <div className="relative w-full max-w-[420px] bg-white rounded-[38px] shadow-2xl border-4 border-slate-700/80 overflow-hidden my-auto flex flex-col h-[90vh] max-h-[820px]">
        {/* Top Floating Controls */}
        <div className="absolute top-4 right-4 z-40 flex items-center gap-2">
          {isOpened && (
            <button
              onClick={() => setIsPlayingMusic(!isPlayingMusic)}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-md text-[#17233A] flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              aria-label="Toggle Music"
            >
              {isPlayingMusic ? (
                <Volume2 className="w-4 h-4 text-[#087BFF] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          )}

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur shadow-md text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ============================================== */}
        {/* VIEW 1: ENVELOPE COVER SCREEN (Before Open)    */}
        {/* ============================================== */}
        {!isOpened ? (
          <div className="relative flex-1 flex flex-col items-center justify-between p-8 text-center text-white bg-slate-900 overflow-hidden">
            {/* Background Cover Photo */}
            <img
              src={themeImage}
              alt="Cover Couple"
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17233A] via-[#17233A]/40 to-black/60"></div>

            {/* Top Badge */}
            <div className="relative z-10 pt-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#00C4F4] font-bold block mb-1">
                The Wedding Of
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">{coupleName}</h2>
            </div>

            {/* Middle Recipient Pill */}
            <div className="relative z-10 my-auto w-full px-4">
              <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-200 block">
                  Kepada Yth. Bapak/Ibu/Saudara/i
                </span>
                <span className="text-sm font-bold text-white block">Tamu Undangan Yang Terhormat</span>
                <p className="text-[10px] text-slate-300 italic pt-1">
                  Mohon maaf bila ada kesalahan penulisan nama/gelar
                </p>
              </div>
            </div>

            {/* Bottom Button: Buka Undangan */}
            <div className="relative z-10 pb-6 w-full space-y-3">
              <button
                onClick={handleOpenEnvelope}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white font-bold text-sm shadow-xl hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Buka Undangan</span>
              </button>
              <span className="text-[10px] text-slate-400 block">
                Musik latar akan otomatis diputar
              </span>
            </div>
          </div>
        ) : (
          /* ============================================== */
          /* VIEW 2: FULL INVITATION EXPERIENCE             */
          /* ============================================== */
          <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-50 text-[#17233A]">
            {/* Header Hero Cover */}
            <div className="relative h-96 w-full overflow-hidden bg-slate-900 text-white flex flex-col justify-end p-6 text-center">
              <img
                src={themeImage}
                alt="Couple"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17233A] via-[#17233A]/40 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-[#00C4F4] font-bold">
                  Walimatul Ursy
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif mt-1">{coupleName}</h1>
                <p className="text-xs text-slate-200 mt-1">
                  {new Date(eventDate).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Ayat Suci Quote */}
            <div className="p-6 text-center space-y-2 bg-white border-b border-slate-100">
              <p className="text-xs font-serif italic text-slate-600 leading-relaxed">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
                untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                menjadikan di antaramu rasa kasih dan sayang."
              </p>
              <span className="text-[11px] font-bold text-[#087BFF] block">(QS. Ar-Rum: 21)</span>
            </div>

            {/* Profile Mempelai */}
            <div className="p-6 space-y-6 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#087BFF] block mb-1">
                  Mempelai Pria
                </span>
                <h3 className="text-xl font-bold font-serif text-[#17233A]">{groomName}</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Putra dari Bpk. Bambang Pratama & Ibu Ratna Dewi
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-slate-200"></span>
                <Heart className="w-5 h-5 text-[#087BFF] fill-[#087BFF]" />
                <span className="h-px w-12 bg-slate-200"></span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#00C4F4] block mb-1">
                  Mempelai Wanita
                </span>
                <h3 className="text-xl font-bold font-serif text-[#17233A]">{brideName}</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Putri dari Bpk. Prof. Hendrawan & Ibu Siti Aminah
                </p>
              </div>
            </div>

            {/* Event Details Agenda */}
            <div className="p-6 bg-white border-y border-slate-100 space-y-4">
              <div className="text-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087BFF]">
                  Rangkaian Acara
                </span>
                <h4 className="text-lg font-bold text-[#17233A]">Waktu & Lokasi Acara</h4>
              </div>

              {/* Akad Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-[#17233A]">Akad Nikah</h5>
                  <span className="text-[10px] bg-blue-50 text-[#087BFF] px-2 py-0.5 rounded-full font-bold">
                    Khidmat
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#087BFF]" />
                    <span>{eventDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#087BFF]" />
                    <span>08:00 - 10:00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Resepsi Card */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-bold text-sm text-[#17233A]">Resepsi Pernikahan</h5>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                    Pesta Utama
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#087BFF]" />
                    <span>{eventDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#087BFF]" />
                    <span>{eventTime}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#087BFF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#17233A]">{venueName}</strong>
                      <span className="text-[11px] text-slate-500">{venueAddress}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(venueName + ' ' + venueAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 w-full py-2 bg-[#087BFF] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow hover:bg-[#0058bc] transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Buka Google Maps</span>
                </a>
              </div>
            </div>

            {/* Amplop Digital (Cashless Direct Transfer) */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087BFF]">
                  Tanda Kasih
                </span>
                <h4 className="text-lg font-bold text-[#17233A]">Amplop Digital Cashless</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Doa restu Anda merupakan karunia terindah, namun bagi yang ingin memberikan tanda kasih secara digital:
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-[#17233A] text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#00C4F4]">
                    {bankName} TRANSFER
                  </span>
                  <Gift className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-lg font-mono font-bold tracking-widest mb-1">{bankAccount}</div>
                <div className="text-xs text-slate-300">a.n. {accountHolder}</div>

                <button
                  onClick={handleCopyAccount}
                  className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBank ? 'Nomor Rekening Tersalin!' : 'Salin Nomor Rekening'}</span>
                </button>
              </div>
            </div>

            {/* RSVP & Buku Tamu */}
            <div className="p-6 bg-white border-t border-slate-100 space-y-4">
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087BFF]">
                  Buku Tamu & RSVP
                </span>
                <h4 className="text-lg font-bold text-[#17233A]">Kirim Ucapan & Doa Restu</h4>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmitWish} className="space-y-3">
                <input
                  type="text"
                  required
                  value={guestNameInput}
                  onChange={(e) => setGuestNameInput(e.target.value)}
                  placeholder="Nama Lengkap Anda..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#087BFF]"
                />

                <select
                  value={presenceInput}
                  onChange={(e) => setPresenceInput(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#087BFF]"
                >
                  <option value="hadir">✓ Pasti Hadir</option>
                  <option value="tidak_hadir">✗ Maaf, Berhalangan Hadir</option>
                  <option value="masih_ragu">? Masih Belum Pasti</option>
                </select>

                <textarea
                  required
                  rows={3}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Tuliskan ucapan selamat & doa restu tulus Anda..."
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#087BFF] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#087BFF] text-white font-bold text-xs shadow hover:bg-[#0058bc] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Ucapan & Konfirmasi Kehadiran</span>
                </button>
              </form>

              {/* Live Wishes Feed */}
              <div className="space-y-2.5 pt-2 max-h-56 overflow-y-auto no-scrollbar">
                {wishes.map((w) => (
                  <div key={w.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#17233A] truncate">{w.guestName}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                          w.presence === 'hadir'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {w.presence === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">{w.message}</p>
                    <span className="text-[9px] text-slate-400 block">{w.timeAgo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Inside Phone */}
            <div className="p-6 text-center text-xs text-slate-400 bg-slate-100/70 space-y-1">
              <p>Dibuat dengan cinta menggunakan</p>
              <span className="font-bold text-[#087BFF]">Inka Digital Luxe Invitations</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
