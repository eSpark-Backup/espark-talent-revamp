'use client';
import React from 'react';
import { Box, Typography, Container, Grid, ListItemIcon } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

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

const OutSourcingItem = ({ data }) => {
  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 20,
    centerMode: true,
    centerPadding: '0',
    loop: true,
    effect: 'fade',
    className: 'hero_slider',

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
      <Box
        sx={{
          pt: { lg: '70px', md: '60px', sm: '40px', xs: '30px' },
          pb: { lg: '80px', md: '60px', sm: '40px', xs: '30px' },
        }}
      >
        <Container>
          <Box
            sx={{
              px: { md: '12.2%', sm: '10%', xs: '2%' },
              pb: { lg: '45px', md: '25px', sm: '15px', xs: '15px' },
            }}
          >
            <Typography
              color={'secondary'}
              sx={{
                textAlign: 'center',
                flexWrap: 'wrap',
                fontWeight: 600,
                fontSize: {
                  xl: '32px',
                  lg: '32px',
                  md: '26px',
                  sm: '20px',
                  xs: '20px',
                },
                mx: { xs: '5.699px', sm: '0px' },
              }}
            >
              {'How Fast Are Our Outsourcing Services?'}
            </Typography>
            <Typography
              color={'secondary'}
              sx={{ textAlign: 'center' }}
              fontSize={{
                xl: '20px',
                lg: '18px',
                md: '16px',
                sm: '12px',
                xs: '12px',
              }}
            >
              {`At eSpark Talent, our services move with the rhythm of urgency, promising a pace that surprises and a speed that advances.`}
            </Typography>
          </Box>
          <Swiper {...swiperSettings}>
            <Grid container spacing={2} justifyContent="center">
              {data?.items?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      borderRadius: '20px',
                      px: { lg: '19px', md: '19px', sm: '18px', xs: '17px' },
                      py: { lg: '35px', md: '30px', sm: '25px', xs: '15px' },
                      // alignItems: 'center',
                      height: {
                        lg: '274.691px',
                        md: '270px',
                        sm: '228px',
                        xs: '212px',
                      },
                      '@media (min-width: 300px) and (max-width: 348px)': {
                        height: '238px !important',
                      },
                      '@media (min-width: 278px) and (max-width: 299px)': {
                        height: '255px !important',
                      },
                      maxWidth: '409.681px',
                      mx: 'auto',
                      mb: { lg: '20px' },
                      background: ' #FFF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      border: '1px solid #029894',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: {
                          lg: '28px',
                          md: '26px',
                          sm: '18px',
                          xs: '18px',
                        },
                        lineHeight: 1.3,
                        // pb: { lg: '10px', md: '7px', sm: '5px', xs: '5px' },
                        fontWeight: 600,
                        fontStyle: 'normal',
                      }}
                    >
                      {item?.title}
                    </Typography>
                    {item?.items?.map((list, itemIndex) => (
                      <Box
                        key={itemIndex}
                        sx={{
                          display: 'flex',
                          marginTop: '10px',
                        }}
                      >
                        <ListItemIcon
                          sx={{ minWidth: { xs: '28px', md: '30px' } }}
                        >
                          <TaskAltIcon
                            fontSize="small"
                            sx={{
                              color: '#029894',
                              fontSize: { xs: '15px', md: '22px' },
                            }}
                          />
                        </ListItemIcon>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#000',
                            fontSize: {
                              // lg: '16px',
                              md: '14px',
                              sm: '13px',
                              xs: '13px',
                            },
                            lineHeight: 1.3,
                            fontWeight: 400,
                          }}
                        >
                          {list?.title}
                        </Typography>
                      </Box>
                    ))}
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

export default OutSourcingItem;
