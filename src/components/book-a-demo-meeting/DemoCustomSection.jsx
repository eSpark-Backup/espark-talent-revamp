import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  containerSx,
  relativeBoxSx,
  flexBoxSx,
  topBoxSx,
  imgSx,
  titleSx,
  paragraphSx,
  paragraphBoxStyle,
} from '@/constants/book-demo-meeting/DemoCustomSection';

const DemoCustomSection = ({ items }) => {
  return (
    <>
      <Box sx={containerSx}>
        <Box sx={relativeBoxSx}>
          <Box sx={flexBoxSx}>
            <Box sx={topBoxSx}>
              <Box
                component={'img'}
                src={items[0]?.icon || ''}
                alt={items[0]?.alt || ''}
                sx={imgSx}
              />
              <Typography component={'h4'} color="secondary" sx={titleSx}>
                {items[0]?.title || ''}
              </Typography>
            </Box>
            <Box sx={paragraphBoxStyle}>
              <Typography component="p" sx={paragraphSx} color="initial">
                {items[0]?.paragraph || ''}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DemoCustomSection;
