'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/system';

const extendClients = (clients, length) => {
  const extendedClients = Array.from({ length }, (_, index) => ({
    ...clients[index % clients.length],
  }));
  return extendedClients;
};

const ClientSlider = ({
  bgColor,
  txtColor,
  title,
  data,
  length = 1000,
  pb,
}) => {
  const extendedData = {
    clients: extendClients(data?.clients, length),
  };

  const getImagePath = (originalImagePath) => {
    if (bgColor == '#029894' || !bgColor) {
      return originalImagePath.replace('_dark', '_light');
    } else {
      return originalImagePath.replace('_light', '_dark');
    }
  };
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: bgColor, PY: '2.5%', width: '100%' }}>
      <Container sx={{ pb: pb || '10px' }}>
        <Typography
          color={txtColor}
          sx={{
            textAlign: 'center',
            fontWeight: '500 !important',
            py: '30px',
            fontSize: '24px !important',
            [theme.breakpoints.down('sm')]: {
              fontSize: '13px !important',
            },
          }}
        >
          {title}
        </Typography>
      </Container>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={8}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={false}
        loop={true}
        speed={2000}
        effect="slide"
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        // Default value, will be overridden by breakpoints
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
                <Link href={item.link}>
                  <Box
                    component={'img'}
                    src={getImagePath(item.image)}
                    alt={item.image}
                    height={'37px'}
                    sx={{
                      width: {
                        // xs: '150px',
                        sm: '184px',
                        md: '184px',
                        lg: '186px',
                      },
                      height: {
                        // xs: '30px',
                        sm: '35px',
                        md: '35px',
                        lg: '37px',
                      },
                      '@media (min-width: 550px) and (max-width: 767px)': {
                        width: '140px',
                        height: '25px',
                      },
                      '@media (min-width: 375px) and (max-width: 549px)': {
                        width: '100px',
                        height: '20px',
                      },
                      '@media (min-width: 300px) and (max-width: 374px)': {
                        width: '80px',
                        height: '18px',
                      },
                    }}
                  />
                </Link>
              }
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
