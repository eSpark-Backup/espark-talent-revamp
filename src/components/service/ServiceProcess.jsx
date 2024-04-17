'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ServiceProcess = ({ data }) => {
  // const oddMap = data?.processes?.filter((num) => num % 2 !== 0);
  // const evenMap = data?.processes?.filter((num) => num % 2 === 0);
  const evenMap = data.processes?.filter((_, index) => index % 2 === 0);
  const oddMap = data.processes?.filter((_, index) => index % 2 !== 0);

  return (
    <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}>
      <Grid container >
        {evenMap?.map((process, index) => (
          <Grid item xs={process?.xs} key={index} sx={{ px: '15px' }}>
            <Typography
              sx={{
                color: process?.color,
                fontWeight: 700,
                lineHeight: '64px',
                fontSize: '24px',
                textAlign: 'center',
              }}
            >
              {process?.title}
            </Typography>
            <Typography
              sx={{
                color: '#4E4E4E',
                fontWeight: 400,
                lineHeight: 1.2,
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              {process?.text}
            </Typography>
          </Grid>
        ))}
        {/* <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}> */}
        <img src={'/images/service/why-hire/cover-image.svg'} alt="" />
        {/* </Box> */}
        <Grid item xs={1.8} />
        {oddMap?.map((process, index) => (
          <Grid item xs={process?.xs} key={index} sx={{ pl: '15px' }}>
            <Typography
              sx={{
                color: process?.color,
                fontWeight: 700,
                lineHeight: 2,
                fontSize: '24px',
                textAlign: 'center',
              }}
            >
              {process?.title}
            </Typography>
            <Typography
              sx={{
                color: '#4E4E4E',
                fontWeight: 400,
                lineHeight: 1.2,
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
