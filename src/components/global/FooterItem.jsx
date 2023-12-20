import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import { LABEL } from '@/constants/global/footer';

const FooterItem = ({ href, label }) => {
  const isBlackLabel =
    label === LABEL?.infoEmail || label === LABEL?.salesEmail;

  return (
    <Typography
      sx={{
        color: isBlackLabel ? 'black' : '#001C63',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: isBlackLabel ? 500 : 400,
        lineHeight: 'normal',
        my: 2,
      }}
    >
      <Link href={href} dangerouslySetInnerHTML={{ __html: label }} />
    </Typography>
  );
};

export default FooterItem;
