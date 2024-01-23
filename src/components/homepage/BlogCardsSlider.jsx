'use client';
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { READ_MORE } from '@/constants/home-page/blogSections';

import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const BlogCardsSlider = ({ data }) => {
  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 0,
    centerMode: true,
    centerPadding: '0',
    loop: true,
    effect: 'fade',
    className: 'hero_slider',

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
      425: {
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

  return (
    <Box sx={{ my: '3%' }}>
      <Container>
        <Swiper {...swiperSettings}>
          <Box spacing={2} sx={{ py: '5%' }}>
            {data?.slice(0, 3)?.map((item, index) => (
              <SwiperSlide key={index} className="outsourcing-slide">
                <Box className="single-blog-post" width={'100%'}>
                  <Link href={`/blogs/${item?.slug}`}>
                    <Box className="image" sx={{ display: 'flex' }}>
                      <span style={{ marginRight: '30px' }}>
                        <Image
                          src={item?.imageLink}
                          alt={`${item?.title} - eSpark Talent`}
                          width={300}
                          height={100}
                          style={{ borderRadius: '15px' }}
                        />
                      </span>
                      <span className="date">
                        {Intl.DateTimeFormat('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                        }).format(new Date('2023-09-27T00:36:00.000Z'))}
                      </span>
                    </Box>
                  </Link>
                  <Box sx={{ width: '90%', my: 2 }}>
                    <Link href={`/blogs/${item?.slug}`}>
                      <Typography
                        sx={{
                          color: '#09114A',
                          fontSize: {
                            xs: '18px',
                            sm: '18px',
                            md: '20px',
                            lg: '24px',
                          },
                          fontWeight: 600,
                          lineHeight: '26px',
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Link>
                    <Typography
                      sx={{
                        color: '#6F76A8',
                        fontSize: {
                          xs: '13px',
                          sm: '13px',
                          md: '15px',
                          lg: '18px',
                        },
                        fontWeight: 400,
                        lineHeight: '27.465px',
                        fontStyle: 'normal',
                        my: 2,
                      }}
                    >
                      {item?.mainParagraph}
                    </Typography>
                    <Link href={`/blogs/${item?.slug}`}>
                      <Box
                        className="default-btn"
                        sx={{ position: 'relative' }}
                      >
                        <ArrowForwardIosIcon
                          sx={{
                            position: 'absolute',
                            left: 12,
                            top: 10,
                            color: '#fff',
                          }}
                        />
                        <Typography
                          fontSize={{
                            xs: '13px',
                            sm: '13px',
                            md: '15px',
                            lg: '20px',
                          }}
                        >
                          {READ_MORE}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Container>
    </Box>
  );
};

export default BlogCardsSlider;
