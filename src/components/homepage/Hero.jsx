'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Hero = ({ data, innerData }) => {
  const hero = innerData || data;

  return (
    <>
      <Box
        sx={{
          py: hero?.spacing,
          background: hero?.bgColor,
          backgroundImage: `url(${hero?.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Grid item xs={12} sm={6} sx={{}}>
              {hero?.title && (
                <Typography
                  variant={hero?.titleVariant}
                  color={hero?.titleColor}
                >
                  {hero?.title}
                </Typography>
              )}
              {hero?.description && (
                <Typography
                  variant={hero?.descVariant}
                  color={hero?.descColor}
                  sx={{ py: '10px' }}
                >
                  {hero?.description}
                </Typography>
              )}
              {hero?.button && (
                <Button
                  variant="secondary"
                  href={hero?.button?.link}
                  sx={{
                    py: '10px',
                    px: '30px',
                    backgroundColor: '#029894',
                    '&:hover': {
                      backgroundColor: '#029894',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bold', fontSize: '17px' }}
                  >
                    {hero?.button?.label}
                  </Typography>
                </Button>
              )}
            </Grid>
            {hero?.image && (
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={hero?.image}
                  alt={hero?.imageAlt}
                  width={hero?.imageWidth}
                  height={hero?.imageHeight}
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
