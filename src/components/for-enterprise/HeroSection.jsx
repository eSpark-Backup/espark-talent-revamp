import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import {
  containerBoxStyle,
  contentBoxStyle,
  textBoxStyle,
  titleTypographyStyle,
  descriptionTypographyStyle,
  buttonStyle,
  imageBoxStyle,
  imageStyle,
} from '@/constants/for-enterprise';

const HeroSection = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }
  const outerBoxStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: { xs: 'auto', sm: '550px' },
    backgroundImage: `url(${data?.bgImage || ''})`,
  };

  return (
    <>
      <Box sx={outerBoxStyle}>
        <Container>
          <Box sx={containerBoxStyle}>
            <Box sx={contentBoxStyle}>
              <Box sx={textBoxStyle}>
                {data?.title && (
                  <Typography
                    component={'h1'}
                    sx={titleTypographyStyle}
                    color={data?.titleColor || '#029894'}
                  >
                    {data?.title}
                  </Typography>
                )}
                {data?.description && (
                  <Typography component={'p'} sx={descriptionTypographyStyle}>
                    {data?.description}
                  </Typography>
                )}
                {data?.button?.link && data?.button?.label && (
                  <Link href={data?.button.link} target="_blank">
                    <Button
                      color="secondary"
                      variant="secondary"
                      sx={buttonStyle}
                    >
                      {data?.button.label}
                    </Button>
                  </Link>
                )}
              </Box>
              {data?.image && (
                <Box sx={imageBoxStyle}>
                  <Box
                    component={'img'}
                    src={data?.image}
                    alt={data?.imageAlt || 'Hero image'}
                    sx={imageStyle}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
