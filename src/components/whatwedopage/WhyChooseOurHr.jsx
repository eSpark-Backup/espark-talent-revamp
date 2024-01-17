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
          <Grid item xs={12} sm={12} md={7} lg={7}>
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
                  pt: { xs: '10px', lg: '15px' },
                  py: { xs: '10px' },
                  px: { xs: '30px', sm: '0' },
                  pr: { md: '5px' },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { lg: '18px', md: '18px', sm: '11px', xs: '10px' },
                  fontWeight: { xs: 700, md: 400 },
                  lineHeight: { lg: '31.863px', md: '22px', xs: '20px' },
                  pr: { md: '10px', lg: '80px' },
                  px: { xs: '5px', sm: '0' },

                  textAlign: { xs: 'center', md: 'justify' },
                }}
              >
                {data.paragraph}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Swiper
              ref={swiperRef}
              spaceBetween={1}
              modules={[Pagination]}
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
                      alignItems: { lg: 'center' },
                      justifyContent: { lg: 'center' },
                      margin: 0.5,
                    }}
                  >
                    <Box
                      className="whatWeBox"
                      sx={{
                        backgroundColor: '#fff',
                        boxShadow: '0px 2px 8.6px 0px rgba(0, 0, 0, 0.30)',
                        padding: '15px',
                        borderRadius: '15px',
                        width: {
                          xs: '294.309px',
                          sm: '314.309px',
                          md: '390px',
                          lg: '485px',
                        },
                        height: {
                          xs: 'auto',
                          lg: '180px',
                        },
                        mt: { xs: 1, md: 0 },
                        margin: '10px auto !important',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          px: { lg: '25px' },
                        }}
                      >
                        <Box
                          className="imageBox"
                          sx={{
                            mr: 2,
                            pl: { xs: 1, lg: 0.5 },
                            pt: { md: '15px', lg: '12px' },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <Image
                              src={item.icon}
                              width={isXsOrSm ? 205 : 260}
                              height={65}
                              alt={item.alt}
                            />
                          </ListItemIcon>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: '#09114A',
                              fontSize: {
                                lg: '20px',
                                xs: '13.08px',
                                md: '16px',
                              },
                              fontStyle: 'normal',
                              fontWeight: 700,
                              lineHeight: { lg: '26.4px', xs: '17.266px' },
                              py: { xs: '5px', sm: 1, md: 0.5 },
                              px: { lg: '14px' },
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            className="typo"
                            sx={{
                              color: '#000',
                              fontSize: {
                                lg: '15px',
                                md: '15px',
                                sm: '11px',
                                xs: '9.81px',
                              },
                              fontStyle: 'normal',
                              fontWeight: { xs: 700, md: 400, lg: 400 },
                              lineHeight: {
                                lg: '23.4px',
                                md: '18px',
                                sm: '15.304px',
                                xs: '15.304px',
                              },
                              px: { lg: '14px' },
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
