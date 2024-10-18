'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const ModernTechnologies = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const { title, descrcipton, chipIcon, items, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    descriptionStyle,
    swiperBoxStyle,
    slideStyle,
    cardStyle,
    cardTitleStyle,
    chipsBoxStyle,
    chipStyle,
    chipIconStyle,
    chipTextStyle,
  } = styles || {};

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Box sx={cardStyle}>
        <Typography variant="h3" textAlign="center" sx={cardTitleStyle}>
          {card?.title}
        </Typography>
        <Box py={{ xs: '5px', sm: '10px' }} sx={chipsBoxStyle}>
          {card?.items?.map((chip, idx) => (
            <Box key={idx} sx={chipStyle}>
              <Box component={'img'} sx={chipIconStyle} src={chipIcon || '/'} />
              <Typography
                variant="h3"
                sx={chipTextStyle}
                dangerouslySetInnerHTML={{ __html: chip }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <>
      <Box sx={mainBoxStyle}>
        <Container>
          <Box>
            <Typography
              variant="h4"
              textAlign="center"
              sx={titleStyle}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <Typography textAlign="center" sx={descriptionStyle}>
              {descrcipton}
            </Typography>
          </Box>
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
            <Box id="modern-technologies-slider" sx={swiperBoxStyle}>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation, Pagination]}
              >
                {items?.map(renderSlide)}
              </Swiper>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ModernTechnologies;
