'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
import GlobalTeamsLoader from '../global/GlobalTeamsLoader';

const GlobalTeams = ({ data }) => {
  const { title, text, slides, styles } = data || {};
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  const handleClick = (e, link) => {
    e.preventDefault();
    if (!link) return;
    setLoading(true);
    router?.push(link);
  };

  const BreakBorderSlider = () => (
    <Box maxWidth={1400} mx="auto" my={3}>
      <Swiper
        modules={[Autoplay]}
        speed={3000}
        observer={true}
        spaceBetween={30}
        grabCursor={true}
        slidesPerView="auto"
        observeParents={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          0: { spaceBetween: 20 },
          769: { spaceBetween: 30 },
        }}
      >
        {slides?.map((slide, i) => (
          <SwiperSlide
            key={i}
            style={{ ...swiperSlideStyle, pointerEvents: 'auto' }}
          >
            <a
              href={slide?.link || '#'}
              onClick={(e) => handleClick(e, slide?.link)}
              style={{ textDecoration: 'none' }}
            >
              <Box sx={slideImageStyle}>
                <Image
                  src={slide?.image}
                  alt={`logo-${i}`}
                  width={297}
                  height={407}
                  placeholder="blur"
                  priority
                  style={{
                    objectFit: 'cover',
                    borderRadius: '30px',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />

                <Box sx={flagBoxStyle}>
                  <Box sx={flagImageStyle}>
                    <Image
                      fill
                      priority
                      src={slide?.flag}
                      alt={`flag-${i}`}
                      placeholder="blur"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '100%',
                      }}
                    />
                  </Box>
                  <Typography sx={countryTextStyle}>
                    {slide?.country}
                  </Typography>
                </Box>
              </Box>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255,255,255,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <GlobalTeamsLoader time={5000} />
        </Box>
      )}

      <Box sx={mainBoxStyle}>
        <Box>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={textStyle}>{text}</Typography>
        </Box>
        <Box>
          <BreakBorderSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalTeams;
