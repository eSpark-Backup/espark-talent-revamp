import React from 'react';
import { Typography } from '@mui/material';
import { titleStyle } from '@/constants/global/footer/FooterTitle';

const FooterTitle = ({ title }) => {
  return <Typography {...titleStyle}>{title}</Typography>;
};

export default FooterTitle;
