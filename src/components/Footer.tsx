import React from 'react';
import { NavView } from '../types/index.ts';
import { Sparkles, Instagram, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#087BFF] to-[#00C4F4] flex items-center justify-center text-white font-bold shadow-md shadow-[#087BFF]/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-[#17233A] leading-tight">Inka Digital</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#087BFF]">
                  Luxe Invitation
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Platform website undangan pernikahan digital modern, berkelas, dan interaktif dengan
              teknologi QR Code Check-in anti-antre dan amplop digital langsung ke rekening pribadi
              tanpa potongan fee.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-[#087BFF] hover:bg-blue-50 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-[#087BFF] hover:bg-blue-50 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@inkadigital.id"
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-[#087BFF] hover:bg-blue-50 flex items-center justify-center transition-colors"
                aria-label="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Theme Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-[#17233A]">Layanan & Desain</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('tema')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Tema Minimalist Floral
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tema')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Tema Adat Nusantara (Jawa, Sunda, Minang)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tema')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Tema Modern Chic & Vogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tema')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Tema Luxury Midnight Starlight
                </button>
              </li>
            </ul>
          </div>

          {/* Features Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-[#17233A]">Fitur Unggulan</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('fitur')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  QR Code Check-in Resepsi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fitur')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Amplop Digital & QRIS 0% Fee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fitur')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Generator Tamu WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('keunggulan')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Kalkulator Penghematan Biaya
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-[#17233A]">Bantuan & Kontak</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('bantuan')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Pusat Bantuan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-[#087BFF] transition-colors cursor-pointer text-left"
                >
                  Dashboard Klien
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#087BFF] transition-colors"
                >
                  CS WhatsApp 24/7
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Inka Digital Luxe Invitations. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Server Uptime 99.98% High Availability Cloud</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
