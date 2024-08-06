'use client';
import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import BlueCard from './BlueCard';

const PricingCard = ({ data, handleOpen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 8,
        '@media(max-width: 783px)': {
          pb: 8,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '10px',
          width: '100%',
          mt: 4,
        }}
      >
        <Divider
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: { md: '410px', lg: '620px' },
            height: '1px',
            backgroundColor: '#fff',
            '@media(max-width: 783px)': {
              display: 'none',
            },
          }}
        />
        <Box
          sx={{
            maxWidth: { xs: '100%', sm: '580px', md: '700px', lg: '1050px' },
            px: { xs: 2.5, sm: 5, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '24.33px',
                sm: '29.33px',
                md: '41.33px',
                lg: '52.33px',
                xl: '61.33px',
              },
              fontWeight: 700,
              lineHeight: 1.2,
              display: { xs: 'none', lg: 'inline-flex' },
            }}
          >
            {data?.heading}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '24px',
                sm: '29px',
                md: '40px',
                lg: '45px',
                xl: '50px',
              },
              fontWeight: 700,
              lineHeight: 1.2,
              display: { xs: 'none', lg: 'inline-flex' },
            }}
          >
            {data?.subHeading}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: '24px',
                sm: '29px',
                md: '40px',
                lg: '45px',
                xl: '50px',
              },
              fontWeight: 700,
              lineHeight: 1.2,
              display: { xs: 'flex', lg: 'none' },
            }}
          >
            {data?.heading} {data?.subHeading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
              fontWeight: 400,
              lineHeight: 1.5,
              mx: { xs: 2, md: 5, lg: 15 },
              mt: 0.8,
              mb: 1,
            }}
          >
            {data?.paragraph}
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          '@media(max-width: 783px)': {
            display: 'none',
          },
        }}
      >
        <BlueCard data={data} handleOpen={handleOpen} />
      </Container>
    </Box>
  );
};

export default PricingCard;
