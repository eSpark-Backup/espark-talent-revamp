'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceProcess = ({ data, windowWidth }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          '@media(min-width: 1024px) and (max-width:1399px)': { px: 2 },
          '@media (min-width:1024px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 'auto',
            px: 7,
            pt: 7,
            position: 'relative',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            '@media(min-width: 1024px) and (max-width:1399px)': {
              width: '950px',
              ml: 0,
              mx: 0,
              justifyContent: 'space-between',
            },
            '@media (min-width:1400px)': {
              justifyContent: 'start',
              gap: 5.5,
              ml: -10,
            },
          }}
        >
          <ProcessCardTop data={data?.processes[0]} />
          <ProcessCardTop
            data={windowWidth > 1399 ? data?.processes[2] : data?.processes[1]}
          />
          <ProcessCardTop
            data={windowWidth > 1399 ? data?.processes[4] : data?.processes[2]}
          />
          <Box
            component={'img'}
            src={data?.processes[1]?.vec}
            sx={{
              position: 'absolute',
              top: 350,
              left: 400,
              '@media(min-width: 1024px) and (max-width:1399px)': {
                display: 'none',
              },
            }}
          />
          <Box
            component={'img'}
            src={data?.processes[0]?.vec}
            sx={{
              position: 'absolute',
              top: 350,
              left: 140,
              '@media(min-width: 1024px) and (max-width:1399px)': {
                display: 'none',
              },
            }}
          />
          <Box
            component={'img'}
            src={data?.processes[0]?.vec}
            sx={{
              position: 'absolute',
              top: 350,
              left: 550,
              '@media(min-width: 1024px) and (max-width:1399px)': {
                display: 'none',
              },
            }}
          />
          <Box
            component={'img'}
            src={data?.processes[3]?.vec}
            sx={{
              position: 'absolute',
              top: 350,
              right: 300,
              '@media(min-width: 1024px) and (max-width:1399px)': {
                display: 'none',
              },
            }}
          />
          <Box
            component={'img'}
            src={data?.processes[5]?.vec}
            sx={{
              position: 'absolute',
              top: 350,
              right: 170,
              '@media(min-width: 1024px) and (max-width:1399px)': {
                display: 'none',
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          '@media(min-width: 1024px) and (max-width:1399px)': { px: 2 },
          '@media (min-width:1024px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 'auto',
            mt: -12,
            px: 5,
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            '@media(min-width: 1024px) and (max-width:1399px)': {
              width: '950px',
              mt: 12,
              mr: 0,
              justifyContent: 'space-between',
            },
            '@media (min-width:1400px)': {
              justifyContent: 'flex-end',
              gap: 11,
              mr: -10,
            },
          }}
        >
          <ProcessCardBottom
            data={windowWidth > 1399 ? data?.processes[1] : data?.processes[3]}
          />
          <ProcessCardBottom
            data={windowWidth > 1399 ? data?.processes[3] : data?.processes[4]}
          />
          <ProcessCardBottom data={data?.processes[5]} />
        </Box>
      </Box>
      {/* </Box > */}
    </>
  );
};

export default ServiceProcess;

const ProcessCardTop = ({ data }) => {
  return (
    <Box sx={{ px: '15px', position: 'relative', zIndex: 1 }}>
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
          lineHeight: 1.5,
          fontSize: '15px',
          textAlign: 'center',
          '@media(min-width: 1024px) and (max-width:1399px)': {
            fontSize: '12px',
          },
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
      <Box
        component={'img'}
        src={data?.image}
        sx={{
          margin: '0 auto',
          marginTop: '20px',
          width: 205,
          height: 235,
          '@media(min-width: 1024px) and (max-width:1399px)': { width: 170 },
        }}
      />
    </Box>
  );
};

const ProcessCardBottom = ({ data }) => {
  return (
    <Box sx={{ px: '15px', position: 'relative', zIndex: 1 }}>
      <Box
        component={'img'}
        src={data?.image}
        sx={{
          margin: '0 auto',
          marginTop: '20px',
          width: 205,
          height: 235,
          '@media(min-width: 1024px) and (max-width:1399px)': { width: 170 },
        }}
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
          lineHeight: 1.5,
          fontSize: '14px',
          textAlign: 'center',
          '@media(min-width: 1024px) and (max-width:1399px)': {
            fontSize: '12px',
          },
        }}
        dangerouslySetInnerHTML={{ __html: data?.text }}
      />
    </Box>
  );
};
