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
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <>
      <Box sx={outerBoxSx}>
        <Container>
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" color="secondary" sx={titleTypographySx}>
                {data?.title || 'Title not available'}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={paragraphTypographySx}
              >
                {data?.paragraph || 'Paragraph not available'}
              </Typography>
              <Grid container sx={itemsGridContainerSx}>
                {data?.items?.length > 0 ? (
                  data.items.map((list, itemIndex) => (
                    <Grid item xs={12} md={6} key={itemIndex}>
                      <Box sx={itemBoxSx}>
                        {list?.listIcon && (
                          <Image
                            quality="85"
                            priority={true}
                            src={list.listIcon}
                            alt={list?.title || 'List Icon'}
                            width={15}
                            height={15}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/path/to/fallback/image.jpg';
                            }}
                          />
                        )}
                        <Typography variant="body1" sx={itemTypographySx}>
                          {list?.title || 'Item not available'}
                        </Typography>
                      </Box>
                    </Grid>
                  ))
                ) : (
                  <Typography>No items available</Typography>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} sx={imageGridSx}>
              {data?.image && (
                <Image
                  quality="85"
                  priority={true}
                  src={data.image}
                  height={data?.imageHeight || 300}
                  width={data?.imageWidth || 300}
                  alt={data?.alt || 'Image'}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/path/to/fallback/image.jpg';
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingAdvantage;
