import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll effect handler
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const linkClass = ({ isActive }) =>
    `font-montserrat font-bold tracking-wider text-lg transition-all duration-300 ${
      isActive
        ? "text-red-700"
        : "text-gray-800 hover:text-red-600 hover:scale-105"
    }`;

  // ✅ SIMPLE FIX: Menu button click handler
  const handleMenuClick = () => {
    const currentScrollY = window.scrollY;
    
    // AGAR TOP PE HAI - DIRECT OPEN
    if (currentScrollY === 0) {
      setOpen(!open);
      setShowNavbar(true);
      return;
    }
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
    
    // DELAY CALCULATE - JITNA NEE CHE, UTNA ZYADA DELAY
    let delay = 0;
    if (currentScrollY < 100) delay = 400;
    else if (currentScrollY < 500) delay = 400;
    else if (currentScrollY < 1000) delay = 400;
    else delay = 1000; // 1 second for very far
    
    setTimeout(() => {
      setOpen(!open);
      setShowNavbar(true);
    }, delay);
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-[#ede100] shadow-md transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center px-4 md:px-8 py-3">
        
        {/* Logo */}
        <div className="flex items-start gap-4 mr-64 h-12">
          <img
            src="/logo.png"
            alt="Ideal Food Logo"
            className={`-ml-2 transition-all duration-300 ${
              window.innerWidth < 768 ? "h-16 -mt-1" : 
              (open ? "h-16 -mt-0" : "h-28 -mt-1")
            }`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <Link 
            to="/#contact-section" 
            className="font-montserrat font-bold tracking-wider text-lg transition-all duration-300 text-gray-800 hover:text-red-600 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button - NEW HANDLER */}
        <button
          className="ml-auto md:hidden text-2xl font-bold"
          onClick={handleMenuClick}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-yellow-400 px-6 py-4 flex flex-col gap-4 shadow-inner overflow-hidden"
          >
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/products" className={linkClass}>Products</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About Us</NavLink>
            <Link 
              onClick={() => setOpen(false)} 
              to="/#contact-section" 
              className="font-montserrat font-bold tracking-wider text-lg transition-all duration-300 text-gray-800 hover:text-red-600 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;