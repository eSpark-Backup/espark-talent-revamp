'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { usePathname } from 'next/navigation';
import { openForm } from '@/utils';

const ChceckSlider = ({ data, handleOpen }) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
  const isMax = useMediaQuery('(max-width:1023px)');
  const isMin = useMediaQuery('(min-width:769px)');
  const { dapartment } = data || {};

  const containerStyle = {
    width: '100%',
    maxWidth: '1250px',
    maxHeight: 400,
    margin: 'auto',
    position: 'relative',
  };

  const slideStyle = {
    paddingTop: isMin ? '30px' : '0',
    paddingBottom: isMin ? '30px' : '0' || (isMax && '0'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    maxHeight: '400px',
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (item, index) => (
    <SwiperSlide key={index} style={slideStyle}>
      <Box
        key={index}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2.2,
          alignItems: 'center',
          '@media (min-width: 1024px)': {
            mt: index == 0 || index == 2 ? 2.2 : 0,
            mb: -6.5,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            ml: -2,
          }}
        >
          <Box component={'img'} src={item?.icon || ''} alt="designer-icon" />
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '26px' },
              fontWeight: 700,
            }}
          >
            {item?.post || ''}
          </Typography>
        </Box>
        {item?.employees?.map((emp, empIndex) => (
          <Box
            key={empIndex}
            sx={{
              width: '100%',
              minHeight: '80.83px',
              display: 'flex',
              alignItems: 'center',
              mx: 2,
              gap: 1,
              // py: 2,
              px: 2.8,
              borderRadius: '5px',
              color: `rgba(255, 255, 255, ${index === 0 ? 1 : index === 1 ? 0.6 : 0.4})`,
              background: `rgba(217, 217, 217, ${index === 0 ? 0.2 : index === 1 ? 0.1 : 0.05})`,
              maxWidth: {
                xs: '240px',
                sm: '330px',
                md: '85%',
                lg: '335px',
              },
              '@media (min-width: 1024px)': {
                maxWidth: '80%',
              },
            }}
          >
            <Box
              component={'img'}
              src={emp?.image || ''}
              sx={{
                opacity: empIndex === 0 ? 1 : empIndex === 1 ? 0.6 : 0.4,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: '13px',
                    sm: '15px',
                    md: '16px',
                    lg: '20px',
                  },
                  fontWeight: 700,
                }}
              >
                {emp?.name || ''}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '13px', lg: '14px' },
                  fontWeight: 500,
                }}
              >
                {emp?.position || ''}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SwiperSlide>
  );

  return (
    <Box
      sx={{
        width: '100%',
        color: '#fff',
        py: 6,
        background: 'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
        '@media (min-width: 1024px)': { gap: 10, pb: 0 },
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          maxWidth: { xs: '460px', sm: '600px', md: '700px', lg: '1100px' },
          textAlign: 'center',
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '30px', md: '45px', lg: '65px' },
            fontWeight: 600,
            lineHeight: { xs: 'auto', lg: '78.66px' },
          }}
        >
          {data?.title || ''}
        </Typography>
        <Box sx={{ width: 'auto', mt: { xs: 2.5 } }}>
          <Button
            onClick={() =>
              openForm(data?.btnLink || '', '_blank', pathName, handleOpen)
            }
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              fontWeight: 600,
              fontSize: { xs: '15px', sm: '20px' },
              '&:hover': {
                color: '#fff',
                backgroundColor: '#029894',
                borderColor: '#029894',
              },
            }}
            disableRipple
          >
            {data?.btnTitle || ''}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: { xs: 3, sm: 4, md: 6 }, px: 2 }}>
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
            pagination={{
              clickable: true,
            }}
            direction={isMin ? 'horizontal' : 'vertical'}
            // spaceBetween={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: isMin ? 3 : 1,
              },
            }}
            modules={[Pagination]}
            style={containerStyle}
          >
            {/* <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: { xs: 2, md: 5 },
                                flexWrap: 'wrap',
                                px: { xs: 2, sm: 3.1, md: 4.6 },
                                justifyContent: 'center',
                                '@media (min-width: 1024px)': { mb: -8 },
                            }}
                        > */}
            {dapartment?.map(renderSlide)}
            {/* </Box> */}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default ChceckSlider;
