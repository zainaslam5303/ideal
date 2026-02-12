import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    reason: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
    "Multan", "Gujranwala", "Peshawar", "Quetta", "Sialkot", 
    "Hyderabad", "Bahawalpur"
  ];

  const reasons = [
    "Become a Distributor", "Wholesale Purchase", "Retail Partnership",
    "Franchise Inquiry", "Product Information", "General Query",
    "Complaint/Feedback", "Other"
  ];

  return (
    <section id="contact-section" className="relative py-20 overflow-hidden bg-gradient-to-br from-[#EDE100] via-[#FFD600] to-[#FDB813]">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-2xl rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-black/10 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 left-40 w-20 h-20 bg-white/30 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-black/10 rounded-full animate-ping-slow"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float-random"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${5 + i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - More Colorful */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-6 py-3 bg-black text-[#EDE100] font-bold rounded-full text-sm mb-6 shadow-2xl transform hover:scale-110 transition-transform">
            📞 LIMITED TIME OFFER
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            Let's{" "}
            <span className="bg-white px-4 py-2 rounded-2xl rotate-[-2deg] inline-block transform hover:rotate-0 transition-transform">
              Work
            </span>{" "}
            <span className="bg-black text-[#EDE100] px-4 py-2 rounded-2xl rotate-[2deg] inline-block transform hover:rotate-0 transition-transform">
              Together
            </span>
          </h2>
          <p className="text-xl text-black/80 font-medium bg-white/30 backdrop-blur-sm p-6 rounded-2xl inline-block">
            ⚡ Join 500+ successful distributors • 24/7 Support • Fast Approval
          </p>
          <div className="w-32 h-2 bg-black mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Colorful Contact Info */}
          <div className="space-y-8">
            {/* Stats Cards - Vibrant Colors */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group border-2 border-white/20">
                <div className="w-16 h-16 bg-[#EDE100] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-[#EDE100] font-semibold">Happy Distributors</p>
              </div>

              <div className="bg-[#EDE100] p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group border-2 border-black/20">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8 text-[#EDE100]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-black">1000+</h3>
                <p className="text-black/70 font-semibold">Retail Partners</p>
              </div>
            </div>

            {/* Contact Cards - Colorful Gradient */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl shadow-2xl p-8 space-y-6 border-2 border-[#EDE100]/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-[#EDE100] rounded-full mr-4"></span>
                📱 Quick Contact
              </h3>
              
              {[
                { icon: "📞", label: "Call Us", value: "+92 300 1234567", color: "bg-blue-500/20" },
                { icon: "✉️", label: "Email Us", value: "distributor@idealfood.com", color: "bg-green-500/20" },
                { icon: "📍", label: "Head Office", value: "Karachi, Pakistan", color: "bg-red-500/20" },
                { icon: "⏰", label: "Working Hours", value: "Mon-Sat: 9AM - 6PM", color: "bg-purple-500/20" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-xl transition-all">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial - Vibrant */}
            <div className="bg-gradient-to-r from-[#EDE100] to-[#FFD600] p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-black">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-black text-lg italic font-semibold mb-4">
                "The application process was smooth and the team is very supportive. Best decision for our business!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-[#EDE100] font-bold text-xl border-2 border-white">
                  AK
                </div>
                <div className="ml-4">
                  <p className="font-bold text-black text-lg">Ali Khan</p>
                  <p className="text-black/70 font-semibold">Distributor - Lahore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Colorful Form */}
          <div className="bg-black/90 backdrop-blur rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-[#EDE100] transform hover:border-white transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">
                🚀 Start Now
              </h3>
              <span className="px-5 py-2.5 bg-[#EDE100] text-black font-bold rounded-full text-sm animate-pulse">
                ⚡ 24h Response
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields - Dark Theme with Yellow Accents */}
              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  Full Name <span className="text-white">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white placeholder-gray-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  City <span className="text-white">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white appearance-none"
                >
                  <option value="" className="bg-gray-900">Select your city</option>
                  {cities.map((city) => (
                    <option key={city} value={city} className="bg-gray-900">{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  Reason for Contact <span className="text-white">*</span>
                </label>
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white appearance-none"
                >
                  <option value="" className="bg-gray-900">Select a reason</option>
                  {reasons.map((reason) => (
                    <option key={reason} value={reason} className="bg-gray-900">{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  Email Address <span className="text-white">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  Phone Number <span className="text-white">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white placeholder-gray-500"
                  placeholder="03XX-XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#EDE100] mb-2">
                  Message <span className="text-white">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-5 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl focus:ring-0 focus:border-[#EDE100] text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EDE100] hover:bg-white text-black font-bold py-5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center group text-lg border-2 border-black"
              >
                🚀 Send Message
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="text-sm text-gray-500 text-center mt-6">
                By submitting, you agree to our{" "}
                <a href="#" className="text-[#EDE100] hover:text-white font-semibold">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#EDE100] hover:text-white font-semibold">
                  Terms
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

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
        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-30px) translateX(20px); }
          50% { transform: translateY(0px) translateX(40px); }
          75% { transform: translateY(30px) translateX(20px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-float-random { animation: float-random 15s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactUs;