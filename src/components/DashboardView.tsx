import React, { useState } from 'react';
import { ClientEvent } from '../types/index.ts';
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  CheckCircle2,
  QrCode,
  Users,
  Wallet,
  Calendar,
  Sparkles,
  X,
} from 'lucide-react';

interface DashboardViewProps {
  clients: ClientEvent[];
  onAddClient: (client: ClientEvent) => void;
  onUpdateClient: (client: ClientEvent) => void;
  onDeleteClient: (id: string) => void;
  onOpenLivePreview: (client: ClientEvent) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  clients,
  onAddClient,
  onUpdateClient,
  onDeleteClient,
  onOpenLivePreview,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalMode, setModalMode] = useState<'create' | 'edit' | null>(null);
  const [editingClient, setEditingClient] = useState<ClientEvent | null>(null);

  // Modal form states
  const [coupleName, setCoupleName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00 - 22:00 WIB');
  const [venue, setVenue] = useState('');
  const [quota, setQuota] = useState(500);

  const handleOpenCreateModal = () => {
    setModalMode('create');
    setEditingClient(null);
    setCoupleName('');
    setDate('2025-11-20');
    setTime('19:00 - 22:00 WIB');
    setVenue('');
    setQuota(500);
  };

  const handleOpenEditModal = (client: ClientEvent) => {
    setModalMode('edit');
    setEditingClient(client);
    setCoupleName(client.coupleName);
    setDate(client.date);
    setTime(client.time);
    setVenue(client.venue);
    setQuota(client.quota);
  };

  const handleCloseModal = () => {
    setModalMode(null);
    setEditingClient(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === 'create') {
      const newEvent: ClientEvent = {
        id: `client-${Date.now()}`,
        coupleName,
        groomName: coupleName.split('&')[1]?.trim() || 'Groom',
        groomNick: coupleName.split('&')[1]?.trim() || 'Groom',
        brideName: coupleName.split('&')[0]?.trim() || 'Bride',
        brideNick: coupleName.split('&')[0]?.trim() || 'Bride',
        date,
        time,
        venue,
        address: venue,
        quota,
        rsvpCount: 0,
        wishesCount: 0,
        themeId: 'elysian-bloom',
        themeName: 'Elysian Bloom',
        musicTitle: 'Canon in D - Romantic Strings',
        passCode: `INKA-${Math.floor(100 + Math.random() * 900)}`,
        bankAccount: '1234567890',
        bankName: 'BCA',
        accountHolder: coupleName,
        status: 'active',
      };
      onAddClient(newEvent);
    } else if (modalMode === 'edit' && editingClient) {
      const updated: ClientEvent = {
        ...editingClient,
        coupleName,
        date,
        time,
        venue,
        quota,
      };
      onUpdateClient(updated);
    }
    handleCloseModal();
  };

  const filteredClients = clients.filter((c) =>
    c.coupleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalGuests = clients.reduce((acc, c) => acc + c.quota, 0);
  const totalRsvp = clients.reduce((acc, c) => acc + c.rsvpCount, 0);

  return (
    <div className="py-8 bg-slate-50 min-h-screen" id="dashboard-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Welcome Command Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#087BFF] text-xs font-bold">
                Event Command Center
              </span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{clients.length} Acara Terdaftar</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17233A] mt-1.5">
              Halo, Dimas Pratama (Event Lead Inka Digital)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pantau jalannya konfirmasi RSVP tamu, kode QR scanner resepsi, dan status undangan secara langsung.
            </p>
          </div>

          <button
            onClick={handleOpenCreateModal}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00C4F4] text-white text-sm font-bold shadow hover:opacity-95 transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Acara Klien Baru</span>
          </button>
        </div>

        {/* 4 KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Undangan Aktif</span>
            <span className="block text-2xl font-black text-[#17233A] mt-1">{clients.length} Acara</span>
            <span className="text-xs text-[#087BFF] font-semibold">Tersinkronisasi Cloud 24/7</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Total Tamu Terdaftar</span>
            <span className="block text-2xl font-black text-[#17233A] mt-1">
              {totalGuests.toLocaleString('id-ID')} Tamu
            </span>
            <span className="text-xs text-emerald-600 font-semibold">
              {totalGuests > 0 ? Math.round((totalRsvp / totalGuests) * 100) : 0}% Terkonfirmasi Hadir
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Tamu Ter-scan Hari Ini</span>
            <span className="block text-2xl font-black text-[#17233A] mt-1">1.420 Tamu</span>
            <span className="text-xs text-[#087BFF] font-semibold">Kecepatan ~1.8 dtk / Tamu</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-500 font-medium">Amplop Cashless Masuk</span>
            <span className="block text-2xl font-black text-[#17233A] mt-1">Rp 184,2 Jt</span>
            <span className="text-xs text-emerald-600 font-semibold">0% Potongan Platform</span>
          </div>
        </div>

        {/* CRUD Klien Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-lg text-[#17233A]">Daftar Acara & Klien Aktif</h2>
              <span className="text-xs text-slate-500">Operasi CRUD Aktif Tersimpan di LocalStorage</span>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama mempelai / venue..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#087BFF]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm" id="dashboard-crud-table">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-4">Pasangan Mempelai</th>
                  <th className="p-4">Tanggal & Waktu</th>
                  <th className="p-4">Venue Acara</th>
                  <th className="p-4">RSVP / Kuota</th>
                  <th className="p-4 text-center">Aksi Operasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 font-bold text-[#17233A]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>{client.coupleName}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block ml-4">
                        Tema: {client.themeName}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-600">
                      <div className="font-semibold text-[#17233A]">{client.date}</div>
                      <span className="text-slate-500">{client.time}</span>
                    </td>
                    <td className="p-4 text-xs text-slate-600 max-w-xs truncate">
                      <span className="font-semibold text-[#17233A] block truncate">{client.venue}</span>
                      <span className="text-slate-400 block truncate">{client.address}</span>
                    </td>
                    <td className="p-4 text-xs">
                      <div className="font-bold text-[#087BFF]">
                        {client.rsvpCount} / {client.quota} Tamu
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Pass: {client.passCode}</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => onOpenLivePreview(client)}
                          title="Buka Undangan Tamu"
                          className="p-1.5 text-slate-500 hover:text-[#087BFF] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleOpenEditModal(client)}
                          title="Edit Acara"
                          className="p-1.5 text-[#087BFF] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus acara "${client.coupleName}" dari dashboard?`)) {
                              onDeleteClient(client.id);
                            }
                          }}
                          title="Hapus Acara"
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CRUD MODAL FOR ADD / EDIT */}
      {modalMode && (
        <div className="fixed inset-0 z-50 bg-[#17233A]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-lg text-[#17233A]">
                {modalMode === 'create' ? 'Tambah Acara Klien Baru' : 'Perbarui Data Acara Klien'}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-[#17233A] p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">
                  Nama Pasangan Mempelai *
                </label>
                <input
                  type="text"
                  required
                  value={coupleName}
                  onChange={(e) => setCoupleName(e.target.value)}
                  placeholder="Contoh: Reza & Annisa"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">
                    Tanggal Acara *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#17233A] mb-1">
                    Waktu / Sesi *
                  </label>
                  <input
                    type="text"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="19:00 - 22:00 WIB"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">
                  Nama Venue / Gedung *
                </label>
                <input
                  type="text"
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="Contoh: Plataran Cilandak, Jakarta Selatan"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17233A] mb-1">
                  Target Kuota Tamu Undangan *
                </label>
                <input
                  type="number"
                  required
                  min="50"
                  max="5000"
                  value={quota}
                  onChange={(e) => setQuota(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#087BFF]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-[#17233A] hover:bg-slate-200 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#087BFF] text-white font-bold text-xs shadow hover:bg-[#0058bc] cursor-pointer"
                >
                  {modalMode === 'create' ? 'Simpan Acara Baru' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
