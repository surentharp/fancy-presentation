import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';

function App() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="/page1.jpg" alt="Page 1" className="slide-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/page2.jpg" alt="Page 2" className="slide-img" />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
