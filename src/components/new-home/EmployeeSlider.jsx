'use client';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { duplicateSlides } from '@/utils';
import Image from 'next/image';

const EmployeeSlider = ({ data }) => {
  const { slides, styles: styleData } = data || {};
  const { swiperSlideStyle, videoStyle } = styleData || {};
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
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
                  width={100}
                  height={100}
                  style={videoStyle}
                  src={slide?.videoUrl || slide?.thumbnailUrl}
                  priority
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
