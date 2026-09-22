import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Megaphone, Users } from "lucide-react";

interface AnnouncementsSectionProps {
  language: string;
}

const content = {
  en: {
    tenders: "Tenders",
    whatsNew: "What's New",
    recruitments: "Recruitments",
    tendersData: [
      {
        title: "Road Construction Project",
        description: "Tender for village road improvement work",
        deadline: "Dec 15, 2024",
      },
      {
        title: "Water Supply Enhancement",
        description: "Installation of new water pumps and pipes",
        deadline: "Dec 20, 2024",
      },
    ],
    newsData: [
      {
        title: "Village Development Fund Approved",
        description: "₹50 lakh sanctioned for infrastructure development",
        date: "Dec 10, 2024",
      },
      {
        title: "Health Camp Scheduled",
        description: "Free medical checkup camp on December 18",
        date: "Dec 8, 2024",
      },
    ],
    recruitmentData: [
      {
        title: "Village Health Worker",
        description: "Application for ASHA worker position",
        deadline: "Dec 25, 2024",
      },
      {
        title: "Computer Operator",
        description: "Part-time computer operator for panchayat office",
        deadline: "Dec 30, 2024",
      },
    ],
  },
  mr: {
    tenders: "निविदा",
    whatsNew: "नवीन बातम्या",
    recruitments: "भर्ती",
    tendersData: [
      {
        title: "रस्ता बांधकाम प्रकल्प",
        description: "गाव रस्ता सुधारणा कामासाठी निविदा",
        deadline: "१५ डिसेंबर, २०२४",
      },
      {
        title: "पाणीपुरवठा वाढ",
        description: "नवीन पाणी पंप आणि पाईप्सची स्थापना",
        deadline: "२० डिसेंबर, २०२४",
      },
    ],
    newsData: [
      {
        title: "गाव विकास निधी मंजूर",
        description: "पायाभूत सुविधा विकासासाठी ५० लाख रुपये मंजूर",
        date: "१० डिसेंबर, २०२४",
      },
      {
        title: "आरोग्य शिबिर नियोजित",
        description: "१८ डिसेंबरला मोफत वैद्यकीय तपासणी शिबिर",
        date: "८ डिसेंबर, २०२४",
      },
    ],
    recruitmentData: [
      {
        title: "गाव आरोग्य कर्मचारी",
        description: "आशा कर्मचारी पदासाठी अर्ज",
        deadline: "२५ डिसेंबर, २०२४",
      },
      {
        title: "संगणक ऑपरेटर",
        description: "पंचायत कार्यालयासाठी अर्धवेळ संगणक ऑपरेटर",
        deadline: "३० डिसेंबर, २०२४",
      },
    ],
  },
};

type TabType = "tenders" | "news" | "recruitments";

export const AnnouncementsSection = ({ language }: AnnouncementsSectionProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("tenders");
  const t = content[language as keyof typeof content];

  const tabs = [
    { id: "tenders" as TabType, label: t.tenders, icon: FileText },
    { id: "news" as TabType, label: t.whatsNew, icon: Megaphone },
    { id: "recruitments" as TabType, label: t.recruitments, icon: Users },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tenders":
        return (
          <div className="space-y-4">
            {t.tendersData.map((tender, index) => (
              <Card key={index} className="border-govt-orange/20">
                <CardHeader>
                  <CardTitle className="text-lg text-govt-dark-blue">{tender.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{tender.description}</p>
                  <p className="text-sm text-govt-orange font-medium">
                    Deadline: {tender.deadline}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "news":
        return (
          <div className="space-y-4">
            {t.newsData.map((news, index) => (
              <Card key={index} className="border-govt-orange/20">
                <CardHeader>
                  <CardTitle className="text-lg text-govt-dark-blue">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{news.description}</p>
                  <p className="text-sm text-govt-orange font-medium">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case "recruitments":
        return (
          <div className="space-y-4">
            {t.recruitmentData.map((recruitment, index) => (
              <Card key={index} className="border-govt-orange/20">
                <CardHeader>
                  <CardTitle className="text-lg text-govt-dark-blue">{recruitment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{recruitment.description}</p>
                  <p className="text-sm text-govt-orange font-medium">
                    Apply by: {recruitment.deadline}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-govt-orange text-white hover:bg-govt-orange/90"
                  : "border-govt-orange text-govt-orange hover:bg-govt-orange hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};