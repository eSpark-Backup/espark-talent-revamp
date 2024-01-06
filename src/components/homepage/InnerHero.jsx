'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const InnerHero = ({ data, innerData }) => {
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
                  {innerData?.title}
                </Typography>
              )}
              {innerData?.description && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{ py: '10px' }}
                >
                  {data?.description}
                </Typography>
              )}
              {data?.button && (
                <Button
                  variant="secondary"
                  href={data?.button?.link}
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
                    {data?.button?.label}
                  </Typography>
                </Button>
              )}
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
                  src={innerData?.image}
                  alt={innerData?.imageAlt}
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

export default InnerHero;
