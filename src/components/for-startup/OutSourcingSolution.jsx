'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

import ParagraphTitle from '../homepage/ParagraphTitle';

const OutSourcingSolution = ({ data }) => {
  const outerBoxSx = {
    py: ['2.5%', '5%'],
    overflow: 'hidden',
  };

  const innerBoxSx = {
    py: '2.5%',
    textAlign: 'center',
  };

  const gridItemSx = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    p: ['10px', '20px'],
  };

  const itemBoxSx = {
    borderRadius: '30px',
    p: '20px',
    alignItems: 'center',
    background: ' #FFF',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  };

  const titleTypographySx = {
    pr: '10%',
  };

  return (
    <>
      <Box sx={outerBoxSx}>
        <Container>
          <Box sx={innerBoxSx}>
            <ParagraphTitle title={data?.title} paragraph={data?.paragraph} />
          </Box>
          <Grid container spacing={2} justifyContent="center">
            {data?.items?.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} sx={gridItemSx}>
                <Box sx={itemBoxSx}>
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.icon}
                    alt={`${item?.title}`}
                    height={item?.iconHeight}
                    width={item?.iconWidth}
                  />
                  <Typography
                    variant="h5"
                    color="secondary"
                    sx={titleTypographySx}
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
