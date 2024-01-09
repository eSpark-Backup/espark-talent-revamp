'use client';
import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const OutSourcingWonder = ({ data }) => {
  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 50,
    centerMode: true,
    centerPadding: '0',
    loop: true,
    effect: 'fade',
    className: 'hero_slider',
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return `<span class="${className}" style="background-color: ${
          index === this.activeIndex ? 'darkgreen' : 'green'
        }; width: 20px; height: 20px;"></span>`;
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1,
      },
      786: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Box sx={{ py: '3%', overflow: 'hidden' }}>
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                color: '#09114A',
                textAlign: 'center',
                fontSize: { md: '32px !important', xs: '20px !important' },
                lineHeight: { lg: '48px', xs: '26px' },
                px: { lg: '360px' },
                fontWeight: 700,
                fontStyle: 'normal',
                mb: '40px',
              }}
            >
              {data?.title}
            </Typography>
          </Box>
          <Swiper {...swiperSettings}>
            <Grid container sx={{ mx: 'auto' }}>
              {data?.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <Grid
                    item
                    xs={4}
                    sm={12}
                    md={6}
                    lg={4}
                    sx={{
                      borderRadius: '23.172px',
                      p: '30px',
                      alignItems: 'center',
                      minHeight: { md: '300px', lg: '270.469px' },
                      width: { lg: '406.656px' },
                      background: ' #FFF',
                      border: '2px rgba(0, 0, 0, 0.25) solid',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      height={40}
                      width={40}
                    />
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: '18.887px',
                        lineHeight: { md: '26.737px' },
                        fontWeight: 600,
                        fontStyle: 'normal',
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: '18.887px',
                        lineHeight: { md: '26.737px' },
                        fontWeight: 400,
                        fontStyle: 'normal',
                      }}
                    >
                      {item?.paragraph}
                    </Typography>
                  </Grid>
                </SwiperSlide>
              ))}
            </Grid>
          </Swiper>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingWonder;
