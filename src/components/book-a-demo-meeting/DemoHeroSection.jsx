'use client';
import { Box, Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DemoHeroSection = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const boxSx = {
    pt: { xs: '25px', sm: '25px', md: '30px', lg: '30px' },
    color: '#fff',
  };

  const containerSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const innerBoxSx = {
    mt: { xs: '15px', sm: '20px', md: '25px', lg: '35px' },
    display: 'flex',
    justifyContent: 'center',
  };

  const imageSx = {
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
    <Box sx={boxSx}>
      <Container>
        <Box sx={containerSx}>
          <Box sx={innerBoxSx}>
            <Link href={'/'}>
              <Image
                src={data?.logo}
                sx={imageSx}
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
