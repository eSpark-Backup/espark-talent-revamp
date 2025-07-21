'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Title from './Title';

const OurService = ({ ourService }) => {
  const { card, heading, subHeading } = ourService;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Title heading={heading} subHeading={subHeading} variant={'h2'} />
        <Swiper
          spaceBetween={0}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
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
            1024: {
              slidesPerView: 3,
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
                  maxWidth: {
                    xs: '316.31px',
                    md: 'auto ',
                    lg: '365.643px ',
                  },
                  height: { xs: '201.32px', sm: '232.671px', lg: '222.671px' },
                  borderRadius: '8.875px',
                  backgroundColor: '#fff',
                  boxShadow: ' 0px 0px 31.062px 0px rgba(0, 0, 0, 0.07)',
                  py: '20px',
                  margin: { xs: '10px auto !important', md: '7px ' },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      my: '25px',
                      px: { xs: '24px', md: '15px' },
                    }}
                  >
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.image}
                      width={60}
                      height={50}
                      alt={`${item?.alt}`}
                    />
                  </Box>

                  <Box sx={{ px: { xs: '24px', md: '22px' } }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: '#09114A',
                        fontSize: { xs: '19.197px ', md: '22.187px' },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: { xs: '20.272px', md: '23.43px' },
                        mt: { lg: 1 },
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#001C63',
                        fontSize: { xs: '12.286px', md: '14.2px' },
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: { xs: '23.344px', md: '26.979px' },
                        mt: { lg: 1 },
                      }}
                    >
                      {item?.description}
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

export default OurService;
