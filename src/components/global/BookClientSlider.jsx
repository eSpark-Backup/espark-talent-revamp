'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';
import { extendClients, getImagePath } from '@/utils';
import { BOOK_CLIENT_SLIDER_STYLES } from '@/constants/homepage';
import Image from 'next/image';
import 'swiper/css';

const BookClientSlider = ({
  bgColor = '#029894',
  txtColor,
  compeleteTitle,
  shortTitle,
  fontWeight,
  data,
  length = 1000,
  breakPoints,
  fontSize,
  lineHeight,
  pb = '10px',
  variant = 'h2',
}) => {
  const { clients } = data || {};
  const {
    mainBoxStyle,
    containerStyle,
    bothTitleStyle,
    swiperSlideStyle,
    imageBoxStyle,
    imageStyle,
  } = BOOK_CLIENT_SLIDER_STYLES || {};
  const extendedData = extendClients(clients, length);
  const isMediumScreen = useMediaQuery('(max-width:769px)');

  const renderSlide = (item, index) => (
    <SwiperSlide key={index} style={swiperSlideStyle}>
      <Box sx={imageBoxStyle(pb)}>
        <Box sx={imageStyle}>
          <Image
            src={getImagePath(item?.image)}
            alt="slider image"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            width={500}
            height={500}
          />
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainBoxStyle(bgColor)}>
      <Container sx={containerStyle(pb)}>
        <Typography
          variant={variant}
          color={txtColor}
          sx={bothTitleStyle(fontWeight, fontSize, lineHeight)}
        >
          {isMediumScreen ? shortTitle : compeleteTitle}
        </Typography>
      </Container>
      <Swiper
        spaceBetween={0}
        centeredSlides
        autoplay={{ delay: 500, disableOnInteraction: false }}
        navigation={false}
        loop
        speed={2000}
        modules={[Autoplay, Navigation]}
        breakpoints={breakPoints}
      >
        {extendedData?.map(renderSlide)}
      </Swiper>
    </Box>
  );
};

export default BookClientSlider;
