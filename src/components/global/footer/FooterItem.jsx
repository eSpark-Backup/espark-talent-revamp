import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import { FOOTER_DATA } from '@/constants/global/footer';

const FooterItem = ({ href, label }) => {
  const isBlackLabel =
    label === FOOTER_DATA?.infoEmail || label === FOOTER_DATA?.salesEmail;

  return (
    <Typography
      sx={{
        color: isBlackLabel ? '#000' : '#001C63',
        fontSize: {
          xs: '10px',
          sm: '10px',
          md: '13px',
          lg: '15px',
          // xl: '20px',
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
      {isBlackLabel ? (
        <Link
          href={`mailto:${label}`}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      ) : (
        <Link href={href} dangerouslySetInnerHTML={{ __html: label }} />
      )}
    </Typography>
  );
};

export default FooterItem;
