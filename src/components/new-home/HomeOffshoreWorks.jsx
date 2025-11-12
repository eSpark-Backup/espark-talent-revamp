'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Divider } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCube, Navigation, Pagination } from 'swiper/modules';

const HomeOffshoreWorks = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(null);
  const [renderKey, setRenderKey] = useState(0);
  const { title, bgImage, bgImageInvert, items, styles } = data || {};
  const {
    mainBoxStyle,
    titleAndSwiperBoxStyle,
    titleStyle,
    slideStyle,
    cardStyle,
    imageStyle,
    innerCardStyle,
    cardTitleStyle,
    dividerStyle,
    descriptionStyle,
  } = styles || {};

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window?.innerWidth;
      if (screenWidth <= 767 && !isMobile) {
        setIsMobile(true);
        setRenderKey((prevKey) => prevKey + 1);
      } else if (screenWidth >= 768 && isMobile) {
        setIsMobile(false);
        setRenderKey((prevKey) => prevKey + 1);
      }
    };
    handleResize();
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const renderSlide = (eachItem, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Box key={index} sx={cardStyle(index, bgImage, bgImageInvert)}>
        <Box
          component={'img'}
          src={eachItem?.icon}
          alt={`Experties Icon`}
          sx={imageStyle(index)}
        />
        <Box sx={innerCardStyle(index)}>
          <Typography sx={cardTitleStyle}>{eachItem?.title}</Typography>
          <Divider variant="middle" sx={dividerStyle} />
          <Typography
            sx={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: eachItem?.description }}
          />
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={titleAndSwiperBoxStyle}>
        {title && (
          <Box sx={{ px: 2 }}>
            <Typography variant="h2" color="secondary" sx={titleStyle}>
              {title}
            </Typography>
          </Box>
        )}
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
          <>
            <Box className="home-off-shore-works">
              <Swiper
                key={renderKey}
                effect={isMobile ? 'cube' : 'slide'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 10,
                  shadowScale: 1,
                }}
                pagination={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[EffectCube, Navigation, Pagination]}
              >
                {items?.map(renderSlide)}
              </Swiper>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomeOffshoreWorks;
