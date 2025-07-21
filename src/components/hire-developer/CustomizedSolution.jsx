'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  descriptionTypographyStyleForCustomizeSolution,
  mainContainerStyleForCustomizeSolution,
} from '@/constants/hire-developer/hire-developer';
import CustomSection from './CustomSection';
import CustomSectionSlider from './CustomSectionSlider';

const CustomizedSolution = ({ data }) => {
  const { bgImage, title, descrcipton, items, styles } = data || {};
  const {
    typographyBoxStyle,
    titleTypographyStyle,
    mainLayoutStyle,
    customSectionSliderStyles,
  } = styles || {};
  const pathname = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

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
              sx={descriptionTypographyStyleForCustomizeSolution(
                pathname,
                book_a_demo_meeting
              )}
            >
              {descrcipton || ''}
            </Typography>
          </Box>
        </Box>
        {items && (
          <>
            <CustomSection items={items} mainLayoutStyle={mainLayoutStyle} />
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

export default CustomizedSolution;
