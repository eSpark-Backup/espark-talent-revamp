'use client';
import React, { useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const ServiceExpertiesResponsive = ({
  items,
  arrowIconCircle,
  arrowIconLeft,
  arrowIconRight,
}) => {
  const swiperRef = useRef(null);
  const handleControlSwiper = (type) => {
    switch (type) {
      case 'next':
        swiperRef?.current?.swiper?.slidePrev();
        break;
      case 'prev':
        swiperRef?.current?.swiper?.slideNext();
        break;

      default:
        break;
    }
  };
  return (
    <Box>
      <Swiper
        ref={swiperRef}
        spaceBetween={1}
        modules={[Pagination]}
        className="mySwiper"
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
                    // width: '100%',
                    width: { xs: '253.24px', sm: '400px' },
                    height: '135px',
                    borderRadius: '13.57px',
                    border: '1px solid lightGray',
                    // border: '2px solid green',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

                    '@media (min-width: 280px) and (max-width: 293px)': {
                      height: '144px',
                    },
                    //  '@media (max-width: 370px)': {
                    //     width:'253.24px'
                    // },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      height: { xs: '56px', md: '70.972px' },
                      borderRadius: '13.57px',
                      background: '#F7F8FB',
                      borderTop: '1px solid lightGray',
                      p: '20px',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component={'img'}
                      src={item?.icon}
                      alt={item?.title}
                      sx={{
                        width: 43,
                        height: 43,
                        '@media (min-width: 280px) and (max-width: 424px)': {
                          width: 27,
                          height: 27,
                        },
                      }}
                    />
                    <Typography
                      //   component="h4"
                      //   color="secondary"
                      sx={{
                        fontSize: { xs: '12.6px', sm: '14px', md: '20px ' },
                        fontWeight: 600,
                        lineHeight: { xs: '15.11px' },
                        color: '#001C63',
                        ml: 2,
                        // '@media (min-width: 375px) and (max-width: 424px)': {
                        //   fontSize: '18px !important',
                        // },
                        // '@media (min-width: 280px) and (max-width: 374px)': {
                        //   ml: 1,
                        //   fontSize: '15px !important',
                        // },
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: '8px 15px',
                      borderRadius: '0 0 20px 20px',
                      backgroundColor: '#fff',
                      height: '100%',
                    }}
                  >
                    <Typography
                      //   component={'p'}
                      sx={{
                        fontSize: { xs: '10.08px', sm: '12px', md: '14px' },
                        lineHeight: { xs: '14.56px', sm: '20px' },
                        // '@media (min-width: 280px) and (max-width: 374px)': {
                        //   fontSize: '12px !important',
                        // },
                        fontWeight: 400,
                        color: '#000',
                      }}
                    >
                      {item?.paragraph}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            my: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              minWidth: { xs: '18px', md: '23px' },
              height: { xs: '15px', md: '23px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              quality="85"
              priority={true}
              onClick={() => {
                handleControlSwiper('next');
              }}
              src={arrowIconLeft}
              width={19}
              height={19}
              alt={`Experties Icon`}
              className="swiper-controller-icon"
            />
          </Box>
          <Box
            sx={{
              minWidth: { xs: '12px', md: '23px' },
              height: { xs: '15px', md: '23px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              quality="85"
              priority={true}
              src={arrowIconCircle}
              width={19}
              height={19}
              alt={`Experties Icon`}
              className="swiper-controller-icon"
            />
          </Box>
          <Box
            sx={{
              minWidth: { xs: '18px', md: '23px' },
              height: { xs: '15px', md: '23px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              quality="85"
              priority={true}
              onClick={() => handleControlSwiper('prev')}
              src={arrowIconRight}
              width={19}
              height={19}
              alt={`Experties Icon`}
              className="swiper-controller-icon"
            />
          </Box>
        </Box>
      </Swiper>
    </Box>
  );
};

export default ServiceExpertiesResponsive;
