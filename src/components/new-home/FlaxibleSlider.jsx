'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const FlaxibleSlider = ({
  title,
  cardData = [],
  breakpoints = {},
  styles = {},
  titleColor = '#001C63',
  backgroundColorStyle = {},
  loadingTime = 500,
}) => {
  const [loading, setLoading] = useState(true);

  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
    cardDescriptionStyle,
    swipperStyle,
  } = styles;

  useEffect(() => {
    if (cardData?.length) {
      const timeout = setTimeout(() => setLoading(false), loadingTime);
      return () => clearTimeout(timeout);
    }
  }, [cardData, loadingTime]);

  return (
    <Box sx={{ ...mainBoxStyle, ...backgroundColorStyle }}>
      {title && (
        <Typography variant="h2" sx={{ ...titleStyle, color: titleColor }}>
          {title}
        </Typography>
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
          style={swipperStyle}
          pagination
          modules={[Pagination]}
          breakpoints={breakpoints}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card sx={cardStyle}>
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={imageStyle}
                />
                <Typography sx={cardTitleStyle}>{card.title}</Typography>
                <Typography sx={cardDescriptionStyle}>
                  {card.description}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};

export default FlaxibleSlider;
