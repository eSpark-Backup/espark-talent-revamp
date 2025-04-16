'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';
import { extendClients, getImagePath } from '@/utils';
import 'swiper/css';
import { BOOK_CLIENT_SLIDER_STYLES } from './BookClientSliderStyles';

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
        {
          <Box
            component={'img'}
            src={getImagePath(item?.image)}
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
