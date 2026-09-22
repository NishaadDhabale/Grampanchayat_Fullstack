import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, TreePine, Wheat } from "lucide-react";

interface AboutVillageProps {
  language: string;
}

const content = {
  en: {
    title: "About Our Village",
    description: "Brahmangaon Vanas is a village in Niphad Taluka of Nashik District in Maharashtra State. The district headquarters Nashik is about 55 km away from Brahmangaon Vanas village. The taluka headquarters Niphad is about 13 km away from the village. The total area of Brahmangaon Vanas village is about 479.13 hectares. According to the 2011 Census, the total population of the village is 1,464.As per the 2011 Census, about 279 families reside in the village. Out of the total population, 767 are males and 697 are females. There is a sub post office in Brahmangaon Vanas village. The PIN code of the village is 422304.",
    location: {
      title: "Location",
      details: "District: Nashik, Taluka: Niphad, Pin: 422304",
    },
    established: {
      title: "Established",
      details: "Founded in 1958, our village has 67+ years of history",
    },
    agriculture: {
      title: "Agriculture",
      details: "Primary crops: Grapes, Vegetables, Onion, Tomato",
    },
    culture: {
      title: "Culture",
      details: "Festivals: Ganesh Chaturthi, Diwali, Gudi Padwa, Harvest Festival",
    },
  },
  mr: {
    title: "आमच्या गावाबद्दल",
    description: "महाराष्ट्र राज्यातील नाशिक जिल्ह्यातील निफाड तालुक्यात ब्राह्मणगाव वनस हे गाव आहे. ब्राह्मणगाव वनस गावापासून जिल्ह्याचे ठिकाण नाशिक सुमारे 55 कि.मी. अंतरावर आहे. ब्राह्मणगाव वनस गावापासून तालुक्याचे ठिकाण निफाड सुमारे 13 कि.मी. अंतरावर आहे.ब्राह्मणगाव वनस गावाचे क्षेत्रफळ सुमारे 479.13 हेक्टर आहे.२०११ च्या जनगणनेनुसार ब्राह्मणगाव वनस गावाची एकूण लोकसंख्या 1464 आहे.२०११ च्या जनगणनेनुसार सुमारे 279 कुटूंब ब्राह्मणगाव वनस गावात राहतात.२०११ च्या जनगणनेनुसार गावात पुरुषांची संख्या 767 असून महिलांची संख्या 697 आहे. ब्राह्मणगाव वनस गावात सब पोस्ट ऑफिस आहे. ब्राह्मणगाव वनस गावचा पिन कोड ४२२३०४ हा आहे..",
    location: {
      title: "स्थान",
      details: "जिल्हा: नाशिक, तालुका:  निफाड, पिन: ४२२३०४",
    },
    established: {
      title: "स्थापना",
      details: "१९५८ मध्ये स्थापित, आमच्या गावाला ६७+ वर्षांचा इतिहास आहे",
    },
    agriculture: {
      title: "शेती",
      details: "मुख्य पिके: द्राक्ष, भाजीपाला, कांदा, टोमॅटो",
    },
    culture: {
      title: "संस्कृती",
      details: "सण: गणेश चतुर्थी, दिवाळी, गुढी पाडवा, कापणी उत्सव",
    },
  },
};

export const AboutVillage = ({ language }: AboutVillageProps) => {
  const t = content[language as keyof typeof content];

  const features = [
    {
      title: t.location.title,
      details: t.location.details,
      icon: MapPin,
      color: "text-govt-orange",
    },
    {
      title: t.established.title,
      details: t.established.details,
      icon: Calendar,
      color: "text-govt-blue",
    },
    {
      title: t.agriculture.title,
      details: t.agriculture.details,
      icon: Wheat,
      color: "text-govt-orange",
    },
    {
      title: t.culture.title,
      details: t.culture.details,
      icon: TreePine,
      color: "text-govt-blue",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-govt-dark-blue mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-govt-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  <span className="text-govt-dark-blue">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};