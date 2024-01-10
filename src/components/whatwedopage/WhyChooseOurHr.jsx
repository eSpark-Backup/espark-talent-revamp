import React, { useRef } from 'react';
import Image from 'next/image';
import { Box, Container, Grid, ListItemIcon, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const WhyChooseOurHr = ({ data }) => {
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
    <Box sx={{ my: '4%' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7}>
            <Box
              sx={{
                mt: { md: 2, lg: 3 },
              }}
            >
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { md: '32px', xs: '20px' },

                  fontStyle: 'normal',
                  fontWeight: { xs: 700, sm: 600 },
                  lineHeight: { md: '42.289px', xs: '27px' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { sm: '18px', xs: '10px' },

                  fontWeight: { xs: 700, sm: 400 },
                  lineHeight: { md: '31.863px', xs: '20px' },
                  // pr: { md: 10 },
                  textAlign: { xs: 'center', md: 'justify' },
                  p: { xs: '5px', md: '0px' },
                }}
              >
                {data.paragraph}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Swiper
              ref={swiperRef}
              spaceBetween={1}
              modules={[Pagination]}
              className="why-choose-hr-Swiper"
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
                        padding: { xs: '18px 10px', md: '25px 25px' },
                        borderRadius: '15px',
                        width: { xs: '294.31px', md: '100%' },
                        maxHeight: {
                          xs: '143.884px',
                          sm: '150px',
                          md: '220px',
                        },
                        mt: { xs: 1, md: 0 },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <Box
                          sx={{
                            mr: { xs: '13px', md: '20px' },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <Image
                              src={item.icon}
                              width={isXsOrSm ? 100 : 200}
                              height={65}
                              alt={item.alt}
                            />
                          </ListItemIcon>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: '#09114A',
                              fontSize: { md: '20px', xs: '13.08px' },
                              fontWeight: 700,
                              fontStyle: 'normal',
                              lineHeight: { lg: '26.4px', xs: '17.266px' },
                              pb: { xs: '5px', md: '7px' },
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: '#000',

                              fontSize: {
                                md: '15px',
                                sm: '15px',
                                xs: '9.81px',
                              },
                              fontStyle: 'normal',
                              fontWeight: { xs: 700, sm: 400 },
                              lineHeight: {
                                lg: '23.4px',
                                sm: '23px',
                                xs: '15.304px',
                              },
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
                    onClick={() => {
                      handleControlSwiper('next');
                    }}
                    src={data.arrowIconLeft}
                    width={17}
                    height={17}
                    alt={data.alt}
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
                    src={data.arrowIconCircle}
                    width={17}
                    height={17}
                    alt={data.alt}
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
                    onClick={() => handleControlSwiper('prev')}
                    src={data.arrowIconRight}
                    width={17}
                    height={17}
                    alt={data.alt}
                    className="swiper-controller-icon"
                  />
                </Box>
              </Box>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseOurHr;
