'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { open } from '@/utils';

const HomePageHiringModel = ({ data }) => {
  const { title, icon, items, image, styles } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    titleBoxStyle,
    titleStyle,
    buttonBoxStyle,
    buttonStyle,
    cardStyle,
    cardHeaderStyle,
    ulStyle,
    listStyle,
    cardImageStyle,
  } = styles || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (eachItem, index) => (
    <SwiperSlide key={index}>
      <Box key={index} sx={cardStyle}>
        <Box>
          <Box component="img" src={image} sx={cardImageStyle} />
          <Typography
            sx={cardHeaderStyle}
            dangerouslySetInnerHTML={{ __html: eachItem?.title }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, my: 2 }}>
          <Typography component={'ul'} sx={ulStyle}>
            {eachItem?.points?.map((item, pointIndex) => (
              <Typography key={pointIndex} component={'li'} sx={listStyle}>
                {item?.text}
              </Typography>
            ))}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => open(eachItem?.link, '_blank')}
            sx={buttonStyle}
          >
            {eachItem?.buttonText}
            <Box component="img" src={icon} sx={buttonBoxStyle} />
          </Button>
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={innerBoxStyle} id="flexible-hiring-models">
        {title && (
          <Box sx={titleBoxStyle}>
            <Typography sx={titleStyle}>{title || ''}</Typography>
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
            <Swiper
              grabCursor={true}
              speed={3000}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                800: {
                  slidesPerView: 2.2,
                  spaceBetween: 25,
                },
                868: {
                  slidesPerView: 2.5,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                },
              }}
            >
              {items?.map(renderSlide)}
            </Swiper>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomePageHiringModel;
