'use client';
import React from 'react';
import { Box } from '@mui/material';
import { PortableText } from '@portabletext/react';

const WikiSingleLeft = ({ data }) => {
  return (
    <Box
      className={'blog-content wiki-content'}
      sx={{
        px: '20px',
        py: '30px',
        borderRadius: '15px',
        boxShadow: '0px 0px 7.8px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <PortableText value={data?.content} />
    </Box>
  );
};

export default WikiSingleLeft;
