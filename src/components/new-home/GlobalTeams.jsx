'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const GlobalTeams = ({ data }) => {
  const swiperRef = useRef(null);
  const [showSwiper, setShowSwiper] = useState(false);
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
  
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  
  const BreakBorderSlider = () => {
    return (
      <Box
        maxWidth={1400}
        mx="auto"
        my={3}
        onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
      >
        {showSwiper && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            autoplay={false}
            speed={0}
            grabCursor={true}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
              <SwiperSlide
                key={i}
                style={{ ...swiperSlideStyle, pointerEvents: 'auto' }}
              >
                <Link
                  href={slide?.link}
                  passHref
                  style={{
                    border: '2px solid red',
                    display: 'block',
                    textDecoration: 'none',
                    zIndex: 10,
                    position: 'relative',
                  }}
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
                        zIndex: 1,
                        position: 'relative',
                      }}
                    />

                    <Box sx={flagBoxStyle}>
                      <Box sx={flagImageStyle}>
                        <Image
                          src={slide?.flag}
                          alt={`flag-${i}`}
                          fill
                          placeholder="blur"
                          priority
                          style={{
                            objectFit: 'cover',
                            borderRadius: '100%',
                            zIndex: 2,
                          }}
                        />
                      </Box>
                      <Typography sx={countryTextStyle}>
                        {slide?.country}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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
