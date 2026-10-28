import React, { useState } from 'react';
import { Disc, Play, Pause, Music2, Volume2, CheckCircle2, UploadCloud } from 'lucide-react';

export const AudioSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTrack, setActiveTrack] = useState({
    title: 'A Thousand Years (Acoustic Piano)',
    artist: 'The Piano Guys Collection',
    genre: 'Piano & Strings',
  });

  const trackPresets = [
    { title: 'A Thousand Years (Acoustic Piano)', artist: 'The Piano Guys Collection', genre: 'Piano & Strings' },
    { title: 'Canon in D Major (Romantic Strings)', artist: 'Johann Pachelbel Ensemble', genre: 'Klasik Romantis' },
    { title: 'Akad (Fingerstyle Acoustic)', artist: 'Payung Teduh Cover', genre: 'Akustik Pop' },
    { title: 'Barakallah (Piano & Suling)', artist: 'Modern Islamic Nuance', genre: 'Islami Modern' },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200" id="section-audio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Description */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider w-fit mb-3">
              Musik Latar & Kustom Audio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mb-4">
              Ratusan Pilihan Musik Romantis, Bisa Upload MP3 Sendiri
            </h2>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Bangun suasana haru dan bahagia sejak detik pertama tamu membuka undangan. Dilengkapi
              tombol autoplay ramah pengguna, kontrol mute responsif, dan katalog lagu beragam genre.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-[#17233A]">
                ✨ Pop Romantis
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-[#17233A]">
                🎻 Akustik Fingerstyle
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-[#17233A]">
                🎹 Piano & Cello
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-[#17233A]">
                🕌 Nasyid & Degung Tradisional
              </span>
            </div>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Mendukung upload MP3 sendiri & integrasi link audio bebas lisensi</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Autoplay otomatis saat tamu menekan tombol "Buka Undangan"</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Simulated Audio Player */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200 relative overflow-hidden">
              {/* Glowing gradient border effect */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#087BFF] to-[#00C4F4]"></div>

              <div className="flex items-center gap-4 mb-6">
                {/* Vinyl Record Disk */}
                <div
                  className={`w-16 h-16 rounded-full bg-[#17233A] text-[#00C4F4] flex items-center justify-center shadow-lg transition-transform ${
                    isPlaying ? 'animate-spin' : ''
                  }`}
                  style={{ animationDuration: '6s' }}
                >
                  <Disc className="w-8 h-8" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#087BFF] block">
                    {isPlaying ? '● Sedang Diputar' : '⏸ Dijeda'}
                  </span>
                  <h4 className="font-bold text-base text-[#17233A] truncate">{activeTrack.title}</h4>
                  <p className="text-xs text-slate-500 truncate">{activeTrack.artist}</p>
                </div>

                {/* Play / Pause Toggle Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 rounded-full bg-blue-50 hover:bg-[#087BFF] hover:text-white text-[#087BFF] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
              </div>

              {/* Dynamic Sound Visualizer Bars */}
              <div
                className={`w-full h-12 bg-slate-50 rounded-2xl px-5 flex items-center justify-between gap-1.5 mb-4 border border-slate-100 transition-opacity ${
                  isPlaying ? 'opacity-100' : 'opacity-35'
                }`}
              >
                {[14, 28, 36, 20, 32, 16, 24, 38, 22, 30, 18, 34].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1.5 rounded-full transition-all ${
                      i % 2 === 0 ? 'bg-[#087BFF]' : 'bg-[#00C4F4]'
                    } ${isPlaying ? 'animate-pulse' : ''}`}
                    style={{
                      height: isPlaying ? `${h}px` : '6px',
                      animationDuration: `${0.4 + (i % 4) * 0.2}s`,
                    }}
                  ></span>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 flex justify-between font-mono mb-5">
                <span>01:42</span>
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-[#087BFF]" /> Stereo 320kbps
                </span>
                <span>04:15</span>
              </div>

              {/* Switchable Track Presets */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-600 block mb-2">
                  Pilih Contoh Musik Bawaan:
                </span>
                <div className="space-y-1.5">
                  {trackPresets.map((track, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTrack(track);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                        activeTrack.title === track.title
                          ? 'bg-blue-50 text-[#087BFF] font-bold'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Music2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{track.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0 ml-2">{track.genre}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
