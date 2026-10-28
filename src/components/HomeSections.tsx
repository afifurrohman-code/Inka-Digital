import React, { useState } from 'react';
import { NavView } from '../types/index.ts';
import { FAQS_DATA } from '../data/mockData.ts';
import {
  PiggyBank,
  Sparkles,
  ArrowRight,
  Star,
  ChevronDown,
  Clock,
  Send,
  RefreshCw,
  MessageCircle,
  BookOpen,
} from 'lucide-react';

interface HomeSectionsProps {
  onNavigate: (view: NavView) => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* SECTION 04: KEUNGGULAN LAYANAN */}
      <section className="py-20 bg-gradient-to-r from-[#087BFF] via-[#0070eb] to-[#00C4F4] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider w-fit mb-4">
                Efisiensi Maksimal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Lebih Praktis, Hemat Waktu & Ramah Lingkungan
              </h2>
              <p className="text-white/90 text-base mb-8 leading-relaxed">
                Tinggalkan beban biaya cetak kertas fisik, revisi teks yang memakan waktu, dan ongkos
                kirim ekspedisi ke luar kota. Inka Digital menghadirkan revolusi cara mengundang yang
                fleksibel, modern, dan instan.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-start gap-4 border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hemat Biaya Hingga 80%</h3>
                    <p className="text-sm text-white/80 mt-0.5">
                      Satu harga terjangkau untuk sebar link tanpa batas jumlah tamu seumur hidup.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-start gap-4 border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sebar 1 Klik ke Seluruh Dunia</h3>
                    <p className="text-sm text-white/80 mt-0.5">
                      Personalisasi nama tamu langsung tersinkronisasi via WhatsApp tanpa repot tulis tangan.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-start gap-4 border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Update Data Kapan Saja</h3>
                    <p className="text-sm text-white/80 mt-0.5">
                      Ada revisi jam akad atau maps lokasi? Edit langsung di dashboard tanpa perlu cetak ulang.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Mini Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-[#17233A]">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-[#087BFF] flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Arya & Nabila Wedding</h4>
                      <span className="text-[11px] text-emerald-600 font-semibold">● Undangan Aktif</span>
                    </div>
                  </div>
                  <span className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold">
                    Live Status
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="bg-slate-50 p-3 rounded-xl text-center">
                    <span className="text-[11px] text-slate-500 block">Total Tamu</span>
                    <span className="text-xl font-bold">480</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl text-center">
                    <span className="text-[11px] text-slate-500 block">Konfirmasi RSVP</span>
                    <span className="text-xl font-bold text-[#087BFF]">392</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl text-center">
                    <span className="text-[11px] text-slate-500 block">Ucapan Masuk</span>
                    <span className="text-xl font-bold text-[#00C4F4]">215</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl flex items-center justify-between text-xs text-[#087BFF] font-semibold truncate">
                  <span className="truncate">inkadigital.id/arya-nabila?to=Bpk+Hendra</span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded shadow-xs font-mono ml-2">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: CARA KERJA (3 LANGKAH) */}
      <section className="py-20 bg-white" id="section-cara-kerja">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
              Proses Cepat & Praktis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-3">
              Hanya 3 Langkah Mudah Menuju Hari Bahagia
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Tidak perlu keahlian desain atau koding. Undangan digital siap disebarkan dalam 5 menit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-5xl font-black text-[#087BFF]/20 block mb-4">01</span>
                <h3 className="text-xl font-bold text-[#17233A] mb-2">Pilih Desain & Tema Favorit</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pilih dari 500+ katalog tema mewah mulai dari adat nusantara keraton hingga estetika minimalis editorial.
                </p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#087BFF]">500+ Koleksi Siap Pakai →</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-5xl font-black text-[#087BFF]/20 block mb-4">02</span>
                <h3 className="text-xl font-bold text-[#17233A] mb-2">Lengkapi Data, Foto & Lagu</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Isi detail profil mempelai, jadwal akad & resepsi, nomor rekening amplop, serta unggah galeri foto prewedding.
                </p>
              </div>
              <span className="mt-6 text-xs font-bold text-[#087BFF]">Formulir Instan & Praktis →</span>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <span className="text-5xl font-black text-[#087BFF]/20 block mb-4">03</span>
                <h3 className="text-xl font-bold text-[#17233A] mb-2">Sebarkan Link & Pantau Kehadiran</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Bagikan tautan undangan ke kerabat via WhatsApp, lalu pantau konfirmasi hadir (RSVP) secara real-time.
                </p>
              </div>
              <span className="mt-6 text-xs font-bold text-emerald-600">Siap Sebar Dalam 5 Menit →</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: TESTIMONIAL CAROUSEL / GRID */}
      <section className="py-20 bg-slate-50 border-y border-slate-200" id="section-testimoni">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[#17233A] font-extrabold text-lg ml-2">4.95 / 5.0</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A]">
              Dipercaya Lebih dari 12.800+ Pasangan
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Inilah pengalaman bahagia mereka yang telah mengundang kerabat bersama Inka Digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-sm text-[#17233A] italic leading-relaxed mb-6">
                "Fitur QR Check-in bener-bener jadi penyelamat di resepsi kami! Tamu 600 orang gak ada
                yang antre mengular di meja depan. Semuanya kagum karena undangannya sangat elegan dan
                lagunya bisa diatur sendiri."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#087BFF] font-bold flex items-center justify-center text-sm">
                  DT
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17233A]">Dimas & Tiara</h4>
                  <span className="text-xs text-slate-500">Jakarta Selatan • Hotel Mulia</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-sm text-[#17233A] italic leading-relaxed mb-6">
                "Paling suka sama fitur amplop digitalnya, transfer langsung masuk rekening tanpa potongan
                sama sekali (0% fee). Tampilan ponselnya smooth banget dan cara bikinnya super kilat cuma
                butuh 10 menit!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#00C4F4] font-bold flex items-center justify-center text-sm">
                  RC
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17233A]">Reza & Clarissa</h4>
                  <span className="text-xs text-slate-500">Surabaya • Grand Ballroom</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <p className="text-sm text-[#17233A] italic leading-relaxed mb-6">
                "Keluarga besar kami banyak yang di luar pulau, kirim link via WhatsApp yang otomatis
                ada nama mereka bikin terasa personal banget. Temanya mewah dan tim CS WhatsApp sangat
                membantu setiap saat."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#087BFF] font-bold flex items-center justify-center text-sm">
                  FA
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#17233A]">Fajar & Annisa</h4>
                  <span className="text-xs text-slate-500">Bandung • Gedong Putih</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: BLOG & ARTIKEL INSPIRATIF */}
      <section className="py-20 bg-white" id="section-blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
                Inspirasi & Edukasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-2">
                Tips & Panduan Pernikahan Modern
              </h2>
            </div>
            <button
              onClick={() => onNavigate('bantuan')}
              className="mt-4 md:mt-0 font-bold text-[#087BFF] hover:text-[#0058bc] text-sm flex items-center gap-1 cursor-pointer"
            >
              <span>Buka Pusat Panduan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                alt="Tren Undangan"
                className="h-44 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#087BFF]">Tren Pernikahan</span>
                  <h3 className="font-bold text-base text-[#17233A] mt-1 line-clamp-2">
                    10 Tren Desain Undangan Digital 2025 yang Paling Diminati Calon Pengantin
                  </h3>
                </div>
                <span className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Waktu baca: 4 menit
                </span>
              </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
                alt="Panduan QR"
                className="h-44 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#087BFF]">Tips Resepsi</span>
                  <h3 className="font-bold text-base text-[#17233A] mt-1 line-clamp-2">
                    Cara Efektif Mengatur Meja Tamu & Menghindari Antrean Resepsi dengan QR Scanner
                  </h3>
                </div>
                <span className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Waktu baca: 5 menit
                </span>
              </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
                alt="Audio & Video"
                className="h-44 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#087BFF]">Panduan Teknis</span>
                  <h3 className="font-bold text-base text-[#17233A] mt-1 line-clamp-2">
                    Tips Memilih Lagu & Mengompres Foto Prewedding Agar Loading Undangan Cepat
                  </h3>
                </div>
                <span className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Waktu baca: 3 menit
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQS ACCORDION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="section-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-2">
              Pertanyaan Yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between font-bold text-[#17233A] text-base gap-4">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#087BFF] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="pt-3.5 text-sm text-slate-600 border-t border-slate-100 mt-3 leading-relaxed animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: CLOSING CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#087BFF] via-[#006ee0] to-[#00C4F4] p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                Mulai Dalam 5 Menit
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
                Siap Buat Momen Spesial Anda Lebih Berkesan?
              </h2>
              <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
                Wujudkan undangan pernikahan impian bersama Inka Digital sekarang. Nikmati kemudahan
                desain berkelas, fitur interaktif modern, dan jaminan kepuasan 100%.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('buat')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#087BFF] font-bold text-base shadow-xl hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Mulai Buat Undangan Sekarang
                </button>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 backdrop-blur text-white font-bold text-base border border-white/25 hover:bg-white/25 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
