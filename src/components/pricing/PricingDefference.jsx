'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {
  avatarStyle,
  cardStyle,
  containerStyle,
  paragraphStyle,
  slideStyle,
  titleStyle,
} from '@/constants/new-home';

const PricingDefference = ({ data }) => {
  const [loading, setLoading] = useState(true);

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 2,
            p: 3,
          }}
        >
          <Box src={card?.icon} component={'img'} sx={avatarStyle} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 0.5, sm: 1, lg: 0 },
            }}
          >
            <Typography variant="h3" sx={titleStyle}>
              {card?.title || ''}
            </Typography>
            <Typography sx={paragraphStyle}>{card?.description}</Typography>
          </Box>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box
      sx={{
        backgroundColor: '#F7F8FB',
      }}
    >
      <Box sx={containerStyle}>
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
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            {data?.items?.map(renderSlide)}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default PricingDefference;
