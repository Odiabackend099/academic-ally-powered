import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import crossAILogo from "@/assets/cross-ai-logo.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Shield, Network, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CrossAIPartnership = () => {
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
                  src={crossAILogo} 
                  alt="Cross AI International Logo" 
                  className="w-24 h-24 rounded-lg bg-white/10 p-4"
                />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                Partnership with
                <br />
                <span className="text-gold font-medium">Cross AI International</span>
              </h1>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Global collaboration bringing international AI standards and cross-border 
                artificial intelligence solutions to Nigeria and Africa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gold hover:bg-gold/90 text-navy"
                  onClick={() => window.open('https://cross-ai.international', '_blank')}
                >
                  Visit Cross AI International
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-navy"
                  onClick={() => window.open('mailto:global@odia.dev?subject=International Partnership Inquiry', '_blank')}
                >
                  Global Partnership Inquiry
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-gold mb-6">Global Reach</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">25+</div>
                    <div className="text-white/60 text-sm">Countries Connected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-white/60 text-sm">AI Models Deployed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-white/60 text-sm">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-white/60 text-sm">Global Support</div>
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
              International Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Through Cross AI International, ODIA AI gains access to global best practices, 
              international standards, and cross-border AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compliance with international AI standards and best practices across all implementations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Network className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">International Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamless integration with global AI networks and international business systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">AI Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to cutting-edge AI technologies and innovations from leading global research centers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Cross-Border Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise-grade security protocols for international data protection and compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold/10 to-navy/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-navy mb-8">
            Cross-Border Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Multi-Regional Deployment</h3>
              <p className="text-muted-foreground text-sm">
                AI solutions that work seamlessly across different countries and regulatory environments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Global Language Support</h3>
              <p className="text-muted-foreground text-sm">
                Multilingual AI capabilities supporting international business communications.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">International Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Meeting regulatory requirements across multiple jurisdictions and data protection laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrossAIPartnership;