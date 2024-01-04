'use client';
import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TitleParagraph from '@/components/global/titleParagraph';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const OurExperties = ({ data }) => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      786: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
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
    <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
      <Container sx={{ px: '5%' }}>
        <TitleParagraph title={data?.title} />
        <Swiper {...swiperSettings}>
          {data?.sections?.map((section, index) => (
            <Grid key={index} container spacing={2} sx={{ mx: 'auto' }}>
              <SwiperSlide>
                {section?.lists?.map((list, listIndex) => (
                  <Grid
                    key={listIndex}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={3}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        color="primary"
                        fontWeight={700}
                        sx={{ py: '10px' }}
                      >
                        {list?.heading}
                      </Typography>
                      {list?.listItems?.map((item, itemIndex) => (
                        <Box
                          key={itemIndex}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            py: '0px',
                          }}
                        >
                          <Box>
                            <Image
                              src={
                                itemIndex === 0
                                  ? data?.startIcon
                                  : itemIndex === list.listItems.length - 1
                                    ? data?.endIcon
                                    : data?.otherIcon
                              }
                              alt="List Icon"
                              width={20}
                              height={60}
                            />
                          </Box>
                          <Link href={item?.link}>
                            <Typography
                              variant="body1"
                              sx={{ py: '10px', color: '#001C63' }}
                            >
                              {item?.title}
                            </Typography>
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </SwiperSlide>
            </Grid>
          ))}
        </Swiper>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: { xs: '20px', md: '30px' },
          }}
        >
          <Link href={data?.buttonLink}>
            <Button variant="contained" color="secondary">
              {data?.buttonText}
            </Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperties;
