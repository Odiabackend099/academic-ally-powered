import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";

const Security = () => {
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
              Security & Compliance
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade security for voice AI infrastructure
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Lock className="w-6 h-6 text-gold" />
                  <span>Data Encryption</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All data is protected with military-grade encryption:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 for data in transit</li>
                  <li>End-to-end encryption for voice communications</li>
                  <li>Encrypted API communications with token-based authentication</li>
                  <li>Zero-knowledge architecture for sensitive voice data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <CheckCircle className="w-6 h-6 text-gold" />
                  <span>Compliance Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  ODIA AI maintains compliance with international standards:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>NDPR:</strong> Nigeria Data Protection Regulation compliance</li>
                  <li><strong>GDPR:</strong> General Data Protection Regulation for EU users</li>
                  <li><strong>ISO 27001:</strong> Information Security Management Systems</li>
                  <li><strong>SOC 2 Type II:</strong> Security, availability, and confidentiality</li>
                  <li><strong>HIPAA:</strong> Healthcare data protection for medical voice agents</li>
                  <li><strong>PCI DSS:</strong> Payment card industry security standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <Eye className="w-6 h-6 text-gold" />
                  <span>Access Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Multi-layered access control and monitoring:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Role-based access control (RBAC) for all systems</li>
                  <li>Multi-factor authentication (MFA) for administrative access</li>
                  <li>API key management with granular permissions</li>
                  <li>Real-time monitoring and anomaly detection</li>
                  <li>Automated security incident response</li>
                  <li>Regular access reviews and privilege auditing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-navy">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                  <span>Incident Response</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Comprehensive security incident response procedures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>24/7 security operations center (SOC) monitoring</li>
                  <li>Automated threat detection and response systems</li>
                  <li>Incident classification and escalation procedures</li>
                  <li>Customer notification within 72 hours of incidents</li>
                  <li>Post-incident analysis and prevention measures</li>
                  <li>Regular security drills and tabletop exercises</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Infrastructure Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our cloud infrastructure is secured with enterprise-grade measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Multi-region deployment with automatic failover</li>
                  <li>Network segmentation and micro-segmentation</li>
                  <li>DDoS protection and web application firewalls</li>
                  <li>Regular vulnerability assessments and penetration testing</li>
                  <li>Secure development lifecycle (SDLC) practices</li>
                  <li>Container security and image scanning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Data Residency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We maintain data sovereignty and local compliance:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Primary data centers located in Lagos, Nigeria</li>
                  <li>Optional data residency in other African countries</li>
                  <li>Compliance with local data localization requirements</li>
                  <li>Cross-border data transfer agreements where needed</li>
                  <li>Backup and disaster recovery within Africa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Security Training</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  All ODIA AI team members undergo comprehensive security training including 
                  data protection awareness, phishing prevention, and secure coding practices. 
                  Regular security assessments ensure ongoing compliance and improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20">
              <CardHeader>
                <CardTitle className="text-navy">Report Security Issues</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>If you discover a security vulnerability:</p>
                <div className="mt-4 space-y-2">
                  <p><strong>Security Email:</strong> security@odia.ai</p>
                  <p><strong>PGP Key:</strong> Available upon request</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    We appreciate responsible disclosure and will work with security researchers 
                    to address vulnerabilities promptly.
                  </p>
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

export default Security;