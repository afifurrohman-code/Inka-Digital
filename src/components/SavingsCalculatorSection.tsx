import React, { useState } from 'react';
import { calculateSavings, formatRupiah } from '../utils/calculator.ts';
import { PiggyBank, ArrowRight, Check, TrendingDown, Sparkles } from 'lucide-react';
import { NavView } from '../types/index.ts';

interface SavingsCalculatorSectionProps {
  onNavigate: (view: NavView) => void;
}

export const SavingsCalculatorSection: React.FC<SavingsCalculatorSectionProps> = ({ onNavigate }) => {
  const [guestCount, setGuestCount] = useState(500);

  const result = calculateSavings(guestCount);

  return (
    <section className="py-20 bg-white" id="section-kalkulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
            Analisis Finansial Cerdas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-2">
            Berapa Biaya yang Bisa Anda Hemat Hari Ini?
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Bandingkan pengeluaran cetak kertas konvensional (termasuk amplop & ongkir kurir) vs
            undangan digital interaktif Inka Digital.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/20 rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex justify-between items-center">
                <label htmlFor="guest-slider" className="font-bold text-base text-[#17233A]">
                  Perkiraan Jumlah Tamu Undangan:
                </label>
                <span className="text-xl font-extrabold text-[#087BFF] bg-blue-50 px-4 py-1.5 rounded-xl border border-blue-100">
                  {guestCount.toLocaleString('id-ID')} Tamu
                </span>
              </div>

              {/* Range Slider */}
              <div className="space-y-2">
                <input
                  id="guest-slider"
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#087BFF]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>100 Tamu (Intimate)</span>
                  <span>1.000 Tamu (Sedang)</span>
                  <span>2.000+ Tamu (Megah)</span>
                </div>
              </div>

              {/* Assumptions Breakdown */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 space-y-2.5 text-xs text-slate-600 shadow-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Biaya rata-rata cetak fisik (hardcover):</span>
                  <strong className="text-[#17233A]">Rp 12.000 / undangan</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimasi ongkir pengiriman fisik:</span>
                  <strong className="text-[#17233A]">{formatRupiah(result.physicalBreakdown.shippingFee)}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-100">
                  <span className="text-slate-500">Paket Inka Digital Gold (Unlimited):</span>
                  <strong className="text-[#087BFF]">{formatRupiah(result.digitalCost)} (Flat)</strong>
                </div>
              </div>
            </div>

            {/* Right Display: Big Savings Card */}
            <div className="lg:col-span-6 bg-[#17233A] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C4F4]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#00C4F4] font-bold">
                    Total Estimasi Penghematan Anda
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    Hemat {result.savingsPercentage}%
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-[#00C4F4] mt-2 tracking-tight">
                  {formatRupiah(result.savings)}
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Anggaran Rp {result.savings.toLocaleString('id-ID')} ini dapat dialokasikan langsung untuk tiket honeymoon impian, katering tambahan, atau tabungan awal rumah tangga.
                </p>
              </div>

              {/* Visual Bars Comparison */}
              <div className="my-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-semibold">
                    <span className="text-slate-300">Estimasi Cetak Fisik + Ongkir:</span>
                    <strong className="text-red-400">{formatRupiah(result.totalPhysical)}</strong>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full transition-all duration-300 w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-semibold">
                    <span className="text-slate-300">Inka Digital (Sekali Bayar):</span>
                    <strong className="text-[#00C4F4]">{formatRupiah(result.digitalCost)}</strong>
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.max(4, Math.min(15, (result.digitalCost / result.totalPhysical) * 100))}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onNavigate('buat')}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white font-bold text-sm shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Pilih Tema & Amankan Penghematan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
