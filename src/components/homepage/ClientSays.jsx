'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper/modules';
import StarRating from './StarRating';

import TitleParagraph from '@/components/global/titleParagraph.jsx';

const ClientSays = ({ data }) => {
  const { slider, heading, subHeading } = data;
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <TitleParagraph title={heading} paragraph={subHeading} />
        <Box className="mix-reviews-area">
          <Box className="main-review-area">
            <Box className="reviews-swiper">
              <Swiper
                effect={'coverflow'}
                fadeEffect={{ crossFade: true }}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 440,
                  modifier: 2,
                  slideShadows: true,
                }}
                pagination={false}
                navigation={true}
                loop={true}
                allowTouchMove={false}
                draggable={false}
                modules={[EffectCoverflow, Navigation, Pagination, EffectFade]}
                className="mySwiper reviews-swiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  425: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 'auto',
                  },
                }}
              >
                {slider?.map((items, i) => (
                  <SwiperSlide key={i}>
                    <Box className="reviews-area">
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          pt: 4,
                          px: { xs: 2, sm: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: '100%', sm: '440px' },
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Box>
                            <Image
                              src={items.image}
                              width={160}
                              height={370}
                              alt="logo"
                            />
                          </Box>
                          <Box sx={{ display: 'flex' }}>
                            <StarRating stars={4} />
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: '100%', sm: '440px' },
                            px: { xs: 2, sm: 0 },
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#525252',
                            }}
                          >
                            {items?.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#525252',
                            }}
                          >
                            {items?.subTitle}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { md: '15px ', xs: '11px' },
                              color: ' #525252',
                              textAlign: 'justify',
                              lineHeight: ' 146%',
                              fontWeight: 400,
                              fontStyle: 'normal',
                            }}
                          >
                            {items?.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientSays;
