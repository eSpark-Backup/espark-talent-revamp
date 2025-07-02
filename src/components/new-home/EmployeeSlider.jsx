'use client';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { duplicateSlides } from '@/utils';
import Image from 'next/image';

const EmployeeSlider = ({ data }) => {
  const { slides, styles: styleData } = data || {};
  const { swiperSlideStyle, videoStyle } = styleData || {};
  const duplicatedSlides = [
    ...slides,
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
    ...duplicateSlides(slides),
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  }, [data]);

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
        <Box id="short-slider" className={'sliderContainer'}>
          <Box className={'sliderTrack'}>
            {duplicatedSlides?.map((slide, index) => (
              <Box key={index} className={'slide'} style={swiperSlideStyle}>
                <Image
                  alt=""
                  src={slide?.thumbnailUrl}
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
