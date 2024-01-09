'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
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
    clients: extendClients(data.clients, length),
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
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        speed={1500}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        slidesPerView={1} // Default value, will be overridden by breakpoints
      >
        {extendedData.clients.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ pb: pb || 5 }}>
              {
                <Link href={item.link}>
                  <Image
                    src={getImagePath(item.image)}
                    alt={item.image}
                    height={item.imageHeight}
                    width={item.imageWidth}
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
