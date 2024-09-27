'use client';
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  Container,
  useMediaQuery,
  Pagination,
  CircularProgress,
} from '@mui/material';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { usePathname } from 'next/navigation';
import {
  outerBoxStyle,
  titleBoxStyle,
  titleTypographyStyle,
  gridContainerStyle,
  gridItemStyle,
  iconBoxStyle,
  itemTitleTypographyStyle,
  itemParagraphTypographyStyle,
} from '@/constants/solutions/for-enterprise/OutSourcingWonderConstant';

const OutSourcingWonder = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a delay for demonstration purposes

    return () => clearTimeout(timer);
  }, []);

  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 20,
    centerMode: true,
    centerPadding: '0',
    loop: false,
    effect: 'fade',
    className: 'hero_slider',
    module: [EffectFade, Navigation, Pagination, Autoplay],
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return `<span class="${className}" style="background-color: ${
          index === this.activeIndex ? 'darkgreen' : 'lightgreen'
        }; width: 20px; height: 20px;"></span>`;
      },
    },
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
          <Box sx={titleBoxStyle}>
            <Typography variant="h2" sx={titleTypographyStyle}>
              {data?.title || 'Title not available'}
            </Typography>
          </Box>
          {isLoading ? (
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
            <Swiper {...swiperSettings}>
              <Grid container sx={gridContainerStyle}>
                {data?.items?.length > 0 ? (
                  data?.items.map((item, index) => (
                    <SwiperSlide key={index} className="outsourcing-slide">
                      <Grid sx={gridItemStyle}>
                        <Box sx={iconBoxStyle}>
                          <Image
                            quality="85"
                            priority={true}
                            src={item?.icon || '/path/to/fallback/image.jpg'}
                            alt={`${item?.title || 'Item icon'}`}
                            height={
                              isSmallScreen
                                ? 30
                                : isMediumScreen
                                  ? 30
                                  : isLargeScreen
                                    ? 40
                                    : 40
                            }
                            width={
                              isSmallScreen
                                ? 30
                                : isMediumScreen
                                  ? 30
                                  : isLargeScreen
                                    ? 40
                                    : 40
                            }
                            pb={{ lg: '15px', md: '0px', sm: '0px', xs: '7px' }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/path/to/fallback/image.jpg';
                            }}
                          />
                        </Box>
                        <Typography
                          variant={
                            pathname === '/solutions/business-startup'
                              ? 'h4'
                              : 'h3'
                          }
                          sx={itemTitleTypographyStyle}
                        >
                          {item?.title || 'Title not available'}
                        </Typography>
                        <Typography sx={itemParagraphTypographyStyle}>
                          {item?.paragraph || 'Paragraph not available'}
                        </Typography>
                      </Grid>
                    </SwiperSlide>
                  ))
                ) : (
                  <Typography>No items available</Typography>
                )}
              </Grid>
            </Swiper>
          )}
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingWonder;
