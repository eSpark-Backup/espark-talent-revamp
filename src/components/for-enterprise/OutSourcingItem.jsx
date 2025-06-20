'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  ListItemIcon,
  Pagination,
  CircularProgress,
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import {
  outerBoxStyle,
  innerBoxStyle,
  titleTypographyStyle,
  subtitleTypographyStyle,
  gridItemStyle,
  itemTitleTypographyStyle,
  listBoxStyle,
  listItemIconStyle,
  taskAltIconStyle,
  listItemTypographyStyle,
} from '@/constants/solutions/for-enterprise/out-sourcing-item-constant';

const OutSourcingItem = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 1000); // Simulating a delay for demonstration purposes

    return () => clearTimeout(timer);
  }, []);

  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    effect: 'fade',
    className: 'hero_slider',
    module: [EffectFade, Navigation, Pagination, Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 3,
      },
    },
  };

  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <>
      <Box sx={outerBoxStyle}>
        <Container>
          <Box sx={innerBoxStyle}>
            <Typography
              color={'secondary'}
              variant="h2"
              sx={titleTypographyStyle}
            >
              {data?.title || 'How Fast Are Our Outsourcing Services?'}
            </Typography>
            <Typography color={'secondary'} sx={subtitleTypographyStyle}>
              {data?.subtitle ||
                'At eSpark Talent, our services move with the rhythm of urgency, promising a pace that surprises and a speed that advances.'}
            </Typography>
          </Box>
          {isClient ? (
            <Swiper {...swiperSettings}>
              <Grid container spacing={2} justifyContent="center">
                {data?.items?.length > 0 ? (
                  data?.items.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Grid item xs={12} sm={4} sx={gridItemStyle}>
                        <Typography variant="h3" sx={itemTitleTypographyStyle}>
                          {item?.title || 'Title not available'}
                        </Typography>
                        {item?.items?.length > 0 ? (
                          item.items.map((list, itemIndex) => (
                            <Box key={itemIndex} sx={listBoxStyle}>
                              <ListItemIcon sx={listItemIconStyle}>
                                <TaskAltIcon
                                  fontSize="small"
                                  sx={taskAltIconStyle}
                                />
                              </ListItemIcon>
                              <Typography
                                variant="body1"
                                sx={listItemTypographyStyle}
                              >
                                {list?.title || 'Item not available'}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Typography>No items available</Typography>
                        )}
                      </Grid>
                    </SwiperSlide>
                  ))
                ) : (
                  <Typography>No items available</Typography>
                )}
              </Grid>
            </Swiper>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
              }}
            >
              <CircularProgress color="success" />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingItem;
