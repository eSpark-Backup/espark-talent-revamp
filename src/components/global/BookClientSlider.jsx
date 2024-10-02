'use client';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography, useMediaQuery } from '@mui/material';

const extendClients = (clients, length) =>
  Array.from({ length }, (_, index) => ({
    ...clients[index % clients.length],
  }));

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
  const extendedData = extendClients(data.clients, length);
  const isMediumScreen = useMediaQuery('(max-width:769px)');
  const getImagePath = (path) =>
    path.replace(
      bgColor === '#029894' ? '_dark' : '_light',
      bgColor === '#029894' ? '_light' : '_dark'
    );

  return (
    <Box sx={{ backgroundColor: bgColor, PY: '2.5%', width: '100%' }}>
      <Container sx={{ pb }}>
        <Typography
          variant={variant}
          color={txtColor}
          sx={{
            textAlign: 'center',
            fontWeight,
            py: { xs: '16px', sm: '18px', md: '30px' },
            pt: { xs: '17px', sm: '20px', md: '50px' },
            fontSize,
            lineHeight,
          }}
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
        {extendedData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ py: 1 }}>
              <Box
                component="img"
                src={getImagePath(item.image)}
                alt={item.image}
                sx={{
                  width: { sm: 'auto', md: '184px', lg: '186px' },
                  height: { sm: 'auto', md: '35px', lg: '37px' },
                  '@media (min-width: 550px) and (max-width: 767px)': {
                    width: '160px',
                    height: '25px',
                  },
                  '@media (min-width: 280px) and (max-width: 549px)': {
                    width: '180px',
                    height: '25px',
                  },
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BookClientSlider;
