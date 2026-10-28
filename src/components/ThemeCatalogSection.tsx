import React, { useState } from 'react';
import { ThemeItem, ThemeCategory, NavView } from '../types/index.ts';
import { THEMES_DATA } from '../data/mockData.ts';
import { Search, Star, Music, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface ThemeCatalogSectionProps {
  isFullPage?: boolean;
  onNavigate: (view: NavView) => void;
  onSelectThemeForBuilder: (theme: ThemeItem) => void;
  onPreviewTheme: (theme: ThemeItem) => void;
}

export const ThemeCatalogSection: React.FC<ThemeCatalogSectionProps> = ({
  isFullPage = false,
  onNavigate,
  onSelectThemeForBuilder,
  onPreviewTheme,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ThemeCategory>('all');

  // Filter themes based on search & category
  const filteredThemes = THEMES_DATA.filter((theme) => {
    const matchesCategory = selectedCategory === 'all' || theme.category === selectedCategory;
    const matchesQuery =
      theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const displayThemes = isFullPage ? filteredThemes : THEMES_DATA.slice(0, 4);

  const categories: { key: ThemeCategory; label: string }[] = [
    { key: 'all', label: 'Semua (500+)' },
    { key: 'minimalist', label: 'Minimalist Floral' },
    { key: 'adat', label: 'Adat Nusantara' },
    { key: 'luxury', label: 'Luxury Gold' },
    { key: 'floral', label: 'Floral & Garden' },
    { key: 'modern', label: 'Modern Chic' },
  ];

  return (
    <section className={`py-16 ${isFullPage ? 'bg-slate-50 min-h-screen' : 'bg-white border-y border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold uppercase tracking-wider inline-block">
            {isFullPage ? 'Katalog Desain 2025' : 'Katalog Desain Terlengkap'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] mt-3">
            {isFullPage ? 'Koleksi 500+ Pilihan Tema Undangan' : '500+ Pilihan Tema Anggun & Eksklusif'}
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Didesain responsif ponsel dengan estetika memukau untuk setiap tema adat nusantara dan modern.
          </p>
        </div>

        {/* Filter and Search Bar (Always shown on full page, or if filtered) */}
        {isFullPage && (
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama tema atau nuansa adat..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF] focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#087BFF] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {displayThemes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 my-8">
            <p className="text-slate-500 font-medium">Tidak ada tema yang cocok dengan "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 bg-blue-50 text-[#087BFF] rounded-full text-xs font-bold"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Theme Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFullPage ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 mb-12`}>
          {displayThemes.map((theme) => (
            <div
              key={theme.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Theme Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Tag */}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${theme.tagColor}`}>
                  {theme.tag}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{theme.rating.toFixed(1)}</span>
                </div>

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-[#17233A]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-5">
                  <button
                    onClick={() => onSelectThemeForBuilder(theme)}
                    className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Gunakan Tema Ini</span>
                  </button>
                  <button
                    onClick={() => onPreviewTheme(theme)}
                    className="w-full py-2.5 rounded-full bg-white text-[#17233A] text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#087BFF]" />
                    <span>Lihat Pratinjau Demo</span>
                  </button>
                </div>
              </div>

              {/* Theme Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#087BFF] block">{theme.categoryLabel}</span>
                  <h3 className="font-bold text-base text-[#17233A] mt-0.5">{theme.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{theme.subtitle}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 truncate max-w-[180px]">
                    <Music className="w-3.5 h-3.5 text-[#087BFF] shrink-0" />
                    <span className="truncate">{theme.musicTitle}</span>
                  </span>
                  <span className="text-slate-400 text-[11px] shrink-0">{theme.clientCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA on Homepage */}
        {!isFullPage && (
          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('tema')}
              className="inline-flex items-center gap-2 font-bold text-[#087BFF] hover:text-[#0058bc] transition-colors text-base group cursor-pointer"
            >
              <span>Jelajahi 500+ Koleksi Desain Selengkapnya</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
