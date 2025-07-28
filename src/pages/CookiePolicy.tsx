import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, Shield, Info } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cookie className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Info className="w-6 h-6 text-gold" />
                  <span>What Are Cookies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide better services and understand how users interact with our platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Settings className="w-6 h-6 text-gold" />
                  <span>Types of Cookies We Use</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-navy mb-2">Essential Cookies</h4>
                  <p>Required for basic website functionality including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>User authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Basic website navigation and features</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-navy mb-2">Analytics Cookies</h4>
                  <p>Help us understand website usage and performance:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Google Analytics for visitor statistics</li>
                    <li>Page views and user journey tracking</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-navy mb-2">Functional Cookies</h4>
                  <p>Enhance user experience and remember preferences:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Language and region preferences</li>
                    <li>Chat widget settings and history</li>
                    <li>Form data and user preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-navy mb-2">Marketing Cookies</h4>
                  <p>Used for targeted advertising and marketing:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Social media integration</li>
                    <li>LinkedIn and Facebook pixels</li>
                    <li>Conversion tracking for marketing campaigns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Shield className="w-6 h-6 text-gold" />
                  <span>Cookie Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You can control cookies through:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings to block or delete cookies</li>
                  <li>Our cookie consent banner on first visit</li>
                  <li>Opting out of analytics tracking</li>
                  <li>Disabling marketing cookies while keeping functional ones</li>
                </ul>
                <p className="mt-4">
                  Note: Disabling essential cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use the following third-party services that may set cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Website usage and performance tracking</li>
                  <li><strong>LinkedIn:</strong> Professional network integration and marketing</li>
                  <li><strong>WhatsApp:</strong> Business messaging integration</li>
                  <li><strong>Supabase:</strong> Backend infrastructure and authentication</li>
                  <li><strong>ElevenLabs:</strong> Voice AI service integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Essential cookies:</strong> Up to 1 year</li>
                  <li><strong>Analytics cookies:</strong> Up to 2 years</li>
                  <li><strong>Marketing cookies:</strong> Up to 1 year</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>For questions about our cookie policy:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> privacy@odia.ai</p>
                  <p><strong>Address:</strong> INTECH.ODIA LTD, Victoria Island, Lagos, Nigeria</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;