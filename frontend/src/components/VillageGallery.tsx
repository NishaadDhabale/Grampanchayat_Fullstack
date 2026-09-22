import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { storageHelpers } from "@/lib/supabase-helpers";
import { Loader2 } from "lucide-react";

interface VillageGalleryProps {
  language: string;
  extraImages?: string[];
  refreshTrigger?: number;
}

const content = {
  en: {
    title: "Village Gallery",
    subtitle: "Glimpses of our beautiful village and community life",
    loading: "Loading gallery images...",
    error: "Failed to load gallery images",
  },
  mr: {
    title: "गाव गॅलरी",
    subtitle: "आमच्या सुंदर गावाची आणि सामुदायिक जीवनाची झलक",
    loading: "गॅलरी प्रतिमा लोड करत आहे...",
    error: "गॅलरी प्रतिमा लोड करण्यात अयशस्वी",
  },
};

export const VillageGallery = ({ language, extraImages = [], refreshTrigger }: VillageGalleryProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching images from Supabase...');
        const imageData = await storageHelpers.getAllImages();
        console.log('Retrieved image data:', imageData);
        
        const imageUrls = imageData.map(img => img.url);
        console.log('Image URLs:', imageUrls);
        
        setImages(imageUrls);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [refreshTrigger]);

  const t = content[language as keyof typeof content] || content.en;

  // Combine Supabase images with extra images from admin uploads
  const allImages = [...images, ...extraImages];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-govt-dark-blue mb-4">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
          <div className="mt-4">
            <a
              href="/gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-govt-orange text-white px-4 py-2 rounded hover:bg-govt-orange/90 transition-colors"
            >
              View all images
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-govt-orange" />
              <p className="text-muted-foreground">{t.loading}</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{t.error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-govt-orange text-white px-4 py-2 rounded hover:bg-govt-orange/90 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : allImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images in gallery yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((imageUrl, index) => (
              <Card key={index} className="overflow-hidden border-govt-orange/20 hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={`Village event ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};