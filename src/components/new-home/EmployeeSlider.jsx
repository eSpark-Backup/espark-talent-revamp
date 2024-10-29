'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Box, CircularProgress } from '@mui/material';
import { duplicateSlides } from '@/utils';
import Image from 'next/image';

SwiperCore.use([Autoplay]);

const EmployeeSlider = ({ data }) => {
  const { slides, styles } = data || {};
  const { swiperStyle, swiperSlideStyle, videoStyle } = styles || {};
  const duplicatedSlides = [...slides, ...duplicateSlides(slides)];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  const renderSlide = (slide, index) => (
    <SwiperSlide key={index} style={swiperSlideStyle}>
      <Image
        width={100}
        height={100}
        src={slide.videoUrl}
        style={videoStyle}
        onLoadingComplete={() => setLoading(false)}
        loading="eager"
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
            slidesPerView="auto"
            spaceBetween={20}
            modules={[Autoplay]}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1500}
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
