import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { FOOTER_DATA } from '@/constants/global/footer';

const FooterItem2 = ({ href, label }) => {
  const isBlackLabel =
    label === FOOTER_DATA?.infoEmail || label === FOOTER_DATA?.salesEmail;

  return (
    <Box sx={{ pr: { sm: '10%', md: '0%', xs: '5%' } }}>
      <Typography
        sx={{
          color: '#001C63',
          fontSize: {
            xs: '9px',
            sm: '12px',
            md: '13px',
            lg: '15px',
          },
          fontStyle: 'normal',
          fontWeight: isBlackLabel ? 500 : 400,
          lineHeight: 'normal',
          my: !isBlackLabel ? 2 : 0,
          mr: {
            xs: isBlackLabel ? '15px' : '0px',
            md: isBlackLabel ? '0px' : '0px',
          },
        }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <Link href={`mailto:${href}`}>
        <Typography
          sx={{
            color: '#000',
            fontSize: {
              xs: '9px',
              sm: '12px',
              md: '13px',
              lg: '15px',
            },
            fontStyle: 'normal',
            fontWeight: isBlackLabel ? 500 : 400,
            lineHeight: 'normal',
            my: !isBlackLabel ? 2 : 0,
            mr: {
              xs: isBlackLabel ? '15px' : '0px',
              md: isBlackLabel ? '0px' : '0px',
            },
          }}
        >
          {href}
        </Typography>{' '}
      </Link>
    </Box>
  );
};

export default FooterItem2;
