'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import {
  paragraphStyle,
  PricingDefferenceStyles,
  slideStyle,
  titleStyle,
} from '@/constants/new-home';

const PricingDefference = ({ data, backgroundColorStyle }) => {
  const [loading, setLoading] = useState(true);
  const {
    cardStyle,
    imageStyle,
    typoBoxStyle,
    containerStyle,
    mainTitleStyle,
  } = PricingDefferenceStyles || {};

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Card sx={cardStyle}>
        <Box src={card?.icon} component={'img'} sx={imageStyle} />
        <Box sx={typoBoxStyle}>
          <Typography variant="h3" sx={titleStyle}>
            {card?.title}
          </Typography>
          <Typography sx={paragraphStyle}>{card?.description}</Typography>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box
      sx={{
        px: 1.5,
        ...backgroundColorStyle,
      }}
    >
      <Box sx={containerStyle} id="pricing-difference">
        {data?.title && (
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography variant="h2" color="secondary" sx={mainTitleStyle}>
              {data?.title}
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
          <Swiper
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
            modules={[Navigation, Pagination]}
          >
            {data?.items?.map(renderSlide)}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default PricingDefference;
