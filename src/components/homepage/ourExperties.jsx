'use client';
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  Box,
  Typography,
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { EXPERTIES_DATA } from '@/constants/home-page/our-experties';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const OurExperties = () => {
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
        <Box sx={{ pb: '30px' }}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{ textAlign: 'center' }}
          >
            {EXPERTIES_DATA?.title}
          </Typography>
        </Box>
        <Swiper {...swiperSettings}>
          {EXPERTIES_DATA?.sections.map((section, index) => (
            <Grid container spacing={2} sx={{ mx: 'auto' }}>
              <SwiperSlide key={index}>
                {section.lists.map((list, listIndex) => (
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
                        sx={{ py: '10px', color: 'secondary' }}
                      >
                        {list.heading}
                      </Typography>
                      {list.listItems.map((item, itemIndex) => (
                        <ListItem key={itemIndex}>
                          <ListItemIcon>
                            <Image
                              src={EXPERTIES_DATA?.icon}
                              alt="List Icon"
                              width={15}
                              height={15}
                            />
                          </ListItemIcon>
                          <ListItemText>
                            <Link href={item.link}>
                              <Typography
                                variant="body1"
                                sx={{ py: '10px', color: '#001C63' }}
                              >
                                {item.title}
                              </Typography>
                            </Link>
                          </ListItemText>
                        </ListItem>
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
          <Button
            variant="contained"
            color="secondary"
            href={EXPERTIES_DATA?.buttonLink}
          >
            {EXPERTIES_DATA?.buttonText}
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperties;
