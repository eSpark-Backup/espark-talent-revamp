import React from 'react';
import { Typography } from '@mui/material';

const FooterTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      color="secondary"
      sx={{
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
