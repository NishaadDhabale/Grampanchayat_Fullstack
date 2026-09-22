import { NavigationHeader } from '@/components/NavigationHeader';
import grampanchayatImg from '../assets/images/Sarpanchweb.webp';
import SchoolImg from '../assets/images/Upsarpanch.png';
import school2Img from '../assets/images/commitee.webp';
import mandirImg from '../assets/images/Adhikari.png';
interface LanguageProps {
  language: string;
  setlanguage: (s: 'en' | 'mr') => void;
}

const content = {
  en: {
    h1: 'OUR OFFICERS',
    name1: 'Mrs. Pramila Chaudhari',
    designation1: 'Sarpanch',
    name2: 'Bramhangaon Vanas',
    designation2: 'Upsarpanch',
    name3: 'Mrs. namrata jagtap',
    designation3: 'hon. block development officer,panchayat samiti niphad',
    name4: 'mrs. swati ghotekar',
    designation4: 'village panchayat officer',
  },
  mr: {
    h1: 'आपले अधिकारी',
    name1: 'श्रीमती प्रमिला चौधरी',
    designation1: 'सरपंच',
    name2: 'श्री नरहरी कापडी',
    designation2: 'उपसरपंच',
    name3: 'श्रीमती नम्रता जगताप',
    designation3: 'मा. गट विकास अधिकारी पंचायत समिती निफाड',
    name4: 'श्रीमती स्वाती घोटेकर',
    designation4: 'ग्रामपंचायत अधीकारी',
  },
};

export const Officers = ({ language, setlanguage }: LanguageProps) => {
  const t = content[language as keyof typeof content];

  return (
    <div>
      <NavigationHeader onLanguageChange={setlanguage} language={language} />

      {/* Officers Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
          {t.h1}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Officer Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-400 p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100">
            <img
              src={grampanchayatImg}
              alt="सरपंच"
              className="w-full h-64 object-cover rounded-xl shadow-sm"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              {t.name1}
            </h3>
            <p className="text-gray-500">{t.designation1}</p>
            <p className="text-blue-700 font-normal mt-2">
              📧 grampanchayatbramhangaonvanas@gmail.com
            </p>
          </div>

          {/* Officer Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-400 p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100">
            <img
              src={SchoolImg}
              alt="उपसरपंच"
              className="w-full h-64 object-cover rounded-xl shadow-sm"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              {t.name2}
            </h3>
            <p className="text-gray-500">{t.designation2}</p>
            <p className="text-blue-700 font-normal mt-2">
              📧grampanchayatbramhangaonvanas@gmail.com
            </p>
          </div>

          {/* Officer Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-400 p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100">
            <img
              src={school2Img}
              alt="ग्रामपंचायत अधीकारी"
              className="w-full h-64 object-cover rounded-xl shadow-sm"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              {t.name3}
            </h3>
            <p className="text-gray-500">{t.designation3} </p>
            <p className="text-blue-700 font-normal mt-2">
              📧 grampanchayatbramhangaonvanas@gmail.com
            </p>
          </div>

          {/* Officer Card 4 (New) */}
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-400 p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100">
            <img
              src={mandirImg}
              alt="सचिव"
              className="w-full h-64 object-cover rounded-xl shadow-sm"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              {t.name4}
            </h3>
            <p className="text-slate-500">{t.designation4}</p>
            <p className="text-blue-700 font-normal mt-2">
              📧 grampanchayatbramhangaonvanas@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
