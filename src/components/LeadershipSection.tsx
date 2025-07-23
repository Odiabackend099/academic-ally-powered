import ceoAustinHeadshot from "@/assets/ceo-austin-headshot.jpg";
import cofounderEva from "@/assets/cofounder-eva.jpg";
import secretaryGlory from "@/assets/secretary-glory.jpg";
import { Button } from "@/components/ui/button";
const LeadershipSection = () => {
  const leaders = [{
    name: "Austyn Eguale",
    title: "Chief Executive Officer",
    image: ceoAustinHeadshot,
    description: "Visionary leader driving Nigeria's AI revolution with university-backed research excellence and strategic partnerships.",
    linkedin: "https://linkedin.com/in/austyn-eguale"
  }, {
    name: "Eva",
    title: "Co-Founder",
    image: cofounderEva,
    description: "Innovation strategist and technical architect, spearheading ODIA AI's voice technology development and market expansion.",
    linkedin: "https://linkedin.com/in/eva-odia"
  }, {
    name: "Glory",
    title: "Executive Secretary",
    image: secretaryGlory,
    description: "Operations excellence leader ensuring seamless coordination across all ODIA AI initiatives and stakeholder relations.",
    linkedin: "https://linkedin.com/in/glory-odia"
  }];
  return <section id="leadership" className="py-20 bg-white">
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
            Led by CEO Austyn Eguale and supported by our exceptional leadership team, 
            ODIA AI combines visionary thinking with operational excellence to deliver 
            Nigeria's most advanced voice AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => <div key={leader.name} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                
                
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gold font-medium text-lg mb-4">
                    {leader.title}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {leader.description}
                </p>
                
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground" onClick={() => window.open(leader.linkedin, '_blank')}>
                  Connect on LinkedIn
                </Button>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white" onClick={() => document.querySelector('#team')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Meet Our Full Team
          </Button>
        </div>
      </div>
    </section>;
};
export default LeadershipSection;