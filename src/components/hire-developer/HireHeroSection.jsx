'use client';
import { frontendHeroSectionMainBoxStyle } from '@/constants/hire-developer/hire-developer';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HireHeroSection = ({ data }) => {
  const { bgImage, styles } = data || {};
  const {
    containerBoxStyle,
    imageBoxStyle,
    titleTypographyStyle,
    descriptionTypographyStyle,
    buttonStyle,
    btnTextStyle,
  } = styles || {};
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme?.breakpoints?.up('lg'));

  return (
    data && (
      <Box sx={frontendHeroSectionMainBoxStyle(bgImage)}>
        <Container>
          <Box sx={containerBoxStyle}>
            <Box sx={imageBoxStyle}>
              <Link href={'/'}>
                <Image
                  src={data?.logo}
                  width={
                    isSmallScreen
                      ? 100
                      : isMediumScreen
                        ? 150
                        : isLargeScreen
                          ? 200
                          : 200
                  }
                  height={
                    isSmallScreen
                      ? 50
                      : isMediumScreen
                        ? 75
                        : isLargeScreen
                          ? 100
                          : 100
                  }
                  alt="Thankyou - eSpark Talent"
                />
              </Link>
            </Box>
            <Typography
              variant="h1"
              color="#001C63"
              sx={titleTypographyStyle}
              dangerouslySetInnerHTML={{ __html: data?.title }}
            />

            <Typography variant="body1" sx={descriptionTypographyStyle}>
              {data?.descrcipton}
            </Typography>
            <Box justifyContent={'center'} textAlign="center" py={3}>
              <Link href={data?.btnLink}>
                <Button variant="contained" sx={buttonStyle}>
                  <Typography sx={btnTextStyle}>{data?.btnText}</Typography>
                </Button>
              </Link>
            </Box>
            <Box justifyContent={'center'} textAlign="center" pt={3}>
              <Image
                src={data?.image}
                alt={'Hire A Developer Cover Art'}
                height={435}
                width={435}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default HireHeroSection;
