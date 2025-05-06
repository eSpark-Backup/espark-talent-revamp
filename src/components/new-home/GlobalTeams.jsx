import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const GlobalTeams = () => {
  const BreakBorderSlider = () => {
    const logos = [
      'images/new-home/global-teams/canada.svg',
      'images/new-home/global-teams/united-kindom.svg',
      'images/new-home/global-teams/saudi-arabia.svg',
      'images/new-home/global-teams/qatar.svg',
      'images/new-home/global-teams/canada.svg',
      'images/new-home/global-teams/united-kindom.svg',
      'images/new-home/global-teams/saudi-arabia.svg',
      'images/new-home/global-teams/qatar.svg',
    ];
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
          {[...logos].map((logo, i) => (
            <SwiperSlide
              key={i}
              style={{
                width: '75%',
                maxWidth: 319,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={logo}
                alt={`logo-${i}`}
                sx={{
                  width: { xs: '100%', md: 319 },
                  height: { xs: 'auto', md: 407 },
                  objectFit: 'cover',
                  borderRadius: '30px',
                  position: 'relative',
                  mx: 'auto',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: { xs: 15, md: 20 },
                  left: { xs: 15, md: 20 },
                  gap: 1.2,
                }}
              >
                <Box
                  component={'img'}
                  src={'images/new-home/global-teams/canada-flag.png'}
                  sx={{
                    width: { xs: 30, md: 45 },
                    height: { xs: 30, md: 45 },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      xs: '15px',
                      sm: '17px',
                      md: '19px',
                      lg: '22px',
                    },
                    fontWeight: 400,
                    color: '#fff',
                  }}
                >
                  Canada
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
        px: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '25px', md: '28px', lg: '32px' },
            fontWeight: 600,
            color: '#001C63',
            textAlign: 'center',
            mb: { xs: 1, md: 0 },
          }}
        >
          Break Borders, Build Global Teams
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: 400,
            color: '#001C63',
            textAlign: 'center',
          }}
        >
          Break Borders, Build Global Teams
        </Typography>
      </Box>
      <Box>
        <BreakBorderSlider />
      </Box>
    </Box>
  );
};

export default GlobalTeams;
