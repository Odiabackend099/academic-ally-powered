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
              Investment Excellence
            </h2>
          </div>

          {/* Right Content - Logo and Links */}
          <div className="text-right">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-block border border-white p-4">
                <div className="text-2xl font-bold tracking-wider">
                  IEQ
                  <div className="text-xs font-normal tracking-wide">CAPITAL</div>
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
              © 2020 IEQ Capital LLC. All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/60">
              <a href="#privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#adv" className="hover:text-white transition-colors duration-300">
                ADV Form
              </a>
              <a href="#crs" className="hover:text-white transition-colors duration-300">
                CRS Form
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-white/40 text-xs leading-relaxed">
            © 2020 IEQ Capital LLC. All Rights Reserved. / The content of this website is for general, informational purposes. 
            Nothing contained on this website should be construed as an offer to sell or the solicitation of any offer to buy 
            any security or other financial instrument or product offered or managed by IEQ or any other issuer or company. 
            The provision of this information does not constitute the rendering of investment, consulting, legal, accounting, 
            tax, or other professional advice or services. Information on this website should not be the basis of or be relied 
            upon for making any investment or other decisions, nor should it be construed as advice, endorsement or recommendation. 
            Special Notice to Non-U.S. Investors: Each of the investment products and services referred to on this website is 
            intended to be made available to U.S. residents. This website shall not be considered a solicitation or offering 
            for any investment product or service to any person in any jurisdiction where such solicitation or offer would be unlawful.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;