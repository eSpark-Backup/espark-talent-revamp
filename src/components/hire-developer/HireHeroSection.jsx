'use client';
import { frontendHeroSectionMainBoxStyle } from '@/constants/hire-developer/hire-developer';
import { Box, Button, Container, Typography } from '@mui/material';
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

  return (
    data && (
      <Box sx={frontendHeroSectionMainBoxStyle(bgImage)}>
        <Container>
          <Box sx={containerBoxStyle}>
            <Box sx={imageBoxStyle}>
              <Link href={'/'}>
                <Image
                  src={data?.logo}
                  alt="Thankyou - eSpark Talent"
                  width={159}
                  height={78}
                  priority
                  style={{
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
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
                alt="Hire A Developer Cover Art"
                width={1200}
                height={584}
                priority
                style={{
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default HireHeroSection;
