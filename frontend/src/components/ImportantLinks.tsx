import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, FileText, Phone, Building } from "lucide-react";

interface ImportantLinksProps {
  language: string;
}

const content = {
  en: {
    title: "Important Links",
    categories: {
      government: "Government Portals",
      services: "Online Services",
      emergency: "Emergency Contacts",
      schemes: "Government Schemes",
    },
    links: {
      government: [
        { name: "Maharashtra Government", url: "https://www.maharashtra.gov.in/", icon: Building },
        { name: "District Collector Office", url: "https://nashik.gov.in/en/", icon: Building },
        { name: "Panchayati Raj Department", url: "https://rdd.maharashtra.gov.in/en/", icon: Building },
      ],
      services: [
        { name: "Online Application Portal", url: "https://services.india.gov.in/service/detail/e-application", icon: Globe },
        { name: "Birth/Death Certificate", url: "https://services.india.gov.in/service/detail/birthdeath-registration-for-pimpri-chinchwad-municipal-corporation-maharashtra", icon: FileText },
        { name: "Property Tax Payment", url: "https://www.nmc.gov.in/", icon: FileText },
      ],
      emergency: [
        { name: "Police Control Room", url: "https://nashikcitypolice.gov.in/", icon: Phone },
        { name: "Fire Department", url: "https://mahafireservice.gov.in/", icon: Phone },
        { name: "Ambulance Service", url: "https://www.justdial.com/Nashik/Ambulance-Services/nct-10015724", icon: Phone },
      ],
      schemes: [
        { name: "PM Awas Yojana", url: "https://rdd.maharashtra.gov.in/en/scheme/pradhan-mantri-awas-yojana-rural/", icon: FileText },
        { name: "Jal Jivan Mission", url: "https://jaljeevanmission.gov.in/", icon: FileText },
        { name: "MGNREGA Portal", url: "https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx", icon: FileText },
      ],
    },
  },
  mr: {
    title: "महत्वाचे दुवे",
    categories: {
      government: "सरकारी पोर्टल",
      services: "ऑनलाइन सेवा",
      emergency: "आपत्कालीन संपर्क",
      schemes: "सरकारी योजना",
    },
    links: {
      government: [
        { name: "महाराष्ट्र सरकार", url: "https://www.maharashtra.gov.in/", icon: Building },
        { name: "जिल्हाधिकारी कार्यालय", url: "https://nashik.gov.in/en/", icon: Building },
        { name: "पंचायती राज विभाग", url: "https://rdd.maharashtra.gov.in/en/", icon: Building },
      ],
      services: [
        { name: "ऑनलाइन अर्ज पोर्टल", url: "https://services.india.gov.in/service/detail/e-application", icon: Globe },
        { name: "जन्म/मृत्यू प्रमाणपत्र", url: "https://services.india.gov.in/service/detail/birthdeath-registration-for-pimpri-chinchwad-municipal-corporation-maharashtra", icon: FileText },
        { name: "मालमत्ता कर भरणा", url: "https://www.nmc.gov.in/", icon: FileText },
      ],
      emergency: [
        { name: "पोलिस नियंत्रण कक्ष", url: "https://nashikcitypolice.gov.in/", icon: Phone },
        { name: "अग्निशमन विभाग", url: "https://mahafireservice.gov.in/", icon: Phone },
        { name: "रुग्णवाहिका सेवा", url: "https://www.justdial.com/Nashik/Ambulance-Services/nct-10015724", icon: Phone },
      ],
      schemes: [
        { name: "पंतप्रधान आवास योजना", url: "https://rdd.maharashtra.gov.in/en/scheme/pradhan-mantri-awas-yojana-rural/", icon: FileText },
        { name: "जल जीवन मिशन", url: "https://jaljeevanmission.gov.in/", icon: FileText },
        { name: "मनरेगा पोर्टल", url: "https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx", icon: FileText },
      ],
    },
  },
};

export const ImportantLinks = ({ language }: ImportantLinksProps) => {
  const t = content[language as keyof typeof content];

  const linkCategories = [
    { key: "government", title: t.categories.government, links: t.links.government },
    { key: "services", title: t.categories.services, links: t.links.services },
    { key: "emergency", title: t.categories.emergency, links: t.links.emergency },
    { key: "schemes", title: t.categories.schemes, links: t.links.schemes },
  ];

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-govt-dark-blue mb-8">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkCategories.map((category) => (
            <Card key={category.key} className="border-govt-orange/20">
              <CardHeader>
                <CardTitle className="text-lg text-govt-dark-blue">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 text-left hover:bg-govt-orange hover:text-white"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{link.name}</span>
                      <ExternalLink className="h-3 w-3 ml-auto flex-shrink-0" />
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};