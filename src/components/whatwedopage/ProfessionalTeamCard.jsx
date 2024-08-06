'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProfessionalTeamCard = ({ teamData }) => {
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
          spaceBetween={15}
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
            769: {
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
                  width: '100%',
                  height: '100%',
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 1.5,
                    py: { xs: 2, md: 1, lg: 2.5 },
                    mx: 'auto',
                    width: { xs: '85%', md: '93%', lg: '93%' },
                    height: '100%',
                    maxWidth: '550px',
                    maxHeight: '140px',
                    minHeight: {
                      xs: '70px',
                      sm: 'auto',
                      md: '120px',
                      lg: '140px',
                    },
                    backgroundColor: '#fff',
                    borderRadius: '13.858px',
                    boxShadow:
                      '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    '@media (min-width: 9010px) and (max-width: 1023px)': {
                      width: '90%',
                      minHeight: '140px',
                    },
                    '@media (min-width: 769px) and (max-width: 909px)': {
                      py: 3,
                      width: '90%',
                      minHeight: '140px',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: { xs: 2, md: 3 },
                      px: { xs: 2, sm: 1.3 },
                      mx: 'auto',
                      '@media (min-width: 769px) and (max-width: 872px)': {
                        px: 2,
                      },
                    }}
                  >
                    <Box
                      component={'img'}
                      quality="85"
                      priority={true}
                      src={item?.icon}
                      sx={{
                        width: { xs: '30px', md: '40px', lg: '50px' },
                        height: { xs: 'auto', sm: '35px', lg: '40px' },
                      }}
                      alt={item.alt}
                      className="our-team-swiper-image"
                    />
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: '#09114A',
                          fontSize: {
                            xs: '11.72px',
                            sm: '15px',
                            md: '18.325px',
                            lg: '20.325px',
                          },
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: {
                            lg: '24.39px',
                            md: '25.39px',
                            sm: '25.39px',
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
                            md: '14px',
                            sm: '14px',
                            xs: '10.38px',
                          },
                          // textAlign: 'justify',
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
              alt={`${teamData?.alt}`}
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
              alt={`${teamData?.alt}`}
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
              alt={`${teamData?.alt}`}
              className="swiper-controller-icon"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalTeamCard;
