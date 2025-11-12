'use client';
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  descriptionTypographyStyleForCustomizeSolution,
  mainContainerStyleForCustomizeSolution,
} from '@/constants/hire-developer/hire-developer';
import CustomSectionSlider from '../hire-developer/CustomSectionSlider';

const ServiceExperties = ({ data }) => {
  const { bgImage, title, paragraph, items, styles } = data || {};
  const {
    typographyBoxStyle,
    titleTypographyStyle,
    mainLayoutStyle,
    customSectionSliderStyles,
  } = styles || {};

  const {
    cardStyle,
    headerBoxStyle,
    imageStyle,
    titleStyle,
    descriptionBoxStyle,
    descriptionTextStyle,
  } = customSectionSliderStyles || {};

  const pathname = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

  const renderCard = (card, index) => (
    <Card key={index} sx={cardStyle}>
      <Box sx={headerBoxStyle}>
        <Box
          component="img"
          src={card?.icon || ''}
          alt={card?.alt || ''}
          sx={imageStyle}
        />
        <Typography sx={titleStyle}>{card?.title}</Typography>
      </Box>
      <Box sx={descriptionBoxStyle}>
        <Typography
          sx={descriptionTextStyle}
          dangerouslySetInnerHTML={{ __html: card?.paragraph }}
        />
      </Box>
    </Card>
  );

  return (
    <>
      <Box sx={mainContainerStyleForCustomizeSolution(bgImage, pathname)}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={typographyBoxStyle}>
            <Typography
              sx={titleTypographyStyle}
              dangerouslySetInnerHTML={{
                __html: `${title || ''}`,
              }}
            />
            <Typography
              sx={{
                ...descriptionTypographyStyleForCustomizeSolution(
                  pathname,
                  book_a_demo_meeting
                ),
                fontWeight: 400,
                color: '#001C63',
              }}
              dangerouslySetInnerHTML={{ __html: paragraph || '' }}
            />
          </Box>
        </Box>
        {items && (
          <>
            <Box sx={mainLayoutStyle}>{items?.map(renderCard)}</Box>
            <CustomSectionSlider
              items={items}
              customSectionSliderStyles={customSectionSliderStyles}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default ServiceExperties;
