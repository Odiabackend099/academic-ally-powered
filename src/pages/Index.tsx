
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CEOSection from "@/components/CEOSection";
import IntellectualExcellenceSection from "@/components/IntellectualExcellenceSection";
import TeamSection from "@/components/TeamSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import PressSection from "@/components/PressSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <CEOSection />
      <IntellectualExcellenceSection />
      <TeamSection />
      <PartnershipsSection />
      <PressSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
