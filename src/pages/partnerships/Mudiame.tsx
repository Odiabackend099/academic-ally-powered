import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mudiameUniversityLogo from "@/assets/mudiame-university-logo.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Lightbulb, Trophy, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MudiamePartnership = () => {
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
              <div className="mb-6">
                <img 
                  src={mudiameUniversityLogo} 
                  alt="Mudiame International University Logo" 
                  className="w-24 h-24 rounded-lg bg-white/10 p-4"
                />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                Partnership with
                <br />
                <span className="text-gold font-medium">Mudiame International University</span>
              </h1>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our foundational academic partnership that provides ODIA AI with research excellence, 
                academic credibility, and access to cutting-edge AI research programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gold hover:bg-gold/90 text-navy"
                  onClick={() => window.open('https://mudiame.edu.ng', '_blank')}
                >
                  Visit University Website
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-navy"
                  onClick={() => window.open('mailto:partnerships@odia.dev?subject=University Partnership Inquiry', '_blank')}
                >
                  Contact Partnership Team
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-gold mb-6">Partnership Highlights</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2025</div>
                    <div className="text-white/60 text-sm">Partnership Started</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-white/60 text-sm">Research Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-white/60 text-sm">Student Researchers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5</div>
                    <div className="text-white/60 text-sm">AI Innovation Labs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-navy mb-4">
              Key Benefits & Initiatives
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our partnership with Mudiame International University creates a powerful ecosystem 
              of academic excellence and practical AI innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Research Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to world-class research facilities and methodologies for advancing AI technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Trophy className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Academic Credibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  University-backed validation and peer-reviewed research supporting our AI solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Student Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Internship and scholarship programs connecting students with real-world AI applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Innovation Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborative research spaces for developing next-generation AI technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold/10 to-navy/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-navy mb-8">
            Research Areas & Focus
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Natural Language Processing</h3>
              <p className="text-muted-foreground text-sm">
                Advancing multilingual AI capabilities for Nigerian languages and dialects.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Machine Learning Ethics</h3>
              <p className="text-muted-foreground text-sm">
                Developing responsible AI frameworks for African contexts and cultures.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Voice AI Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Creating culturally-aware voice interfaces for diverse Nigerian communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MudiamePartnership;