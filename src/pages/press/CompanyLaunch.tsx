import Navigation from "@/components/Navigation";
import PressArticle from "@/components/PressArticle";
import Footer from "@/components/Footer";
import companyLaunchImage from "@/assets/press-company-launch.jpg";

const CompanyLaunch = () => {
  const content = `
    <p>LAGOS, Nigeria - December 20, 2024 - ODIA AI officially launched today as Nigeria's first voice-powered AI infrastructure company, marking a revolutionary milestone in the country's technology sector and positioning Nigeria as a leader in conversational AI innovation across Africa.</p>

    <p>The company, founded by visionary entrepreneur <strong>Austyn Eguale</strong>, introduces cutting-edge voice AI technology designed specifically for African markets, languages, and business contexts.</p>

    <h2>Pioneering Voice AI Technology</h2>
    
    <p>ODIA AI's launch introduces several groundbreaking AI agents that represent the future of human-computer interaction in Africa:</p>
    
    <ul>
      <li><strong>Agent Lexi:</strong> Advanced customer service AI supporting multiple Nigerian languages</li>
      <li><strong>Agent ODIA:</strong> Comprehensive business intelligence and automation system</li>
      <li><strong>Agent MISS:</strong> Emergency response and crisis management AI</li>
      <li><strong>Agent Atlas:</strong> Geographic and logistics optimization AI</li>
      <li><strong>Agent Miss Legal:</strong> Legal assistance and compliance AI for Nigerian law</li>
    </ul>

    <h2>Addressing African Challenges</h2>
    
    <p>"Traditional AI solutions are built for Western markets and don't understand the nuances of African languages, cultures, and business practices," said <strong>Austyn Eguale</strong>, CEO and Founder of ODIA AI. "We're changing that by building AI that truly understands and serves African needs."</p>

    <p>ODIA AI's technology addresses critical infrastructure gaps:</p>
    
    <ul>
      <li><strong>Language Accessibility:</strong> Supporting Yoruba, Igbo, Hausa, and English with natural conversation flows</li>
      <li><strong>Low-Bandwidth Optimization:</strong> Voice AI that works efficiently on 2G and 3G networks</li>
      <li><strong>Cultural Sensitivity:</strong> AI trained on African contexts, customs, and communication styles</li>
      <li><strong>Local Business Integration:</strong> Seamless integration with popular African business tools and platforms</li>
    </ul>

    <h2>Market Opportunity and Vision</h2>
    
    <p>Africa's AI market is projected to reach $2.9 billion by 2030, with voice AI representing the fastest-growing segment. ODIA AI is positioned to capture significant market share through its locally-developed, culturally-aware technology.</p>

    <p>"We're not just building another AI company," explained <strong>Rita Agada</strong>, Co-founder and CTO. "We're creating the foundation for Africa's AI-powered future, where technology truly serves our people and businesses."</p>

    <h2>Strategic Partnerships and Growth</h2>
    
    <p>ODIA AI launches with strategic partnerships across key sectors:</p>
    
    <ul>
      <li><strong>Financial Services:</strong> Partnerships with leading Nigerian banks for voice banking</li>
      <li><strong>Healthcare:</strong> Collaborations with health organizations for AI-powered patient care</li>
      <li><strong>Education:</strong> Integration with educational institutions for AI-enhanced learning</li>
      <li><strong>Government:</strong> Pilot programs for emergency response and citizen services</li>
    </ul>

    <h2>Technology Infrastructure</h2>
    
    <p>ODIA AI's infrastructure is built on:</p>
    
    <ul>
      <li>Advanced natural language processing optimized for African languages</li>
      <li>Edge computing capabilities for reduced latency across Africa</li>
      <li>Secure, GDPR and NDPR compliant data handling</li>
      <li>Scalable cloud architecture supporting millions of concurrent users</li>
    </ul>

    <h2>Investment and Team</h2>
    
    <p>The company secured initial funding from leading African venture capital firms and technology investors who recognize the massive opportunity in African AI markets.</p>

    <p>ODIA AI's founding team includes:</p>
    
    <ul>
      <li><strong>Austyn Eguale</strong> - CEO, former AI researcher and tech entrepreneur</li>
      <li><strong>Rita Agada</strong> - CTO, expert in machine learning and distributed systems</li>
      <li><strong>Benjamin Nwoye</strong> - Head of Engineering, specialist in voice AI technologies</li>
      <li><strong>Success Oku Eguale</strong> - Head of Business Development</li>
      <li><strong>Victoria Okoeguale</strong> - Head of Operations</li>
    </ul>

    <h2>Looking Forward</h2>
    
    <p>"This is just the beginning," said Eguale. "Our vision is to make ODIA AI the backbone of conversational AI across Africa, empowering businesses, governments, and individuals with technology that truly understands and serves them."</p>

    <p>ODIA AI plans to expand to 10 African countries by 2026, with localized AI agents for each market. The company is also developing partnerships with international technology companies to bring African AI innovations to global markets.</p>

    <p>Businesses interested in integrating ODIA AI's voice technology can access demos and developer tools through the company's website at odia.dev.</p>

    <p><strong>About ODIA AI:</strong> Founded in 2024 and headquartered in Lagos, Nigeria, ODIA AI is the first voice-powered AI infrastructure company in Nigeria, dedicated to creating conversational AI solutions that understand and serve African markets, languages, and cultures.</p>
  `;

  return (
    <div className="min-h-screen">
      <Navigation />
      <PressArticle
        date="December 20, 2024"
        title="Nigeria's First Voice-Powered AI Infrastructure Company Launches"
        author="ODIA AI Press Team"
        content={content}
        imageUrl={companyLaunchImage}
      />
      <Footer />
    </div>
  );
};

export default CompanyLaunch;