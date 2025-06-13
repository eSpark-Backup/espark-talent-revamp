'use client';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, keyframes } from '@mui/material';
import Image from 'next/image';

const EmployeeSlider = ({ data }) => {
  const { slides, styles: styleData } = data || {};
  const { swiperSlideStyle, videoStyle, animationBoxStyle } = styleData || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [data]);

  const scrollRight = keyframes`
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    `;

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box sx={animationBoxStyle(scrollRight)}>
            {slides?.map((slide, index) => (
              <Box key={index} className={'slide'} style={swiperSlideStyle}>
                <Image
                  alt=""
                  src={slide?.videoUrl || slide?.thumbnailUrl}
                  width={100}
                  height={100}
                  style={videoStyle}
                  priority={index === 0}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default EmployeeSlider;
