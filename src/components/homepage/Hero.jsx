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
              sm={8}
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
                    fontSize: '50px !important',
                    lineHeight: { xs: '30px', lg: '62px !important' },
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                      fontSize: '23px !important',
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
                    lineHeight: { xs: '20px', lg: '42px !important' },
                    padding: { xs: '0px', lg: '0 10px 0 0' },
                    py: '10px',
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                      fontSize: '13px',
                    },
                  }}
                >
                  {data?.description}
                </Typography>
              )}
              {data?.button && (
                <Box
                  sx={{
                    [theme.breakpoints.down('sm')]: {
                      display: 'none',
                    },
                  }}
                >
                  <ESparkButton
                    title={data.button.label}
                    link={data.button.link}
                    color={data.button.btnColor}
                    size={'180px'}
                  />
                  {/* <Button
                    sx={{
                      backgroundColor: '#fff',
                      '&:hover': {
                        backgroundColor: '#fff',
                      },
                      height: '50px',
                      width: '160px',
                      color: '#001C63 ',
                      fontWeight: '700',
                    }}
                  >
                    {data.button?.label}
                  </Button> */}
                </Box>
              )}
            </Grid>
            {data?.image && (
              <Grid
                item
                xs={12}
                sm={4}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
                }}
              >
                <Box
                  component={'img'}
                  src={data?.image}
                  alt={data?.imageAlt}
                  sx={{ width: '435.2px', height: '418.607px' }}
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
