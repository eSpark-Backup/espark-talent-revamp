'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  descriptionTypographyStyleForCustomizeSolution,
  mainContainerStyleForCustomizeSolution,
} from '@/constants/hire-developer/hire-developer';
import CustomSection from './CustomSection';

const CustomizedSolution = ({ data }) => {
  const { bgImage, title, descrcipton, items, styles } = data || {};
  const { typographyBoxStyle, titleTypographyStyle } = styles || {};
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down('sm')
  );
  const pathname = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

  return (
    <>
      <Box
        sx={mainContainerStyleForCustomizeSolution(
          isSmallScreen,
          bgImage,
          pathname
        )}
      >
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
            <CustomSection items={items} styles={styles} />
            {/* <CustomSectionSlider data={items} /> */}
          </>
        )}
      </Box>
    </>
  );
};

export default CustomizedSolution;
