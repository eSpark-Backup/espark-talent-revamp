'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

const BenefitsWorks = ({ data }) => {
  return (
    <>
      <Box sx={{ py: ['2%'], mb: '55px', overflow: 'hidden' }}>
        <Container>
          <Box sx={{ pb: '30px', px: { md: '20%', sm: '10%', xs: '2%' } }}>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '32px',
                fontFamily: 'Poppins',
                fontWeight: 600,
                lineHeight: '42.289px',
                textAlign: 'center',
                flexWrap: 'wrap',
              }}
            >
              {data?.title}
            </Typography>
            <Typography
              sx={{
                color: '#001C63',
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '27.863px',
                flexWrap: 'wrap',
                px: '35px',
                pb: '10px',
              }}
            >
              {data?.paragraph}
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            gap={{ md: '13%', lg: '10%', sm: '1%' }}
            justifyContent="center"
          >
            {data?.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={5}
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  p: ['10px', '20px'],
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    borderRadius: '53px',
                    p: '20px',
                    alignItems: 'center',
                    background: ' #FFF',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                    height: {
                      xs: '100.637px',
                      sm: '120.637px',
                      md: '160.637px',
                      lg: '162.569px',
                    },
                    width: { lg: '489.938px', xs: '489.938px' },
                  }}
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    height={45}
                    width={40}
                  />
                  <Typography
                    color="#000"
                    sx={{
                      color: '#000',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      lineHeight: { md: '30px', xs: '18.571px' },
                      fontFamily: 'Outfit',
                      ml: 3,
                      fontSize: { md: '20px', xs: '12px' },
                    }}
                  >
                    {item?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BenefitsWorks;
