import React from 'react';
import {
  MessageSquareHeart,
  MapPin,
  Image as ImageIcon,
  Clock,
  Wallet,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import { NavView } from '../types/index.ts';

interface FeaturesSectionProps {
  isFullPage?: boolean;
  onNavigate: (view: NavView) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ isFullPage = false, onNavigate }) => {
  const bentoFeatures = [
    {
      icon: <MessageSquareHeart className="w-6 h-6" />,
      title: 'Buku Tamu & Doa Restu',
      desc: 'Tamu dapat mengirimkan ucapan doa restu secara langsung yang tampil dinamis di website.',
      badge: 'Interaktif & Real-Time →',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Navigasi Google Maps & Waze',
      desc: 'Petunjuk arah presisi terhubung langsung ke Google Maps & Waze agar tamu tidak tersesat.',
      badge: 'Akurasi Titik Koordinat →',
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: 'Galeri Foto Sinematik & Video',
      desc: 'Tampilkan foto prewedding dan video teaser resolusi tinggi dengan mode lightbox elegan.',
      badge: 'High Quality 4K Support →',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Countdown & 1-Tap Kalender',
      desc: 'Penghitung mundur detik otomatis serta tombol 1-klik simpan ke Google & Apple Calendar.',
      badge: 'Add to Calendar 1-Tap →',
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Amplop Digital & QRIS 0% Fee',
      desc: 'Kirim kado cashless 100% aman langsung ke rekening pribadi pengantin tanpa potongan 0%.',
      badge: 'Bebas Biaya Admin →',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Konfirmasi Kehadiran (RSVP)',
      desc: 'Estimasi kebutuhan katering dan kursi dengan data konfirmasi kehadiran yang terdata rapi.',
      badge: 'Rekapitulasi Excel & PDF →',
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Kisah Cinta (Love Story)',
      desc: 'Bagikan momen indah pertama kali bertemu hingga lamaran dalam alur cerita visual romantis.',
      badge: 'Milestone Timeline →',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Dress Code & Panduan Acara',
      desc: 'Sampaikan inspirasi warna pakaian pesta, pembagian sesi acara bertahap, dan akses lobi VIP.',
      badge: 'Panduan Tamu Lengkap →',
    },
  ];

  return (
    <section className={`py-20 ${isFullPage ? 'bg-slate-50' : 'bg-[#F8FAFC]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
            Fitur Resepsi Modern
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-3">
            Semua Kebutuhan Acara dalam Satu Sentuhan
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Didesain untuk kenyamanan tamu dan kemudahan kedua mempelai dalam mempersiapkan hari bahagia.
          </p>
        </div>

        {/* 8 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bentoFeatures.map((feat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#087BFF] to-[#00C4F4] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg text-[#17233A] mb-1.5">{feat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
              <span className="mt-5 text-xs font-bold text-[#087BFF] block">{feat.badge}</span>
            </div>
          ))}
        </div>

        {/* Feature & Package Comparison Matrix */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 to-blue-50/30 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#087BFF] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Pilihan Investasi Resepsi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#17233A]">
                Matriks Perbandingan Paket Inka Digital
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pilih paket yang paling selaras dengan kebutuhan dan skala resepsi pernikahan Anda.
              </p>
            </div>
            <button
              onClick={() => onNavigate('buat')}
              className="px-6 py-2.5 rounded-full bg-[#087BFF] text-white text-xs sm:text-sm font-bold shadow hover:bg-[#0058bc] transition-all self-start sm:self-auto cursor-pointer"
            >
              Pilih Paket Sekarang
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-[#17233A] font-bold">
                  <th className="p-4 sm:p-5 w-2/5">Fitur & Spesifikasi</th>
                  <th className="p-4 sm:p-5 text-center">
                    <span className="block text-base">Paket Silver</span>
                    <span className="text-xs font-normal text-slate-500">Rp 99.000</span>
                  </th>
                  <th className="p-4 sm:p-5 text-center bg-blue-50 text-[#087BFF] relative">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#087BFF] text-white text-[10px] font-bold uppercase tracking-wider">
                      Terfavorit
                    </span>
                    <span className="block text-base">Paket Gold</span>
                    <span className="text-xs font-bold text-[#087BFF]">Rp 149.000</span>
                  </th>
                  <th className="p-4 sm:p-5 text-center bg-[#17233A] text-white">
                    <span className="block text-base">Platinum Luxe</span>
                    <span className="text-xs font-normal text-slate-300">Rp 199.000</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Batas Kuota Tamu & WhatsApp Generator
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">Maks 200 Tamu</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 text-emerald-600 font-bold">
                    ✓ Unlimited Tamu
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#087BFF]">
                    ✓ Unlimited + Excel Import
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Sistem QR Code Check-in Resepsi
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 text-emerald-600 font-bold">
                    ✓ 2 Meja Resepsi
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-emerald-600">
                    ✓ Multi-Device Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Amplop Cashless & QRIS Langsung Rekening (0% Fee)
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">1 Rekening Bank</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 font-semibold text-slate-700">
                    3 Rekening + QRIS
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#087BFF]">
                    Multi-Rekening + QRIS + Kado Fisik
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Galeri Foto Prewedding & Video Sinematik
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">Maks 5 Foto</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 font-semibold text-slate-700">
                    15 Foto + Video Embed
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#087BFF]">
                    Foto Unlimited + 4K Cinema
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Musik Latar & Fitur Audio
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">Library Inka Digital</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 font-bold text-[#087BFF]">
                    Bebas Upload MP3 Sendiri
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#087BFF]">
                    Upload MP3 + Voice Note Ucapan
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#17233A]">
                    Masa Aktif Tautan Website Undangan
                  </td>
                  <td className="p-4 sm:p-5 text-center text-slate-600">3 Bulan</td>
                  <td className="p-4 sm:p-5 text-center bg-blue-50/50 font-semibold text-slate-700">
                    12 Bulan (1 Tahun)
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-emerald-600">
                    Aktif Selamanya (Lifetime)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
