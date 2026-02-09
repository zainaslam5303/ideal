import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
  `font-black tracking-wider text-lg transition-all duration-300 ${
    isActive
      ? "text-red-700"
      : "text-gray-800 hover:text-red-600 hover:scale-105"
  }`;

  return (
    <header className="sticky top-0 z-50 bg-yellow-500 shadow-md">
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
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
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
                <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact Us</NavLink>
                </motion.div>
            )}
        </AnimatePresence>
    </header>
  );
};

export default Navbar;
