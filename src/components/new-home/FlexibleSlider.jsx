'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Box } from '@mui/material';

const FlexibleSlider = ({ data, slideStyle, card, isDisplay }) => {
  const renderCard = ({ title, image, description }) => {
    return card(title, image, description);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        maxWidth: '768px',
        display: { xs: isDisplay || 'none', md: 'none' },
        justifyContent: 'center',
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView="auto"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px 20px 40px 20px',
        }}
      >
        {data?.map(({ title, image, description }, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: '98%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...slideStyle,
            }}
          >
            {renderCard({ title, image, description })}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FlexibleSlider;
