import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import IntellectualExcellenceSection from "@/components/IntellectualExcellenceSection";
import TeamSection from "@/components/TeamSection";
import PressSection from "@/components/PressSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <IntellectualExcellenceSection />
      <TeamSection />
      <PressSection />
      <Footer />
    </div>
  );
};

export default Index;
