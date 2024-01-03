import React from 'react';
import { Button, Box, Grid, Typography, Container } from '@mui/material';
import Image from 'next/image';

const HeroSection = ({ data, innerData }) => {
  return (
    <>
      <Box
        sx={{
          py: `${innerData?.spacing || data?.spacing}`,
          background: `${innerData?.bgColor || data?.bgColor}`,
          backgroundImage: `url(${innerData?.bgImage || data?.bgImage})`,
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
              flexDirection: { xs: 'column-reverse', sm: 'row' },
            }}
          >
            <Grid item xs={12} sm={6} sx={{}}>
              {data?.title && (
                <Typography
                  variant={innerData?.titleVariant || data?.titleVariant}
                  color={innerData?.titleColor || data?.titleColor}
                >
                  {innerData?.title || data?.title}
                </Typography>
              )}
              {data?.description && (
                <Typography
                  variant={innerData?.descVarient || data?.descVarient}
                  color={innerData?.descColor || data?.descColor}
                  sx={{ py: '10px' }}
                >
                  {innerData?.description || data?.description}
                </Typography>
              )}
              {data?.button && (
                <Button
                  variant="secondary"
                  href={innerData?.button?.link || data?.button?.link}
                  sx={{
                    py: '10px',
                    px: '30px',
                    '&:hover': {
                      backgroundColor: '#029894',
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '17px',
                    }}
                  >
                    {innerData?.button?.label || data?.button?.label}
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
                  src={innerData?.image || data?.image}
                  alt={innerData?.imageAlt || data?.imageAlt}
                  width={innerData?.imageWidth || data?.imageWidth}
                  height={innerData?.imageHeight || data?.imageHeight}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
