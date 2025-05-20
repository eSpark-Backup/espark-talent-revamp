'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ODCServives = ({ data }) => {
  const { title, techStack, styles } = data || {};
  const { mainBoxStyle, titleStyle, imageStyle, imageTitleStyle } =
    styles || {};
  return (
    <Box textAlign="center">
      <Typography sx={titleStyle}>{title}</Typography>

      <Grid container sx={mainBoxStyle}>
        {techStack.map((tech, index) => (
          <Grid key={index} xs={'auto'}>
            <Box sx={{ width: { xs: '90px', md: '110px' } }}>
              <Box sx={{ height: { xs: '55px', md: '60px' } }}>
                <Box component={'img'} src={tech?.icon} sx={imageStyle} />
              </Box>
              <Typography sx={imageTitleStyle}>{tech.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ODCServives;
