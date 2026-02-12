import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const About = () => {
  const sectionRef = useRef(null);
  const textBlocksRef = useRef([]);

  // THEME COLORS
  const theme = {
    yellow: "#EDE100",
    yellowLight: "#FFD600",
    yellowDark: "#FDB813",
    red: "#DC2626",
    redDark: "#B91C1C",
    black: "#000000",
    blackLight: "#1F2937",
    gradientRed: "radial-gradient(circle at center, #ff1a1a 0%, #cc0000 40%, #990000 70%, #7a0000 100%)"
  };

  const journeyData = [
    {
      id: 1,
      year: "1970",
      title: "The Beginning",
      description: "In their drought-stricken village, the Virani family was forced to sell their ancestral land, which could no longer support their livelihood.",
      image: "/journey/1970s.jpg",
      align: "left",
      milestone: "Humble Beginnings"
    },
    {
      id: 2,
      year: "1974",
      title: "Cinema to Canteen",
      description: "Fate led them to Astron Cinema, where they took on odd jobs. From hanging posters to making sandwiches, they slowly built their foundation.",
      image: "/journey/1974.jpg",
      align: "right",
      milestone: "New Hope"
    },
    {
      id: 3,
      year: "1981",
      title: "Birth of Ideal Food Industries",
      description: "Noticing unsatisfied customers, they decided to make their own wafers. Ideal Food Industries was born in a small cinema canteen.",
      image: "/journey/1981.jpg",
      align: "left",
      milestone: "First Crunch"
    },
    {
      id: 4,
      year: "1984",
      title: "Local Favorite",
      description: "People queued up for their wafers. What started as a small experiment became a local sensation overnight.",
      image: "/journey/1984.png",
      align: "right",
      milestone: "Rising Star"
    },
    {
      id: 5,
      year: "1989",
      title: "First Factory",
      description: "From handmade to semi-automated. Their first factory in Rajkot marked the beginning of industrial excellence.",
      image: "/journey/1989.png",
      align: "left",
      milestone: "Industrial Era"
    },
    {
      id: 6,
      year: "1995",
      title: "Pvt. Ltd.",
      description: "Ideal Food Industries Pvt. Ltd. was established. A fully automated factory and new namkeen lineup changed the game.",
      image: "/journey/1995.png",
      align: "right",
      milestone: "Corporate Growth"
    },
    {
      id: 7,
      year: "2002",
      title: "Largest in Pakistan",
      description: "The largest fully automated wafer plant in Pakistan. Quality and technology became their trademark.",
      image: "/journey/2002.png",
      align: "left",
      milestone: "National Leader"
    },
    {
      id: 8,
      year: "2008",
      title: "Asia's Pride",
      description: "Valsad plant - one of Asia's largest. From coast to coast, Ideal Food Industries became a household name.",
      image: "/journey/2008.png",
      align: "right",
      milestone: "Global Recognition"
    },
    {
      id: 9,
      year: "2015",
      title: "Pan Pakistan",
      description: "Indore plant opened. North and West Pakistan now enjoyed the same authentic crunch.",
      image: "/journey/2015.png",
      align: "left",
      milestone: "Nationwide"
    },
    {
      id: 10,
      year: "2023",
      title: "5,000 Cr. Empire",
      description: "From a cinema canteen to ₹5,000+ Cr. annual revenue. A true Pakistani success story.",
      image: "/journey/2023.png",
      align: "right",
      milestone: "Legendary"
    }
  ];

  return (
    <>
    <div className="relative bg-white" ref={sectionRef}>
      
      {/* YELLOW THEME HEADER */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-[#EDE100] via-[#FFD600] to-[#FDB813]">
        
        {/* Animated Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-2xl rotate-45 animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-black/10 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 left-40 w-20 h-20 bg-white/30 rounded-lg rotate-12 animate-float"></div>
        </div>

        {/* Header Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-6 py-3 bg-black text-[#EDE100] font-bold rounded-full text-sm mb-6 shadow-2xl transform hover:scale-110 transition-transform">
              🏆 SINCE 1970
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-white px-4 py-2 rounded-2xl rotate-[-2deg] inline-block transform hover:rotate-0 transition-transform">
              Journey
            </span>{" "}
            <span className="bg-black text-[#EDE100] px-4 py-2 rounded-2xl rotate-[2deg] inline-block transform hover:rotate-0 transition-transform">
              of Taste
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-black/80 font-medium bg-white/30 backdrop-blur-sm p-6 rounded-2xl inline-block max-w-3xl"
          >
            ⚡ 50+ Years • 65+ Products • 1225+ Dealers • ₹5,000 Cr.+ Revenue
          </motion.p>
        </div>
      </div>

      {/* JOURNEY TIMELINE */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Journey Items */}
        <div className="relative space-y-20 md:space-y-32">
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.id}
                ref={(el) => (textBlocksRef.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
               
                {/* IMAGE SECTION - BADI AUR BINA BORDER KE */}
                <div className="w-full md:w-2/5">
                  <div className="relative group">
                    {/* Yellow Background Effect (Optional - rakh sakte ho) */}
                    <div className="absolute -inset-4 bg-[#EDE100]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* ✅ BADI IMAGE - SIZE BADHA DIYA */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] mx-auto">
                      
                      {/* ✅ IMAGE CONTAINER - BINA WHITE BACKGROUND KE */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23EDE100' opacity='0.1'/%3E%3Ctext x='200' y='220' font-size='60' text-anchor='middle' fill='%23EDE100'%3E${item.year}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>

                      {/* Year Badge - Black with Yellow Text */}
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-black text-[#EDE100] px-6 py-2 rounded-full text-lg font-bold shadow-xl border-2 border-[#EDE100]">
                          {item.year}
                        </span>
                      </div>

                      {/* Milestone Tag */}
                      <div className="absolute -top-5 right-0">
                        <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          {item.milestone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-3/5 text-center md:text-left">
                  <div className="max-w-xl mx-auto md:mx-0">
                    
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 group-hover:text-[#EDE100] transition-colors duration-300">
                      {item.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-bold text-lg group"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span>Discover Story</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>

                    {/* Yellow Accent Line */}
                    <div className="w-20 h-1 bg-[#EDE100] mt-4 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LEGACY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="relative bg-gradient-to-br from-[#EDE100] via-[#FFD600] to-[#FDB813] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
            
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Quote */}
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-7xl md:text-8xl text-black/20 block mb-4">"</span>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-relaxed">
                  From a cinema canteen to Pakistan's favorite snack — 
                  <br className="hidden md:block" />
                  <span className="bg-black text-[#EDE100] px-4 py-1 rounded-lg inline-block mt-2">
                    50 years of crunch, 50 years of love.
                  </span>
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-black p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    <div className="text-4xl font-black text-[#EDE100]">50+</div>
                    <div className="text-white/80 text-sm mt-2">Years</div>
                  </div>
                  <div className="bg-black p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    <div className="text-4xl font-black text-[#EDE100]">65+</div>
                    <div className="text-white/80 text-sm mt-2">Products</div>
                  </div>
                  <div className="bg-black p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    <div className="text-4xl font-black text-[#EDE100]">1225+</div>
                    <div className="text-white/80 text-sm mt-2">Dealers</div>
                  </div>
                  <div className="bg-black p-6 rounded-2xl transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    <div className="text-4xl font-black text-[#EDE100]">₹5,000Cr+</div>
                    <div className="text-white/80 text-sm mt-2">Revenue</div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 bg-black text-[#EDE100] hover:bg-white hover:text-black font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 flex items-center gap-3 mx-auto border-2 border-black"
                >
                  <span>🎬 WATCH OUR STORY</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default About;