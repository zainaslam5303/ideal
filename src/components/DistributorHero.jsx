const DistributorHero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Main Container */}
      <div className="hero relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        
        {/* Animated product visuals */}
        <div className="hero__media absolute inset-0 w-full h-full">
          <div className="h-full w-full bg-gradient-to-br from-[#ffea66] via-[#ffd600] to-[#f3b700]">
            <div className="absolute inset-0 bg-black/10" />
            <div className="mx-auto flex h-full w-full max-w-7xl pt-5 lg:items-center justify-center gap-4 px-4 sm:gap-6 md:justify-end md:gap-10 md:px-8 lg:px-12">
              <img
                src="/products/product1.png"
                alt="Product 1"
                className="h-40 w-auto sm:h-48 md:h-64 lg:h-80 animate-[floatUp_3.6s_ease-in-out_infinite]"
              />
              <img
                src="/products/product2.png"
                alt="Product 2"
                className="h-40 w-auto sm:h-48 md:h-64 lg:h-80 animate-[floatDown_3.6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>

        {/* Content Overlay - Mobile Optimized */}
        <div className="hero__text absolute inset-0 flex items-end md:items-center pb-10 md:pb-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto md:mx-0">
              {/* Yellow Background Container - Mobile Friendly */}
              <div className="bg-[#FFD600]/95 p-4 mb-6 sm:mb-10 md:mb-0 sm:p-7 md:p-9 lg:p-10 rounded-xl shadow-2xl w-full md:w-auto md:inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 leading-tight">
                  Become our distributor
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-black/80 mb-4 md:mb-6 leading-relaxed">
                  Join the Ideal Food Industries network and together, let's bring masaledar pops to every household in Pakistan!
                </p>
                
                <a 
                  href="/#contact-section"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-6 md:py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-full transition-all duration-300 text-sm md:text-base w-full sm:w-auto"
                >
                  Connect With Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
};

export default DistributorHero;