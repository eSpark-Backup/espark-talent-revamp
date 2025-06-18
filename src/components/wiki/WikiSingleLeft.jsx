'use client';
import React from 'react';
import { Box } from '@mui/material';
import { PortableText } from '@portabletext/react';
import Skeleton from 'react-loading-skeleton';

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
      {data ? (
        <PortableText value={data?.content} />
      ) : (
        <>
          <Skeleton height={150} count={1} />
          <Skeleton height={50} count={20} />
        </>
      )}
    </Box>
  );
};

export default WikiSingleLeft;
