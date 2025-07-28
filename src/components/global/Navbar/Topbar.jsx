import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Topbar = ({ data }) => {
  const { mailText, mailIcon, socialIcons, styles } = data || {};
  const {
    mainBoxStyle,
    topBarBoxStyle,
    mailBoxStyle,
    mailTextStyle,
    socialIconBoxStyle,
  } = styles || {};

  const SocialIcon = ({ img, path }, index) => (
    <Link href={path || '#'} target="_blank" key={index}>
      <Box src={img}>
        <Image
          src={img}
          alt="social-icon"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          width={500}
          height={500}
        />
      </Box>
    </Link>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={topBarBoxStyle}>
        <Link href={`mailto:${mailText}`}>
          <Box sx={mailBoxStyle}>
            <Image
              src={mailIcon || '/'}
              alt="mail-icon"
              width={20}
              height={20}
            />
            <Typography sx={mailTextStyle}>{mailText}</Typography>
          </Box>
        </Link>
        <Box sx={socialIconBoxStyle}>{socialIcons?.map(SocialIcon)}</Box>
      </Box>
    </Box>
  );
};

export default Topbar;
