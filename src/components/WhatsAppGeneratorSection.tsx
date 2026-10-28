import React, { useState } from 'react';
import { Send, Copy, Check, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { generatePersonalLink, generateWhatsAppMessage } from '../utils/invitation.ts';

export const WhatsAppGeneratorSection: React.FC = () => {
  const [guestName, setGuestName] = useState('Bpk. Budi Santoso & Keluarga');
  const [coupleName, setCoupleName] = useState('Arya & Nabila');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const baseDomain = 'https://inkadigital.id';
  const slug = 'arya-nabila';

  const personalUrl = generatePersonalLink(baseDomain, slug, guestName || 'Tamu Undangan');
  const messageBody = generateWhatsAppMessage(guestName, coupleName, personalUrl);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageBody);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(messageBody);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="section-wa-generator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Information */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider w-fit mb-3">
              Unlimited Personalization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mb-4">
              Bebas Input Nama Tamu Sebanyak-banyaknya
            </h2>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Buat setiap tamu merasa dihormati secara khusus dengan sapaan eksklusif{' '}
              <strong className="text-[#17233A]">"Kepada Yth. Bpk/Ibu [Nama Tamu]"</strong> di sampul
              utama undangan digital.
            </p>

            <div className="space-y-3 font-medium text-sm text-[#17233A] mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#087BFF] shrink-0" />
                <span>Input nama tamu satu per satu atau import dari file Excel / Spreadsheet</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#087BFF] shrink-0" />
                <span>Auto-generate teks template undangan sopan siap kirim ke WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#087BFF] shrink-0" />
                <span>100% Bebas Kuota: Sebarkan ke 100, 500, hingga ribuan kontak tanpa biaya ekstra</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Generator Tool */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <h3 className="font-bold text-sm text-[#17233A] flex items-center gap-2">
                  <Send className="w-4 h-4 text-emerald-600" />
                  <span>Uji Coba Generator WhatsApp</span>
                </h3>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold">
                  Live Interactive
                </span>
              </div>

              <div className="space-y-4">
                {/* Input Name */}
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1.5">
                    Ketik Nama Tamu Undangan:
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Contoh: Bpk. Budi Santoso & Keluarga"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF] focus:bg-white font-semibold text-[#17233A] transition-all"
                  />
                </div>

                {/* Generated Personal Link Output */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#17233A]">Tautan Personal Otomatis:</label>
                    <button
                      onClick={handleCopyLink}
                      className="text-[11px] text-[#087BFF] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedLink ? 'Tersalin!' : 'Salin Link'}</span>
                    </button>
                  </div>
                  <div className="p-2.5 bg-slate-100 rounded-xl text-xs font-mono text-[#087BFF] truncate select-all border border-slate-200/60">
                    {personalUrl}
                  </div>
                </div>

                {/* WhatsApp Chat Bubble Simulation */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-[#17233A]">Pratinjau Pesan WhatsApp:</label>
                    <button
                      onClick={handleCopyMessage}
                      className="text-[11px] text-[#087BFF] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      {copiedMessage ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedMessage ? 'Tersalin!' : 'Salin Teks'}</span>
                    </button>
                  </div>
                  <div className="p-3.5 bg-[#EFEAE2] rounded-2xl text-xs text-[#17233A] leading-relaxed shadow-inner border border-slate-200/50 max-h-36 overflow-y-auto font-sans">
                    <div className="bg-white p-3 rounded-xl shadow-xs space-y-1">
                      <p>
                        Kepada Yth. <strong>{guestName || 'Bapak/Ibu'}</strong>,
                      </p>
                      <p className="text-slate-600">
                        Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda hadir pada pernikahan kami:
                      </p>
                      <p className="font-bold text-[#087BFF]">{coupleName}</p>
                      <p className="text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                        Tautan resmi: <span className="text-[#087BFF] underline">{personalUrl}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Trigger Button */}
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-3 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Kirim Undangan via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
