import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Building, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { validateEmail, validateName, validatePhone, sanitizeInput, checkRateLimit } from "@/utils/validation";
import { supabase } from "@/integrations/supabase/client";

interface CallSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallScheduler = ({ isOpen, onClose }: CallSchedulerProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    businessType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!checkRateLimit('schedule_call', 2)) {
      toast({
        title: "Rate Limited",
        description: "Please wait before scheduling another call.",
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

    if (formData.phone && !validatePhone(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }

    // Validate date is in the future
    const selectedDate = new Date(formData.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      toast({
        title: "Invalid Date",
        description: "Please select a future date.",
        variant: "destructive"
      });
      return;
    }

    // Sanitize form data
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      company: sanitizeInput(formData.company),
      phone: sanitizeInput(formData.phone),
      date: formData.preferredDate,
      time: formData.preferredTime,
      businessType: formData.businessType,
      message: sanitizeInput(formData.message)
    };

    try {
      const { data, error } = await supabase.functions.invoke('secure-call-scheduler', {
        body: sanitizedData
      });

      if (error) {
        console.error('Call scheduler error:', error);
        toast({
          title: "Scheduling Failed",
          description: "Failed to schedule call. Please try again.",
          variant: "destructive"
        });
        return;
      }

      console.log("Call scheduled successfully:", data.submissionId);
      toast({
        title: "Meeting Request Submitted",
        description: "Our team will contact you within 24 hours to confirm your meeting with CEO Austyn Eguale.",
      });
      onClose();
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        businessType: "",
        message: ""
      });
    } catch (error) {
      console.error('Call scheduler submission error:', error);
      toast({
        title: "Scheduling Failed",
        description: "Failed to schedule call. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-navy flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-gold" />
            Schedule Call with CEO Austyn Eguale
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Company/Organization *
              </Label>
              <Input
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                placeholder="Enter your company name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+234 xxx xxx xxxx"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredDate">
                Preferred Date *
              </Label>
              <Input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time *
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM (WAT)</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM (WAT)</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM (WAT)</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM (WAT)</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM (WAT)</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM (WAT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <Select onValueChange={(value) => setFormData({...formData, businessType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sme">Small/Medium Enterprise</SelectItem>
                <SelectItem value="corporate">Large Corporation</SelectItem>
                <SelectItem value="government">Government Agency</SelectItem>
                <SelectItem value="university">University/Research</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Brief description of your AI needs or questions for the CEO"
              rows={3}
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gold hover:bg-gold/90 text-navy"
            >
              Schedule Meeting
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gold text-gold hover:bg-gold hover:text-navy"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallScheduler;