'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';
import {
  boxStyle,
  containerGridStyle,
  leftGridStyle,
  titleStyle,
  descriptionStyle,
  rightGridStyle,
  imageBoxStyle,
} from '@/constants/solutions/for-business-startup/talent-ignite-constant';

const TalentIgnite = ({ data, isBestOutsourceComponent }) => {
  const textAlignXs = isBestOutsourceComponent ? 'left' : 'center';
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }
  return (
    <Box sx={boxStyle}>
      <Container>
        <Grid container sx={containerGridStyle}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6.6}
            alignItems="center"
            justifyContent="center"
            sx={leftGridStyle}
          >
            <Typography variant="h3" sx={titleStyle}>
              {data?.title || 'Title not available'}
            </Typography>
            <Typography
              sx={descriptionStyle}
              textAlign={{ xs: textAlignXs, sm: 'center', md: 'justify' }}
              dangerouslySetInnerHTML={{
                __html: data?.description || 'Description not available',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5.4} sx={rightGridStyle}>
            <Box sx={imageBoxStyle}>
              <Image
                quality="85"
                priority={true}
                src={data?.image || '/path/to/default/image.png'}
                width={400}
                height={300}
                alt={`${data?.alt || 'Image Alt'}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TalentIgnite;
