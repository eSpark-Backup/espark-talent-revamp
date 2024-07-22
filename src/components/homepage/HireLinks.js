'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, Typography } from '@mui/material';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

const HireLinks = ({ data, currentPage, setDropdown }) => {
  const swiperSettings = {
    slidesPerView: 1,
    // spaceBetween: 20,
    loop: false,
    // pagination: { clickable: false },
    module: [Navigation, Pagination, Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 8,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 5,
      },
      1025: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Box
      sx={{
        my: currentPage?.includes('hire-remote-deevelopers') ? 4 : 3.7,
        width: '100%',
        background: '#F7F8FB',
        '@media (max-width: 987px)': {
          background: '#fff',
          my: 0,
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '6px',
          background: '#F7F8FB',
          mx: 'auto',
          '@media (min-width:1500px)': {
            maxWidth: '1450px',
          },
          '@media (max-width: 987px)': {
            background: '#fff',
          },
        }}
      >
        <Swiper {...swiperSettings}>
          {data?.sections?.map((section, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  maxWidth: index === 0 ? '300px' : '320px',
                  mx: { xs: 0, md: 'auto' },
                  p: 2,
                  pl: 5,
                  pr: 3.5,
                  '@media (min-width: 1440px)': {
                    maxWidth: index === 0 ? '180px' : '320px',
                  },
                  '@media (max-width: 987px)': {
                    p: 0,
                  },
                }}
              >
                {section?.lists?.map((list, listIndex) => (
                  <div key={listIndex}>
                    <Typography
                      key={listIndex}
                      variant="h5"
                      color="primary"
                      sx={{
                        pb: '4px',
                        fontWeight: 700,
                        fontSize: {
                          xs: '16px ',
                          sm: '15px ',
                          md: '16px ',
                          lg: '20px ',
                          xl: '24px ',
                        },
                      }}
                    >
                      {list?.heading}
                    </Typography>
                    {list?.listItems?.map((item, itemIndex) => (
                      <Box
                        onClick={() => setDropdown(null)}
                        key={`${index}-${listIndex}-${itemIndex}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          height: 'auto',
                          my: 1.5,
                        }}
                      >
                        <Link href={item?.link}>
                          <Typography
                            variant="body1"
                            sx={{
                              py: '0px',
                              color: 'black',
                              '&:hover': {
                                color: '#029894',
                              },
                              fontSize: {
                                xs: '14px',
                                sm: '15px',
                                md: '15px',
                                lg: '16px',
                              },
                              fontWeight: 400,
                            }}
                          >
                            {item?.title}
                          </Typography>
                        </Link>
                      </Box>
                    ))}
                  </div>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HireLinks;
