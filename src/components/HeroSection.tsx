import React from 'react';
import { Star, ArrowRight, Play, QrCode, Music, UserCheck, Heart, Sparkles } from 'lucide-react';
import { NavView } from '../types/index.ts';

interface HeroSectionProps {
  onNavigate: (view: NavView) => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50">
      {/* Background glowing orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#087BFF]/15 to-[#00C4F4]/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, CTAs, Statistics */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 text-xs font-semibold text-[#087BFF] mb-6 shadow-sm">
              <span className="flex items-center text-amber-500 font-bold gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.95 / 5.0
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Dipercaya 12.800+ Pasangan</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-emerald-600 font-bold">Aktif Selamanya</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17233A] tracking-tight leading-[1.15] mb-6">
              Buat Undangan Digital Lebih Mudah Dengan{' '}
              <span className="bg-gradient-to-r from-[#087BFF] via-[#0091ff] to-[#00C4F4] bg-clip-text text-transparent">
                Inka Digital
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
              Ciptakan website undangan pernikahan elegan, interaktif, dan berkesan dalam hitungan
              menit. Dilengkapi QR Code Check-in anti-antre, musik latar romantis, amplop cashless
              bebas potongan 0%, dan input nama tamu tanpa batas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onNavigate('buat')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white font-bold text-base shadow-lg shadow-[#087BFF]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Mulai Buat Undangan</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onOpenDemo}
                className="px-7 py-4 rounded-full bg-white border border-slate-200 text-[#17233A] font-bold text-base shadow-sm hover:bg-slate-50 hover:border-[#087BFF] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 text-[#087BFF] flex items-center justify-center">
                  <Play className="w-4 h-4 fill-[#087BFF] text-[#087BFF]" />
                </div>
                <span>Lihat Contoh Undangan</span>
              </button>
            </div>

            {/* Micro Proof Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full max-w-lg">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#17233A]">
                  500+
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Desain Eksklusif
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#17233A]">
                  5 Menit
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Langsung Online
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#17233A]">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Bebas Kuota Tamu
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Radiant glow behind phone */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#00C4F4]/30 to-[#087BFF]/30 blur-3xl -z-10 animate-pulse"></div>

            {/* Phone Chassis */}
            <div className="relative w-[300px] sm:w-[324px] rounded-[48px] p-3.5 bg-[#17233A] shadow-[0_24px_64px_-12px_rgba(23,35,58,0.4)] border-4 border-slate-700/60 transition-transform duration-300 hover:scale-[1.01]">
              {/* Inner Screen */}
              <div className="relative w-full rounded-[38px] overflow-hidden bg-white flex flex-col h-[540px]">
                {/* Dynamic Island / Status Bar */}
                <div className="w-full h-8 bg-[#17233A] pt-2 px-6 flex justify-between items-center text-[11px] text-white select-none z-30">
                  <span className="font-semibold">09:41</span>
                  <div className="w-20 h-3.5 bg-black rounded-full mx-auto shadow-inner"></div>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <span className="text-[10px] font-mono">5G</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                {/* Smartphone Screen Body */}
                <div className="relative flex-1 overflow-y-auto no-scrollbar pb-6 bg-slate-50">
                  {/* Couple Hero Banner */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                      alt="Wedding Couple"
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17233A] via-[#17233A]/30 to-transparent"></div>
                    <div className="absolute bottom-3 inset-x-3 text-center text-white">
                      <span className="text-[10px] uppercase tracking-widest text-[#00C4F4] font-bold">
                        Walimatul Ursy
                      </span>
                      <h3 className="text-2xl font-bold font-serif">Arya & Nabila</h3>
                      <p className="text-xs text-slate-200 mt-0.5">Sabtu, 24 Oktober 2025</p>
                    </div>
                  </div>

                  {/* Inside Content */}
                  <div className="p-4 space-y-3">
                    {/* Live Countdown in Phone */}
                    <div className="grid grid-cols-4 gap-1.5 text-center">
                      <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200/70">
                        <span className="font-bold text-[#087BFF] block text-sm">18</span>
                        <span className="text-[9px] text-slate-500 font-medium">Hari</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200/70">
                        <span className="font-bold text-[#087BFF] block text-sm">08</span>
                        <span className="text-[9px] text-slate-500 font-medium">Jam</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200/70">
                        <span className="font-bold text-[#087BFF] block text-sm">32</span>
                        <span className="text-[9px] text-slate-500 font-medium">Menit</span>
                      </div>
                      <div className="bg-white p-2 rounded-xl shadow-xs border border-slate-200/70">
                        <span className="font-bold text-[#087BFF] block text-sm">45</span>
                        <span className="text-[9px] text-slate-500 font-medium">Detik</span>
                      </div>
                    </div>

                    {/* Personalized Guest Pill */}
                    <div className="bg-gradient-to-r from-[#087BFF] to-[#00C4F4] p-3 rounded-xl text-white text-center shadow-md">
                      <span className="text-[9px] uppercase tracking-wider block opacity-90">
                        Kepada Yth. Tamu Undangan
                      </span>
                      <span className="text-xs font-bold">Bpk. Hendra Pratama & Rekan</span>
                    </div>

                    {/* Interactive Preview Trigger Button */}
                    <button
                      onClick={onOpenDemo}
                      className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#00C4F4]" />
                      <span>Buka Undangan Lengkap</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Micro-card 1: Live RSVP */}
            <div className="absolute -top-3 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 z-30 animate-pulse">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-[#17233A]">RSVP: 142 Hadir</span>
                </div>
                <span className="text-[11px] text-slate-500">Sinkronisasi Real-time</span>
              </div>
            </div>

            {/* Floating Micro-card 2: Music Badge */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md py-2.5 px-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 z-30">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#087BFF] flex items-center justify-center">
                <Music className="w-4 h-4 animate-bounce" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#17233A]">Canon in D - Acoustic</span>
                <span className="text-[10px] text-emerald-600 font-semibold">● Sedang Diputar</span>
              </div>
            </div>

            {/* Floating Micro-card 3: Fast Scan */}
            <div className="absolute bottom-16 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 z-30">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#087BFF] to-[#00C4F4] text-white flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#17233A] block">QR Check-in</span>
                <span className="text-[10px] text-emerald-600 font-semibold">Verifikasi 2 Detik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
