'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ESparkButton from '../global/eSparkButton';

const Hero = ({ data, innerData, color }) => {
  const hero = innerData || data;

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
            container
            spacing={2}
            sx={{
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Grid item xs={12} sm={6} sx={{}}>
              {data?.title && (
                <Typography
                  variant={data?.titleVariant}
                  color={data?.titleColor}
                >
                  {data?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{ py: '10px' }}
                >
                  {data?.description}
                </Typography>
              )}
              <ESparkButton
                title={hero?.button?.label}
                link={hero?.button?.link}
                color={color}
                size={'180px'}
              />
            </Grid>
            {data?.image && (
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
                  src={data?.image}
                  alt={data?.imageAlt}
                  width={data?.imageWidth}
                  height={data?.imageHeight}
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
