'use client';
import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProfessionalTeamCard = ({ teamData }) => {
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              width: { md: '55%' },
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
          spaceBetween={1}
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
          }}
        >
          {teamData?.cardData?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: { lg: '175px', xs: '100.986px', sm: '150px' },
                  display: 'flex',
                  padding: 2,
                  margin: 2,
                  backgroundColor: '#fff',
                  borderRadius: '13.858px',
                  boxShadow:
                    '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Box>
                  <Image
                    src={item?.icon}
                    width={isXsOrSm ? 40 : 100}
                    height={200}
                    alt={item.alt}
                    className="swiper-image"
                  />
                </Box>

                <Box sx={{ px: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#09114A',
                      fontSize: { md: '20.325px', sm: '15px', xs: '11.72px' },
                      fontStyle: 'normal',

                      fontWeight: 600,
                      lineHeight: { md: '24.39px', xs: '14.064px' },
                      mt: { lg: 1 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#6F76A8',
                      fontSize: { md: '18px', sm: '15px', xs: '10.38px' },
                      textAlign: 'justify',
                      fontStyle: 'normal',
                      fontWeight: { xs: 700, sm: 400 },
                      lineHeight: {
                        md: '32.085px',
                        sm: '25.263px',
                        xs: '13.263px',
                      },
                      mt: { lg: 1 },
                    }}
                  >
                    {item.paragraph}
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
            my: 2,
          }}
        >
          <Image
            src={teamData.arrowIcon}
            width={50}
            height={65}
            alt={teamData.alt}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalTeamCard;
