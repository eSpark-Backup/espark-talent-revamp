'use client';

import { boxStyle } from '@/components/wiki/WikiSingleLeftStyles';
import { Box } from '@mui/material';
import { PortableText } from '@portabletext/react';
import Skeleton from 'react-loading-skeleton';

const WikiSingleLeft = ({ data }) => {
  return (
    <Box className={'blog-content wiki-content'} sx={boxStyle}>
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
