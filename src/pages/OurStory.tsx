import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Rocket, Globe, Users, Award, Target } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Vision",
      description: "CEO Austyn Eguale identified the gap in voice AI infrastructure across Nigeria and West Africa",
      icon: <Lightbulb className="w-6 h-6 text-gold" />
    },
    {
      year: "2024",
      title: "Foundation & Research",
      description: "Established partnership with Mudiame International University and began AI research program",
      icon: <Rocket className="w-6 h-6 text-gold" />
    },
    {
      year: "2024",
      title: "Global Partnerships",
      description: "Formed strategic alliances with Cross AI International and Intech Wealth Advisory",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      year: "2025",
      title: "Product Launch",
      description: "Launched Nigeria's first voice AI infrastructure with 5 specialized agents",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      year: "2025",
      title: "Recognition",
      description: "Recognized as Nigeria's leading voice AI infrastructure company",
      icon: <Award className="w-6 h-6 text-gold" />
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We pioneer cutting-edge voice AI solutions that solve real African problems",
      icon: <Lightbulb className="w-8 h-8 text-gold" />
    },
    {
      title: "Cultural Understanding",
      description: "Our AI speaks Nigerian languages and understands local business contexts",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Academic Excellence",
      description: "Backed by university research and continuous learning methodologies",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Global Standards",
      description: "Meeting international quality standards while serving local needs",
      icon: <Globe className="w-8 h-8 text-gold" />
    }
  ];

  const handleJoinTeam = () => {
    window.open('mailto:careers@odia.ai?subject=Career Opportunity Inquiry&body=I am interested in joining the ODIA AI team.', '_blank');
  };

  const handlePartnership = () => {
    window.open('mailto:partnerships@odia.ai?subject=Partnership Inquiry&body=I would like to explore partnership opportunities with ODIA AI.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            Our <span className="text-gold">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The journey of building Nigeria's first voice AI infrastructure company, 
            from vision to reality.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-12 h-12 text-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto">
            To democratize voice AI technology across Nigeria and West Africa, making advanced 
            artificial intelligence accessible to businesses of all sizes while preserving 
            cultural identity and linguistic diversity.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:pr-8">
                      <Card className="border-gold/20 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            {milestone.icon}
                            <div>
                              <Badge variant="outline" className="border-gold text-gold mb-2">
                                {milestone.year}
                              </Badge>
                              <h3 className="text-xl font-semibold text-navy">{milestone.title}</h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                    
                    <div className="md:w-1/2 md:pl-8"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-gold/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    {value.icon}
                    <h3 className="text-xl font-semibold text-navy">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="bg-gradient-to-r from-gold/10 to-navy/10 rounded-2xl p-8 md:p-12 text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/src/assets/ceo-austyn-professional.jpg" 
              alt="CEO Austyn Eguale"
              className="w-16 h-16 rounded-full object-cover border-4 border-gold"
            />
          </div>
          <blockquote className="text-lg md:text-xl text-navy italic mb-4">
            "We're not just building voice AI technology; we're creating the infrastructure 
            that will power the next generation of Nigerian businesses and transform how 
            Africa communicates with the world."
          </blockquote>
          <cite className="text-gold font-semibold">- Austyn Eguale, CEO & Founder</cite>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Be Part of Our Story</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building the future of voice AI in Nigeria. Whether you're looking 
            to join our team or partner with us, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy"
              onClick={handleJoinTeam}
            >
              Join Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-navy"
              onClick={handlePartnership}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;