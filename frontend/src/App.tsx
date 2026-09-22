import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import VillageInfo from './pages/VillageInfo';
import { useState } from 'react';
import ImportantNumbers from './pages/ImportantNumbers';
import { Officers } from './pages/Officers';
import React from 'react';
import { AdminLogin } from './pages/AdminLogin';
import { AdminPanel } from './pages/AdminPanel';
import { VillageGallery } from './components/VillageGallery';
import FullGallery from './components/Gallery';
import AllGallery from './components/AllGallery';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState(localStorage.getItem('jwt') || '');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [language, setLanguage] = useState('en');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleLogin = (jwt: string) => {
    setToken(jwt);
    localStorage.setItem('jwt', jwt);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('jwt');
  };

  const handleAddImage = (img: string) => {
    setGalleryImages((prev) => [...prev, img]);
    // Trigger gallery refresh
    setRefreshTrigger(Date.now());
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Index language={language} setLanguage={setLanguage} />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/officers"
              element={
                <Officers language={language} setlanguage={setLanguage} />
              }
            />
            <Route
              path="/villageinfo"
              element={
                <VillageInfo language={language} setLanguage={setLanguage} />
              }
            />
            <Route
              path="/importantnumbers"
              element={
                <ImportantNumbers
                  language={language}
                  setLanguage={setLanguage}
                />
              }
            />
            <Route
              path="/admin"
              element={
                !token ? (
                  <AdminLogin onLogin={handleLogin} />
                ) : (
                  <AdminPanel
                    token={token}
                    onAddImage={handleAddImage}
                    onLogout={handleLogout}
                  />
                )
              }
            />
            <Route
              path="/gallery"
              element={<FullGallery language={language}  />}
            />
            <Route
              path="/gallery/all"
              element={
                <AllGallery language={language} setlanguage={setLanguage} />
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
