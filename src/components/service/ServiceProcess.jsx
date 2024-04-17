'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const ServiceProcess = ({ data }) => {
  const evenMap = data.processes?.filter((_, index) => index % 2 === 0);
  const oddMap = data.processes?.filter((_, index) => index % 2 !== 0);
  return (
    <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}>
      <Grid container>
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
            <Image src={process?.image} height={235} width={205} style={{ margin: '0 auto', marginTop: '20px' }} />
          </Grid>
        ))}
        {/* <Box sx={{ pt: { sm: '20px', md: '30px', lg: '50px' } }}> */}
        {/* <img src={'/images/service/why-hire/cover-image.svg'} alt="" /> */}
        {/* </Box> */}
        <Grid item xs={1.8} />
        <Grid item xs={1.8} />
        {oddMap?.map((process, index) => (
          <Grid item xs={process?.xs} key={index} sx={{ pl: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }} >
            <Image src={process?.image} height={235} width={220} style={{ margin: '0 auto' }} />
            <Typography
              sx={{
                color: process?.color,
                fontWeight: 700,
                lineHeight: 2,
                fontSize: '24px',
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
