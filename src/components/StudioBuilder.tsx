import React, { useState } from 'react';
import { ThemeItem, ClientEvent } from '../types/index.ts';
import { THEMES_DATA } from '../data/mockData.ts';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Save,
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  Music,
  Wallet,
  Smartphone,
  Check,
  Heart,
  QrCode,
} from 'lucide-react';

interface StudioBuilderProps {
  initialTheme?: ThemeItem | null;
  onSaveToClients: (newEvent: Partial<ClientEvent>) => void;
  onOpenLivePreview: (data: any) => void;
}

export const StudioBuilder: React.FC<StudioBuilderProps> = ({
  initialTheme,
  onSaveToClients,
  onOpenLivePreview,
}) => {
  const [activeTab, setActiveTab] = useState<'mempelai' | 'acara' | 'fitur'>('mempelai');

  // Form states
  const [groomName, setGroomName] = useState('Alexander Pratama, S.T.');
  const [groomNick, setGroomNick] = useState('Alex');
  const [groomParents, setGroomParents] = useState('Bpk. Bambang Pratama & Ibu Ratna Dewi');

  const [brideName, setBrideName] = useState('Sarah Anindya, S.Ked.');
  const [brideNick, setBrideNick] = useState('Sarah');
  const [brideParents, setBrideParents] = useState('Bpk. Prof. Hendrawan & Ibu Siti Aminah');

  const [eventDate, setEventDate] = useState('2025-10-24');
  const [eventTime, setEventTime] = useState('19:00 - 22:00 WIB');
  const [venueName, setVenueName] = useState('Grand Ballroom Hotel Mulia Senayan');
  const [venueAddress, setVenueAddress] = useState('Jl. Asia Afrika, Senayan, Jakarta Pusat');

  const [selectedThemeId, setSelectedThemeId] = useState<string>(
    initialTheme ? initialTheme.id : 'elysian-bloom'
  );
  const [musicTitle, setMusicTitle] = useState('Canon in D - Acoustic');
  const [bankName, setBankName] = useState('BCA');
  const [bankAccount, setBankAccount] = useState('1234567890');
  const [accountHolder, setAccountHolder] = useState('Alexander Pratama');

  const [enableCountdown, setEnableCountdown] = useState(true);
  const [enableQrCheckin, setEnableQrCheckin] = useState(true);
  const [enableCashlessEnvelope, setEnableCashlessEnvelope] = useState(true);

  const [saveToast, setSaveToast] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  const activeTheme = THEMES_DATA.find((t) => t.id === selectedThemeId) || THEMES_DATA[0];

  const handleSaveDraft = () => {
    localStorage.setItem(
      'inka_invitation_draft',
      JSON.stringify({
        groomName,
        groomNick,
        brideName,
        brideNick,
        eventDate,
        venueName,
        selectedThemeId,
      })
    );
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // Ignore if confetti not supported
    }

    const newClient: Partial<ClientEvent> = {
      coupleName: `${brideNick} & ${groomNick}`,
      groomName,
      groomNick,
      brideName,
      brideNick,
      date: eventDate,
      time: eventTime,
      venue: venueName,
      address: venueAddress,
      themeId: selectedThemeId,
      themeName: activeTheme.name,
      musicTitle,
      bankName,
      bankAccount,
      accountHolder,
      quota: 500,
      rsvpCount: 0,
      wishesCount: 0,
      passCode: `INKA-${Math.floor(100 + Math.random() * 900)}`,
      status: 'active',
    };

    onSaveToClients(newClient);
    setPublishSuccess(true);
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen" id="studio-builder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Studio Pembuatan Undangan Digital Interaktif</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17233A]">
              Buat Undangan Pernikahan Anda
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#17233A] hover:bg-slate-50 flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Save className="w-4 h-4 text-[#087BFF]" />
              <span>Simpan Draf</span>
            </button>
            {saveToast && (
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 animate-in fade-in">
                ✓ Draf tersimpan di browser!
              </span>
            )}
          </div>
        </div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Multi-tab Form Editor (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Step Tabs Navigation */}
            <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveTab('mempelai')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'mempelai'
                    ? 'bg-white text-[#087BFF] shadow-sm'
                    : 'text-slate-600 hover:text-[#17233A]'
                }`}
              >
                1. Profil Mempelai
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('acara')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'acara'
                    ? 'bg-white text-[#087BFF] shadow-sm'
                    : 'text-slate-600 hover:text-[#17233A]'
                }`}
              >
                2. Waktu & Lokasi
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fitur')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'fitur'
                    ? 'bg-white text-[#087BFF] shadow-sm'
                    : 'text-slate-600 hover:text-[#17233A]'
                }`}
              >
                3. Tema & Amplop
              </button>
            </div>

            <form onSubmit={handlePublish} className="space-y-6">
              {/* TAB 1: MEMPELAI */}
              {activeTab === 'mempelai' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Groom Section */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                    <h3 className="font-bold text-sm text-[#17233A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#087BFF]"></span>
                      <span>Data Mempelai Pria</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Lengkap & Gelar *
                        </label>
                        <input
                          type="text"
                          required
                          value={groomName}
                          onChange={(e) => setGroomName(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Panggilan *
                        </label>
                        <input
                          type="text"
                          required
                          value={groomNick}
                          onChange={(e) => setGroomNick(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Orang Tua Pria
                      </label>
                      <input
                        type="text"
                        value={groomParents}
                        onChange={(e) => setGroomParents(e.target.value)}
                        placeholder="Putra dari Bpk. ... & Ibu ..."
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                      />
                    </div>
                  </div>

                  {/* Bride Section */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                    <h3 className="font-bold text-sm text-[#17233A] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00C4F4]"></span>
                      <span>Data Mempelai Wanita</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Lengkap & Gelar *
                        </label>
                        <input
                          type="text"
                          required
                          value={brideName}
                          onChange={(e) => setBrideName(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Panggilan *
                        </label>
                        <input
                          type="text"
                          required
                          value={brideNick}
                          onChange={(e) => setBrideNick(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Orang Tua Wanita
                      </label>
                      <input
                        type="text"
                        value={brideParents}
                        onChange={(e) => setBrideParents(e.target.value)}
                        placeholder="Putri dari Bpk. ... & Ibu ..."
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveTab('acara')}
                      className="px-6 py-2.5 rounded-full bg-[#087BFF] text-white text-xs font-bold shadow hover:bg-[#0058bc] cursor-pointer"
                    >
                      Lanjut ke Waktu & Lokasi →
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: ACARA & LOKASI */}
              {activeTab === 'acara' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#17233A] mb-1">
                        Tanggal Acara *
                      </label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#17233A] mb-1">
                        Waktu / Sesi Resepsi *
                      </label>
                      <input
                        type="text"
                        required
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                        placeholder="Contoh: 19:00 - 22:00 WIB"
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17233A] mb-1">
                      Nama Gedung / Tempat Resepsi *
                    </label>
                    <input
                      type="text"
                      required
                      value={venueName}
                      onChange={(e) => setVenueName(e.target.value)}
                      placeholder="Contoh: Grand Ballroom Hotel Mulia Senayan"
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#17233A] mb-1">
                      Alamat Lengkap Venue *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={venueAddress}
                      onChange={(e) => setVenueAddress(e.target.value)}
                      placeholder="Alamat lengkap untuk panduan navigasi tamu..."
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF] resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab('mempelai')}
                      className="px-5 py-2.5 rounded-full bg-slate-100 text-[#17233A] text-xs font-bold hover:bg-slate-200 cursor-pointer"
                    >
                      ← Kembali
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('fitur')}
                      className="px-6 py-2.5 rounded-full bg-[#087BFF] text-white text-xs font-bold shadow hover:bg-[#0058bc] cursor-pointer"
                    >
                      Lanjut ke Fitur & Amplop →
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: FITUR & AMPLOP */}
              {activeTab === 'fitur' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Theme Selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#17233A] mb-2">
                      Pilih Desain Tema Undangan:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {THEMES_DATA.slice(0, 6).map((theme) => (
                        <div
                          key={theme.id}
                          onClick={() => setSelectedThemeId(theme.id)}
                          className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                            selectedThemeId === theme.id
                              ? 'border-[#087BFF] bg-blue-50/50 shadow-sm ring-2 ring-[#087BFF]/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <img
                            src={theme.image}
                            alt={theme.name}
                            className="w-full h-16 object-cover rounded-lg mb-2"
                          />
                          <span className="block text-xs font-bold text-[#17233A] truncate">
                            {theme.name}
                          </span>
                          <span className="text-[10px] text-slate-500 block truncate">
                            {theme.categoryLabel}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cashless Envelope Settings */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-[#17233A] flex items-center gap-1.5">
                        <Wallet className="w-4 h-4 text-[#087BFF]" />
                        <span>Rekening Amplop Digital (Direct Transfer 0% Fee)</span>
                      </h4>
                      <input
                        type="checkbox"
                        checked={enableCashlessEnvelope}
                        onChange={(e) => setEnableCashlessEnvelope(e.target.checked)}
                        className="w-4 h-4 accent-[#087BFF]"
                      />
                    </div>

                    {enableCashlessEnvelope && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Nama Bank
                          </label>
                          <select
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-[#087BFF]"
                          >
                            <option value="BCA">BCA</option>
                            <option value="Bank Mandiri">Bank Mandiri</option>
                            <option value="BNI">BNI</option>
                            <option value="BRI">BRI</option>
                            <option value="BSI">BSI (Syariah)</option>
                            <option value="QRIS">QRIS All Payment</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Nomor Rekening
                          </label>
                          <input
                            type="text"
                            value={bankAccount}
                            onChange={(e) => setBankAccount(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-[#087BFF]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            Atas Nama (Pemilik)
                          </label>
                          <input
                            type="text"
                            value={accountHolder}
                            onChange={(e) => setAccountHolder(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-none focus:border-[#087BFF]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Options */}
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <span className="font-semibold text-slate-700">
                        Aktifkan Penghitung Mundur (Countdown Timer)
                      </span>
                      <input
                        type="checkbox"
                        checked={enableCountdown}
                        onChange={(e) => setEnableCountdown(e.target.checked)}
                        className="w-4 h-4 accent-[#087BFF]"
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <span className="font-semibold text-slate-700">
                        Aktifkan QR Code Check-in Resepsi
                      </span>
                      <input
                        type="checkbox"
                        checked={enableQrCheckin}
                        onChange={(e) => setEnableQrCheckin(e.target.checked)}
                        className="w-4 h-4 accent-[#087BFF]"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Submit / Publish Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#087BFF] via-[#0091ff] to-[#00C4F4] text-white font-bold text-base shadow-lg shadow-[#087BFF]/30 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                <span>Terbitkan Undangan Sekarang</span>
              </button>
            </form>

            {/* Publish Success Alert Modal */}
            {publishSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-2 animate-in fade-in">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Selamat! Undangan "{brideNick} & {groomNick}" Berhasil Diterbitkan!</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Data acara telah otomatis disimpan ke <strong>Dashboard Klien</strong> Anda dan tautan undangan siap dibagikan ke seluruh tamu undangan.
                </p>
                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() =>
                      onOpenLivePreview({
                        coupleName: `${brideNick} & ${groomNick}`,
                        groomName,
                        brideName,
                        eventDate,
                        eventTime,
                        venueName,
                        venueAddress,
                        theme: activeTheme,
                        bankName,
                        bankAccount,
                        accountHolder,
                      })
                    }
                    className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow hover:bg-emerald-700 cursor-pointer"
                  >
                    Buka Preview Undangan Langsung
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Synced Smartphone Simulator (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-center sticky top-28">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Synced Smartphone Preview</span>
            </span>

            {/* Realistic Phone Case */}
            <div className="w-[280px] sm:w-[310px] h-[560px] bg-[#17233A] rounded-[46px] p-3 shadow-2xl border-4 border-slate-700 relative">
              <div className="w-full h-full bg-white rounded-[36px] overflow-y-auto no-scrollbar relative flex flex-col">
                {/* Notch */}
                <div className="h-7 w-full bg-[#17233A] flex justify-center items-center shrink-0">
                  <div className="w-16 h-3 bg-black rounded-full"></div>
                </div>

                {/* Simulator Content */}
                <div className="p-4 flex flex-col items-center text-center pb-8 bg-slate-50">
                  {/* Photo Banner with Active Theme Image */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-3 relative bg-slate-800 shadow-sm">
                    <img
                      src={activeTheme.image}
                      alt="Theme preview"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17233A] via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 left-2 text-[10px] text-white/90 font-mono bg-black/40 px-2 py-0.5 rounded">
                      {activeTheme.name}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold text-[#087BFF] tracking-widest block">
                    The Wedding Of
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-[#17233A] mt-1">
                    {brideNick || 'Sarah'} & {groomNick || 'Alex'}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {new Date(eventDate).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>

                  {/* Countdown Simulator */}
                  {enableCountdown && (
                    <div className="grid grid-cols-4 gap-1.5 w-full my-3 text-center">
                      <div className="p-1.5 bg-white rounded-xl shadow-xs border border-slate-200">
                        <span className="block text-xs font-bold text-[#087BFF]">18</span>
                        <span className="text-[8px] text-slate-400">Hari</span>
                      </div>
                      <div className="p-1.5 bg-white rounded-xl shadow-xs border border-slate-200">
                        <span className="block text-xs font-bold text-[#087BFF]">09</span>
                        <span className="text-[8px] text-slate-400">Jam</span>
                      </div>
                      <div className="p-1.5 bg-white rounded-xl shadow-xs border border-slate-200">
                        <span className="block text-xs font-bold text-[#087BFF]">32</span>
                        <span className="text-[8px] text-slate-400">Mnt</span>
                      </div>
                      <div className="p-1.5 bg-white rounded-xl shadow-xs border border-slate-200">
                        <span className="block text-xs font-bold text-[#087BFF]">40</span>
                        <span className="text-[8px] text-slate-400">Dtk</span>
                      </div>
                    </div>
                  )}

                  {/* Venue box */}
                  <div className="w-full p-2.5 bg-white rounded-xl text-left border border-slate-200/80 mb-2 shadow-xs">
                    <span className="text-[9px] uppercase font-bold text-[#087BFF] block flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Lokasi Resepsi
                    </span>
                    <span className="text-xs font-bold text-[#17233A] block truncate">
                      {venueName || 'Grand Ballroom'}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {venueAddress || 'Jakarta'}
                    </span>
                  </div>

                  {/* Envelope badge simulation */}
                  {enableCashlessEnvelope && (
                    <div className="w-full p-2 bg-emerald-50 rounded-xl text-left border border-emerald-100 flex items-center justify-between text-xs text-emerald-800">
                      <div className="flex items-center gap-1.5">
                        <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[10px] font-bold">
                          Amplop {bankName}: {bankAccount}
                        </span>
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold">0% FEE</span>
                    </div>
                  )}

                  {/* Open Invitation CTA inside Phone */}
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLivePreview({
                        coupleName: `${brideNick} & ${groomNick}`,
                        groomName,
                        brideName,
                        eventDate,
                        eventTime,
                        venueName,
                        venueAddress,
                        theme: activeTheme,
                        bankName,
                        bankAccount,
                        accountHolder,
                      })
                    }
                    className="w-full mt-3 py-2 rounded-full bg-[#087BFF] text-white text-xs font-bold shadow hover:bg-[#0058bc] transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Uji Buka Undangan Ini</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
