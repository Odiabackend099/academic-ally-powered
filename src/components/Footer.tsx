
const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-8">
              The Pursuit of
              <br />
              AI Excellence
            </h2>
          </div>

          {/* Right Content - Logo and Links */}
          <div className="text-right">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-block border border-white p-4">
                <div className="text-2xl font-bold tracking-wider">
                  ODIA
                  <div className="text-xs font-normal tracking-wide">AI</div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2 mb-8">
              <div>
                <a href="#contact" className="hover:text-gold transition-colors duration-300">
                  Contact
                </a>
              </div>
              <div>
                <a href="#careers" className="hover:text-gold transition-colors duration-300">
                  Careers
                </a>
              </div>
              <div>
                <a href="#partnerships" className="hover:text-gold transition-colors duration-300">
                  Partnerships
                </a>
              </div>
              <div>
                <a href="#linkedin" className="hover:text-gold transition-colors duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 INTECH.ODIA LTD. All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/60">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#partnerships" className="hover:text-white transition-colors duration-300">
                Partnership Terms
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-white/40 text-xs leading-relaxed">
            © 2025 INTECH.ODIA LTD (Brand: ODIA AI). All Rights Reserved. ODIA AI is Nigeria's first voice-powered 
            AI infrastructure company, backed by Mudiame International University and strategic partnerships with 
            Cross AI International and Intech Wealth Advisory AI. Our university foundation ensures research-grade 
            innovation and global standards in artificial intelligence solutions. The content of this website is for 
            general, informational purposes. Nothing contained on this website should be construed as an offer to sell 
            or the solicitation of any AI services without proper consultation. Information on this website should not 
            be the basis for making technology decisions without professional AI advisory consultation.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
