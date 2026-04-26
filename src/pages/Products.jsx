import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "../components/Footer";
import ProductShowcaseHero from "../components/ProductShowcaseHero";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categoryData = [
  { id: "classic", title: "Classic Wafers", image: "/products/product1.png" },
  { id: "masala", title: "Masala Range", image: "/products/product3.png" },
  { id: "cheese", title: "Cheese Collection", image: "/products/product5.png" },
  { id: "crunchy", title: "Crunchy Snacks", image: "/products/product7.png" },
];

const productData = [
  {
    category: "classic",
    title: "Classic Salted Wafer",
    image: "/products/product1.png",
    description:
      "Light, crispy, and perfectly salted for everyday snacking. A timeless favorite that pairs well with tea-time and gatherings.",
  },
  {
    category: "masala",
    title: "Spicy Masala Wafer",
    image: "/products/product4.png",
    description:
      "A bold masala blend with a satisfying crunch. Crafted for snack lovers who prefer rich flavor and a spicy kick.",
  },
  {
    category: "cheese",
    title: "Cheese Burst Chips",
    image: "/products/product6.png",
    description:
      "Creamy cheese flavor layered on extra-crunchy chips. Ideal for movie nights, parties, and on-the-go indulgence.",
  },
  {
    category: "crunchy",
    title: "Tomato Tangy Crunch",
    image: "/products/product9.png",
    description:
      "A tangy tomato profile balanced with crisp texture. Designed to deliver a refreshing and exciting bite every time.",
  },
  {
    category: "classic",
    title: "Premium Mixed Range",
    image: "/products/product11-1.png",
    description:
      "A curated product range featuring signature flavors and quality ingredients. Perfect for families and modern retail shelves.",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(categoryData[0].id);

  const filteredProducts = useMemo(
    () => productData.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <div className="bg-black">
        <ProductShowcaseHero />

        <section className="relative overflow-hidden bg-gradient-to-b from-[#111111] via-[#181818] to-[#202020] py-14">
          <div className="absolute inset-0">
            <div className="absolute top-8 left-10 h-44 w-44 rounded-full bg-[#EDE100]/10 blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-8 h-52 w-52 rounded-full bg-red-500/10 blur-3xl animate-float-reverse" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center justify-between"
            >
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Product Categories
            </h2>
            <span className="rounded-full bg-black px-4 py-1.5 text-xs md:text-sm font-semibold text-[#EDE100]">
              Visual Explore
            </span>
            </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categoryData.map((category) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveCategory(category.id)}
                className={`group cursor-pointer overflow-hidden rounded-2xl border shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border-[#ffe266] bg-[#ffe266]/20 ring-2 ring-[#ffe266]/80"
                    : "border-white/20 bg-white/10"
                }`}
              >
                <div className="relative h-52 bg-gradient-to-br from-[#ffe266] to-[#f6be00]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="bg-black/85 px-4 py-3 text-center">
                  <h3
                    className={`text-sm md:text-base font-bold ${
                      activeCategory === category.id
                        ? "text-[#ffe266]"
                        : "text-[#fff48c]"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
          </div>
        </section>

        <section
          id="featured-products"
          className="relative py-14 md:py-20"
          style={{
            background:
              "radial-gradient(circle at center, #ff1a1a 0%, #cc0000 40%, #990000 70%, #7a0000 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                Featured Products
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-white/90">
                Slide through to view product visuals and details in a clean
                split layout.
              </p>
            </motion.div>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              grabCursor
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={24}
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-3xl border border-white/25 bg-black/35 shadow-2xl backdrop-blur-md"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="flex items-center justify-center bg-gradient-to-br from-[#ffe266] to-[#f7bb00] p-6 md:p-10 min-h-[280px]">
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="max-h-72 w-full object-contain"
                          loading="lazy"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>

                      <div className="flex flex-col justify-center p-6 md:p-10">
                        <span className="mb-3 inline-block w-fit rounded-full bg-[#fff2a1] px-3 py-1 text-xs font-bold tracking-wide text-red-700">
                          FEATURED ITEM
                        </span>
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                          {product.title}
                        </h3>
                        <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
                          {product.description}
                        </p>
                        <button
                          type="button"
                          className="mt-7 w-fit rounded-xl bg-black px-5 py-3 text-sm font-bold text-[#EDE100] transition hover:scale-105 hover:bg-[#1a1a1a]"
                        >
                          View Product Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(14px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
      `}</style>
      <Footer />
    </>
  );
};

export default Products;