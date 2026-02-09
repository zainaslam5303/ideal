import { motion } from "framer-motion";


const Products = () => {
return (
<div className="px-4 md:px-12 py-10">
<motion.h1
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-3xl md:text-5xl font-bold text-center"
>
Product Page
</motion.h1>
</div>
);
};

  export default Products;