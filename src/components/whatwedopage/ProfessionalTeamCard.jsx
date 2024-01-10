'use client';
import React, { useRef } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

const ProfessionalTeamCard = ({ teamData }) => {
  const isXsOrSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const swiperRef = useRef(null)

  const handleControlSwiper = (type) => {
    switch (type) {
      case "next":
        swiperRef?.current?.swiper?.slidePrev()
        break;
      case "prev":
        swiperRef?.current?.swiper?.slideNext()
        break;

      default:
        break;
    }
  }

  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            pb: { md: '45px', xs: '10px' },
          }}
        >
          <Typography
            sx={{
              px: { md: '20.22%' },
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
            768: {
              slidesPerView: 2,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
            }
          }}
        >
          {teamData?.cardData?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: { lg: '175px', xs: '100.986px', sm: '175px' },
                  display: 'flex',
                  padding: { xs: "8px 16px 0px 17px", md: "15px 28px 31px 30px" },
                  margin: { xs: '5px', md: "15px 7.5px" },
                  backgroundColor: '#fff',
                  borderRadius: '13.858px',
                  boxShadow:
                    '0px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Box sx={{
                  minWidth: { xs: "28px", md: "49px" },
                  height: { xs: "28px", md: "49px" },
                }}>
                  <Image
                    src={item?.icon}
                    width={isXsOrSm ? 40 : 49}
                    height={49}
                    alt={item.alt}
                    className="swiper-image"
                  />
                </Box>
                <Box sx={{ pl: { xs: "18px", md: '31px' } }}>
                  <Typography
                    sx={{
                      color: '#09114A',
                      fontSize: { md: '20.325px', sm: '15px', xs: '11.72px' },
                      fontStyle: 'normal',

                      fontWeight: 600,
                      lineHeight: { md: '24.39px', xs: '14.064px' },
                      mt: { lg: '1px' },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
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
                      p: { xs: "8px 0 0 0", md: "19px 0 0 0" }

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
          <Box sx={{
            minWidth:{xs:"12px",md:"23px"},
            height:{xs:"15px",md:"23px"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Image
              onClick={() => {
                handleControlSwiper("next")
              }}
              src={teamData.arrowIconLeft}
              width={17}
              height={17}
              alt={teamData.alt}
              className='swiper-controller-icon'
            />
          </Box>
          <Box sx={{
            minWidth:{xs:"12px",md:"23px"},
            height:{xs:"15px",md:"23px"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Image
              src={teamData.arrowIconCircle}
              width={17}
              height={17}
              alt={teamData.alt}
              className='swiper-controller-icon'
            />
          </Box>
          <Box sx={{
            minWidth:{xs:"12px",md:"23px"},
            height:{xs:"15px",md:"23px"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <Image
              onClick={() => handleControlSwiper("prev")}
              src={teamData.arrowIconRight}
              width={17}
              height={17}
              alt={teamData.alt}
              className='swiper-controller-icon'
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalTeamCard;
