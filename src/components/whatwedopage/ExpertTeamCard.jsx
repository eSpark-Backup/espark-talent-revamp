'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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
          modules={[Pagination]}
          className="mySwiper-its-our-job"
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
                  p: { xs: '39px 28px 20px 28px', md: '48px 31px 24px 31px' },
                  m: 1,
                  // height: { xs: '250px', md: '250px' },
                }}
              >
                <Box
                  sx={{
                    // width: {
                    //   md: '320px',
                    //   sm: '258.036px',
                    // },

                    margin: '0px auto',
                  }}
                >
                  <Box
                    sx={{
                      // mt: { xs: 1, sm: 2 },
                      display: 'flex',
                      justifyContent: 'center',
                      mb: { xs: '12px', md: '15px' },
                      // p: 1,
                    }}
                  >
                    <Image
                      src={item?.icon}
                      width={65}
                      height={65}
                      alt={item.alt}
                      className="its-our-job-card-image"
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: { xs: '17px', md: '22px' },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: { xs: '24.4px', md: '26.4px' },
                        mb: { xs: '9px', md: '11px' },
                        // letterSpacing:index > 0 && "0.65px"
                        // mt: { lg: 1 },
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: { md: '17px', xs: '13.024px' },
                        textAlign: 'justify',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: { xs: '24px', md: '30.4px' },
                        // mt: { lg: 1 },
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
