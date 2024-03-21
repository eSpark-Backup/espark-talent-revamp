'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { usePathname } from 'next/navigation';

const CustomSectionSlider = ({ items }) => {
  const pathname = usePathname();
  return (
    <Box>
      <Swiper
        spaceBetween={1}
        modules={[Pagination]}
        className="mySwiper"
        pagination={{ clickable: true,
              el: '.swiper-pagination', }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            containerClass: 'swiper-container',
            wrapperClass: 'swiper-wrapper',
            slideClass: 'swiper-slide',
          },
          768: {
            slidesPerView: 2,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            containerClass: 'swiper-container',
            wrapperClass: 'swiper-wrapper',
            slideClass: 'swiper-slide',
          },
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: `${pathname== '/hire-a-frontend-developer' ? '250px':''}`,
                  width: '140px',
                  m: 1,
                }}
              >
                <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  mx: 'auto',
                  maxWidth: '401px',
                  height: `${pathname== '/hire-a-frontend-developer' ? '250px':''}`,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  '@media(max-width: 425px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={item?.icon || ''}
                    alt={item?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 2,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {item?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '23px',
                      '@media(max-width: 425px)': {
                        fontSize: '15px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '13px',
                      },
                    }}
                    color="initial"
                  >
                    {item?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CustomSectionSlider;
