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
        <img src={`${process.env.PUBLIC_URL}/page1.jpg`} alt="Page 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/page2.jpg`} alt="Page 2" />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
