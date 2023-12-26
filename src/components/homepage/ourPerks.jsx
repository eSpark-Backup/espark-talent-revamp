import React from 'react';
import { Container } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';


const OurPerks = () => {
  return (
    <Box sx={{
             py: '4%' }}>
      <Container sx={{
            borderRadius: '20px',
            background:
              'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)', py: '2%' }}>
        <Grid
          container
          
        >
          <Grid item xs={5}>
                      <Typography variant='h3' color={'red'}>asdas</Typography>
          </Grid>
          <Grid item xs={7}>
                      <Typography variant='h3' color={'red'}>asdas</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPerks;
