'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  descriptionStyle,
  swiperSliderStyle,
  boxStyle,
  titleStyle,
  titleBoxStyle,
  imageBoxStyle,
} from '@/components/how-it-work/OurServiceStyles';

import Title from '@/components/how-it-work/Title';

const OurService = ({ ourService }) => {
  const { card, heading, subHeading } = ourService;

  return (
    <Box sx={boxStyle}>
      <Container>
        <Title heading={heading} subHeading={subHeading} variant={'h2'} />
        <Swiper
          spaceBetween={0}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
            },
            1024: {
              slidesPerView: 3,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
            },

            1260: {
              slidesPerView: 3,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              containerClass: 'swiper-container',
              wrapperClass: 'swiper-wrapper',
              slideClass: 'swiper-slide',
            },
          }}
        >
          {card?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={swiperSliderStyle}>
                <Box>
                  <Box sx={imageBoxStyle}>
                    <Image
                      quality="85"
                      priority={true}
                      src={item?.image}
                      width={60}
                      height={50}
                      alt={`${item?.alt}`}
                    />
                  </Box>

                  <Box sx={titleBoxStyle}>
                    <Typography variant="h3" sx={titleStyle}>
                      {item?.title}
                    </Typography>
                    <Typography sx={descriptionStyle}>
                      {item?.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default OurService;
