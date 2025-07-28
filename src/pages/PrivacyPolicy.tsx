import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Eye className="w-6 h-6 text-gold" />
                  <span>Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ODIA AI collects information necessary to provide our voice AI infrastructure services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Voice recordings and audio data for AI training and service delivery</li>
                  <li>Contact information including name, email, phone number, and business details</li>
                  <li>Technical data including IP addresses, browser information, and usage analytics</li>
                  <li>Business integration data for API and service customization</li>
                  <li>Payment and billing information for service subscriptions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Lock className="w-6 h-6 text-gold" />
                  <span>How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Your information is used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our voice AI services and infrastructure</li>
                  <li>Train and enhance AI models with Nigerian cultural context</li>
                  <li>Process transactions and manage your account</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Send important service updates and notifications</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <FileText className="w-6 h-6 text-gold" />
                  <span>Data Protection & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We implement enterprise-grade security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all voice data transmissions</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Access controls and authentication for all systems</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                  <li>NDPR and GDPR compliance for data processing</li>
                  <li>Data retention policies with automatic deletion schedules</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Under NDPR and GDPR, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data and understand how it's processed</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal data (right to be forgotten)</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Data portability and transfer to other services</li>
                  <li>Withdraw consent for data processing at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@odia.ai" className="text-gold hover:underline">
                    privacy@odia.ai
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">International Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our primary data processing occurs within Nigeria and Africa. When data is transferred 
                  internationally for service delivery or partnerships, we ensure adequate protection 
                  through appropriate safeguards and legal frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  For privacy-related inquiries, contact our Data Protection Officer:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> privacy@odia.ai</p>
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

export default PrivacyPolicy;