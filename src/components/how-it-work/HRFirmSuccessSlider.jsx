'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const HRFirmSuccessSlider = ({ card }) => {
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
        {card?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: '13.764px',
                border: '0.918px solid #E5E5E5',
                background: '#FFF',
                height: { sm: '118.584px', xs: '280px' },
                padding: {
                  xs: '25.447px 10.435px 25.788px 10.435px',
                },
                display: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                m: 1,
              }}
            >
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
                  xs={5}
                  sm={3}
                  sx={{
                    width: '280px',
                    height: 'auto',
                  }}
                >
                  <Image
                    src={item.image}
                    width={150}
                    height={100}
                    alt={item.alt}
                  />
                </Grid>
                <Grid
                  item
                  xs={7}
                  sm={9}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '140px',
                  }}
                >
                  <Box>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#09114A',
                          fontSize: '18.353px',
                          fontWeight: 600,
                          fontStyle: 'normal',
                          lineHeight: '24.225px',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#001C63',
                          textAlign: 'justify',
                          fontSize: { md: '16.517px', xs: '16.197px' },
                          fontWeight: 400,
                          fontStyle: 'normal',
                          lineHeight: {
                            lg: '27.896px',
                            md: '25px',
                            xs: '25.745px',
                          },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HRFirmSuccessSlider;
