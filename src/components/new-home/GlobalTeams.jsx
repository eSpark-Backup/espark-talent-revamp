import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const GlobalTeams = ({ data }) => {
  const { title, text, slides, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    textStyle,
    swiperSlideStyle,
    slideImageStyle,
    flagBoxStyle,
    flagImageStyle,
    countryTextStyle,
  } = styles || {};

  const BreakBorderSlider = () => {
    return (
      <Box maxWidth={1472} mx="auto" my={3}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={'auto'}
          //   loop={true}
          autoplay={{ delay: 0, disableOnInteraction: true }}
          speed={3000}
          grabCursor={true}
          breakpoints={{
            0: {
              spaceBetween: 20,
            },
            769: {
              spaceBetween: 30,
            },
          }}
        >
          {slides?.map((slide, i) => (
            <SwiperSlide key={i} style={swiperSlideStyle}>
              <Box
                component="img"
                src={slide?.image}
                alt={`logo-${i}`}
                sx={slideImageStyle}
              />
              <Box sx={flagBoxStyle}>
                <Box component={'img'} src={slide?.flag} sx={flagImageStyle} />
                <Typography sx={countryTextStyle}>{slide?.country}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };

  return (
    <Box sx={mainBoxStyle}>
      <Box>
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography sx={textStyle}>{text}</Typography>
      </Box>
      <Box>
        <BreakBorderSlider />
      </Box>
    </Box>
  );
};

export default GlobalTeams;
