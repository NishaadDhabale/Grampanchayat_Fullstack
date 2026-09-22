import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageToggle } from "./LanguageToggle";
import { useNavigate } from "react-router-dom";
import ashokaImg from "../assets/images/ashoka.png";

interface NavigationHeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const content = {
  en: {
    heading1: "Bramhangaon Vanas",
    heading2: "Gram Panchayat",
    officers: "Officers",
    villageInfo: "Village Information",
    importantNumbers: "Important Numbers",
    govtSchemes: "Government Schemes",
    jalJivan: "Jal Jivan Mission",
    ayog15: "15th Finance Commission",
    pmAwas: "PM Awas Yojana",
    mgnrega: "MGNREGA",
    home: "Home",
    adminLogin:"Admin Login"
  },
  mr: {
    heading1:"ब्राह्मणगाव वनस",
    heading2:'ग्राम पंचायत',
    officers: "अधिकारी",
    villageInfo: "गाव माहिती",
    importantNumbers: "महत्वाचे नंबर",
    govtSchemes: "सरकारी योजना",
    jalJivan: "जल जीवन मिशन",
    ayog15: "१५ वा आयोग",
    pmAwas: "पंतप्रधान आवास योजना",
    mgnrega: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार",
    home: "मुख्यपृष्ठ",
    adminLogin:"प्रशासक लॉगिन"
  },
};

export const NavigationHeader = ({ language, onLanguageChange }: NavigationHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[language as keyof typeof content];
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md border-b border-govt-orange/20">
      <div className="container pl-0 ">
        <div className="flex justify-between h-18">
          {/* Logo and Title */}
          <div className="flex items-center ">
            {/* Logo Image */}
            <img
              src={ashokaImg}
              alt="Ashoka Pillar"
              className="h-18 w-auto object-contain"
              style={{ maxHeight: '4.6rem' }}
            />
            <div className="text-base my-2 font-bold text-govt-dark-blue cursor-pointer">
              <span pt-2 onClick={() => navigate('/')} className="">
                <span>{t.heading2}</span>
                <br />
                <span className="">{t.heading1}</span>
              </span>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <Button onClick={() => navigate('/officers')} variant="ghost" className="flex items-center gap-1 text-govt-dark-blue hover:text-govt-orange">
                  {t.officers}
                </Button>
              </DropdownMenu>
              <DropdownMenu>
                <Button variant="ghost" onClick={() => navigate('/villageinfo')} className="flex items-center gap-1 text-govt-dark-blue hover:text-govt-orange">
                  {t.villageInfo}
                </Button>
              </DropdownMenu>
              <DropdownMenu>
                <Button variant="ghost" className="flex items-center gap-1 text-govt-dark-blue hover:text-govt-orange" onClick={() => navigate('/importantnumbers')}>
                  {t.importantNumbers}
                </Button>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-govt-dark-blue hover:text-govt-orange">
                    {t.govtSchemes}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-govt-orange/20">
                  <DropdownMenuItem onClick={() => window.open("https://jaljeevanmission.gov.in/")}>{t.jalJivan}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://doe.gov.in/15th-finance-commission")}>{t.ayog15}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://rdd.maharashtra.gov.in/en/scheme/pradhan-mantri-awas-yojana-rural/")}>{t.pmAwas}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx")}>{t.mgnrega}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center gap-2">
                <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
                <Button variant="outline" className="ml-2 font-semibold text-govt-dark-blue border-govt-orange" onClick={() => navigate('/admin')}>
                  Admin Login
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
          
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-govt-dark-blue"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-govt-orange/20 py-4">
            <nav className="space-y-2">

              <Button  onClick={() => navigate('/admin')} variant="ghost" className="w-full justify-start text-govt-dark-blue">
                {t.adminLogin}
              </Button>
              <Button variant="ghost" onClick={() => navigate('/officers')} className="w-full justify-start text-govt-dark-blue">
                {t.officers}
              </Button>
              <Button onClick={() => navigate('/villageinfo')} variant="ghost" className="w-full justify-start text-govt-dark-blue">
                {t.villageInfo}
              </Button>

              <Button variant="ghost" onClick={() => navigate('/importantnumbers')} className="w-full justify-start text-govt-dark-blue">
                {t.importantNumbers}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-govt-dark-blue">
                    {t.govtSchemes}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-govt-orange/20">
                  <DropdownMenuItem onClick={() => window.open("https://jaljeevanmission.gov.in/")}>{t.jalJivan}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://doe.gov.in/15th-finance-commission")}>{t.ayog15}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://rdd.maharashtra.gov.in/en/scheme/pradhan-mantri-awas-yojana-rural/")}>{t.pmAwas}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open("https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx")}>{t.mgnrega}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};