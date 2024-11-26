'use client';
import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import BlueCard from './BlueCard';
import {
  blueCardContainerStyle,
  bothHeadingsStyle,
  headingStyle,
  paragraphStyle,
  pricingCardContainerStyle,
  pricingCardDividerStyle,
  pricingCardHeaderContainer,
  subHeadingStyle,
  typographyBox,
} from '@/constants/pricing';

const PricingCard = ({ data, handleOpen }) => {
  return (
    <Box sx={pricingCardContainerStyle}>
      <Box sx={pricingCardHeaderContainer}>
        <Divider sx={pricingCardDividerStyle} />
        <Box sx={typographyBox}>
          <Typography variant="h1" sx={headingStyle}>
            {data?.heading}
          </Typography>
          <Typography variant="h2" sx={subHeadingStyle}>
            {data?.subHeading}
          </Typography>

          <Typography variant="h1" sx={bothHeadingsStyle}>
            {data?.heading} {data?.subHeading}
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            {data?.paragraph}
          </Typography>
        </Box>
      </Box>
      <Container sx={blueCardContainerStyle}>
        <BlueCard data={data} handleOpen={handleOpen} />
      </Container>
    </Box>
  );
};

export default PricingCard;
