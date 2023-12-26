import React from 'react';
import {
  Box,
  Container,
  Divider,
  Typography,
  ImageListTile,
  ListSubheader,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import Image from 'next/image';

const OurPerks = () => {
  return (
    <Box
      sx={{
        py: '4%',
      }}
    >
      <Container
        sx={{
          borderRadius: '20px',
          background: 'linear-gradient(97deg, #029894 0.53%, #036764 102.09%)',
          py: '2%',
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Box sx={{ display: 'flex' }}>
              {/* <Image src={ } height={ } width={ } />
              <Typography variant="body1" color="initial"></Typography>
              <Typography variant="body1" color="initial"></Typography>
              <Image src={} height={} width={}/> */}
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h3" color={'red'}>
              asdas
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPerks;
