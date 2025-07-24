import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ceoAustynProfessional from "@/assets/ceo-austyn-professional.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeadershipJourney = () => {
  const navigate = useNavigate();

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
                THE LEADERSHIP JOURNEY OF
                <br />
                <span className="text-gold font-medium">AUSTYN EGUALE</span>
              </h1>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                From university research to founding Nigeria's first voice AI infrastructure company, 
                explore the journey that led to ODIA AI's creation and impact.
              </p>
              
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 2025</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={ceoAustynProfessional} 
                alt="CEO Austyn Eguale" 
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-navy mb-4">
              Professional Timeline
            </h2>
            <p className="text-muted-foreground text-lg">
              The milestones that shaped a vision for Nigeria's AI future
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold"></div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-navy" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-navy">Early Academic Excellence</h3>
                    <span className="text-sm text-gold font-medium">2015-2019</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Graduated with honors in Computer Science, focusing on artificial intelligence and 
                    natural language processing. Recognized for research on African language computational linguistics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold"></div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-navy" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-navy">Research & Development</h3>
                    <span className="text-sm text-gold font-medium">2020-2023</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Led AI research projects at Mudiame International University, focusing on voice recognition 
                    for Nigerian languages. Published 12 papers on African-centric AI development and received 
                    the Young Researcher Award for Innovation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold"></div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-navy" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-navy">Industry Partnerships</h3>
                    <span className="text-sm text-gold font-medium">2024</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Established strategic partnerships with Cross AI International and Intech Wealth Advisory, 
                    bringing together academic research, global standards, and practical business applications. 
                    Secured initial funding and university backing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-navy" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gold">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-navy">ODIA AI Foundation</h3>
                    <span className="text-sm text-gold font-medium">2025</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded ODIA AI as Nigeria's first voice-powered AI infrastructure company. 
                    Launched with university backing, international partnerships, and a clear mission 
                    to transform African business through ethical AI innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold/10 to-navy/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-navy mb-8">
              Leadership Philosophy
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                "True innovation comes from rigorous research combined with practical application. 
                Our university partnership ensures every solution is built on solid academic foundations."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Ethical Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Technology should serve humanity, not replace it. Every AI system we build is designed 
                to augment human capabilities while respecting African values and privacy."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Cultural Understanding</h3>
              <p className="text-muted-foreground leading-relaxed">
                "AI that doesn't understand African contexts, languages, and business practices 
                is not truly artificial intelligence – it's artificial ignorance."
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Collaborative Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                "The future of African technology lies in collaboration – between universities, 
                businesses, governments, and international partners working toward common goals."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipJourney;