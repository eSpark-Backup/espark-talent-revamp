'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProfessionalTeamCard = ({ teamData }) => {
  return (
    <Box>
      <Container>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography
            sx={{
              width: '55%',
              color: '#001C63',
              textAlign: 'center',
              fontSize: '32px',
              fontWeight: 600,
              fontStyle: 'normal',
              lineHeight: '48px',
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
            960: {
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
                  height: { lg: '175px', xs: 'auto' },
                  display: 'flex',
                  padding: 2,
                  margin: 2,
                  backgroundColor: '#fff',
                  borderRadius: '13.858px',
                  boxShadow:
                    '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Box
                  sx={{
                    mt: { xs: 3, sm: 2 },
                  }}
                >
                  <Image
                    src={item?.icon}
                    width={100}
                    height={200}
                    alt={item.alt}
                    className="swiper-image"
                  />
                </Box>

                <Box sx={{ px: 3 }}>
                  <Typography
                    sx={{
                      color: '#09114A',
                      fontSize: '20.325px',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: '24.39px',
                      mt: { lg: 1 },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6F76A8',
                      fontSize: '18px',
                      textAlign: 'justify',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '32.085px',
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
