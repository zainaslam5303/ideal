const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#EDE100]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#EDE100]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EDE100]/5 rounded-full blur-3xl"></div>
          
          {/* Floating Dots */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#EDE100]/20 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            />
          ))}
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            
            {/* Column 1: Logo & About */}
            <div className="lg:col-span-2 space-y-6">
            <img 
                    src="/logo.png" 
                    alt="Ideal Food" 
                    className="w-32 h-32 object-contain"
                />
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Pakistan's leading manufacturer of premium quality masaledar snacks. 
                Bringing joy and flavor to every household since 1995.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#EDE100] rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#EDE100] rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.912-3.682c.987-2.079 1.512-4.315 1.512-6.564 0-.1-.002-.2-.007-.299A10.003 10.003 0 0023.953 4.57z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#EDE100] rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#EDE100] rounded-lg flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-5 bg-[#EDE100] rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {["Home", "Products", "About Us", "Become Distributor", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#contact-section" className="text-gray-400 hover:text-[#EDE100] transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#EDE100] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 3: Products */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-5 bg-[#EDE100] rounded-full mr-3"></span>
                Our Products
              </h4>
              <ul className="space-y-4">
                {["Masaledar Pops", "Potato Chips", "Corn Flakes", "Namkeen", "Candies"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#EDE100] transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#EDE100] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 4: Support */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-5 bg-[#EDE100] rounded-full mr-3"></span>
                Support
              </h4>
              <ul className="space-y-4">
                {["FAQ", "Privacy Policy", "Terms & Conditions", "Shipping Policy", "Returns"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-[#EDE100] transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#EDE100] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Newsletter & Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 border-t border-b border-gray-800 mb-12">
            {/* Newsletter */}
            
  
            {/* Contact Info */}
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 text-[#EDE100] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Need Help?
              </h4>
              <div className="space-y-3">
                <p className="text-gray-400 flex items-center">
                  <span className="w-8 text-[#EDE100]">📞</span>
                  +92 300 1234567
                </p>
                <p className="text-gray-400 flex items-center">
                  <span className="w-8 text-[#EDE100]">✉️</span>
                  info@idealfood.com
                </p>
                <p className="text-gray-400 flex items-center">
                  <span className="w-8 text-[#EDE100]">📍</span>
                  D-123, Sector 15, Korangi Industrial Area, Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Ideal Food Industries. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#EDE100] text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-[#EDE100] text-sm transition-colors">
                Terms of Use
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-[#EDE100] text-sm transition-colors">
                Sitemap
              </a>
            </div>
  
            {/* Payment Methods */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 text-sm mr-2">We Accept:</span>
              <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">Visa</div>
              <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">MC</div>
              <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">Easy</div>
              <div className="w-8 h-5 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-400">Jazz</div>
            </div>
          </div>
  
          {/* Back to Top Button */}
          <div className="absolute bottom-8 right-8">
            <a 
              href="#top" 
              className="w-12 h-12 bg-[#EDE100] hover:bg-[#DDD100] rounded-xl flex items-center justify-center text-black shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;