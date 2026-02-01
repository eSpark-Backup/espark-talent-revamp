import { Typography } from '@mui/material';
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <Typography
      sx={{
        color: 'red',
        fontSize: '11px !important',
        fontStyle: 'normal',
        fontWeight: 400,
        mt: 0.5,
      }}
    >
      {message}
    </Typography>
  );
};

export default ErrorMessage;
