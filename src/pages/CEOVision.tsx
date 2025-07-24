import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ceoAustynProfessional from "@/assets/ceo-austyn-professional.jpg";
import { Button } from "@/components/ui/button";
import { Play, ArrowLeft, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CEOVision = () => {
  const navigate = useNavigate();

  const handlePlayVisionSpeech = () => {
    // In production, this would play an actual video/audio of the CEO's vision speech
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Placeholder video
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                CEO AUSTYN EGUALE'S
                <br />
                <span className="text-gold font-medium">VISION FOR NIGERIA'S AI FUTURE</span>
              </h1>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Hear directly from our CEO about his vision for transforming Nigeria through 
                voice-powered AI infrastructure and the future of African technology innovation.
              </p>
              
              <Button 
                onClick={handlePlayVisionSpeech}
                className="bg-gold hover:bg-gold/90 text-navy text-lg px-8 py-6"
              >
                <Play className="w-6 h-6 mr-3" />
                Play Vision Speech
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={ceoAustynProfessional} 
                  alt="CEO Austyn Eguale" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Quote className="w-8 h-8 text-gold mb-4" />
                    <blockquote className="text-white text-lg italic leading-relaxed">
                      "We are not just building AI for Nigeria – we are building Nigeria's AI future. 
                      Every line of code, every voice interaction, every partnership brings us closer 
                      to an Africa that leads the world in ethical AI innovation."
                    </blockquote>
                    <p className="text-gold font-medium mt-4">- CEO Austyn Eguale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-navy mb-4">
              Key Vision Points
            </h2>
            <p className="text-muted-foreground text-lg">
              The foundational principles driving ODIA AI's mission to transform Nigeria
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-navy mb-4">African-Centric AI Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                "We believe AI should understand and serve African cultures, languages, and business contexts. 
                Our technology is built from the ground up with Nigerian needs at the center, not as an afterthought."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-navy mb-4">University-Industry Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                "The partnership with Mudiame International University isn't just about credibility – it's about 
                creating a sustainable ecosystem where academic research meets real-world business applications."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-navy mb-4">Voice-First Technology</h3>
              <p className="text-muted-foreground leading-relaxed">
                "In a continent where mobile-first has transformed communications, voice-first will transform commerce, 
                education, and governance. We're building the infrastructure for that transformation."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-navy mb-4">Ethical AI Leadership</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Nigeria has the opportunity to lead the world in ethical AI development. We're not just adopting 
                global standards – we're creating new ones that respect African values and privacy expectations."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold/10 to-navy/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-navy mb-8">
            The 5-Year Vision
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold mb-3">2025-2026</div>
              <h3 className="font-semibold text-navy mb-3">Foundation & Growth</h3>
              <p className="text-muted-foreground text-sm">
                Establish ODIA AI as Nigeria's leading voice AI platform with 100,000+ active users.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold mb-3">2027-2028</div>
              <h3 className="font-semibold text-navy mb-3">Regional Expansion</h3>
              <p className="text-muted-foreground text-sm">
                Scale across West Africa with localized AI solutions for each country's unique needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-gold mb-3">2029-2030</div>
              <h3 className="font-semibold text-navy mb-3">Continental Leadership</h3>
              <p className="text-muted-foreground text-sm">
                Become Africa's premier AI infrastructure provider, setting global standards for ethical AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CEOVision;