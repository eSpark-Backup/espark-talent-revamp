'use client';
import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import {
  outerBoxSx,
  titleTypographySx,
  paragraphTypographySx,
  itemsGridContainerSx,
  itemBoxSx,
  itemTypographySx,
  imageGridSx,
} from './OutSourcingAdvantageConstants';

const OutSourcingAdvantage = ({ data }) => {
  return (
    <>
      <Box sx={outerBoxSx}>
        <Container>
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" color="secondary" sx={titleTypographySx}>
                {data?.title}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={paragraphTypographySx}
              >
                {data?.paragraph}
              </Typography>
              <Grid container sx={itemsGridContainerSx}>
                {data?.items?.map((list, itemIndex) => (
                  <Grid item xs={12} md={6} key={itemIndex}>
                    <Box sx={itemBoxSx}>
                      <Image
                        quality="85"
                        priority={true}
                        src={list?.listIcon}
                        alt="List Icon"
                        width={15}
                        height={15}
                      />
                      <Typography variant="body1" sx={itemTypographySx}>
                        {list?.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} sx={imageGridSx}>
              <Image
                quality="85"
                priority={true}
                src={data?.image}
                height={data?.imageHeight}
                width={data?.imageWidth}
                alt={`${data?.alt}`}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingAdvantage;
