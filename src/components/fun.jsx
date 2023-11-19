import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import M1 from '../images/m1.jpeg';
import M2 from '../images/m2.jpg';
import M3 from '../images/m3.jpg';
import M4 from '../images/m4.png';

const Fun = () => {
  const isMobile = window.innerWidth <= 768; // Set the breakpoint according to your needs

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{ height: isMobile ? '30vh' : '70vh', width: '100%', margin: '0px 0px 30px 0px' }}
      >
        {[  M4 ,M1].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next "></div>
        <div className="swiper-button-prev friend"></div>
      </Swiper>
    </>
  );
};

export default Fun;
