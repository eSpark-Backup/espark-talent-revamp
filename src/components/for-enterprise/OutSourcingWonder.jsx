'use client';
import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Container,
  useMediaQuery,
  Pagination,
} from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { usePathname } from 'next/navigation';

const OutSourcingWonder = ({ data }) => {
  const pathname = usePathname();
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
    module: [EffectFade, Navigation, Pagination, Autoplay],
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
              variant="h2"
              sx={{
                color: '#001C63',
                textAlign: 'center',
                fontSize: { md: '32px', xs: '20px' },
                lineHeight: { lg: '42.289px', xs: '33.289px' },
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
                      borderRadius: '23.172px',
                      px: { lg: '30px', md: '25px', sm: '20px', xs: '17px' },
                      py: { lg: '40px', md: '45px', sm: '35px', xs: '25px' },
                      height: {
                        lg: '250px',
                        md: '250px',
                        sm: '200px',
                        xs: '193px',
                      },
                      maxWidth: { xs: '420px', lg: '100%' },
                      background: ' #FFF',
                      border: '1px rgba(0, 0, 0, 0.25) solid',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      mx: 'auto',
                    }}
                  >
                    <Box
                      sx={{
                        mb: { xs: '10px', sm: '0px', lg: '10px' },
                        width: { xs: '30px', md: '40px' },
                        height: { xs: '30px', md: '40px' },
                      }}
                    >
                      <Image
                        quality="85"
                        priority={true}
                        src={item?.icon}
                        alt={`${item?.title}`}
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
                        pb={{ lg: '15px', md: '0px', sm: '0px', xs: '7px' }}
                      />
                    </Box>
                    <Typography
                      variant={
                        pathname === '/solutions/business-startup' ? 'h4' : 'h3'
                      }
                      sx={{
                        color: '#001C63',
                        fontSize: {
                          lg: '20px',
                          md: '17px',
                          sm: '13.524px',
                          xs: '13.524px',
                        },
                        lineHeight: { xs: '19.144px', md: '26.737px' },
                        pb: { lg: '10px', md: '0px', sm: '0px', xs: '5px' },
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
