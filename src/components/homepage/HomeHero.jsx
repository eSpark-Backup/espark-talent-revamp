'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/system';
import ESparkButton from '../global/eSparkButton';

const Hero = ({ data }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          py: data?.spacing,
          background: data?.bgColor,
          backgroundImage: `url(${data?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            pt="50px"
            pb="30px"
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: { xs: 'auto', lg: '0 130px 0 20px' },
              }}
            >
              {data?.title && (
                <Typography
                  variant={data?.titleVariant}
                  color={data?.titleColor}
                  sx={{
                    fontSize: {
                      xs: '25px !important',
                      sm: '30px !important',
                      md: '40px !important',
                      lg: '50px !important',
                    },
                    lineHeight: {
                      xs: '31px',
                      sm: '40px',
                      md: '50px',
                      lg: '66.07px !important',
                    },
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                      // fontSize: '23px !important',
                    },
                  }}
                >
                  {data?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{
                    lineHeight: {
                      xs: '20px',
                      sm: '27px',
                      md: '35px',
                      lg: '42px !important',
                    },
                    fontSize: {
                      xs: '13px',
                      sm: '15px',
                      md: '18px',
                      lg: '20px',
                    },
                    padding: { xs: '0px', lg: '0 10px 0 0' },
                    py: '10px',
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                      // fontSize: '13px',
                    },
                  }}
                >
                  {data?.description}
                </Typography>
              )}
              {data?.button && (
                <Box
                  sx={{
                    mt: '20px',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                  }}
                >
                  <ESparkButton
                    title={data.button.label}
                    link={data.button.link}
                    color={data.button.btnColor}
                    size={'180px'}
                  />
                </Box>
              )}
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component={'img'}
                  src={data?.image}
                  alt={data?.imageAlt}
                  sx={{ maxWidth: { xs: '100%', sm: '50%', md: '100%' } }}
                  // sx={{ width: '435.2px', height: '418.607px' }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
