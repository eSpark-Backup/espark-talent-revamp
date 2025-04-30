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

const HomePageExpertTeam = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const isMax = useMediaQuery('(max-width:1023px)');
  const isMin = useMediaQuery('(min-width:769px)');
  const { dapartment, styles } = data || {};
  const {
    containerStyle,
    slideStyle,
    cardContainerStyle,
    typographyBoxStyle,
    postTypographyStyle,
    employeeBoxStyle,
    imageStyle,
    nameTypogrphyStyle,
    positionTypographyStyle,
    mainLayoutStyle,
    headerBoxStyle,
    titleTypographyStyle,
  } = styles || {};

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (item, index) => (
    <SwiperSlide key={index} style={slideStyle(isMin, isMax)}>
      <Box key={index} sx={cardContainerStyle(index)}>
        <Box sx={typographyBoxStyle}>
          <Box component={'img'} src={item?.icon || ''} alt="designer-icon" />
          <Typography sx={postTypographyStyle}>{item?.post || ''}</Typography>
        </Box>
        {item?.employees?.map((emp, empIndex) => (
          <Box key={empIndex} sx={employeeBoxStyle(empIndex)}>
            <Box
              component={'img'}
              src={emp?.image || ''}
              width={50}
              height={50}
              sx={imageStyle(empIndex)}
            />
            <Box>
              <Typography sx={nameTypogrphyStyle}>{emp?.name || ''}</Typography>
              <Typography sx={positionTypographyStyle}>
                {emp?.position || ''}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SwiperSlide>
  );

  return (
    <Box sx={mainLayoutStyle}>
      <Box sx={headerBoxStyle}>
        <Typography sx={titleTypographyStyle}>{data?.title || ''}</Typography>
      </Box>
      <Box
        sx={{ mt: { xs: 3, sm: 4, md: 6 }, mx: { xs: 3, md: 2 } }}
        id="expert-team"
      >
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
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              769: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            style={containerStyle}
          >
            {dapartment?.map(renderSlide)}
          </Swiper>
        )}
      </Box>
    </Box>
  );
};

export default HomePageExpertTeam;
