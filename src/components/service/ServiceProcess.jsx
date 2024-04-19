'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ServiceProcess = ({ data }) => {
  // const evenMap = data.processes?.filter((_, index) => index % 2 === 0);
  // const oddMap = data.processes?.filter((_, index) => index % 2 !== 0);
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ProcessCardTop data={data?.processes[0]} />
            <ProcessCardTop data={data?.processes[2]} />
          </Box>
          <ProcessCardBottom data={data?.processes[1]} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <ProcessCardTop data={data?.processes[4]} />
          <Box sx={{ display: 'flex' }}>
            <ProcessCardBottom data={data?.processes[3]} />
            <ProcessCardBottom data={data?.processes[5]} />
          </Box>
        </Box>
        {/* <Box sx={{ width: '100%', maxWidth: '1440px', display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
          <ProcessCardTop data={data?.processes[0]} />
          <ProcessCardTop data={data?.processes[2]} />
          <ProcessCardTop data={data?.processes[4]} />
        </Box>
      </Box>
      <Box sx={{ width: '100%', maxWidth: '1664px', display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', }}>
          <ProcessCardBottom data={data?.processes[1]} />
          <ProcessCardBottom data={data?.processes[3]} />
          <ProcessCardBottom data={data?.processes[5]} />
        </Box>
      </Box> */}
      </Box>
    </>
  );
};

export default ServiceProcess;

const ProcessCardTop = ({ data }) => {
  return (
    <Box sx={{ px: '15px' }}>
      <Typography
        sx={{
          color: data?.color,
          fontWeight: 700,
          lineHeight: '64px',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
        {data?.title}
      </Typography>
      <Typography
        sx={{
          color: '#4E4E4E',
          fontWeight: 400,
          lineHeight: 1.2,
          fontSize: '14px',
          textAlign: 'center',
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
      <Image
        src={data?.image}
        height={235}
        width={205}
        style={{ margin: '0 auto', marginTop: '20px' }}
      />
    </Box>
  );
};
const ProcessCardBottom = ({ data }) => {
  return (
    <Box sx={{ px: '15px' }}>
      <Image
        src={data?.image}
        height={235}
        width={205}
        style={{ margin: '0 auto', marginTop: '20px' }}
      />
      <Typography
        sx={{
          color: data?.color,
          fontWeight: 700,
          lineHeight: '64px',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
        {data?.title}
      </Typography>
      <Typography
        sx={{
          color: '#4E4E4E',
          fontWeight: 400,
          lineHeight: 1.2,
          fontSize: '14px',
          textAlign: 'center',
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
    </Box>
  );
};
