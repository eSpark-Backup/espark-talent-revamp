import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import WikiSingleRigth from './WikiSingleRigth';
import WikiSingleLeft from './WikiSingleLeft';
const WikiSingle = ({ data }) => {
  return (
    <>
      <Box sx={{ my: '3%' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <WikiSingleLeft data={data} />
            </Grid>
            <Grid item xs={3.5}>
              <WikiSingleRigth data={data} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WikiSingle;
