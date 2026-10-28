import React, { useState, useEffect } from 'react';
import { NavView, ThemeItem, ClientEvent } from './types/index.ts';
import { INITIAL_CLIENTS, THEMES_DATA } from './data/mockData.ts';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ThemeCatalogSection } from './components/ThemeCatalogSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { AudioSection } from './components/AudioSection.tsx';
import { QrCheckinSection } from './components/QrCheckinSection.tsx';
import { WhatsAppGeneratorSection } from './components/WhatsAppGeneratorSection.tsx';
import { SavingsCalculatorSection } from './components/SavingsCalculatorSection.tsx';
import { HomeSections } from './components/HomeSections.tsx';
import { StudioBuilder } from './components/StudioBuilder.tsx';
import { DashboardView } from './components/DashboardView.tsx';
import { SupportView } from './components/SupportView.tsx';
import { LiveInvitationModal } from './components/LiveInvitationModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>('beranda');
  const [clients, setClients] = useState<ClientEvent[]>(() => {
    try {
      const stored = localStorage.getItem('inka_digital_clients');
      return stored ? JSON.parse(stored) : INITIAL_CLIENTS;
    } catch {
      return INITIAL_CLIENTS;
    }
  });

  const [builderSelectedTheme, setBuilderSelectedTheme] = useState<ThemeItem | null>(null);

  // Live invitation modal state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalData, setDemoModalData] = useState<any>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavView;
      const validViews: NavView[] = [
        'beranda',
        'tema',
        'fitur',
        'keunggulan',
        'bantuan',
        'dashboard',
        'buat',
      ];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: NavView) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync clients with localStorage
  const saveClients = (newClients: ClientEvent[]) => {
    setClients(newClients);
    try {
      localStorage.setItem('inka_digital_clients', JSON.stringify(newClients));
    } catch (e) {
      console.error('Failed to save clients to localStorage', e);
    }
  };

  const handleAddClient = (newClient: ClientEvent) => {
    const updated = [newClient, ...clients];
    saveClients(updated);
  };

  const handleUpdateClient = (updatedClient: ClientEvent) => {
    const updated = clients.map((c) => (c.id === updatedClient.id ? updatedClient : c));
    saveClients(updated);
  };

  const handleDeleteClient = (id: string) => {
    const updated = clients.filter((c) => c.id !== id);
    saveClients(updated);
  };

  // Trigger from Theme Catalog: "Gunakan Tema Ini"
  const handleSelectThemeForBuilder = (theme: ThemeItem) => {
    setBuilderSelectedTheme(theme);
    navigateTo('buat');
  };

  // Open Live Invitation Preview
  const handleOpenDemoModal = (customData?: any) => {
    if (customData) {
      setDemoModalData(customData);
    } else {
      // Default to premier couple demo
      setDemoModalData({
        coupleName: 'Arya & Nabila',
        groomName: 'Arya Pratama, S.Kom.',
        brideName: 'Nabila Safitri, S.Ked.',
        eventDate: '2025-10-24',
        eventTime: '19:00 - 22:00 WIB',
        venueName: 'Grand Ballroom Hotel Mulia Senayan',
        venueAddress: 'Jl. Asia Afrika, Gelora, Senayan, Jakarta Pusat',
        theme: THEMES_DATA[0],
        bankName: 'BCA',
        bankAccount: '1234567890',
        accountHolder: 'Arya Pratama',
      });
    }
    setIsDemoModalOpen(true);
  };

  const handlePreviewTheme = (theme: ThemeItem) => {
    setDemoModalData({
      coupleName: 'Arya & Nabila',
      groomName: 'Arya Pratama, S.Kom.',
      brideName: 'Nabila Safitri, S.Ked.',
      eventDate: '2025-10-24',
      eventTime: '19:00 - 22:00 WIB',
      venueName: 'Grand Ballroom Hotel Mulia Senayan',
      venueAddress: 'Jl. Asia Afrika, Gelora, Senayan, Jakarta Pusat',
      theme,
      bankName: 'BCA',
      bankAccount: '1234567890',
      accountHolder: 'Arya Pratama',
    });
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#17233A] selection:bg-[#087BFF]/20 selection:text-[#087BFF]">
      {/* Global Navbar */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Container */}
      <main className="flex-1 pt-20">
        {/* VIEW 1: BERANDA (FULL 13 SECTIONS) */}
        {currentView === 'beranda' && (
          <div className="animate-in fade-in duration-300">
            {/* Section 02: Hero Section */}
            <HeroSection onNavigate={navigateTo} onOpenDemo={() => handleOpenDemoModal()} />

            {/* Section 03: Pilihan Tema Mini Catalog */}
            <ThemeCatalogSection
              isFullPage={false}
              onNavigate={navigateTo}
              onSelectThemeForBuilder={handleSelectThemeForBuilder}
              onPreviewTheme={handlePreviewTheme}
            />

            {/* Section 04: Keunggulan Layanan & Efficiency */}
            {/* (Rendered inside HomeSections component) */}

            {/* Section 05: Fitur Unggulan (8 Bento Cards & Matrix) */}
            <FeaturesSection isFullPage={false} onNavigate={navigateTo} />

            {/* Section 06: Musik Latar & Kustom Audio */}
            <AudioSection />

            {/* Section 07: QR Code Check-in Resepsi */}
            <QrCheckinSection />

            {/* Section 08: WhatsApp Generator & Personal Link */}
            <WhatsAppGeneratorSection />

            {/* Section 04, 09 (Cara Kerja), 10 (Testimoni), 11 (Blog), 12 (FAQ), 13 (CTA Banner) */}
            <HomeSections onNavigate={navigateTo} />
          </div>
        )}

        {/* VIEW 2: KATALOG TEMA LENGKAP */}
        {currentView === 'tema' && (
          <div className="animate-in fade-in duration-300">
            <ThemeCatalogSection
              isFullPage={true}
              onNavigate={navigateTo}
              onSelectThemeForBuilder={handleSelectThemeForBuilder}
              onPreviewTheme={handlePreviewTheme}
            />
          </div>
        )}

        {/* VIEW 3: FITUR UNGGULAN & MATRIKS PAKET */}
        {currentView === 'fitur' && (
          <div className="animate-in fade-in duration-300">
            <FeaturesSection isFullPage={true} onNavigate={navigateTo} />
            <AudioSection />
            <QrCheckinSection />
            <WhatsAppGeneratorSection />
          </div>
        )}

        {/* VIEW 4: KEUNGGULAN & KALKULATOR PENGHEMATAN */}
        {currentView === 'keunggulan' && (
          <div className="animate-in fade-in duration-300">
            <SavingsCalculatorSection onNavigate={navigateTo} />
          </div>
        )}

        {/* VIEW 5: STUDIO PEMBUATAN UNDANGAN */}
        {currentView === 'buat' && (
          <div className="animate-in fade-in duration-300">
            <StudioBuilder
              initialTheme={builderSelectedTheme}
              onSaveToClients={(newEvent) => {
                const fullEvent: ClientEvent = {
                  id: `client-${Date.now()}`,
                  coupleName: newEvent.coupleName || 'Pengantin Baru',
                  groomName: newEvent.groomName || 'Mempelai Pria',
                  groomNick: newEvent.groomNick || 'Pria',
                  brideName: newEvent.brideName || 'Mempelai Wanita',
                  brideNick: newEvent.brideNick || 'Wanita',
                  date: newEvent.date || '2025-10-24',
                  time: newEvent.time || '19:00 - 22:00 WIB',
                  venue: newEvent.venue || 'Grand Ballroom',
                  address: newEvent.address || 'Jakarta',
                  quota: 500,
                  rsvpCount: 0,
                  wishesCount: 0,
                  themeId: newEvent.themeId || 'elysian-bloom',
                  themeName: newEvent.themeName || 'Elysian Bloom',
                  musicTitle: newEvent.musicTitle || 'Canon in D - Acoustic',
                  passCode: newEvent.passCode || 'INKA-999',
                  bankAccount: newEvent.bankAccount || '1234567890',
                  bankName: newEvent.bankName || 'BCA',
                  accountHolder: newEvent.accountHolder || 'Pengantin',
                  status: 'active',
                };
                handleAddClient(fullEvent);
              }}
              onOpenLivePreview={(data) => handleOpenDemoModal(data)}
            />
          </div>
        )}

        {/* VIEW 6: DASHBOARD OPERASIONAL KLIEN */}
        {currentView === 'dashboard' && (
          <div className="animate-in fade-in duration-300">
            <DashboardView
              clients={clients}
              onAddClient={handleAddClient}
              onUpdateClient={handleUpdateClient}
              onDeleteClient={handleDeleteClient}
              onOpenLivePreview={(client) =>
                handleOpenDemoModal({
                  coupleName: client.coupleName,
                  groomName: client.groomName,
                  brideName: client.brideName,
                  eventDate: client.date,
                  eventTime: client.time,
                  venueName: client.venue,
                  venueAddress: client.address,
                  theme: THEMES_DATA.find((t) => t.id === client.themeId) || THEMES_DATA[0],
                  bankName: client.bankName,
                  bankAccount: client.bankAccount,
                  accountHolder: client.accountHolder,
                })
              }
            />
          </div>
        )}

        {/* VIEW 7: PUSAT BANTUAN */}
        {currentView === 'bantuan' && (
          <div className="animate-in fade-in duration-300">
            <SupportView />
          </div>
        )}
      </main>

      {/* Global Interactive Live Invitation Modal Preview */}
      <LiveInvitationModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        invitationData={demoModalData}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
