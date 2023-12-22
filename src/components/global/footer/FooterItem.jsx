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
        color: isBlackLabel ? '#000' : 'primary',
        fontSize: '15px',
        fontStyle: 'normal',
        fontWeight: isBlackLabel ? 500 : 400,
        lineHeight: 'normal',
        my: 2,
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
