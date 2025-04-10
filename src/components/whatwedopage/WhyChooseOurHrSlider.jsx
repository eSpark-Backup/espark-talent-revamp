'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CircularProgress,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import {
  avatarStyle,
  cardStyle,
  containerStyle,
  contentStyle,
  headerStyle,
  iconContainerStyle,
  paragraphStyle,
  slideStyle,
  titleStyle,
} from '@/constants/what-we-do-page/why-choose-hr';

const WhyChooseOurHrSlider = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
        <CardHeader
          sx={headerStyle}
          avatar={
            <Box
              component={'img'}
              src={card?.icon || '/'}
              sx={avatarStyle}
              alt={card?.alt || ''}
              className="our-team-swiper-image"
            />
          }
          title={
            <Typography variant="h3" sx={titleStyle}>
              {card?.title || ''}
            </Typography>
          }
        />
        <CardContent sx={contentStyle}>
          <Typography sx={paragraphStyle}>{card?.description}</Typography>
        </CardContent>
      </Card>
    </SwiperSlide>
  );

  return (
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
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef?.current;
            swiper.params.navigation.nextEl = nextRef?.current;
            swiper?.navigation?.init();
            swiper?.navigation?.update();
          }}
        >
          {data?.card?.map(renderSlide)}
        </Swiper>
      )}

      <Box sx={iconContainerStyle}>
        {['arrowIconLeft', 'arrowIconCircle', 'arrowIconRight']?.map(
          (arrow, i) => (
            <Image
              key={i}
              ref={
                arrow === 'arrowIconLeft'
                  ? prevRef
                  : arrow === 'arrowIconRight'
                    ? nextRef
                    : null
              }
              src={data[arrow]}
              alt={data?.alt}
              width={17}
              height={17}
              style={arrow === 'arrowIconCircle' ? {} : { cursor: 'pointer' }}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default WhyChooseOurHrSlider;
