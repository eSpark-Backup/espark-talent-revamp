'use client';

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
import Link from 'next/link';

const OurExperties = ({ data, link }) => {
  const { title, buttonText, buttonLink, sections, styles } = data || {};
  const {
    mainBoxStyle,
    swiperBoxStyle,
    renderSectionGridStyle,
    buttonBoxStyle,
    gridItemStlye,
    listHeadingBoxStyle,
    listHeadingStyle,
    listItemBoxStyle,
    imageAndLinkBoxStyle,
    titleStyle,
  } = styles || {};
  const pathName = usePathname();
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    module: [Navigation, Pagination, Autoplay],
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2, spaceBetween: 8 },
      768: { slidesPerView: 3, spaceBetween: 8 },
      1024: { slidesPerView: 3, spaceBetween: 5 },
      1025: { slidesPerView: 4 },
      1920: { slidesPerView: 4 },
    },
  };

  const renderListItems = (list, index) => (
    <Box sx={listItemBoxStyle} key={index}>
      {list?.listItems?.map((item, itemIndex) => (
        <Box key={itemIndex} sx={imageAndLinkBoxStyle}>
          <Box sx={{ minWidth: '20px' }}>
            <Image
              quality="85"
              priority
              src={
                itemIndex === 0
                  ? data?.startIcon
                  : itemIndex === list?.listItems?.length - 1
                    ? data?.endIcon
                    : data?.otherIcon
              }
              alt="List Icon"
              width={20}
              height={60}
            />
          </Box>
          <Link href={item?.link || '#'}>
            <Typography variant="body1" sx={titleStyle}>
              {item?.title}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );

  const renderSections = () =>
    sections?.map((section, index) => (
      <SwiperSlide key={index}>
        {section?.lists?.map((list, listIndex) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            key={listIndex}
            sx={gridItemStlye}
          >
            <Box sx={listHeadingBoxStyle}>
              <Typography
                variant="h5"
                color="primary"
                fontWeight={700}
                sx={listHeadingStyle}
              >
                {list?.heading}
              </Typography>
              {renderListItems(list)}
            </Box>
          </Grid>
        ))}
      </SwiperSlide>
    ));

  return (
    <Box sx={mainBoxStyle}>
      <Container>
        <ParagraphTitle title={title} />
        <Box sx={swiperBoxStyle}>
          <Swiper {...swiperSettings}>
            <Grid container spacing={2} sx={renderSectionGridStyle}>
              {renderSections()}
            </Grid>
            <Box sx={buttonBoxStyle}>
              <ESparkButton
                title={buttonText}
                link={pathName?.includes('/book-a-meeting') ? link : buttonLink}
                target={pathName?.includes('/book-a-meeting') ? null : '_blank'}
                color="secondary"
                size="180px"
              />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default OurExperties;
