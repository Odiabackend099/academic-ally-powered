import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import intechWealthLogo from "@/assets/intech-wealth-logo.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Shield, Bot, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IntechWealthPartnership = () => {
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
                  src={intechWealthLogo} 
                  alt="Intech Wealth Advisory AI Logo" 
                  className="w-24 h-24 rounded-lg bg-white/10 p-4"
                />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                Partnership with
                <br />
                <span className="text-gold font-medium">Intech Wealth Advisory AI</span>
              </h1>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Strategic partnership specializing in financial AI applications, wealth management 
                systems, and intelligent advisory services for the Nigerian financial sector.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gold hover:bg-gold/90 text-navy"
                  onClick={() => window.open('https://intech-wealth.ai', '_blank')}
                >
                  Visit Intech Wealth AI
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-navy"
                  onClick={() => window.open('mailto:wealth@odia.dev?subject=Financial AI Partnership Inquiry', '_blank')}
                >
                  Financial AI Consultation
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-gold mb-6">Financial Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">₦50B+</div>
                    <div className="text-white/60 text-sm">Assets Under Management</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">10,000+</div>
                    <div className="text-white/60 text-sm">Active Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-white/60 text-sm">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-white/60 text-sm">AI Trading Support</div>
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
              Financial AI Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our partnership delivers cutting-edge AI solutions for the financial sector, 
              combining ODIA's voice technology with advanced wealth management capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Financial AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI-powered financial analysis, risk assessment, and investment recommendations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Wealth Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intelligent portfolio management and automated wealth optimization strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Bot className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">Advisory Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Voice-enabled financial advisory services with personalized investment guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                <CardTitle className="text-navy">FinTech Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Secure integration with Nigerian banking systems and financial institutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold/10 to-navy/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-navy mb-8">
            AI-Powered Financial Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Voice Trading Assistant</h3>
              <p className="text-muted-foreground text-sm">
                Execute trades, check portfolio performance, and receive market updates through voice commands.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Risk Assessment AI</h3>
              <p className="text-muted-foreground text-sm">
                Real-time risk analysis and alerts for investment decisions and market volatility.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-navy mb-3">Financial Planning Bot</h3>
              <p className="text-muted-foreground text-sm">
                Personalized financial planning and retirement strategy recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntechWealthPartnership;