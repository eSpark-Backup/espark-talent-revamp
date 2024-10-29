'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Box, CircularProgress } from '@mui/material';
import { duplicateSlides } from '@/utils';

SwiperCore?.use([Autoplay]);

const EmployeeSlider = ({ data }) => {
  const { slides, styles } = data || {};
  const { swiperStyle, swiperSlideStyle, videoStyle } = styles || {};
  const duplicatedSlides = [...slides, ...duplicateSlides(slides)];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (slide, index) => (
    <SwiperSlide key={index} style={swiperSlideStyle}>
      <video
        type="video/mp4"
        src={slide?.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        style={videoStyle}
      />
    </SwiperSlide>
  );

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box id="short-slider">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            modules={[Autoplay]}
            loop={true}
            navigation={false}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            speed={3000}
            style={swiperStyle}
          >
            {duplicatedSlides?.map(renderSlide)}
          </Swiper>
        </Box>
      )}
    </>
  );
};

export default EmployeeSlider;
