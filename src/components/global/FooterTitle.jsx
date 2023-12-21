import React from 'react';
import { Typography } from '@mui/material';

const FooterTitle = ({ title }) => {
  return (
    <Typography
      variant="h5"
      sx={{
        color: 'primary',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}
    >
      {title}
    </Typography>
  );
};

export default FooterTitle;
