import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
    
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          enabled: true, // Desktop pe navigation show
          hideOnClick: false,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          type: 'bullets',
        }}
        loop={true}
        speed={900}
        grabCursor={true}
        
        // ✅ RESPONSIVE BREAKPOINTS
        breakpoints={{
          // Mobile: 0px - 639px
          0: {
            navigation: {
              enabled: false, // Mobile pe navigation hide
            },
            pagination: {
              dynamicBullets: false, // Simple bullets
            },
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // Tablet: 640px - 767px
          640: {
            navigation: {
              enabled: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // Desktop: 768px se upar
          768: {
            navigation: {
              enabled: true,
            },
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        
        // ✅ RESPONSIVE HEIGHT
        className="h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh]"
      >
        
        {/* Mobile Optimization ke liye: */}
        <SwiperSlide className="relative">
          <picture>
            {/* Mobile ke liye optimized image */}
            <source 
              media="(max-width: 640px)" 
              srcSet="/slides/slide1-mobile.jpeg" 
            />
            {/* Desktop ke liye original image */}
            <img
              src="/slides/slide1.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
              loading="lazy"
            />
          </picture>
        
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <picture>
            {/* Mobile ke liye optimized image */}
            <source 
              media="(max-width: 640px)" 
              srcSet="/slides/slide2-mobile1.jpg" 
            />
            {/* Desktop ke liye original image */}
            <img
              src="/slides/slide2.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
              loading="lazy"
            />
          </picture>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
        <picture>
            {/* Mobile ke liye optimized image */}
            <source 
              media="(max-width: 640px)" 
              srcSet="/slides/slide3-mobile.jpg" 
            />
            {/* Desktop ke liye original image */}
            <img
              src="/slides/slide3.jpeg"
              className="w-full h-full object-cover"
              alt="Slide 1"
              loading="lazy"
            />
          </picture>
        </SwiperSlide>

      </Swiper>
    </div>
    {/* PRODUCTS CAROUSEL */}
<section className="relative bg-fixed bg-center bg-cover py-16"
  style={{
    backgroundImage: "url('/background.jpg')",
  }}>
  {/* ADD THIS OVERLAY */}
  <div className="absolute inset-0"></div>

  <div className="relative max-w-full mx-auto px-4">

    <h2 className="text-center text-white text-2xl md:text-3xl font-extrabold mb-10">
      PRODUCTS
    </h2>

    <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  loop
  centeredSlides
  slidesPerView={5}
  spaceBetween={30}
  grabCursor
  speed={900}

  breakpoints={{
    0: { slidesPerView: 1.8 },
    640: { slidesPerView: 2.5 },
    768: { slidesPerView: 3.5 },
    1024: { slidesPerView: 5 },
  }}
>
      
      {[
        "/products/product1.png",
        "/products/product2.png",
        "/products/product3.png",
        "/products/product4.png",
        "/products/product5.png",
        "/products/product6.png",
        "/products/product7.png",
        "/products/product8.png",
        "/products/product9.png",
        "/products/product10.png",
      ].map((img, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div
              className={`flex justify-center transition-all duration-500 ${
                isActive
                  ? "scale-125 opacity-100 z-20"
                  : "scale-90 opacity-50 z-10"
              }`}
            >
              <img
                src={img}
                alt="Product"
                className="h-44 md:h-56 object-contain drop-shadow-xl"
              />
            </div>
          )}
        </SwiperSlide>
      ))}

    </Swiper>
  </div>
</section>
    </>
  );
};

export default Home;