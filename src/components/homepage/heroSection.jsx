import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { HERO_DATA } from '@/constants/home-page/hero-section';

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          py: '5%',
          backgroundImage: `url(${HERO_DATA?.backgroundImage})`,
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
            <Grid item xs={12} sm={6} sx={{ pr: { xs: '0', sm: '10%' } }}>
              <Typography variant="h1" color="primary">
                {HERO_DATA.title}
              </Typography>
              <Typography variant="body1" sx={{ py: '10px' }}>
                {HERO_DATA.description}
              </Typography>
              <Button
                variant="secondary"
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
                  {HERO_DATA.button.label}
                </Typography>
              </Button>
            </Grid>
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
                src={HERO_DATA.image}
                alt={HERO_DATA.imageAlt}
                width={HERO_DATA.imageWidth}
                height={HERO_DATA.imageHeight}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
