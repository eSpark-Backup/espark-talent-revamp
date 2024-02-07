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
            mt: { xs: '22px', md: '0px' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mx: { xs: '5%', md: '16%' },
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
                  width: '320px',
                  boxShadow: '0px 0px 5px 2px rgba(6, 6, 6, 0.12)',
                  mx: 'auto !important',
                  p: { xs: '39px 28px 20px 28px', md: '48px 31px 24px 31px' },
                  m: 1,
                  '@media (min-width: 768px) and (max-width: 890px)': {
                    width: '280px ',
                    height: '200.036px',
                  },
                  '@media (min-width: 890px) and (max-width: 1050px)': {
                    width: '330px ',
                    height: '200.036px',
                  },
                  '@media (min-width: 1051px) and (max-width: 1150px)': {
                    width: '380px ',
                    height: '200.036px',
                  },
                  '@media (min-width: 1151px) and (max-width: 1259px)': {
                    width: '450px ',
                    height: '200.036px',
                  },
                  '@media (min-width: 360px) and (max-width: 767px)': {
                    width: '260px ',
                    height: '180.036px',
                  },
                  '@media (min-width: 276px) and (max-width: 315px)': {
                    width: '180px ',
                  },
                  '@media (min-width: 316px) and (max-width: 359px)': {
                    width: '195px ',
                    height: '225px',
                  },
                }}
              >
                <Box
                  sx={{
                    margin: '0px auto',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: { xs: '12px', md: '15px' },
                      width: { xs: '39px', md: '49px' },
                      height: { xs: '39px', md: '49px' },
                      mx: 'auto',
                    }}
                  >
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      width={65}
                      height={65}
                      alt={`${item?.alt} - eSpark Talent`}
                      className="its-our-job-card-image"
                    />
                  </Box>

                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#09114A',
                        fontSize: { xs: '17px', lg: '22px' },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: { xs: '24.4px', md: '26.4px' },
                        mb: { xs: '9px', md: '11px' },
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontSize: { lg: '16px', xs: '13.024px' },
                        textAlign: 'justify',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: { xs: '24px', md: '30.4px' },
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
