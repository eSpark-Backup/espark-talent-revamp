'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography } from '@mui/material';
import { extendClients, getImagePath } from '@/utils';
import { CLIENTS_SLIDER_STYLES } from '@/constants/homepage';

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
  const { clients } = data || {};
  const {
    mainBoxStyle = {},
    containerStyle = {},
    shortTitleStyle = {},
    completeTitleStyle = {},
    swiperSlideStyle = {},
    imageBoxStyle = {},
    imageStyle = {},
  } = CLIENTS_SLIDER_STYLES || {};
  const extendedData = {
    clients: extendClients(clients, length),
  };

  const renderSlide = (item, index) => (
    <SwiperSlide key={index} style={swiperSlideStyle}>
      <Box sx={imageBoxStyle(pb)}>
        {
          <Box
            component={'img'}
            src={getImagePath(item?.image, bgColor)}
            alt={item?.image}
            height={'37px'}
            sx={imageStyle}
          />
        }
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainBoxStyle(bgColor)}>
      <Container sx={containerStyle(pb)}>
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          sx={shortTitleStyle(fontWeight, fontSize, lineHeight)}
        >
          {shortTitle}
        </Typography>
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          sx={completeTitleStyle(fontWeight, fontSize, lineHeight)}
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
        {extendedData?.clients?.map(renderSlide)}
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
