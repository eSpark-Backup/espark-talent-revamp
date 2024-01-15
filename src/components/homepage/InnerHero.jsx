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
              pt: { sm: '10%', xs: '10%', md: '5%', lg: '3%' },
              pb: { sm: '10%', xs: '10%', md: '5%', lg: '3%' },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              lg={6}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: { sm: 'left', xs: 'center', md: 'left', lg: 'left' },
              }}
            >
              {data?.title && (
                <Typography
                  // variant={data?.titleVariant}
                  color={data?.titleColor}
                  sx={{
                    fontSize: {
                      xs: '23px',
                      sm: '23px',
                      md: '25px',
                      lg: '30px',
                      xl: '50px',
                    },
                    fontWeight: 600,
                  }}
                >
                  {innerData?.title}
                </Typography>
              )}
              {innerData?.description && (
                <Typography
                  variant={data?.descVariant}
                  color={data?.descColor}
                  sx={{
                    py: '10px',
                    fontSize: {
                      xs: '13px',
                      sm: '13px',
                      md: '15px',
                      lg: '20px',
                      xl: '20px',
                    },
                  }}
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
                lg={6}
                md={6}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',
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
