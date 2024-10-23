import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import {
  mediumScreenStyle,
  linkStyle,
  copyrightStyle,
  largeScreenStyle,
} from '@/constants/global/footer/Rights';

const Rights = ({ copyRights }) => {
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );
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
