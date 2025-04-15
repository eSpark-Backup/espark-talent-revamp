'use client';

import { Box, Grid, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {
  boxStyles,
  gridContainerStyles,
  gridItemStyles,
  titleStyles,
  descriptionStyles,
} from '@/components/how-it-work/HRFirmSuccessSliderStyles';

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
            <Box sx={boxStyles}>
              <Grid container sx={gridContainerStyles}>
                <Grid item xs={5} sm={5} sx={gridItemStyles}>
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.image}
                    width={600}
                    height={200}
                    alt={`${item?.alt}`}
                  />
                </Grid>
                <Grid item xs={7} sm={7}>
                  <Typography variant="h4" sx={titleStyles}>
                    {item?.title}
                  </Typography>
                  <Typography sx={descriptionStyles}>
                    {item?.description}
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
