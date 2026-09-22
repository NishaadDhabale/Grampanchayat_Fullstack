import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Home, School, Heart } from "lucide-react";

interface PopulationStatsProps {
  language: string;
}

const content = {
  en: {
    title: "Village Statistics",
    description: "Our village is a thriving community with rich cultural heritage and modern amenities. We are committed to sustainable development and improving the quality of life for all residents.",
    totalPopulation: "Total Population",
    households: "Households",
    literacyRate: "Literacy Rate",
    healthCenters: "Health Centers",
    stats: {
      population: "1,464",
      households: "279",
      literacy: "83.23%",
      health: "3",
    }
  },
  mr: {
    title: "गाव आकडेवारी",
    description: "आमचे गाव एक समृद्ध सांस्कृतिक वारसा आणि आधुनिक सुविधांसह एक भरभराटीचा समुदाय आहे. आम्ही शाश्वत विकास आणि सर्व रहिवाशांच्या जीवनमानाचा दर्जा सुधारण्यासाठी वचनबद्ध आहोत.",
    totalPopulation: "एकूण लोकसंख्या",
    households: "कुटुंबे",
    literacyRate: "साक्षरता दर",
    healthCenters: "आरोग्य केंद्रे",
    stats: {
      population: "१,४६४",
      households: "२७९",
      literacy: "८३.२३%",
      health: "३",
    }
  },
};

export const PopulationStats = ({ language }: PopulationStatsProps) => {
  const t = content[language as keyof typeof content];

  const statsData = [
    {
      title: t.totalPopulation,
      value: t.stats.population,
      icon: Users,
      color: "text-govt-orange",
    },
    {
      title: t.households,
      value: t.stats.households,
      icon: Home,
      color: "text-govt-blue",
    },
    {
      title: t.literacyRate,
      value: t.stats.literacy,
      icon: School,
      color: "text-govt-orange",
    },
    {
      title: t.healthCenters,
      value: t.stats.health,
      icon: Heart,
      color: "text-govt-blue",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-govt-dark-blue mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card key={index} className="border-govt-orange/20 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};