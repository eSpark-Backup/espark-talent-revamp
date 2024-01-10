'use client';
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Container, Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ClientSlider = ({ bgColor, txtColor, title, fontWeight, data }) => {
  const swiperSettings = {
    slidesPerView: 8,
    spaceBetween: 20,
    // centerMode: true,
    centerPadding: '0',
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      360: {
        slidesPerView: 2,
      },
      786: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 8,
      },
      1920: {
        slidesPerView: 8,
      },
    },
  };

  return (
    <Box sx={{ background: bgColor, py: '2.5%' }}>
      <Container sx={{ pb: '30px' }}>
        <Typography
          variant="h2"
          color={txtColor}
          sx={{ textAlign: 'center', fontWeight: fontWeight, py: '30px' }}
        >
          {title}
        </Typography>
      </Container>
      <Swiper {...swiperSettings} sx={{ mx: 'auto' }}>
        <Grid container spacing={2} justifyContent="center" sx={{ mx: 'auto' }}>
          {data?.clients.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item?.link}>
                <Image
                  src={item?.image}
                  alt={item?.image}
                  height={item?.imageHeight}
                  width={item?.imageWidth}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Grid>
      </Swiper>
    </Box>
  );
};

export default ClientSlider;
