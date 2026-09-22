import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(language === "en" ? "mr" : "en")}
      className="flex items-center gap-2 bg-background border-govt-orange text-govt-orange hover:bg-govt-orange hover:text-white"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? "मराठी" : "English"}
    </Button>
  );
};