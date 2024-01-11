'use client';
import React from 'react';
import { Box, Typography, Container, Grid, useMediaQuery } from '@mui/material';
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

const OutSourcingItem = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? index : index);
  };

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
      <Box sx={{
        pt: { lg: '30px', md: '25px', sm: '20px', xs: '20px' },
        pb: { lg: '25px', md: '25px', sm: '15px', xs: '15px' }
      }}>
        <Container>
          <Box sx={{  px: { md: '20%', sm: '10%', xs: '2%' }, pb: { lg: '25px', md: '25px', sm: '15px', xs: '15px' } }}>
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
              }}
            >
              {'How Fast Are Our Outsourcing Services?'}
            </Typography>
            <Typography
              color={'secondary'}
              sx={{ textAlign: 'center' }}
              fontSize={{
                xl: '20px',
                lg: '20px',
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
                      px: { lg: '30px', md: '25px', sm: '20px', xs: '17px' },
                      py: { lg: '40px', md: '30px', sm: '25px', xs: '25px' },
                      // alignItems: 'center',
                      minHeight: {
                        lg: '300px',
                        md: '270px',
                        sm: '200px',
                        xs: '150px',
                      },
                      width: { lg: '100%' },
                      background: ' #FFF',
                      border: '2px rgba(0, 0, 0, 0.25) solid',
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
                          pb: { lg: '10px', md: '7px', sm: '5px', xs: '5px' },
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
                          <Box
                            sx={{
                              pr: {
                                lg: '16px',
                                md: '14px',
                                sm: '13px',
                                xs: '13px',
                              },
                            }}
                          >
                            <Image
                              src={item?.listIcon}
                              alt="List Icon"
                              width={
                        isSmallScreen
                          ? 15
                          : isMediumScreen
                            ? 20
                            : isLargeScreen
                              ? 25
                              : 25
                      }
                              height={
                        isSmallScreen
                          ? 15
                          : isMediumScreen
                            ? 20
                            : isLargeScreen
                              ? 25
                              : 25
                      }
                              style={{ marginTop: '8px' }}
                            />
                          </Box>
                          <Box>
                            <Typography
                              variant="body1"
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
                              {list?.title}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    {/* </Box> */}
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
