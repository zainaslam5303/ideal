import { motion } from "framer-motion";

const heroProducts = [
  "/products/product1.png",
  "/products/product4.png",
  "/products/product6.png",
  "/products/product9.png",
];

const ProductShowcaseHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#EDE100] via-[#FFD600] to-[#FDB813] py-16 md:py-24">
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-0 h-64 w-64 rounded-full bg-white/35 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-500/20 blur-3xl animate-float-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.2),transparent_35%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-black/85 p-6 sm:p-8 md:p-10 shadow-2xl"
        >
          <span className="inline-block rounded-full bg-[#EDE100] px-4 py-1.5 text-xs font-extrabold tracking-wide text-black">
            IDEAL PRODUCT RANGE
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Discover Snacks
            <span className="block text-[#EDE100]">Made to Stand Out</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
            Explore our product categories and featured flavors in one modern,
            interactive showcase designed for quick browsing and better product
            discovery.
          </p>
          <a
            href="#featured-products"
            className="mt-6 inline-flex items-center rounded-full bg-[#EDE100] px-6 py-3 text-sm font-bold text-black transition-transform duration-300 hover:scale-105"
          >
            Explore Products
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {heroProducts.map((item, idx) => (
            <motion.div
              key={item}
              animate={{ y: [0, idx % 2 === 0 ? -10 : 10, 0] }}
              transition={{
                duration: 3 + idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl border border-black/10 bg-white/30 p-3 backdrop-blur-sm"
            >
              <div className="flex h-36 items-center justify-center rounded-xl bg-white/40 sm:h-40">
                <img
                  src={item}
                  alt="Ideal Product"
                  className="h-full w-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcaseHero;
