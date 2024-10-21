'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const CustomSectionSlider = ({ items, customSectionSliderStyles }) => {
  const [loading, setLoading] = useState(true);
  const {
    slideStyle,
    cardStyle,
    headerBoxStyle,
    imageStyle,
    titleStyle,
    descriptionBoxStyle,
    descriptionTextStyle,
    swiperBoxStyle,
  } = customSectionSliderStyles || {};

  useEffect(() => {
    if (items) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [items]);

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Card sx={cardStyle}>
        <Box sx={headerBoxStyle}>
          <Box
            component="img"
            src={card?.icon || ''}
            alt={card?.alt || ''}
            sx={imageStyle}
          />
          <Typography sx={titleStyle}>{card?.title}</Typography>
        </Box>
        <Box sx={descriptionBoxStyle}>
          <Typography sx={descriptionTextStyle}>{card?.paragraph}</Typography>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box sx={swiperBoxStyle}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <CircularProgress sx={{ color: '#029894' }} />
        </Box>
      ) : (
        <Swiper
          id="hireDev"
          pagination={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1.5,
            },
            680: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.2,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {items?.map(renderSlide)}
        </Swiper>
      )}
    </Box>
  );
};

export default CustomSectionSlider;
