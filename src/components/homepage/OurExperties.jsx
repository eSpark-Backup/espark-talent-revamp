'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParagraphTitle from './ParagraphTitle';
import ESparkButton from '../global/eSparkButton';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { usePathname } from 'next/navigation';

const OurExperties = ({ data, link }) => {
  const pathName = usePathname();
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    pagination: { clickable: false },
    module: [Navigation, Pagination, Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
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
        py: 1,
        '@media (min-width: 600px)': { background: '#F7F8FB', py: 6 },
      }}
    >
      <Container>
        <ParagraphTitle title={data?.title} />
        <Box
          sx={{
            borderRadius: '6px',
            background: '#F7F8FB',
            '@media (max-width: 600px)': {
              boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.40)',
            },
            py: 2,
            mx: 1,
          }}
        >
          <Swiper {...swiperSettings}>
            <Grid
              container
              spacing={2}
              sx={{
                mx: 'auto',
              }}
            >
              {data?.sections?.map((section, index) => (
                <SwiperSlide key={index}>
                  {section?.lists?.map((list, listIndex) => (
                    <Grid
                      key={`${index}-${listIndex}`}
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      sx={{
                        pt: 2.3,
                        mx: 'auto',
                        width: { xs: '70%', sm: '80%', md: '80%', lg: '100%' },
                      }}
                    >
                      <Box
                        sx={{
                          width: { sm: '100%', md: '100%', lg: '100%' },
                          mx: 'auto',
                        }}
                      >
                        <Typography
                          variant="h5"
                          color="primary"
                          fontWeight={700}
                          sx={{
                            py: '4px',
                            fontSize: {
                              sm: '15px !important',
                              md: '18px !important',
                              lg: '22px !important',
                            },
                            '@media (min-width:600px) and (max-width: 767px)': {
                              fontSize: '16px !important',
                            },
                            '@media (min-width:375px) and (max-width: 599px)': {
                              fontSize: '18px !important',
                            },
                            '@media (min-width:300px) and (max-width: 374px)': {
                              fontSize: '18px !important',
                            },
                            fontWeight: 700,
                          }}
                        >
                          {list?.heading}
                        </Typography>
                        <Box sx={{ pb: 2 }}>
                          {list?.listItems?.map((item, itemIndex) => (
                            <Box
                              key={`${index}-${listIndex}-${itemIndex}`}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '48px',
                                gap: '8px',
                                my: 0.2,
                              }}
                            >
                              <Box
                                sx={{
                                  minWidth: '20px',
                                }}
                              >
                                <Image
                                  quality="85"
                                  priority={true}
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
                              {/* <Link href={item?.link} target="_blank"> */}
                              <Typography
                                variant="body1"
                                sx={{
                                  py: '0px',
                                  color: '#000',
                                  fontSize: '14px !important',
                                  fontWeight: 400,
                                }}
                              >
                                {item?.title}
                              </Typography>
                              {/* </Link> */}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </SwiperSlide>
              ))}
            </Grid>
            <Box
              sx={{
                width: '100%',
                textAlign: 'center',
                mt: { xs: 2, sm: 3.5 },
              }}
            >
              <ESparkButton
                title={data?.buttonText}
                link={
                  pathName?.includes('/book-a-meeting')
                    ? link
                    : data?.buttonLink
                }
                target={pathName?.includes('/book-a-meeting') ? null : '_blank'}
                color={'secondary'}
                size={'180px'}
              />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default OurExperties;
