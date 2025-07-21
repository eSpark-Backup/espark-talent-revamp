'use client';
import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  headingContainerStyle,
  itemsStyle,
  listHeadingStyle,
  worksCardBorderRadius,
  worksCardStyle,
  worksContainerStyle,
  workSlideStyle,
  worksMainHeadingTextStyle,
  worksSubHeadingtextStyle,
} from '@/constants/pricing';
import { usePathname } from 'next/navigation';

const PricingWorks = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
  const book_a_demo_meeting = 'book-a-demo-meeting';

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  const renderSlide = (card, index) => (
    <SwiperSlide key={card.id || index} style={workSlideStyle}>
      <Card
        sx={{
          ...worksCardStyle(pathName, book_a_demo_meeting),
          ...worksCardBorderRadius(index),
        }}
      >
        <Box
          component={'img'}
          src={card?.image}
          sx={{
            width: '100%',
            height: { md: 'calc(100% - 210px)', lg: 'calc(100% - 233px)' },
          }}
        />
        <Box
          sx={{ height: { md: '210px', lg: '233px' }, py: { xs: 1 }, px: 3 }}
        >
          <Typography sx={listHeadingStyle}>{card?.heading}</Typography>
          <Typography component={'ul'} sx={{ listStyle: 'none', p: 0 }}>
            {card?.desktopListItem?.map((item, idx) => (
              <Box
                key={item.id || idx}
                sx={{
                  display: 'flex',
                  gap: 0.7,
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <CheckCircleIcon
                  fontSize="10px"
                  sx={{
                    fontSize: { xs: '12px', md: '20px' },
                    color: '#001C63',
                    mt: '1px',
                  }}
                />
                <Typography component={'li'} sx={itemsStyle}>
                  {item?.item}
                </Typography>
              </Box>
            ))}
          </Typography>
        </Box>
      </Card>
    </SwiperSlide>
  );

  return (
    <Box sx={worksContainerStyle}>
      <Box sx={headingContainerStyle}>
        <Typography
          component={'h2'}
          color={'secondary'}
          sx={worksMainHeadingTextStyle}
        >
          {data?.title}
        </Typography>
        <Typography
          component={'p'}
          color={'secondary'}
          sx={worksSubHeadingtextStyle}
        >
          {data?.description}
        </Typography>
      </Box>
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
        <Box
          sx={{ width: '100%', maxWidth: '910px', mx: 'auto' }}
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
              900: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Pagination]}
          >
            {data?.cards?.map(renderSlide)}
          </Swiper>
        </Box>
      )}
    </Box>
  );
};

export default PricingWorks;
