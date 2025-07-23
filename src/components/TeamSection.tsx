
import odiaTeam from "@/assets/odia-team.jpg";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const handleMeetTeam = () => {
    window.open('https://odia.dev/team', '_blank');
  };

  const handleResearchCulture = () => {
    window.open('https://odia.dev/research-culture', '_blank');
  };

  return (
    <section id="team" className="relative py-20 bg-navy text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${odiaTeam})` }}
      />
      
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

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

          {/* Team Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={odiaTeam} 
                alt="ODIA AI Research Team at Mudiame International University" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={odiaTeam} 
                alt="Nigerian Voice AI Engineers and Developers" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={odiaTeam} 
                alt="University-Industry Collaboration Team" 
                className="w-full h-full object-cover object-right"
              />
            </div>
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
