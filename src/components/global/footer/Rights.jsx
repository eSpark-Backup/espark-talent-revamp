import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';

const Rights = ({ copyRights }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        padding: 2,
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          color: '#0E0F1D',
          fontSize: {
            xs: '10px',
            sm: '10px',
            md: '13px',
            lg: '15px',
            xl: '20px',
          },
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        {copyRights}
      </Typography>
      <Link href="/privacy-policy">
        <Typography
          sx={{
            color: '#001C63',
            fontSize: {
              xs: '10px',
              sm: '10px',
              md: '13px',
              lg: '15px',
              xl: '20px',
            },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          {`Privacy Policy`}
        </Typography>
      </Link>
      <Link href="/terms-and-conditions">
        <Typography
          sx={{
            color: '#001C63',
            fontSize: {
              xs: '10px',
              sm: '10px',
              md: '13px',
              lg: '15px',
              xl: '20px',
            },
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          {`Term & Conditions`}
        </Typography>
      </Link>
    </Box>
  );
};

export default Rights;
