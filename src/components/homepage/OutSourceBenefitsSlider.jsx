'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const OutSourceBenefitsSlider = ({ items }) => {
  return (
    <Box>
      <Swiper
        spaceBetween={1}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 1,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            containerClass: 'swiper-container',
            wrapperClass: 'swiper-wrapper',
            slideClass: 'swiper-slide',
          },
          960: {
            slidesPerView: 1,
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
                  width: '140px',
                  m: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      borderRadius: '20px 20px 0 0 ',
                      backgroundColor: 'rgba(0, 28, 99, 0.04) !important',
                      p: '20px',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      height={45}
                      width={45}
                    />
                    <Typography variant="h4" color="secondary" sx={{ ml: 2 }}>
                      {item?.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: '20px',
                      borderRadius: '0 0 20px 20px',
                      backgroundColor: '#fff',
                      height: { sm: '150px' },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      {item?.paragraph}
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

export default OutSourceBenefitsSlider;
