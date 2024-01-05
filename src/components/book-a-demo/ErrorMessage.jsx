import { Typography } from '@mui/material';
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <Typography
      sx={{
        color: 'red',
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: 400,
        pt: 1,
      }}
    >
      {message}
    </Typography>
  );
};

export default ErrorMessage;
