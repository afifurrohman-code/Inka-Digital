import React, { useState } from 'react';
import { NavView } from '../types/index.ts';
import { Sparkles, Menu, X, ArrowRight, LayoutDashboard, Palette } from 'lucide-react';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; view: NavView; icon?: React.ReactNode }[] = [
    { label: 'Beranda', view: 'beranda' },
    { label: 'Pilihan Tema', view: 'tema' },
    { label: 'Fitur Unggulan', view: 'fitur' },
    { label: 'Keunggulan & Biaya', view: 'keunggulan' },
    { label: 'Pusat Bantuan', view: 'bantuan' },
    {
      label: 'Dashboard',
      view: 'dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('beranda')}
          className="flex items-center gap-3 text-left group focus:outline-none"
          aria-label="Inka Digital Beranda"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#087BFF] to-[#00C4F4] flex items-center justify-center text-white shadow-md shadow-[#087BFF]/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#17233A] leading-tight">
              Inka Digital
            </span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-[#087BFF]">
              Luxe Invitation
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handleNav(link.view)}
                className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#087BFF] font-bold bg-blue-50/70 shadow-xs'
                    : 'hover:text-[#087BFF] hover:bg-slate-50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('tema')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-[#17233A] text-sm font-semibold hover:border-[#087BFF] hover:text-[#087BFF] hover:bg-blue-50/30 transition-all"
          >
            <Palette className="w-4 h-4 text-[#087BFF]" />
            <span>Eksplor Tema</span>
          </button>
          <button
            onClick={() => handleNav('buat')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white text-sm font-bold shadow-md shadow-[#087BFF]/25 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Buat Undangan</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#17233A] hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handleNav(link.view)}
                className={`w-full flex items-center justify-between font-semibold py-2.5 px-3 rounded-xl text-left text-sm transition-all ${
                  isActive
                    ? 'bg-blue-50 text-[#087BFF] font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#087BFF]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF]"></span>}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNav('tema')}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-center text-[#17233A]"
            >
              Katalog Tema
            </button>
            <button
              onClick={() => handleNav('buat')}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white text-xs font-bold text-center shadow"
            >
              Buat Undangan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
