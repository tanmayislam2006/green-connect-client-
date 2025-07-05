import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image1 from "../../assets/slider-1.jpg"
import Image2 from "../../assets/slider-2.jpg"
import Image3 from "../../assets/slider-3.jpeg"

const Slider = () => {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto mt-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute  inset-0 "></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Green Connect Gardening Festival 2025
              </h2>
              <p className="text-white text-lg mb-6">
                Join us for a weekend of workshops, plant swaps, and expert talks!
              </p>
              <a href='/about' className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 "></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Urban Gardening Workshop
              </h2>
              <p className="text-white text-lg mb-6">
                Discover how to grow your own food in small spaces. Free starter kits for attendees!
              </p>
              <a href='#join' className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Register Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-80 md:h-[420px] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${Image3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute  inset-0 "></div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Composting for Beginners
              </h2>
              <p className="text-white text-lg mb-6">
                Learn the basics of composting and get your free compost bin!
              </p>
              <a href='#join' className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow cursor-pointer">
                Join Event
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;