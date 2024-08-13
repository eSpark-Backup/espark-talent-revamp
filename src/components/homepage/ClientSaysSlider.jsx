import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Box, Typography } from '@mui/material';
import StarRating from './StarRating';

const ClientSaysSlider = ({ data }) => {
  const renderSlideContent = (item) => (
    <Box
      className="reviews-area"
      sx={{ height: '100%', minHeight: { xs: '300px', sm: '270px' } }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 3.5, sm: 3, md: 4 },
          px: { xs: 2 },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '440px' },
            height: { xs: '28px', sm: '38px', md: '50px' },
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            component={'img'}
            quality="85"
            priority={true}
            src={item?.image}
            alt="logo"
            sx={{
              width: { xs: '134px', sm: '174px' },
              height: { xs: '28px', sm: '34px' },
            }}
          />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <StarRating stars={4} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          my: { xs: 2, sm: 3, md: 0.5 },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '420px' }, px: { xs: 2 } }}>
          <Typography
            variant="h5"
            sx={{ fontSize: '24px', fontWeight: 600, color: '#525252' }}
          >
            {item?.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '18px !important',
              fontWeight: 400,
              color: '#525252',
              my: 0.5,
            }}
          >
            {item?.subTitle}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, height: 35 }}>
              <StarRating stars={4} />
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px !important', md: '12px !important' },
              color: '#525252',
              textAlign: 'justify',
              lineHeight: '146%',
              fontWeight: 400,
            }}
          >
            {item?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Swiper
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
        }}
        navigation={true}
        loop={true}
        allowTouchMove={false}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper reviews-swiper"
        breakpoints={{
          0: { slidesPerView: 'auto' },
          425: { slidesPerView: 'auto' },
          600: { slidesPerView: 'auto' },
        }}
      >
        {data?.slider?.map((item, i) => (
          <SwiperSlide key={i}>{renderSlideContent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClientSaysSlider;
