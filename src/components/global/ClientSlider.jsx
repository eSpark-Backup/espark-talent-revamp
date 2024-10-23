'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography } from '@mui/material';
import {
  boxStyle,
  completeTitleStyle,
  shortTitleStyle,
  sliderStyle,
  containerStyle,
} from '@/constants/global/client-slider';

const extendClients = (clients, length) => {
  const extendedClients = Array.from({ length }, (_, index) => ({
    ...clients[index % clients.length],
  }));
  return extendedClients;
};

const ClientSlider = ({
  bgColor,
  txtColor,
  compeleteTitle,
  shortTitle,
  fontWeight,
  data,
  length = 1000,
  breakPoints,
  fontSize,
  lineHeight,
  pb,
  variant,
}) => {
  const extendedData = {
    clients: extendClients(data.clients, length),
  };

  const getImagePath = (originalImagePath) => {
    if (bgColor == '#029894' || !bgColor) {
      return originalImagePath.replace('_dark', '_light');
    } else {
      return originalImagePath.replace('_light', '_dark');
    }
  };
  return (
    <Box sx={{ ...sliderStyle, backgroundColor: bgColor }}>
      <Container pb={pb || '10px'} sx={containerStyle}>
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          fontSize={fontSize}
          lineHeight={lineHeight}
          fontWeight={fontWeight}
          sx={shortTitleStyle}
        >
          {shortTitle}
        </Typography>
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          fontWeight={fontWeight}
          fontSize={fontSize}
          lineHeight={lineHeight}
          sx={completeTitleStyle}
        >
          {compeleteTitle}
        </Typography>
      </Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        speed={2000}
        effect="slide"
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={breakPoints}
      >
        {extendedData.clients.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ pb: pb || 5 }}>
              {
                <Box
                  component={'img'}
                  src={getImagePath(item.image)}
                  alt={item.image}
                  height={'37px'}
                  sx={boxStyle}
                />
              }
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
