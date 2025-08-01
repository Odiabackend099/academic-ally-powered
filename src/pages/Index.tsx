
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import VideoSection from "@/components/VideoSection";
import LeadershipSection from "@/components/LeadershipSection";
import IntellectualExcellenceSection from "@/components/IntellectualExcellenceSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import PressSection from "@/components/PressSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatWeDoSection />
      <VideoSection />
      <LeadershipSection />
      <IntellectualExcellenceSection />
      <PartnershipsSection />
      <PressSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
