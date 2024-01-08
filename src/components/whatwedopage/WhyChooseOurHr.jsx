import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const WhyChooseOurHr = ({ data }) => {
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Box sx={{ my: '4%' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                color: '#001C63',
                fontSize: '32px',
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#001C63',
                fontSize: '18px',
                fontWeight: 400,
                pr: { md: 15 },
                textAlign: { xs: 'center', md: 'justify' },
              }}
            >
              {data.paragraph}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
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
                  slidesPerView: 1,
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
              {data?.card?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: { xs: 'center' },
                      justifyContent: 'center',
                      margin: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#fff',
                        boxShadow: '0px 2px 8.6px 0px rgba(0, 0, 0, 0.30)',
                        padding: 3,
                        borderRadius: '15px',
                        width: { sm: '450px', md: '100%' },
                        height: {
                          xs: 'auto',
                          sm: '150px',
                          md: '240px',
                          lg: 'auto',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <Box
                          sx={{
                            mr: 2,
                            mt: { xs: 2, sm: 0 },
                          }}
                        >
                          <Image
                            src={item.icon}
                            width={isXsOrSm ? 200 : 300}
                            height={65}
                            alt={item.alt}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: '#001C63',
                              fontSize: '20px',
                              fontWeight: 700,
                              fontStyle: 'normal',
                              lineHeight: '26.4px',
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: '#000',
                              fontSize: '15px',
                              fontWeight: 400,
                              lineHeight: '23.4px',
                              fontStyle: 'normal',
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  my: 2,
                }}
              >
                <Image
                  src={data?.arrowIcon}
                  width={50}
                  height={65}
                  alt={data?.alt}
                />
              </Box>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseOurHr;
