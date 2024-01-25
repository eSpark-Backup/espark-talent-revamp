'use client';
import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const WikiSingle = ({ data }) => {
  const WikiSingleRigth = React.lazy(() => import('./WikiSingleRigth'));
  const WikiSingleLeft = React.lazy(() => import('./WikiSingleLeft'));
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Box
          sx={{
            my: { sm: '1%', lg: 0 },
            py: { xs: '8%', sm: '8%', md: '5%', lg: '3%' },
          }}
        >
          <Container>
            <Grid container spacing={4}>
              <Grid item lg={8.2} md={8.5} xs={12} sm={12}>
                <WikiSingleLeft data={data} />
              </Grid>
              <Grid item lg={3.8} md={3.5} xs={12} sm={12}>
                <WikiSingleRigth data={data} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </React.Suspense>
    </>
  );
};

export default WikiSingle;
