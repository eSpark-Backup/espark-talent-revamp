'use client';
import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


import TitleParagraph from '@/components/global/titleParagraph';


const OutSourcingWonders = ({ data }) => {
  return (
    <>
      <Box sx={{ py: '2%', overflow: 'hidden' }}>
        <Container>
          <Box sx={{ textAlign: 'center', px: '10%' }}>
            <TitleParagraph title={data?.title} paragraph={data?.paragraph} />
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
           }}>
            {data?.items.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: '232.671px',
                    borderRadius: '30px',
                    p: 1,
                    m:1,
                    background: ' #FFF',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
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
                    }}>
                    <Box
                      sx={{
                        mt: { xs: 1, sm: 2 },

                        p: 1,
                      }}>

                      <Image
                        src={item?.icon}
                        alt={item?.title}
                        height={item?.iconHeight}
                        width={item?.iconWidth}
                      />
                    </Box>
                    <Box>
                      <Typography
                         sx={{
                          color: '#09114A',
                          fontSize: { xs: '20px', sm: '21px', md: '22.187px' },
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: { xs: '20.4px',sm: '24.4px', md: '23.43px' },
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
                        lineHeight: { xs: '21.4px',sm: '25.4px', md: '26.979px' },
                        mt: { lg: 1 },
                      }}>
                        {item?.paragraph}
                      </Typography>

                    </Box>

                  </Box>
                </Box>
              </SwiperSlide>
            ))}
            {/* </Grid> */}
          </Swiper>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingWonders;
