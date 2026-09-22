import { Card, CardContent } from '@/components/ui/card';
import sarpanchImg from '../assets/images/Sarpanch.png';
import upsarpanchImg from '../assets/images/Upsarpanch.png';
import secretaryImg from '../assets/images/Adhikari.png';
import commiteeImg from '../assets/images/commitee.webp';

interface OfficialsSectionProps {
  language: string;
}

const content = {
  en: {
   
    title: 'Village Officials',
     commitee: {
      name: 'Mrs. Namrata Jagtap',
      designation: 'Hon. Block Development Officer, Panchayat Samiti Niphad',

      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    sarpanch: {
      name: 'Mrs. Pramila Chaudhari',
      designation: 'Sarpanch',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    upsarpanch: {
      name: 'Mr Narhari Kaapdi',
      designation: 'Upsarpanch',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    secretary: {
      name: 'Mrs. Swati Ghotekar',
      designation: 'Village Panchayat Officer',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    
  },
  mr: {
    
    title: 'गाव अधिकारी',
      commitee: {
      name: 'श्रीमती नम्रता जगताप',
      designation: 'मा. गट विकास अधिकारी पंचायत समिती निफाड',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    sarpanch: {
      name: 'श्रीमती प्रमिला चौधरी',
      designation: 'सरपंच',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    upsarpanch: {
      name: 'श्री नरहरी कापडी',
      designation: 'उपसरपंच',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
    secretary: {
      name: 'श्रीमती स्वाती घोटेकर',
      designation: 'ग्रामपंचायत अधीकारी',
      email: 'grampanchayatbramhangaonvanas@gmail.com',
    },
  
  },
};

export const OfficialsSection = ({ language }: OfficialsSectionProps) => {
  const t = content[language as keyof typeof content];

  const officials = [
    { ...t.sarpanch, image: sarpanchImg },
    { ...t.upsarpanch, image: upsarpanchImg },
    { ...t.secretary, image: secretaryImg },
    { ...t.commitee, image: commiteeImg },
  ];

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-govt-dark-blue mb-8">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officials.map((official, index) => (
            <Card
              key={index}
              className="text-center border-govt-orange/20 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={official.image}
                    alt={official.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-govt-orange/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-govt-dark-blue mb-2">
                  {official.name}
                </h3>
                <p className="text-govt-orange font-medium mb-3">
                  {official.designation}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                 
                  <p>{official.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
