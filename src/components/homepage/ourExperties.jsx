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
import TitleParagraph from '../global/titleParagraph';

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
        <TitleParagraph title={EXPERTIES_DATA?.title} />
        <Swiper {...swiperSettings}>
          {EXPERTIES_DATA?.sections.map((section, index) => (
            <Grid key={index} container spacing={2} sx={{ mx: 'auto' }}>
              <SwiperSlide>
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
          <Link href={EXPERTIES_DATA?.buttonLink}>
            <Button variant="contained" color="secondary">
              {EXPERTIES_DATA?.buttonText}
            </Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperties;
