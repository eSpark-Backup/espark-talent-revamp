import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Box } from '@mui/material';

SwiperCore?.use([Autoplay]);

const EmployeeSlider = () => {
  const slides = [
    {
      id: 1,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 1',
    },
    {
      id: 2,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 2',
    },
    {
      id: 3,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 3',
    },
    {
      id: 4,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 4',
    },
    {
      id: 5,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 5',
    },
    {
      id: 6,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 6',
    },
    {
      id: 7,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Short 7',
    },
  ];

  const duplicateSlides = (originalSlides) => {
    return originalSlides.map((slide) => ({ ...slide }));
  };

  const duplicatedSlides = [...slides, ...duplicateSlides(slides)];

  return (
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
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        {duplicatedSlides?.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f1f1f1',
            }}
          >
            <video
              type="video/mp4"
              src={slide?.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16.08px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EmployeeSlider;
