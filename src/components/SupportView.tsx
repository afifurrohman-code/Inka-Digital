import React, { useState } from 'react';
import { MessageCircle, Mail, HelpCircle, Send, CheckCircle2 } from 'lucide-react';

export const SupportView: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [category, setCategory] = useState('Desain & Revisi Data');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setWhatsapp('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen" id="support-view">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
            Customer Care 24/7
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-2">
            Pusat Bantuan & Layanan Konsumen
          </h1>
          <p className="text-slate-600 text-base mt-2">
            Kami siap mendampingi kelancaran hari sakral pernikahan Anda tanpa hambatan dan kepanikan.
          </p>
        </div>

        {/* 3 Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#17233A]">WhatsApp Care</h3>
            <p className="text-xs text-slate-500 mt-1">
              Respons instan dari support teknis dalam &lt; 5 menit.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-xs font-bold text-[#087BFF] hover:underline"
            >
              Hubungi via WhatsApp →
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#087BFF] flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#17233A]">Email Resmi</h3>
            <p className="text-xs text-slate-500 mt-1">
              Pertanyaan kemitraan, custom domain & vendor WO.
            </p>
            <a
              href="mailto:support@inkadigital.id"
              className="inline-block mt-4 text-xs font-bold text-[#087BFF] hover:underline"
            >
              support@inkadigital.id →
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00C4F4] flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#17233A]">Buku Panduan</h3>
            <p className="text-xs text-slate-500 mt-1">
              Panduan step-by-step scanner QR & import Excel tamu.
            </p>
            <button
              onClick={() => alert('Membuka dokumentasi panduan operasional Inka Digital')}
              className="mt-4 text-xs font-bold text-[#087BFF] hover:underline cursor-pointer"
            >
              Buka Tutorial Lengkap →
            </button>
          </div>
        </div>

        {/* Interactive Support Ticket Form */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-[#17233A] mb-1">
            Kirim Tiket Pelayanan atau Pertanyaan Khusus
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Tim konsultan Inka Digital akan membalas langsung ke nomor WhatsApp atau email Anda.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">
                Tiket Pelayanan Berhasil Dikirim!
              </h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Terima kasih telah menghubungi kami. Tim konsultan Inka Digital akan segera menghubungi
                WhatsApp Anda dalam waktu 5 hingga 15 menit ke depan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">
                    Nama Pasangan / PIC Acara *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Sarah & Dimas"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">
                  Kategori Permintaan
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                >
                  <option value="Desain & Revisi Data">Desain & Revisi Data Acara</option>
                  <option value="Sistem QR Scanner">Bantuan Sistem QR Scanner Resepsi</option>
                  <option value="Amplop & QRIS">Konfigurasi Rekening Amplop Digital</option>
                  <option value="Custom Domain">Aktivasi Custom Domain Sendiri (.com/.id)</option>
                  <option value="Lainnya">Pertanyaan Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">
                  Pesan / Rincian Kendala Anda *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan detail pertanyaan atau bantuan yang Anda perlukan..."
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white font-bold text-sm shadow hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Tiket Pelayanan</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
