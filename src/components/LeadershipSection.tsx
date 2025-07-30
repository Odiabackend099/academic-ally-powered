import { Button } from "@/components/ui/button";

const LeadershipSection = () => {
  const directors = [
    {
      name: "Austyn Eguale",
      title: "Chief Executive Officer (CEO)",
      image: "/lovable-uploads/5c18d79c-5716-4228-991c-382e5765b4b8.png",
      bio: "Visionary founder and product architect leading Nigeria's voice AI revolution. Builder of ODIA AI's national infrastructure and university-backed innovations.",
      linkedin: "https://linkedin.com/in/austyn-eguale"
    },
    {
      name: "Peter Ntaji",
      title: "Director, Government Partnerships",
      image: "/lovable-uploads/c9cf1bac-6327-45ef-bdeb-4c7fb6a78a29.png",
      bio: "Leadership advisor and governance strategist focused on state-level adoption of ODIA emergency voice systems like Cross AI Protect.",
      linkedin: "https://linkedin.com/in/peter-ntaji"
    },
    {
      name: "Benjamin Nwoye",
      title: "Director, Commercial Strategy",
      image: "/lovable-uploads/d2a9bd74-7717-401d-96c4-cd185b6bca6d.png",
      bio: "Strategic growth leader bridging automotive, tech, and enterprise adoption of ODIA voice automation. CEO of RS Autotech.",
      linkedin: "https://linkedin.com/in/benjamin-nwoye"
    }
  ];

  const coreTeam = [
    {
      name: "GloryGold Eseose",
      title: "Executive Secretary",
      image: "/lovable-uploads/5c18d79c-5716-4228-991c-382e5765b4b8.png",
      bio: "Operational excellence and legal documentation head, ensuring smooth coordination across CAC, research, and internal initiatives.",
      linkedin: "https://linkedin.com/in/glorygold"
    },
    {
      name: "Setale Eguale",
      title: "Director, International Relations (NBSC Liaison)",
      image: "/lovable-uploads/c9cf1bac-6327-45ef-bdeb-4c7fb6a78a29.png",
      bio: "Global voice ambassador connecting ODIA AI with international standards and education systems through NBSC and strategic diplomacy.",
      linkedin: "https://linkedin.com/in/setale-eguale"
    },
    {
      name: "Nnamdi Okeke",
      title: "Software Developer, AI Systems",
      image: "/lovable-uploads/d2a9bd74-7717-401d-96c4-cd185b6bca6d.png",
      bio: "Backend engineer and full-stack builder powering ODIA AI's agent infrastructure, including TTS, Claude integrations, and Supabase flows.",
      linkedin: "https://linkedin.com/in/nnamdi-okeke"
    }
  ];
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            Leadership Team
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
            MEET OUR
            <br />
            <span className="text-gold">LEADERSHIP TEAM</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Led by CEO Austyn Eguale and backed by a strong director board and execution team, 
            ODIA AI delivers Nigeria's most advanced voice-powered AI solutions.
          </p>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Board of Directors</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {directors.map((director) => (
              <div key={director.name} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={director.image} 
                    alt={`${director.name} - ${director.title}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {director.name}
                    </h4>
                    <p className="text-gold font-medium text-lg mb-4">
                      {director.title}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {director.bio}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-gold-foreground" 
                    onClick={() => window.open(director.linkedin, '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">Core Team</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {coreTeam.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gold font-medium text-lg mb-4">
                      {member.title}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-gold-foreground" 
                    onClick={() => window.open(member.linkedin, '_blank')}
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            We are a voice AI company grounded in research, powered by empathy, and built by Nigerians for Africa. 
            Led by CEO Austyn Eguale with support from Mudiame University's research excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
export default LeadershipSection;