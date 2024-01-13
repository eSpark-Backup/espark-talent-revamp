'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const HRFirmSuccessSlider = ({ card }) => {
  return (
    <Box>
      <Swiper
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 2,
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
                // height: { xs: '118.584px', },
                height: '118.584px',
                maxWidth: '320.31px !important',
                padding: {
                  xs: '10.447px 10.435px 10.788px 10.435px',
                },
                display: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                m: 1,
                margin: '0px auto',
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
                  sm={5}
                  sx={{
                    px: '5px',
                  }}
                >
                  <Image
                    src={item.image}
                    width={600}
                    height={200}
                    alt={item.alt}
                  />
                </Grid>
                <Grid item xs={7} sm={7}>
                  <Typography
                    sx={{
                      color: '#09114A',
                      fontSize: { md: '18.353px', xs: '10.234px', sm: '13px' },
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: { xs: '13.296px', md: '24.225px' },
                      pl: '5px',
                      mb: '5px',
                      mt: '10px',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#001C63',
                      textAlign: 'justify',
                      fontSize: { md: '16.517px', xs: '10.065px ', sm: '11px' },
                      fontStyle: 'normal',
                      fontWeight: 400,
                      pl: '5px',
                      lineHeight: {
                        lg: '27.896px',
                        md: '25px',
                        xs: '13.548px ',
                      },
                    }}
                  >
                    {item.description}
                  </Typography>
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
