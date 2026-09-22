import React, { useEffect, useState } from 'react';
import { storageHelpers } from '@/lib/supabase-helpers';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
// include local images so older/static images are available
import grampanchayatImg from '../assets/images/grampanchayat.webp';
import GateImg from '../assets/images/gate.webp';
import zpImg from '../assets/images/School.webp';
import OfficerImg from '../assets/images/commitee.webp';
import templeImg from '../assets/images/mandir.webp';
import event1Img from '../assets/images/event1.jpg';
import event2Img from '../assets/images/event2.jpg';
import event3Img from '../assets/images/event3.jpg';
import event4Img from '../assets/images/event4.jpg';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { NavigationHeader } from './NavigationHeader';

interface RemoteImage {
  name: string;
  url: string;
  uploadedAt?: string;
}

interface LanguageProps {
  language: string;
  setlanguage: (s: 'en' | 'mr') => void;
}


 export const AllGallery = ({ language, setlanguage }: LanguageProps) => {

  const navigate = useNavigate();
  const [images, setImages] = useState<RemoteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(30);
  const [selected, setSelected] = useState<RemoteImage | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const imgs = await storageHelpers.getAllImages();
        const mapped = imgs.map((f: any) => ({
          name: f.name,
          url: f.url,
          uploadedAt: f.uploadedAt,
        }));
        // newest first
        mapped.sort((a, b) => {
          const ai = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
          const bi = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
          return bi - ai;
        });
        // Add local images (static assets) so older images are included
        const local = [
          { name: 'grampanchayat', url: grampanchayatImg },
          { name: 'gate', url: GateImg },
          { name: 'zp', url: zpImg },
          { name: 'commitee', url: OfficerImg },
          { name: 'temple', url: templeImg },
          { name: 'event1', url: event1Img },
          { name: 'event2', url: event2Img },
          { name: 'event3', url: event3Img },
          { name: 'event4', url: event4Img },
        ];

        // merge and dedupe by URL (keep remote order first)
        const byUrl = new Map<string, any>();
        mapped.forEach((m: any) => {
          if (m.url) byUrl.set(m.url, m);
        });
        local.forEach((l) => {
          if (!byUrl.has(l.url)) byUrl.set(l.url, { name: l.name, url: l.url });
        });
        const final = Array.from(byUrl.values());
        if (mounted) setImages(final);
      } catch (e) {
        console.error(e);
        if (mounted) setError('Failed to load images');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    const handler = () => load();
    window.addEventListener('gallery-updated', handler);
    window.addEventListener('storage', (e) => {
      if (e.key === 'gallery-updated') load();
    });
    return () => {
      mounted = false;
      window.removeEventListener('gallery-updated', handler);
    };
  }, []);

  const loadMore = () =>
    setVisibleCount((v) => Math.min(images.length, v + 30));

  return (
    <div>

      <NavigationHeader onLanguageChange={setlanguage} language={language} />
      <section className="py-12 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-govt-dark-blue mb-4">
              All Gallery Images
            </h2>
            <p className="text-muted-foreground">
              Browse every uploaded image. Click to open full view.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-govt-orange" />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.slice(0, visibleCount).map((img, idx) => (
                  <Card
                    key={img.name + idx}
                    className="overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div
                      className="relative aspect-video overflow-hidden cursor-pointer"
                      onClick={() => setSelected(img)}
                    >
                      <img
                        src={img.url}
                        alt={img.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </Card>
                ))}
              </div>

              {visibleCount < images.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMore}
                    className="bg-govt-orange text-white px-4 py-2 rounded"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}

          {/* Fullscreen modal */}
          {selected && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <div
                className="relative bg-white rounded shadow-lg max-w-[95vw] max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-40 rounded-full p-2"
                  onClick={() => setSelected(null)}
                >
                  ✖
                </button>
                <img
                  src={selected.url}
                  alt={selected.name}
                  className="max-w-[95vw] max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="flex justify-center mb-12">
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AllGallery;