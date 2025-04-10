'use client';

import { frontendHeroSectionMainBoxStyle } from '@/constants/hire-developer/hire-developer';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

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
                <Box
                  component={'img'}
                  src={data?.logo}
                  sx={{ width: 'auto', height: 'auto' }}
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
              <Box
                component={'img'}
                src={data?.image}
                alt={'Hire A Developer Cover Art'}
                sx={{ width: 'auto', height: 'auto' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    )
  );
};

export default HireHeroSection;
