'use client';
import React from 'react';
import { Box, Grid, Container } from '@mui/material';

const WikiSingle = ({ data }) => {
  // const wikiString = JSON.stringify(data);
  // const parsedWiki = JSON.parse(wikiString);
  console.log(data, 'data');
  const wikiString = JSON.stringify(data);
  const parsedWiki = JSON.parse(wikiString);
  console.log(parsedWiki);

  const WikiSingleRigth = React.lazy(() => import('./WikiSingleRigth'));
  const WikiSingleLeft = React.lazy(() => import('./WikiSingleLeft'));
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Box sx={{ my: '3%', py: { xs: '8%', sm: '8%', md: '5%', lg: '3%' } }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item lg={8} md={8} xs={12} sm={12}>
                <WikiSingleLeft data={data} />
              </Grid>
              <Grid item lg={3.5} md={3.5} xs={12} sm={12}>
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
