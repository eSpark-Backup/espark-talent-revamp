'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Title from './Title';

const OurService = ({ ourService }) => {
  const { card, heading, subHeading } = ourService;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Title heading={heading} subHeading={subHeading} />
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
            860: {
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
                  width: '395.643px',
                  height: '232.671px',
                  borderRadius: '8.875px',
                  backgroundColor: '#fff',
                  boxShadow: ' 0px 0px 31.062px 0px rgba(0, 0, 0, 0.07)',
                  p: 1,
                  m: 1,
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '320px',
                      sm: '360px',
                    },
                    height: '280px',
                    margin: '0px auto',
                  }}
                >
                  <Box
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      p: 1,
                    }}
                  >
                    <Image
                      src={item?.image}
                      width={40}
                      height={50}
                      alt={item.alt}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: '#09114A',
                        fontSize: { xs: '19.197px', md: '22.187px' },
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
                        fontSize: '14.2px',
                        textAlign: 'justify',

                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: { xs: '25.4px', md: '26.979px' },
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
