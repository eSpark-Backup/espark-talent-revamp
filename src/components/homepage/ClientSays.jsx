'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
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
import { usePathname } from 'next/navigation';

const ClientSays = ({ data }) => {
  const pathName = usePathname();
  const { slider, heading, subHeading } = data;
  return (
    <Box
      sx={{
        mt: { sm: 7, md: 9, lg: 7 },
        mb: { sm: '25%', md: '20%', lg: '13%' },
        backgroundColor: pathName.includes('book-a-demo-meeting')
          ? '#F7F8FF'
          : '#fff',
        pt: pathName.includes('book-a-demo-meeting')
          ? {
              xs: 3,
              sm: 5,
              md: 7,
            }
          : 0,
        '@media (min-width: 600px) and (max-width: 767px)': {
          mt: 6,
          mb: '30%',
        },
        '@media (min-width: 425px) and (max-width: 599px)': {
          mt: 5,
          mb: '34%',
        },
        '@media (min-width: 375px) and (max-width: 424px)': {
          mt: 5,
          mb: '38%',
        },
        '@media (min-width: 300px) and (max-width: 374px)': {
          mt: 5,
          mb: '50%',
        },
      }}
    >
      <Container>
        <Box
          sx={{
            mb: { sm: '55px', md: '40px' },
            px: { xs: '2%', sm: '10%', md: '0' },
          }}
        >
          <Typography
            component={'h2'}
            color={'secondary'}
            sx={{
              px: { xs: '5%', md: '7%' },
              fontSize: {
                xs: '22px',
                sm: '24px',
                md: '35px',
                lg: '43px',
              },
              mb: 1,
              fontWeight: 600,
              textAlign: 'center',
              flexWrap: 'wrap',
            }}
          >
            {heading}
          </Typography>
          <Typography
            component={'p'}
            color={'secondary'}
            sx={{
              fontSize: {
                xs: '11px',
                sm: '13px',
                md: '16px',
                lg: '18px',
              },
              fontWeight: 500,
              textAlign: 'center',
              px: { xs: '5%', md: '7%' },
            }}
          >
            {subHeading}
          </Typography>
        </Box>
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
                    slidesPerView: 'auto',
                  },
                  425: {
                    slidesPerView: 'auto',
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
                          px: { xs: 2 },
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
                              quality="85"
                              priority={true}
                              src={items.image}
                              width={174.981}
                              height={34}
                              alt="logo"
                            />
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              '@media (min-width: 300px) and (max-width: 599px) ':
                                {
                                  display: 'none',
                                },
                            }}
                          >
                            <StarRating stars={4} />
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          my: { sm: 4, md: 0.5 },
                          '@media (min-width: 600px) and (max-width: 767px) ': {
                            my: 3,
                          },
                          '@media (min-width: 425px) and (max-width: 599px) ': {
                            my: 3,
                          },
                          '@media (min-width: 300px) and (max-width: 424px) ': {
                            my: 2,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: '100%', sm: '440px' },
                            px: { xs: 2 },
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              fontSize: '24px',
                              fontWeight: 600,
                              color: '#525252',
                            }}
                          >
                            {items?.title}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '18px !important',
                              fontWeight: 400,

                              color: '#525252',
                              '@media (min-width: 300px) and (max-width: 599px) ':
                                {
                                  mb: 1,
                                },
                            }}
                          >
                            {items?.subTitle}
                            <Box
                              sx={{
                                display: 'none',
                                '@media (min-width: 300px) and (max-width: 599px) ':
                                  {
                                    display: 'flex',
                                    mb: 3,
                                  },
                              }}
                            >
                              <StarRating stars={4} />
                            </Box>
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: {
                                xs: '10px !important',
                                md: '12px !important',
                              },
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
