import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
// import Shops from "../pages/Shops";
import Contact from "../pages/Contact";


const AppRoutes = () => (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/products" element={<Products />} />
<Route path="/contact" element={<Contact />} />
</Routes>
);


export default AppRoutes;