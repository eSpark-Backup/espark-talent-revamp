import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Rights = ({ copyRights }) => {
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );

  const mediumScreenStyle = {
    textAlign: 'center',
    px: { xs: 2, sx: 2, md: 2, lg: 2 },
    pb: { xs: 2, sx: 2, md: 2, lg: 2 },
    pt: '20px',
    gap: '20px',
  };

  const linkStyle = {
    color: '#001C63',
    fontSize: {
      xs: '12px',
      sm: '12px',
      md: '13px',
      lg: '15px',
      xl: '20px',
    },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  const copyrightStyle = {
    color: '#0E0F1D',
    fontSize: {
      xs: '12px',
      sm: '12px',
      md: '13px',
      lg: '15px',
      xl: '20px',
    },
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  const largeScreenStyle = {
    display: 'flex',
    textAlign: 'center',
    px: { xs: 0, sx: 0, md: 2, lg: 2 },
    py: { xs: 1, sx: 1, md: 2, lg: 2 },
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box>
      {isMediumScreen ? (
        <Box>
          <Box sx={mediumScreenStyle}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <Link href="/privacy-policy">
                <Typography sx={linkStyle}>{`Privacy Policy`}</Typography>
              </Link>
              <Link href="/terms-and-conditions">
                <Typography sx={linkStyle}>{`Term & Conditions`}</Typography>
              </Link>
            </Box>
            <Box>
              <Typography sx={copyrightStyle}>{copyRights}</Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={largeScreenStyle}>
          <Typography sx={copyrightStyle}>{copyRights}</Typography>
          <Link href="/privacy-policy">
            <Typography sx={linkStyle}>{`Privacy Policy`}</Typography>
          </Link>
          <Link href="/terms-and-conditions">
            <Typography sx={linkStyle}>{`Term & Conditions`}</Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Rights;
