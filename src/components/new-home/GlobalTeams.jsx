'use client';
import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const GlobalTeams = ({ data }) => {
  const swiperRef = useRef(null);
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
      <Box
        maxWidth={1400}
        mx="auto"
        my={3}
        onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
      >
        {slides?.map((slide, i) => (
          <Link
            key={i}
            href={slide?.link}
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
                placeholder="empty"
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
                <Box
                  sx={flagImageStyle}
                  style={{
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                  }}
                >
                  <Image
                    src={slide?.flag}
                    alt={`flag-${i}`}
                    fill
                    placeholder="empty"
                    priority
                    style={{
                      objectFit: 'cover',
                      borderRadius: '100%',
                    }}
                  />
                </Box>
                <Typography sx={countryTextStyle}>{slide?.country}</Typography>
              </Box>
            </Box>
          </Link>
        ))}
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
      <Box>
        <Link
          href="/uae"
          style={{
            display: 'inline-block',
            marginBottom: '20px',
            padding: '10px 15px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
          }}
        >
          Test Link (Click Me)
        </Link>
      </Box>
    </Box>
  );
};

export default GlobalTeams;
