import { useState } from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { HeroCarousel } from '@/components/HeroCarousel';
import { OfficialsSection } from '@/components/OfficialsSection';
import { PopulationStats } from '@/components/PopulationState';
import { AnnouncementsSection } from '@/components/AnnouncementsSection';
import { AboutVillage } from '@/components/AboutVillage';
import { ImportantLinks } from '@/components/ImportantLinks';
import { VillageGallery } from '@/components/VillageGallery';
import { Footer } from '@/components/Footer';
import Gallery from '@/components/Gallery';

interface LanguageProps{
  language:string;
  setLanguage:(s:'en'|'mr')=>void;
}
const Index = ({language,setLanguage}:LanguageProps) => {
  

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader language={language} onLanguageChange={setLanguage} />
\
      <main>
        {/* Hero Carousel */}
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel />
        </section>

        {/* Population Statistics */}
        <PopulationStats language={language} />

        {/* Village Officials */}
        <OfficialsSection language={language} />

        {/* Announcements Section */}
        <AnnouncementsSection language={language} />

        {/* About Village */}
        <AboutVillage language={language} />

        {/* Important Links */}
        <ImportantLinks language={language} />

        {/* Village Gallery */}
        <Gallery language={language}/>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default Index;
