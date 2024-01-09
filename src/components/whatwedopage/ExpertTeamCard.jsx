'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const ExpertTeamCard = ({ teamData }) => {
  const { heading, card } = teamData;
  return (
    <Box sx={{ mb: '6%' }}>
      <Container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            pb: { md: '45px', xs: '10px' },
          }}
        >
          <Typography
            sx={{
              mx: '20%',
              color: '#001C63',
              fontSize: { md: '32px', xs: '20px' },
              fontStyle: 'normal',
              fontWeight: { xs: 700, sm: 600 },
              lineHeight: { md: '42.289px', xs: '27px' },
              textAlign: 'center',
            }}
          >
            {heading}
          </Typography>
        </Box>
        <Swiper
          spaceBetween={0}
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
            768: {
              slidesPerView: 2,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
            },

            1260: {
              slidesPerView: 3,
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
                  borderRadius: '11px',
                  backgroundColor: '#fff',
                  boxShadow: '0px 0px 5px 2px rgba(6, 6, 6, 0.12)',
                  p: 1,
                  m: 1,
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '320px',
                      sm: '258.036px',
                    },
                    height: '280px',
                    margin: '0px auto',
                  }}
                >
                  <Box
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      display: 'flex',
                      justifyContent: 'center',
                      p: 1,
                    }}
                  >
                    <Image
                      src={item?.icon}
                      width={50}
                      height={50}
                      alt={item.alt}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: { xs: '21px', md: '22px' },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: { xs: '24.4px', md: '26.4px' },
                        mt: { lg: 1 },
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: { md: '16px', sx: '13.024px' },
                        textAlign: 'justify',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: { xs: '25.4px', md: '30.4px' },
                        mt: { lg: 1 },
                      }}
                    >
                      {item?.paragraph}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default ExpertTeamCard;
