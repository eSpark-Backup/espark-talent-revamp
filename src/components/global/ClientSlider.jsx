'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography } from '@mui/material';

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
    <Box
      sx={{
        backgroundColor: bgColor,
        PY: '2.5%',
        width: '100%',
        boxShadow: '0 -6px 19.8px  rgba(0,0,0,0.25) ',
      }}
    >
      <Container
        sx={{ pb: pb || '10px', display: 'flex', justifyContent: 'center' }}
      >
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          sx={{
            fontWeight: fontWeight,
            py: { xs: '16px', sm: '18px', md: '30px' },
            pt: { xs: '17px', sm: '20px', md: '50px' },
            fontSize: fontSize,
            lineHeight: lineHeight,
            textAlign: 'center',
            display: 'none',
            '@media (max-width:769px)': {
              display: 'flex',
            },
          }}
        >
          {shortTitle}
        </Typography>
        <Typography
          variant={variant || 'h2'}
          color={txtColor}
          sx={{
            textAlign: 'center',
            fontWeight: fontWeight,
            py: { xs: '16px', sm: '18px', md: '30px' },
            pt: { xs: '17px', sm: '20px', md: '50px' },
            fontSize: fontSize,
            lineHeight: lineHeight,
            display: 'none',
            '@media (min-width:770px)': {
              display: 'flex',
            },
          }}
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
                  sx={{
                    width: {
                      sm: '184px',
                      md: '184px',
                      lg: '186px',
                    },
                    height: {
                      sm: '35px',
                      md: '35px',
                      lg: '37px',
                    },
                    '@media (min-width: 550px) and (max-width: 767px)': {
                      width: '160px',
                      height: '25px',
                    },
                    '@media (min-width: 375px) and (max-width: 549px)': {
                      width: '180px',
                      height: '25px',
                    },
                    '@media (min-width: 280px) and (max-width: 374px)': {
                      width: '180px',
                      height: '25px',
                    },
                  }}
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
