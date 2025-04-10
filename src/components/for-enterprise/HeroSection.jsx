import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

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

  const containerBoxStyle = {
    mx: 'auto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 600px) and (max-width: 767px)': {
      width: '100%',
      py: 7,
    },
    '@media (min-width: 300px) and (max-width: 625px)': {
      textAlign: 'center',
      width: '100%',
      py: 5,
    },
  };

  const contentBoxStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: { sm: 7, md: 9 },
    '@media (min-width: 300px) and (max-width: 626px)': {
      flexDirection: 'column',
      gap: 5,
    },
    '@media (min-width: 600px) and (max-width: 700px)': {
      px: 4,
    },
  };

  const textBoxStyle = {
    width: { sm: '40%', md: '50%' },
    pl: { md: 5, lg: 0 },
  };

  const titleTypographyStyle = {
    fontSize: {
      sm: '29px !important',
      md: '40px !important',
      lg: '50px !important',
    },
    lineHeight: {
      sm: '45px',
      md: '62.067px',
      lg: '66.067px',
    },
    '@media (min-width: 300px) and (max-width: 767px)': {
      width: '320px',
      fontSize: '25px !important',
      lineHeight: '37px',
    },
    color: '#029894',
    fontStyle: 'normal',
    fontWeight: 700,
  };

  const descriptionTypographyStyle = {
    pt: 0.5,
    pb: { sm: 2, md: 2.5 },
    color: '#1D4E72',
    fontSize: '20px !important',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '33.312px',
    '@media (min-width: 300px) and (max-width: 767px)': {
      width: '320px',
      fontSize: '13px !important',
      lineHeight: '22px',
      pb: 2,
    },
  };

  const buttonStyle = {
    width: { sm: '170px', md: '207.981px' },
    height: { sm: '50px', md: '54.149px' },
    '@media (min-width: 300px) and (max-width: 767px)': {
      width: '170px',
      height: '50px',
      fontSize: '15px',
    },
    borderRadius: '6.448px',
    fontSize: '17px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#029894',
    },
  };

  const imageBoxStyle = {
    width: { sm: 'auto', md: 'auto' },
    pr: { md: 5, lg: 0 },
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: { sm: '300px', md: '400px', lg: '435.2px' },
    height: { sm: '290px', md: '390px', lg: '418.607px' },
    '@media (min-width: 600px) and (max-width: 767px)': {
      width: '250px',
      height: '246px',
    },
    '@media (min-width: 300px) and (max-width: 599px)': {
      width: '200px',
      height: '196px',
    },
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
                  <Link href={data?.button?.link} target="_blank">
                    <Button
                      color="secondary"
                      variant="secondary"
                      sx={buttonStyle}
                    >
                      {data?.button?.label}
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
