'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

import ParagraphTitle from '../homepage/ParagraphTitle';
import {
  outerBoxStyle,
  innerBoxStyle,
  gridItemStyle,
  itemBoxStyle,
  titleTypographyStyle,
} from '@/constants/solutions/for-business-startup/OutSourcingSolutionConstant';

const OutSourcingSolution = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }
  return (
    <>
      <Box sx={outerBoxStyle}>
        <Container>
          <Box sx={innerBoxStyle}>
            <ParagraphTitle title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            {data?.items?.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} sx={gridItemStyle}>
                <Box sx={itemBoxStyle}>
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    alt={`${item?.title}`}
                    height={item?.iconHeight}
                    width={item?.iconWidth}
                    onError={(e) => {
                      e.target.src = '/path/to/default/icon.png';
                      e.target.onerror = null;
                    }}
                  />
                  <Typography
                    variant="h5"
                    color="secondary"
                    sx={titleTypographyStyle}
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant="body1">{item?.paragraph}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingSolution;
