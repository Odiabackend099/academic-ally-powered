
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { validateEmail, validateName, sanitizeInput, checkRateLimit } from "@/utils/validation";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    interest: "voice-ai"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!checkRateLimit('contact_form', 3)) {
      toast({
        title: "Rate Limited",
        description: "Please wait before submitting another form.",
        variant: "destructive"
      });
      return;
    }

    // Validate inputs
    if (!validateName(formData.name)) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (2-100 characters).",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Sanitize form data
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      message: sanitizeInput(formData.message),
      interest: formData.interest
    };

    // Send form data to backend
    console.log("Contact form submitted:", sanitizedData);
    toast({
      title: "Form Submitted",
      description: "Thank you for your interest! Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "", interest: "voice-ai" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
            READY TO TRANSFORM YOUR
            <br />
            BUSINESS WITH AI?
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
            Contact CEO Austyn Eguale and our team to discover how ODIA AI can revolutionize your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-white">Get Started Today</h3>
              <p className="text-white/70">Tell us about your AI needs</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60"
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white"
                >
                  <option value="voice-ai">Voice AI Agents</option>
                  <option value="whatsapp">WhatsApp Automation</option>
                  <option value="emergency">Emergency Response</option>
                  <option value="business-intel">SmartBiz Intelligence</option>
                  <option value="custom">Custom Solution</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60"
                />
                <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
                  Contact Our Team
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/70">contact@odia.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/70">+234 (0) 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-gold" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-white/70">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-navy"
                  onClick={() => window.open('https://wa.me/2341234567890', '_blank')}
                >
                  Start WhatsApp Onboarding
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-white hover:bg-white hover:text-navy"
                  onClick={() => window.open('https://odia.dev/demo', '_blank')}
                >
                  Try Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-white hover:bg-white hover:text-navy"
                  onClick={() => window.open('https://odia.dev/schedule', '_blank')}
                >
                  Schedule Call with CEO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
