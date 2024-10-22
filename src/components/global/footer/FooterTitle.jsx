import React from 'react';
import { Typography } from '@mui/material';

const titleStyle = {
  variant: 'h4',
  color: 'secondary',
  sx: {
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  },
};

const FooterTitle = ({ title }) => {
  return <Typography {...titleStyle}>{title}</Typography>;
};

export default FooterTitle;
