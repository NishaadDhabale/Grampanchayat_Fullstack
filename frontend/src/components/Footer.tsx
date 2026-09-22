import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import ashokaImg from "../assets/images/ashoka.png";

interface FooterProps {
  language: string;
}

const content = {
  en: {
    contact: 'Contact Information',
    address:
      'Bramhangaon Panchayat Office, Main Road, Bramhangaon Vanas, Taluka Niphad, District Nashik - 422304',
    phone: '+91 -',
    email: 'grampanchayatbramhangaonvanas@gmail.com',
    rights: '© 2025 Bramhangaon Panchayat. All rights reserved.',
    govtIndia: 'Government of India',
  },
  mr: {
    contact: 'संपर्क माहिती',
    address:
      'ब्राह्मणगाव ग्राम पंचायत कार्यालय, मुख्य रस्ता, ब्राह्मणगाव वनस, तालुका निफाड, जिल्हा नाशिक - ४२२३०४',
    phone: '+91 -',
    email: 'grampanchayatbramhangaonvanas@gmail.com',
    rights: '© २०२५ ब्राह्मणगाव वनस ग्राम पंचायत. सर्व हक्क राखीव.',
    govtIndia: 'भारत सरकार',
  },
};
         
export const Footer = ({ language }: FooterProps) => {
  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-govt-dark-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-govt-light-orange">
              {t.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-govt-light-orange mt-1 flex-shrink-0" />
                <p className="text-sm">{t.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-govt-light-orange" />
                <p className="text-sm">{t.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-govt-light-orange" />
                <p className="text-sm">{t.email}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="text-center md:text-right">
              <div className="text-lg font-semibold text-govt-light-orange mb-2">
                {t.govtIndia}
              </div>
              <div className="flex justify-center md:justify-end mb-4">
                <img
                  src={ashokaImg}
                  alt="Ashoka Pillar"
                  className="w-32 h-19 object-contain drop-shadow-md"
                  style={{ filter: "invert(1) brightness(2)" }}
                />
              </div>
            </div>

            <div className="text-center md:text-right text-sm text-gray-300">
              {t.rights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
