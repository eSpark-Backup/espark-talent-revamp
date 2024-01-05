'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';

const BenefitsWorks = ({ data }) => {
  return (
    <>
      <Box sx={{ pb: ['2.5%', '5%'], overflow: 'hidden' }}>
        <Container>
          <Box sx={{ textAlign: 'center' }}>
            <ParagraphTitle title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid
            container
            spacing={2}
            gap={{ lg: '10%', sm: '1%' }}
            justifyContent="center"
          >
            {data?.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={4}
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
                    borderRadius: '30px',
                    p: '15px',
                    alignItems: 'center',
                    background: ' #FFF',
                    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
                    height: '162.569px',
                    width: { lg: '489.938px', xs: '489.938px' },
                  }}
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    height={45}
                    width={45}
                  />
                  <Typography
                    variant="h7"
                    color="#000"
                    sx={{ ml: 2, fontSize: { md: '20px', xs: '15px' } }}
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
