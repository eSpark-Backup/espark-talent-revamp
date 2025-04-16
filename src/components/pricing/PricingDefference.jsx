'use client';

import { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { circularProgressStyle } from '@/components/global/circularProgressStyles';
import { cardStyle } from './PricingCardStyles';
import { cardBoxStyle, titleBoxStyle } from './PricingDefferenceStyles';
import {
  avatarStyle,
  containerStyle,
  paragraphStyle,
  slideStyle,
} from '@/constants/new-home/new-home';

const PricingDefference = ({ data, backgroundColorStyle }) => {
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
        <Box sx={cardBoxStyle}>
          <Box src={card?.icon} component={'img'} sx={avatarStyle} />
          <Box sx={titleBoxStyle}>
            <Typography variant="h3" sx={titleStyle}>
              {card?.title || ''}
            </Typography>
            <Typography sx={paragraphStyle}>{card?.description}</Typography>
          </Box>
        </Box>
      </Card>
    </SwiperSlide>
  );

  const titleStyle = {
    textAlign: 'center',
    fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
    lineHeight: 1.5,
  };
  const titleCoxStyle = { pt: 2, px: 2 };
  return (
    <Box
      sx={{
        px: 1.5,
        ...backgroundColorStyle,
      }}
    >
      <Box sx={containerStyle} id="pricing-difference">
        {data?.title && (
          <Box sx={titleCoxStyle}>
            <Typography variant="h2" color="secondary" sx={titleStyle}>
              {data?.title}
            </Typography>
          </Box>
        )}
        {loading ? (
          <Box sx={circularProgressStyle}>
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
