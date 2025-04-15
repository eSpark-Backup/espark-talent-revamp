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
import {
  avatarStyle,
  cardStyle,
  containerStyle,
  contentStyle,
  headerStyle,
  headingStyle,
  headingTextStyle,
  paragraphStyle,
  slideStyle,
  titleStyle,
} from '@/constants/what-we-do-page/expert-team-card';
import { circularProgressStyle } from '@/components/global/circularProgressStyles';

const ExpertTeamCard = ({ teamData }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (teamData) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [teamData]);

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
        />
        <CardContent sx={contentStyle}>
          <Typography variant="h3" sx={titleStyle}>
            {card?.title || ''}
          </Typography>
          <Typography sx={paragraphStyle}>{card?.paragraph}</Typography>
        </CardContent>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box sx={containerStyle}>
      <Box sx={headingStyle}>
        <Typography variant="h2" sx={headingTextStyle}>
          {teamData?.heading}
        </Typography>
      </Box>

      {loading ? (
        <Box sx={circularProgressStyle}>
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
            900: {
              slidesPerView: 3,
            },
          }}
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
          {teamData?.card?.map(renderSlide)}
        </Swiper>
      )}
    </Box>
  );
};

export default ExpertTeamCard;
