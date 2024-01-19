'use client';
import React from 'react';
import { Box, useMediaQuery } from '@mui/material';

import Image from 'next/image';
import { PortableText } from '@portabletext/react';

const WikiSingleLeft = ({ data }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Box
      className={'blog-content'}
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
