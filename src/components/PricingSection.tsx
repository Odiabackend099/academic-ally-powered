import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Building } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₦15,000",
      period: "/month",
      description: "Perfect for small businesses getting started with voice AI",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Basic Nigerian English voice agent",
        "100 voice interactions/month",
        "WhatsApp integration",
        "Email support",
        "Basic analytics dashboard"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "₦45,000",
      period: "/month",
      description: "Advanced features for growing Nigerian businesses",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Multi-language support (Yoruba, Hausa, Igbo)",
        "500 voice interactions/month",
        "Voice cloning capabilities",
        "Advanced analytics & insights",
        "Priority support",
        "Custom integrations",
        "Emergency response features"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₦150,000",
      period: "/month",
      description: "Full-scale voice AI infrastructure for large organizations",
      icon: <Building className="w-6 h-6" />,
      features: [
        "Unlimited voice interactions",
        "All Nigerian languages & dialects",
        "Custom voice agent training",
        "24/7 dedicated support",
        "On-premise deployment options",
        "Advanced security & compliance",
        "Custom API integrations",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Choose Your Voice AI Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing designed for Nigerian businesses. All plans include our core voice AI technology with natural Nigerian accents.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-gold shadow-lg scale-105' 
                  : 'border border-gray-200 hover:border-navy/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  plan.popular ? 'bg-gold text-navy' : 'bg-navy text-white'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-navy">{plan.name}</CardTitle>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-navy">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-gold hover:bg-gold/90 text-navy' 
                      : 'bg-navy hover:bg-navy-light text-white'
                  }`}
                  onClick={() => {
                    if (plan.name === 'Enterprise') {
                      window.open('https://wa.me/+2348123456789?text=Hello%20ODIA%20AI!%20I%20need%20Enterprise%20pricing%20information.', '_blank');
                    } else {
                      // Handle payment integration here
                      console.log(`Selected ${plan.name} plan`);
                    }
                  }}
                >
                  {plan.buttonText}
                </Button>

                {plan.name !== 'Enterprise' && (
                  <p className="text-xs text-gray-500 text-center mt-3">
                    7-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include Nigerian cultural intelligence and local business context understanding
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ GDPR & NDPR Compliant</span>
            <span>✓ Lagos Data Centers</span>
            <span>✓ 24/7 Nigerian Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;