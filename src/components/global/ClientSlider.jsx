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
  fontWeight,
  data,
  length = 1000,
}) => {
  const extendedData = {
    clients: extendClients(data.clients, length),
  };

  return (
    <Box sx={{ backgroundColor: bgColor, PY: '2.5%' }}>
      <Container sx={{ pb: '10px' }}>
        <Typography
          variant="h2"
          color={txtColor}
          sx={{ textAlign: 'center', fontWeight: fontWeight, py: '30px' }}
        >
          {title}
        </Typography>
      </Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 6,
          },
          1260: {
            slidesPerView: 8,
          },
        }}
      >
        {extendedData.clients.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ pb: 5 }}>
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.image}
                  height={item.imageHeight}
                  width={item.imageWidth}
                />
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
