'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProfessionalTeamCard = ({ teamData }) => {
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
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
    <Box sx={{ mb: '4%' }}>
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
            variant="h2"
            sx={{
              px: { md: '11%' },
              color: '#001C63',
              textAlign: 'center',
              fontSize: { md: '32px', xs: '20px' },
              fontWeight: 700,
              fontStyle: 'normal',
              lineHeight: { md: '48px', xs: '30px' },
            }}
          >
            {teamData.heading}
          </Typography>
        </Box>
        <Swiper
          ref={swiperRef}
          spaceBetween={1}
          modules={[Pagination]}
          className="professional-team-card-Swiper"
          breakpoints={{
            600: {
              slidesPerView: 1,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide-team-card',
            },
            768: {
              slidesPerView: 2,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide-team-card',
            },
          }}
        >
          {teamData?.cardData?.map((item, index) => (
            <SwiperSlide className="swiper-slide-team-card" key={index}>
              <Box
                sx={{
                  height: {
                    xs: '90.986px',
                    sm: '120px !important',
                    md: 'auto',
                  },
                  maxWidth: { xs: '280.176px', sm: '295px !important' },
                  display: 'flex',
                  padding: {
                    xs: '8px 16px 8px 17px',
                    md: '15px 28px 31px 30px',
                  },
                  backgroundColor: '#fff',
                  borderRadius: '13.858px',
                  boxShadow:
                    '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  margin: { xs: '10px auto', md: '2' },
                  '@media (min-width: 276px) and (max-width: 320px)': {
                    maxWidth: '200px !important',
                    height: '105.986px !important',
                  },
                  '@media (min-width: 321px) and (max-width: 359px)': {
                    maxWidth: '230px !important',
                    height: '100.986px !important',
                  },
                  '@media (min-width: 769px) and (max-width: 889px)': {
                    maxWidth: '295px !important',
                    height: '130.986px !important',
                  },
                  '@media (min-width: 890px) and (max-width: 1050px)': {
                    maxWidth: '340px !important',
                    height: '110.986px !important',
                  },
                  '@media (min-width: 1051px) and (max-width: 1150px)': {
                    maxWidth: '400px !important',
                    height: '100.986px !important',
                  },
                  '@media (min-width: 1151px) and (max-width: 1229px)': {
                    maxWidth: '450px !important',
                    height: '100.986px !important',
                  },

                  '@media (min-width: 1230px) and (max-width: 1374px)': {
                    maxWidth: '460px !important',
                    height: '100.986px !important',
                  },
                  '@media (min-width: 1375px) and (max-width: 1500px)': {
                    maxWidth: '480px !important',
                  },
                  '@media (min-width: 1501px) and (max-width: 6000px)': {
                    maxWidth: '485px !important',
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: { xs: '28px', md: '35px', lg: '49px' },
                    height: { xs: '28px', md: '35px', lg: '49px' },
                    '@media (min-width: 276px) and (max-width: 359px)': {
                      mt: { xs: '10px', sm: '0px' },
                    },
                    '@media (min-width: 360px) and (max-width: 767px)': {
                      mt: { xs: '10px', sm: '15px', md: '0px' },
                    },
                  }}
                >
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    width={isXsOrSm ? 40 : 49}
                    height={49}
                    alt={item.alt}
                    className="our-team-swiper-image"
                  />
                </Box>
                <Box
                  sx={{
                    pl: { xs: '18px', md: '22px', lg: '31px' },
                    '@media (min-width: 310px) and (max-width: 359px)': {
                      mt: { xs: '5px', md: '0px' },
                    },
                    '@media (min-width: 360px) and (max-width: 767px)': {
                      mt: { xs: '10px', sm: '15px', md: '0px' },
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#09114A',
                      fontSize: { md: '20.325px', sm: '15px', xs: '11.72px' },
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: {
                        lg: '24.39px',
                        md: '18.39px',
                        xs: '14.064px',
                      },
                      mt: { lg: '1px' },
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6F76A8',
                      fontSize: {
                        lg: '18px',
                        md: '16px',
                        sm: '14px',
                        xs: '10.38px',
                      },
                      textAlign: 'justify',
                      fontStyle: 'normal',
                      fontWeight: { xs: 700, sm: 400 },
                      lineHeight: {
                        lg: '30px',
                        md: '23.085px',
                        sm: '20.263px',
                        xs: '15.263px',
                      },
                      p: { xs: '8px 0 0 0', md: '13px 0 0 0' },
                    }}
                  >
                    {item?.paragraph}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            my: { xs: 1, md: 2 },
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
              src={teamData.arrowIconLeft}
              width={17}
              height={17}
              alt={`${teamData?.alt} - eSpark Talent`}
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
              src={teamData.arrowIconCircle}
              width={17}
              height={17}
              alt={`${teamData?.alt} - eSpark Talent`}
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
              src={teamData.arrowIconRight}
              width={17}
              height={17}
              alt={`${teamData?.alt} - eSpark Talent`}
              className="swiper-controller-icon"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalTeamCard;
