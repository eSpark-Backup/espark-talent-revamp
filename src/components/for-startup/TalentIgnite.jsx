'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

const TalentIgnite = ({ data }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Grid container sx={{ flexDirection: { md: 'row', xs: 'row' } }}>
          <Grid item xs={12} sm={12} md={7} sx={{ order: { md: 2, xs: 1 } }}>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '28px',
                fontWeight: 500,
                lineHeight: '41.547px',
                ml: { lg: '10%', md: '5%' },
                mr: { lg: '25%', md: '5%' },
                mt: { md: '30px', lg: '60px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {data?.title}
            </Typography>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '36.863px',
                ml: { lg: '10%', md: '5%' },
                my: { md: '10px', lg: '20px' },
                textAlign: { xs: 'center', md: 'justify' },
              }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} sx={{ order: { md: 1, xs: 2 } }}>
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                py: { xs: 2, md: 5 },
                px: { xs: 3, md: 3 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={data.image} width={400} height={300} alt={data.alt} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TalentIgnite;
