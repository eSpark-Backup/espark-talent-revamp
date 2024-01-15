'use client';
import React from 'react';
import { Grid, Box, Typography, Container, useMediaQuery } from '@mui/material';
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
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 20,
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
          index === this.activeIndex ? 'darkgreen' : 'lightgreen'
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
      768: {
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
      <Box sx={{ py: { lg: '32px', md: '28px', sm: '20px', xs: '20px' } }}>
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                color: '#001C63',
                textAlign: 'center',
                fontSize: { lg: '32px', md: '25px', sm: '24px', xs: '20px' },
                lineHeight: 1.3,
                px: { xs: '3%', sm: '20%', md: '20%' },
                fontWeight: 700,
                fontStyle: 'normal',
                mb: { xs: '25px', sm: '40px' },
              }}
            >
              {data?.title}
            </Typography>
          </Box>
          <Swiper {...swiperSettings}>
            <Grid container sx={{ mx: 'auto' }}>
              {data?.items?.map((item, index) => (
                <SwiperSlide key={index} className="outsourcing-slide">
                  <Grid
                    sx={{
                      borderRadius: '20px',
                      px: { lg: '30px', md: '25px', sm: '20px', xs: '17px' },
                      py: { lg: '40px', md: '30px', sm: '25px', xs: '25px' },
                      // alignItems: 'center',
                      minHeight: {
                        lg: '250px',
                        md: '250px',
                        sm: '200px',
                        xs: '150px',
                      },
                      width: { lg: '100%' },
                      background: ' #FFF',
                      border: '2px rgba(0, 0, 0, 0.25) solid',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        mb: '10px',
                        width: { xs: '30px', md: '40px' },
                        height: { xs: '30px', md: '40px' },
                      }}
                    >
                      <Image
                        src={item?.icon}
                        alt={item?.title}
                        height={
                          isSmallScreen
                            ? 30
                            : isMediumScreen
                              ? 30
                              : isLargeScreen
                                ? 40
                                : 40
                        }
                        width={
                          isSmallScreen
                            ? 30
                            : isMediumScreen
                              ? 30
                              : isLargeScreen
                                ? 40
                                : 40
                        }
                        pb={{ lg: '15px', md: '10px', sm: '7px', xs: '7px' }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: {
                          lg: '20px',
                          md: '17px',
                          sm: '13px',
                          xs: '13px',
                        },
                        lineHeight: 1.3,
                        pb: { lg: '10px', md: '7px', sm: '5px', xs: '5px' },
                        fontWeight: 600,
                        fontStyle: 'normal',
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: {
                          lg: '16px',
                          md: '14px',
                          sm: '13px',
                          xs: '13px',
                        },
                        lineHeight: 1.3,
                        fontWeight: 400,
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
