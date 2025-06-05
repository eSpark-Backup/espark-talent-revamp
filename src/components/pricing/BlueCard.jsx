'use client';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {
  buttonStyle,
  cardStyle,
  listItemStyle,
  listItemTextStyle,
  listItemTitle,
  sideImageStyle,
  titleAndButtonContainerStyle,
  titleStyle,
  workSlideStyle,
} from '@/constants/pricing/pricing';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const BlueCard = ({ data, handleOpen }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const openForm = (link, target) => {
    if (pathname?.includes('/hire-remote-developers')) {
      return handleOpen();
    } else {
      return window?.open(link, target);
    }
  };

  const renderedCard = (eachItem, index) => (
    <SwiperSlide key={index} style={workSlideStyle}>
      <Box key={index} sx={cardStyle}>
        <Box sx={titleAndButtonContainerStyle}>
          <Typography
            sx={titleStyle}
            dangerouslySetInnerHTML={{ __html: eachItem?.title }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              py: 2,
            }}
          >
            <Button
              onClick={() => openForm(eachItem?.btnLink || '#', '_blank')}
              disableRipple
              variant="primary"
              sx={buttonStyle}
            >
              {eachItem?.btnText}
            </Button>
          </Box>
          <Box
            component={'img'}
            src={eachItem?.cardImage || ''}
            sx={sideImageStyle}
          />
        </Box>

        <Box sx={{ py: 2, px: { xs: 1.3, sm: 1.3 }, pr: 0 }}>
          <Typography sx={listItemTitle}>
            {eachItem && Object?.keys(eachItem)[5]}
          </Typography>
          <Typography component={'ul'} sx={{ p: 0 }}>
            {eachItem?.featured?.map((item, index) => (
              <Typography key={index} component={'li'} sx={listItemStyle}>
                <Box
                  component={'img'}
                  src="/images/homepage/hiring-modals/green-tick.svg"
                  sx={{ mt: 0.7 }}
                />
                <Typography component={'span'} sx={listItemTextStyle}>
                  {item || ''}
                </Typography>
              </Typography>
            ))}
          </Typography>
        </Box>
      </Box>
    </SwiperSlide>
  );

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            mb: 10,
          }}
        >
          <CircularProgress disableShrink />
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            maxWidth: { sm: 'auto', md: '800px' },
            mx: 'auto',
            '@media(min-width:1024px)': {
              maxWidth: '1200px',
            },
          }}
          id="pricing-work"
        >
          <Swiper
            pagination={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            {data?.heroCards?.map(renderedCard)}
          </Swiper>
        </Box>
      )}
    </>
  );
};

export default BlueCard;
