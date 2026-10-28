import React, { useState } from 'react';
import { QrCode, CheckCircle, Smartphone, Users, RefreshCw } from 'lucide-react';

export const QrCheckinSection: React.FC = () => {
  const sampleGuests = [
    { name: 'Bpk. Hendra Pratama', seat: 'Meja VIP 04 (Keluarga Besar)', code: 'INKA-PASS-109', time: '19:04 WIB' },
    { name: 'Ibu Dian Sastrowardoyo & Suami', seat: 'Meja VIP 02 (Sahabat)', code: 'INKA-PASS-110', time: '19:12 WIB' },
    { name: 'Prof. Dr. Ir. Gunawan, M.Sc.', seat: 'Meja Kehormatan 01', code: 'INKA-PASS-111', time: '19:18 WIB' },
  ];

  const [currentGuestIndex, setCurrentGuestIndex] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const handleNextGuest = () => {
    setIsScanning(true);
    setTimeout(() => {
      setCurrentGuestIndex((prev) => (prev + 1) % sampleGuests.length);
      setIsScanning(false);
    }, 400);
  };

  const guest = sampleGuests[currentGuestIndex];

  return (
    <section className="py-24 bg-[#17233A] text-white relative overflow-hidden" id="section-qr">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C4F4]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Scanner Simulation Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-sm bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-semibold text-slate-200">
                    Scanner Meja Penerima Tamu
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00C4F4] bg-[#00C4F4]/10 px-2 py-0.5 rounded-full font-bold">
                  LIVE READY
                </span>
              </div>

              {/* Viewfinder with Laser Scanner */}
              <div className="relative h-56 rounded-2xl bg-black flex items-center justify-center overflow-hidden mb-4 border border-slate-700">
                <div className="w-40 h-40 border-2 border-dashed border-[#00C4F4]/60 rounded-2xl flex items-center justify-center p-3 relative">
                  <div className="w-32 h-32 bg-white rounded-xl p-2.5 flex flex-col items-center justify-center text-[#17233A] shadow-inner">
                    <QrCode className="w-16 h-16 text-[#17233A]" />
                    <span className="text-[9px] font-mono font-bold mt-1 text-[#087BFF]">
                      {guest.code}
                    </span>
                  </div>
                </div>

                {/* Animated laser line */}
                <div className="absolute inset-x-0 h-0.5 bg-[#00C4F4] shadow-[0_0_12px_#00C4F4] top-1/2 -translate-y-1/2 animate-pulse"></div>
              </div>

              {/* Instant Verification Output Card */}
              <div className={`bg-white text-[#17233A] p-4 rounded-2xl flex items-center gap-3.5 shadow-md transition-all ${isScanning ? 'opacity-40 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                      Check-in Berhasil ({guest.time})
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <h4 className="font-bold text-sm text-[#17233A] truncate">{guest.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{guest.seat}</p>
                </div>
              </div>

              {/* Interactive trigger button */}
              <button
                onClick={handleNextGuest}
                className="w-full mt-4 py-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>Simulasikan Scan Tamu Berikutnya</span>
              </button>
            </div>
          </div>

          {/* Right Column Explanation */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#00C4F4] text-xs font-bold uppercase tracking-wider w-fit mb-3">
              Resepsi High-Tech & Teratur
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Sistem QR Code Check-in & Buku Tamu Cepat (Anti-Antre)
            </h2>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              Hindari antrean panjang tamu di pintu ballroom resepsi. Cukup scan QR code personal dari
              smartphone tamu dalam 2 detik. Sistem langsung memverifikasi nama, mencatat kehadiran,
              status penyerahan suvenir, dan menampilkan alokasi nomor meja.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#087BFF] flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">QR Unik di Setiap Undangan Tamu</h4>
                  <p className="text-sm text-slate-300">
                    Setiap nama tamu otomatis memiliki kode QR pribadi yang tersimpan rapi di halaman undangan digital.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#087BFF] flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Scan Pakai Kamera HP / Tablet Panitia</h4>
                  <p className="text-sm text-slate-300">
                    Penerima tamu cukup membuka tautan scanner melalui browser apa pun tanpa perlu install aplikasi tambahan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#087BFF] flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Sinkronisasi Kehadiran & Suvenir Real-time</h4>
                  <p className="text-sm text-slate-300">
                    Jumlah tamu yang telah hadir dan stok suvenir langsung tersinkronisasi otomatis di dashboard katering pengantin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
