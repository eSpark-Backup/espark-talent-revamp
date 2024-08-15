import React, { useRef } from 'react';
import { Box, ListItemIcon, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { handleControlSwiper } from '@/utils';

const WhyChooseOurHrSlider = ({ data }) => {
  const swiperRef = useRef(null);
  const isXsOrSm = useMediaQuery((theme) => theme?.breakpoints?.down('sm'));
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={1}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 1,
            pagination: { el: '.swiper-pagination', clickable: true },
          },
          960: {
            slidesPerView: 1,
            pagination: { el: '.swiper-pagination', clickable: true },
          },
        }}
      >
        {data?.card?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: { lg: 'center' },
                justifyContent: { lg: 'center' },
                margin: 0.5,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'center' },
                  justifyContent: { xs: 'center' },
                  backgroundColor: '#fff',
                  boxShadow: '0px 2px 8.6px 0px rgba(0, 0, 0, 0.30)',
                  padding: '15px',
                  borderRadius: '15px',
                  width: {
                    xs: '294.309px',
                    sm: '314.309px',
                    md: '390px',
                    lg: '485px',
                  },
                  height: '100%',
                  minHeight: {
                    xs: '155px',
                    sm: '140px',
                    md: '100%',
                    lg: '180px',
                  },
                  pr: 2.5,
                  mt: { xs: 1, md: 0 },
                  margin: '10px auto !important',
                  '@media(min-width: 769px) and (max-width: 872px)': {
                    py: 1.5,
                    minHeight: '225px',
                  },
                  '@media(min-width: 280px) and (max-width: 319px)': {
                    pr: 2.4,
                    minHeight: '200px',
                  },
                }}
              >
                <Box sx={{ display: 'flex', px: { lg: '25px' } }}>
                  <Box
                    sx={{
                      mr: 2,
                      pl: { xs: 1, lg: 0.5 },
                      pt: { md: '15px', lg: '12px' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '30px' }}>
                      <Image
                        quality="85"
                        priority
                        src={item.icon}
                        width={isXsOrSm ? 205 : 260}
                        height={65}
                        alt={item?.alt}
                      />
                    </ListItemIcon>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: {
                          lg: '20px',
                          xs: '13.08px',
                          md: '16px',
                        },
                        fontWeight: 700,
                        lineHeight: { lg: '26.4px', xs: '17.266px' },
                        py: { xs: '5px', sm: 1, md: 0.5 },
                        px: { lg: '14px' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: {
                          lg: '15px',
                          md: '15px',
                          sm: '11px',
                          xs: '9.81px',
                        },
                        fontWeight: { xs: 700, md: 400, lg: 400 },
                        lineHeight: {
                          lg: '23.4px',
                          md: '18px',
                          sm: '15.304px',
                          xs: '15.304px',
                        },
                        px: { lg: '14px' },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
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
          {['next', '', 'prev']?.map((type, index) => (
            <Box
              key={index}
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
                priority
                onClick={() => type && handleControlSwiper(type, swiperRef)}
                src={
                  data[
                    type === 'next'
                      ? 'arrowIconLeft'
                      : type === 'prev'
                        ? 'arrowIconRight'
                        : 'arrowIconCircle'
                  ]
                }
                width={17}
                height={17}
                alt={data?.alt}
                className="swiper-controller-icon"
              />
            </Box>
          ))}
        </Box>
      </Swiper>
    </>
  );
};

export default WhyChooseOurHrSlider;
