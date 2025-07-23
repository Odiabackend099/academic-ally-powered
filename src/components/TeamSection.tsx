import teamPhoto from "@/assets/team-photo.jpg";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  return (
    <section id="team" className="relative py-20 bg-navy text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${teamPhoto})` }}
      />
      
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-white/60 text-sm font-medium tracking-wide uppercase mb-4">
              Our Team
            </p>
            <h2 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
              YOUR BEST INTEREST IS OUR
              <br />
              BEST INTEREST
            </h2>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-white/80 leading-relaxed text-lg">
              Fiduciaries, investors, and advisors. We are not just one, we are all, and we have over 30 years of 
              cycle-tested experience demonstrating it. Additionally, as a predominantly employee-owned and 
              independent firm, we have the flexibility to seek solutions tailored to your needs.
            </p>
            <p className="text-white/60 italic mt-6">
              All investment advisers have a fiduciary duty to act in their clients' best interests
            </p>
          </div>

          {/* Team Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="Team consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="Executive team" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative h-64 bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="Team collaboration" 
                className="w-full h-full object-cover object-right"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Meet The Team
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;