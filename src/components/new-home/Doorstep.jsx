import { Box, Typography } from '@mui/material';
import React from 'react';

const Doorstep = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
        maxWidth: '1440px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.8,
      }}
    >
      <Typography
        sx={{
          fontSize: '28px',
          fontWeight: 400,
          color: '#111845',
        }}
      >
        Our Benefits
      </Typography>
      <Typography
        sx={{
          fontSize: '40px',
          fontWeight: 600,
          color: '#222324',
        }}
      >
        Bringing Global Expertise to Your Doorstep
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component={'img'}
          src="/images/new-home/offshore-development-center/doorstep/left-design.png"
          sx={{ width: { md: '18%', lg: 'auto' } }}
        />
        <Box
          sx={{
            width: 'calc(100%)',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 'calc(58% - 237px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '-13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '-13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '-13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
          </Box>
          <Box
            sx={{
              width: '237px',
              height: '237px',
              borderRadius: '100%',
              border: '1px solid rgba(70, 70, 72, 0.08)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: '83%',
                height: '83%',
                backgroundColor: '#EFEFEF',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              LOGO
            </Box>
          </Box>
          <Box
            sx={{
              width: 'calc(58% - 237px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
            <Box
              sx={{
                width: '100%',
                minHeight: '84px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '13px 4px 16.1px rgba(24, 84, 153, 0.21)',
                borderRadius: '12px',
              }}
            >
              Cost-Effective Development
            </Box>
          </Box>
        </Box>
        <Box
          component={'img'}
          src="/images/new-home/offshore-development-center/doorstep/right-design.png"
          sx={{ width: { md: '18%', lg: 'auto' } }}
        />
      </Box>
    </Box>
  );
};

export default Doorstep;
