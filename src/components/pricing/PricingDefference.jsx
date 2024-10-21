'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import {
  avatarStyle,
  containerStyle,
  paragraphStyle,
  slideStyle,
  titleStyle,
} from '@/constants/new-home';

const PricingDefference = ({ data, backgroundColor, cardStyle }) => {
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
        backgroundColor: backgroundColor || '#fff',
      }}
    >
      <Box sx={containerStyle} id="pricing-difference">
        {data?.title && (
          <Box sx={{ pt: 2, px: 2 }}>
            <Typography
              variant="h2"
              color="secondary"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
                lineHeight: 1.5,
              }}
            >
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
