import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Trending() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return(
        <div className="pt-2 pb-4 px-6 md:px-12 mx-6 md:mx-20 text-center text-neutral-300">
        <h2 className="text-4xl font-bold mb-8 text-left">Trending Now</h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={false}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={false}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="w-full"
      >
          {images.map((num) => (
            <SwiperSlide key={num}>
            <div key={num} className="relative bg-gray-800 rounded-xl overflow-hidden perspective-100 transform transition duration-300 hover:scale-105">
              <span className="absolute left-1 bg-none text-red-500 px-2 rounded-full text-9xl font-extrabold">{num}</span> 
            
              <div className="w-full h-auto bg-gray-700 flex items-center justify-center rounded-lg cursor-pointer">
                <img src={`/trendingimg${num}.jpg`} alt="Image" className=" w-full h-full object-contain" />
              </div>
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
)
}
export default Trending;