'use client';
import { Box, Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  boxStyle,
  containerStyle,
  innerBoxStyle,
} from '../../constants/book-demo-meeting/DemoHeroSection';
const DemoHeroSection = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const imageStyle = {
    width: isSmallScreen
      ? 100
      : isMediumScreen
        ? 150
        : isLargeScreen
          ? 200
          : 200,
    height: isSmallScreen
      ? 50
      : isMediumScreen
        ? 75
        : isLargeScreen
          ? 100
          : 100,
  };

  return (
    <Box sx={boxStyle}>
      <Container>
        <Box sx={containerStyle}>
          <Box sx={innerBoxStyle}>
            <Link href={'/'}>
              <Image
                src={data?.logo}
                sx={imageStyle}
                alt="Thankyou - eSpark Talent"
              />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoHeroSection;
