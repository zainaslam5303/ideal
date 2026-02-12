import { Player } from "@lottiefiles/react-lottie-player";

const DistributorHero = () => {
  return (
    <div className="relative w-full bg-white">
      {/* Main Container */}
      <div className="hero relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
        
        {/* Lottie Animation Background */}
        <div className="hero__media absolute inset-0 w-full h-full">
          {/* Desktop Version */}
          <Player
            autoplay
            loop
            src="https://cdn.shopify.com/s/files/1/0917/0347/6515/files/Become_a_distributor_New_7f42ec91-a7bc-42f9-9b3f-15468a8ccffc.json?v=1749547736"
            className="hidden md:block w-full h-full object-cover"
            background="transparent"
            style={{ width: '100%', height: '100%' }}
          />
          
          {/* Mobile Version */}
          <Player
            autoplay
            loop
            src="https://cdn.shopify.com/s/files/1/0917/0347/6515/files/Become_a_distributor_Mobile-13_June.json?v=1750050460"
            className="block md:hidden w-full h-full object-cover"
            background="transparent"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Content Overlay - Mobile Optimized */}
        <div className="hero__text absolute inset-0 flex items-end md:items-center pb-10 md:pb-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto md:mx-0">
              {/* Yellow Background Container - Mobile Friendly */}
              <div className="md:bg-[#FFD600] p-2 mb-60 md:mb-0 sm:p-8 md:p-10 lg:p-12 rounded-lg md:rounded-lg md:shadow-2xl w-full md:w-auto md:inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4 leading-tight">
                  Become our distributor
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-black/80 mb-4 md:mb-6 leading-relaxed">
                  Join the Ideal Food Industries network and together, let's bring masaledar pops to every household in Pakistan!
                </p>
                
                <a 
                  href="/become-a-distributor"
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
    </div>
  );
};

export default DistributorHero;