import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ServiceProcess = ({ data }) => {
  return (
    <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}>
      <Grid container>
        {data?.processes?.slice(0, 3).map((process, index) => (
          <Grid item xs={3.5} key={index}>
            <Typography
              sx={{
                color: process?.color,
                fontWeight: 700,
                lineHeight: '65px',
                fontSize: '24px',
                textAlign: 'center',
              }}
            >
              {process?.title}
            </Typography>
            <Typography
              component="Box"
              sx={{
                color: '#001C63',
                fontWeight: 400,
                lineHeight: '23px',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              {process?.text}
            </Typography>
          </Grid>
        ))}

        <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}>
          <img src={'/images/service/why-hire/cover-image.svg'} alt="" />
        </Box>
        <Grid item xs={1.5}></Grid>
        {data?.processes?.slice(3).map((process, index) => (
          <Grid item xs={3.5} key={index}>
            <Typography
              sx={{
                color: process?.color,
                fontWeight: 700,
                lineHeight: '65px',
                fontSize: '24px',
                textAlign: 'center',
              }}
            >
              {process?.title}
            </Typography>
            <Typography
              component="Box"
              sx={{
                color: '#001C63',
                fontWeight: 400,
                lineHeight: '23px',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              {process?.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceProcess;
