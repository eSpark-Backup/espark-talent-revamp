import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const HeroSection = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: { xs: 'auto', sm: '550px' },
          backgroundImage: `url(${data?.bgImage})`,
        }}
      >
        <Container>
          <Box
            sx={{
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
            }}
          >
            <Box
              sx={{
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
              }}
            >
              <Box
                sx={{ width: { sm: '40%', md: '50%' }, pl: { md: 5, lg: 0 } }}
              >
                {data?.title && (
                  <Typography
                    component={'h1'}
                    sx={{
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
                    }}
                    color={data?.titleColor}
                  >
                    {data?.title}
                  </Typography>
                )}
                {data?.description && (
                  <Typography
                    component={'p'}
                    sx={{
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
                    }}
                  >
                    {data?.description}
                  </Typography>
                )}
                <Button
                  color="secondary"
                  href={data?.button?.link}
                  variant="secondary"
                  sx={{
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
                  }}
                >
                  {data?.button?.label}
                </Button>
              </Box>
              {data?.image && (
                <Box
                  sx={{
                    width: { sm: 'auto', md: 'auto' },
                    pr: { md: 5, lg: 0 },
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={data?.image}
                    alt={data?.imageAlt}
                    sx={{
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
                    }}
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
