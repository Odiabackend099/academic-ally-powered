
import ceoAustinHeadshot from "@/assets/ceo-austin-headshot.jpg";
import cofounderEva from "@/assets/cofounder-eva.jpg";
import secretaryGlory from "@/assets/secretary-glory.jpg";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const handleMeetTeam = () => {
    window.open('https://odia.dev/team', '_blank');
  };

  const handleResearchCulture = () => {
    window.open('https://odia.dev/research-culture', '_blank');
  };

  const teamMembers = [
    {
      name: "CEO Austyn Eguale",
      role: "Chief Executive Officer",
      image: ceoAustinHeadshot
    },
    {
      name: "Co-founder Eva",
      role: "Co-Founder & Innovation Lead",
      image: cofounderEva
    },
    {
      name: "Secretary Glory",
      role: "Executive Secretary",
      image: secretaryGlory
    }
  ];

  return (
    <section id="team" className="relative py-20 bg-navy text-white overflow-hidden">
      {/* Navy Background */}
      <div className="absolute inset-0 bg-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-white/60 text-sm font-medium tracking-wide uppercase mb-4">
              Our Research Team
            </p>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
              YOUR AI SUCCESS IS OUR
              <br />
              AI SUCCESS
            </h2>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-white/80 leading-relaxed text-lg">
              University researchers, AI engineers, and voice technology pioneers led by CEO Austyn Eguale. 
              We are not just one, we are all, and we have years of cycle-tested experience in artificial intelligence 
              and machine learning. Additionally, as a university-backed and research-driven firm, we have the academic 
              foundation to develop solutions tailored to Nigeria's unique needs.
            </p>
            <p className="text-white/60 italic mt-6">
              Led by CEO Austyn Eguale and backed by Mudiame International University's research excellence
            </p>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="relative group">
                <div className="relative h-80 bg-white/10 rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at ODIA AI`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/90 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className="text-gold text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={handleMeetTeam}
            >
              Meet The Team
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={handleResearchCulture}
            >
              Research Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
