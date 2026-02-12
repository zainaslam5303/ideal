import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

// ✅ 1. YEH NAYA COMPONENT BANAO - ScrollToHash
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Check karo ke URL mein hash hai ya nahi
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      
      if (element) {
        // Thoda delay do taake page load ho jaye
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }, 300);
      }
    }
  }, [location]); // Jab bhi location change ho, yeh effect run ho

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash /> {/* ✅ 2. YAHAN COMPONENT USE KARO */}
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;