import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { FOOTER_DATA } from '@/constants/global/footer';
import { footerItemStyle } from '@/constants/global/footer/FooterItem';
const FooterItem = ({ href, label }) => {
  const isBlackLabel =
    label === FOOTER_DATA?.infoEmail || label === FOOTER_DATA?.salesEmail;
  return (
    <Typography
      color={isBlackLabel ? '#000' : '#001C63'}
      fontWeight={isBlackLabel ? 500 : 400}
      my={!isBlackLabel ? 2 : 0}
      mr={{
        xs: isBlackLabel ? '15px' : '0px',
        md: isBlackLabel ? '0px' : '0px',
      }}
      sx={footerItemStyle}
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
