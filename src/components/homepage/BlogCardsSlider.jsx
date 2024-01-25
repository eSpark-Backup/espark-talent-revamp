'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { READ_MORE } from '@/constants/home-page/blogSections';

const BlogCardsSlider = ({ data }) => {
  return (
    <Box sx={{ my: '3%' }}>
      <Container>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setPage(swiper.realIndex + 1)}
        >
          {data?.map((item, index) => (
            <SwiperSlide>{index}</SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default BlogCardsSlider;
