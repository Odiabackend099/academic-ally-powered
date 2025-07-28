import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Volume2 } from "lucide-react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  isVoiceMode: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
  isVoiceMode
}) => {
  const languages = [
    {
      code: 'nigerian_english',
      name: 'Nigerian English',
      flag: '🇳🇬',
      description: 'Natural Nigerian accent and expressions'
    },
    {
      code: 'yoruba_accent_english',
      name: 'Yoruba English',
      flag: '🏛️',
      description: 'English with Yoruba cultural context'
    },
    {
      code: 'igbo_accent_english',
      name: 'Igbo English',
      flag: '🌍',
      description: 'English with Igbo cultural nuances'
    },
    {
      code: 'hausa_accent_english',
      name: 'Hausa English',
      flag: '🕌',
      description: 'English with Northern Nigerian context'
    },
    {
      code: 'yoruba_native',
      name: 'Yoruba',
      flag: '🎭',
      description: 'Native Yoruba language'
    },
    {
      code: 'igbo_native',
      name: 'Igbo',
      flag: '🎪',
      description: 'Native Igbo language'
    },
    {
      code: 'hausa_native',
      name: 'Hausa',
      flag: '🎨',
      description: 'Native Hausa language'
    }
  ];

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-4 h-4 text-navy" />
          <span className="text-sm font-medium text-navy">Choose Language & Accent</span>
          {isVoiceMode && <Volume2 className="w-4 h-4 text-green-500" />}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant={selectedLanguage === language.code ? "default" : "outline"}
              size="sm"
              className={`text-xs p-2 h-auto flex flex-col items-start ${
                selectedLanguage === language.code 
                  ? 'bg-navy text-white' 
                  : 'hover:bg-navy/10'
              }`}
              onClick={() => onLanguageChange(language.code)}
            >
              <div className="flex items-center gap-1 w-full">
                <span>{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              <span className="text-xs opacity-70 text-left w-full">
                {language.description}
              </span>
            </Button>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          {isVoiceMode 
            ? "Voice mode active - speak in your chosen language" 
            : "Switch to voice mode to hear natural pronunciation"
          }
        </p>
      </CardContent>
    </Card>
  );
};

export default LanguageSelector;