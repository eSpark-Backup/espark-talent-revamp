'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectCards, Pagination } from 'swiper/modules';
import { open } from '@/utils';

const HomePageHiringModel = ({ data }) => {
  const { title, btnTitle, btnLink, items, styles } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    titleBoxStyle,
    titleStyle,
    buttonBoxStyle,
    buttonStyle,
    slideStyle,
    cardStyle,
    cardHeaderStyle,
    cardBodyStyle,
    ulStyle,
    liStyle,
    cardImageStyle,
    itemTextStyle,
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
    <SwiperSlide key={index} style={slideStyle}>
      <Box key={index} sx={cardStyle}>
        <Box sx={cardHeaderStyle}>
          <Typography
            sx={{
              position: 'relative',
              fontSize: {
                xs: '21px',
                sm: '28px',
                md: '25px',
                lg: '32px',
              },
              fontWeight: 700,
              color: '#fff',
              '@media (max-width:359px)': { fontSize: '18px' },
            }}
          >
            {eachItem?.title || ''}
          </Typography>
          <Box
            component={'img'}
            src={eachItem?.image || ''}
            sx={{
              width: { xs: '45px', sm: '55px', md: 'auto' },
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          />
        </Box>
        <Box sx={cardBodyStyle}>
          <Typography component={'ul'} sx={ulStyle}>
            {eachItem?.points?.map((item, i) => (
              <Typography key={i} component={'li'} sx={liStyle}>
                <Box
                  component={'img'}
                  src={item?.icon || ''}
                  sx={cardImageStyle}
                />
                <Typography component={'span'} sx={itemTextStyle}>
                  {item?.text || ''}
                </Typography>
              </Typography>
            ))}
          </Typography>
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
              modules={[EffectCards, Pagination]}
              pagination={true}
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
              }}
            >
              {items?.map(renderSlide)}
            </Swiper>
          </>
        )}
        <Box sx={buttonBoxStyle}>
          <Button
            sx={buttonStyle}
            onClick={() => open(btnLink, '_blank')}
            disableRipple
          >
            {btnTitle}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageHiringModel;
