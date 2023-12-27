'use client';
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TitleParagraph from '@/components/global/titleParagraph';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const OutSourcingWonders = ({ data }) => {
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
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 2,
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
      <Box sx={{ py: '2%', overflow: 'hidden' }}>
        <Container>
          <Box sx={{ textAlign: 'center', px: '10%' }}>
            <TitleParagraph title={data?.title} paragraph={data?.paragraph} />
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
                      p: '20px',
                      alignItems: 'center',
                      background: ' #FFF',
                      boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title}
                      height={item?.iconHeight}
                      width={item?.iconWidth}
                    />
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ pr: '10%' }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography variant="body1" sx={{ pr: '10%' }}>
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

export default OutSourcingWonders;
