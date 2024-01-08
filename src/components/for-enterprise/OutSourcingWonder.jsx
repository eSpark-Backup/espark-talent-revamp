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
import Title from '@/components/how-it-work/Title.jsx';

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
      el: '.swiper-pagination', // Add this line to target the pagination container
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
          <Box sx={{ textAlign: 'center', px: '10%' }}>
            <Title heading={data?.title} />
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
                    sx={{
                      borderRadius: '30px',
                      p: '30px',
                      pr: '15%',
                      alignItems: 'center',
                      minHeight: '250px',
                      background: ' #FFF',
                      border: '1px rgba(0, 0, 0, 0.25) solid',
                      boxShadow: '2px 2px 2px  rgba(0, 0, 0, 0.25)',
                      // filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      height={50}
                      width={50}
                    />
                    <Typography variant="h5" color="secondary" sx={{}}>
                      {item?.title}
                    </Typography>
                    <Typography variant="body1" color={'#000'} sx={{}}>
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
