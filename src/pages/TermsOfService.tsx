import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, FileText, AlertTriangle, Users } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <FileText className="w-6 h-6 text-gold" />
                  <span>Service Agreement</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By using ODIA AI services, you agree to these terms. Our voice AI infrastructure 
                  is provided "as is" with continuous improvements and updates.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Services are available 24/7 with 99.9% uptime SLA</li>
                  <li>Voice agents are trained with Nigerian cultural context</li>
                  <li>API access requires valid authentication and rate limits apply</li>
                  <li>Custom integrations require separate agreements</li>
                  <li>Emergency response services have specific compliance requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Users className="w-6 h-6 text-gold" />
                  <span>User Responsibilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Users must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate business information and contact details</li>
                  <li>Use services in compliance with Nigerian and international laws</li>
                  <li>Maintain security of API keys and authentication credentials</li>
                  <li>Not attempt to reverse engineer or duplicate our AI models</li>
                  <li>Report security vulnerabilities responsibly</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                  <span>Limitations & Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ODIA AI's liability is limited to the extent permitted by Nigerian law:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maximum liability is limited to amounts paid for services</li>
                  <li>No warranty for specific business outcomes or results</li>
                  <li>AI responses are generated and may require human oversight</li>
                  <li>Users are responsible for compliance with their industry regulations</li>
                  <li>Force majeure events may affect service availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ODIA AI retains ownership of all proprietary technology, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Voice AI models and training methodologies</li>
                  <li>Nigerian cultural context databases</li>
                  <li>Software, APIs, and technical infrastructure</li>
                  <li>Trademarks, logos, and brand materials</li>
                </ul>
                <p>
                  Users retain ownership of their business data and voice recordings, 
                  with limited license granted to ODIA AI for service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Payment terms for ODIA AI services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Monthly subscriptions billed in advance</li>
                  <li>Usage-based charges calculated monthly</li>
                  <li>7-day grace period for payment processing</li>
                  <li>Service suspension after 30 days of non-payment</li>
                  <li>Refunds processed according to our refund policy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Either party may terminate services with 30 days written notice. 
                  Immediate termination may occur for breach of terms or non-payment. 
                  Upon termination, users have 30 days to export their data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  These terms are governed by Nigerian law. Disputes will be resolved 
                  through arbitration in Lagos, Nigeria, in accordance with Nigerian 
                  Arbitration and Conciliation Act.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>For questions about these terms:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> legal@odia.ai</p>
                  <p><strong>Address:</strong> INTECH.ODIA LTD, Victoria Island, Lagos, Nigeria</p>
                  <p><strong>Phone:</strong> +234 812 345 6789</p>
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

export default TermsOfService;