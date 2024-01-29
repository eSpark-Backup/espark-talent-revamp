import dynamic from 'next/dynamic';
import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const WikiSingle = ({ data }) => {
  const WikiSingleRigth = dynamic(() => import('./WikiSingleRigth'));
  const WikiSingleLeft = dynamic(() => import('./WikiSingleLeft'));

  return (
    <>
      {/* No need for React.Suspense */}
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
    </>
  );
};

export default WikiSingle;
