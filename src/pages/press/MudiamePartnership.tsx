import Navigation from "@/components/Navigation";
import PressArticle from "@/components/PressArticle";
import Footer from "@/components/Footer";

const MudiamePartnership = () => {
  const content = `
    <p>LAGOS, Nigeria - January 15, 2025 - ODIA AI, Nigeria's pioneering voice-powered AI infrastructure company, today announced a groundbreaking strategic partnership with Mudiame International University to advance artificial intelligence research and development across West Africa.</p>

    <p>This collaboration marks a significant milestone in bridging the gap between academic excellence and cutting-edge AI innovation, positioning Nigeria as a leader in AI research on the African continent.</p>

    <h2>Research Excellence Initiative</h2>
    
    <p>The partnership will establish the <strong>ODIA-Mudiame AI Research Center</strong>, a state-of-the-art facility dedicated to developing AI solutions specifically tailored for African contexts. The center will focus on:</p>
    
    <ul>
      <li><strong>Multilingual AI Development:</strong> Creating voice AI systems that support major Nigerian languages including Yoruba, Igbo, and Hausa</li>
      <li><strong>Educational Technology:</strong> Developing AI-powered learning platforms for enhanced educational outcomes</li>
      <li><strong>Healthcare AI:</strong> Building voice-enabled diagnostic and patient care systems for rural and urban healthcare facilities</li>
      <li><strong>Agricultural Intelligence:</strong> Creating AI systems to support Nigeria's agricultural sector through smart farming solutions</li>
    </ul>

    <h2>Joint Research Programs</h2>
    
    <p>"This partnership represents our commitment to fostering the next generation of AI talent in Nigeria," said <strong>Austyn Eguale</strong>, CEO of ODIA AI. "By combining our industry expertise with Mudiame University's academic rigor, we're creating opportunities for groundbreaking research that will have real-world impact."</p>

    <p>The collaboration will include:</p>
    
    <ul>
      <li>Joint PhD and Masters programs in AI and Machine Learning</li>
      <li>Student internship and research placement opportunities at ODIA AI</li>
      <li>Faculty exchange programs and collaborative research projects</li>
      <li>Annual AI symposiums and technology showcases</li>
    </ul>

    <h2>Impact on Nigerian AI Ecosystem</h2>
    
    <p><strong>Dr. Sarah Adebayo</strong>, Vice-Chancellor of Mudiame International University, emphasized the partnership's significance: "This collaboration will accelerate Nigeria's AI capabilities and ensure our graduates are equipped with the skills needed for the digital economy of tomorrow."</p>

    <p>The research center is expected to:</p>
    
    <ul>
      <li>Train over 500 AI specialists annually</li>
      <li>Publish cutting-edge research in international AI journals</li>
      <li>Develop 20+ AI applications specifically for African markets</li>
      <li>Create intellectual property and patents in AI technology</li>
    </ul>

    <h2>Future Vision</h2>
    
    <p>The partnership aligns with Nigeria's National AI Strategy and supports the government's vision of becoming a leading AI hub in Africa. Both organizations are committed to ethical AI development that respects local values and addresses specific regional challenges.</p>

    <p>"We're not just importing AI technology; we're creating it here in Nigeria, by Nigerians, for Africa," added Eguale. "This partnership with Mudiame University is a crucial step in building Nigeria's AI sovereignty."</p>

    <p>The ODIA-Mudiame AI Research Center is scheduled to officially launch in March 2025, with the first cohort of research students beginning their programs in September 2025.</p>

    <p><strong>About ODIA AI:</strong> Founded in 2024, ODIA AI is Nigeria's first voice-powered AI infrastructure company, specializing in conversational AI agents, emergency response systems, and business intelligence solutions.</p>

    <p><strong>About Mudiame International University:</strong> Established as a leading institution for technology and innovation education in Nigeria, Mudiame International University is committed to producing world-class graduates in emerging technologies.</p>
  `;

  return (
    <div className="min-h-screen">
      <Navigation />
      <PressArticle
        date="January 15, 2025"
        title="ODIA AI Partners with Mudiame International University for Research Excellence"
        author="ODIA AI Press Team"
        content={content}
        imageUrl="/api/placeholder/800/400"
      />
      <Footer />
    </div>
  );
};

export default MudiamePartnership;