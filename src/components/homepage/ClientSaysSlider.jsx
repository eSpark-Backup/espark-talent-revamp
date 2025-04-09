'use client';
import React, { useRef } from 'react';
import { Box, Card, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper/modules';
import StarRating from './StarRating';
import { navigationImageDirection } from '@/utils';

const ClientSaysSlider = ({ data, styles }) => {
  const {
    swiperSlideStyle,
    cardStyle,
    logoAndRatingBoxStyle,
    ratingBoxStyle,
    cardTitle,
    subTitleAndRatingBoxStyle,
    cardSubTitleStyle,
    subTitleRatingBoxStyle,
    descriptionStyle,
    paginationBoxStyle,
    paginationStyle,
  } = styles || {};
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const touch_Allowed = useMediaQuery((theme) =>
    theme?.breakpoints?.down('md')
  );

  const navigation = (direction, i) => (
    <Box
      key={i}
      component="img"
      sx={paginationStyle}
      src={`/images/homepage/our-clients/${direction}.png`}
      ref={navigationImageDirection(
        direction,
        'pagination-left',
        'pagination-right',
        prevRef,
        nextRef
      )}
    />
  );

  const renderSlide = (card, index) => (
    <SwiperSlide key={index} style={swiperSlideStyle}>
      <Card sx={cardStyle}>
        <Box sx={logoAndRatingBoxStyle}>
          <Box component={'img'} src={card?.image} />
          <Box sx={ratingBoxStyle}>
            <StarRating stars={card?.rating} />
          </Box>
        </Box>
        <Box>
          <Typography sx={cardTitle}>{card?.title}</Typography>
          <Box sx={subTitleAndRatingBoxStyle}>
            <Typography sx={cardSubTitleStyle}>{card?.subTitle}</Typography>
            <Box sx={subTitleRatingBoxStyle}>
              <StarRating stars={card?.rating} />
            </Box>
          </Box>
          <Typography sx={descriptionStyle}>{card?.description}</Typography>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <>
      <Swiper
        key={touch_Allowed}
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 440,
          modifier: 2,
          slideShadows: true,
          slideBorder: false,
        }}
        pagination={false}
        navigation={{
          prevEl: prevRef && prevRef?.current,
          nextEl: nextRef && nextRef?.current,
        }}
        loop={true}
        allowTouchMove={touch_Allowed}
        modules={[
          EffectCoverflow,
          Navigation,
          Pagination,
          EffectFade,
        ]}
        onInit={(swiper) => {
          swiper.params.allowTouchMove = touch_Allowed;
          swiper.params.navigation.prevEl = prevRef && prevRef?.current;
          swiper.params.navigation.nextEl = nextRef && nextRef?.current;
          swiper?.navigation?.init();
          swiper?.navigation?.update();
        }}
      >
        {data?.map(renderSlide)}
      </Swiper>
      <Box sx={paginationBoxStyle}>
        {['pagination-left', 'pagination-right']?.map(navigation)}
      </Box>
    </>
  );
};

export default ClientSaysSlider;
