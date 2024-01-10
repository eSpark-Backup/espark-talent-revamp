import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import WikiSingleRigth from './WikiSingleRigth';
import WikiSingleLeft from './WikiSingleLeft';
const WikiSingle = ({ data }) => {
  return (
    <>
      <Box sx={{ my: '3%', py:{xs:'8%',sm:'8%', md:'5%',md:'3%'} }}>
        <Container>
          <Grid container spacing={4} >
            <Grid item lg={8} md={8} xs={12} sm={12}>
              <WikiSingleLeft data={data} />
            </Grid>
            <Grid item lg={3.5} md={3.5} xs={12} sm={12}>
              <WikiSingleRigth data={data} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WikiSingle;
