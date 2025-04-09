'use client';
import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import {
  outerBoxStyle,
  titleTypographyStyle,
  paragraphTypographyStyle,
  itemsGridContainerStyle,
  itemBoxStyle,
  itemTypographyStyle,
  imageGridStyle,
} from '@/constants/solutions/for-enterprise/OutSourcingAdvantageConstants';

const OutSourcingAdvantage = ({ data }) => {
  if (!data) {
    return <Typography>Error: No data provided</Typography>;
  }

  return (
    <>
      <Box sx={outerBoxStyle}>
        <Container>
          <Grid container spacing={2} justifyContent="space-evenly">
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                color="secondary"
                sx={titleTypographyStyle}
              >
                {data?.title || 'Title not available'}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={paragraphTypographyStyle}
              >
                {data?.paragraph || 'Paragraph not available'}
              </Typography>
              <Grid container sx={itemsGridContainerStyle}>
                {data?.items?.length > 0 ? (
                  data?.items.map((list, itemIndex) => (
                    <Grid item xs={12} md={6} key={itemIndex}>
                      <Box sx={itemBoxStyle}>
                        {list?.listIcon && (
                          <Image
                            quality="85"
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
                        <Typography variant="body1" sx={itemTypographyStyle}>
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
            <Grid item xs={12} sm={4} sx={imageGridStyle}>
              {data?.image && (
                <Image
                  quality="85"
                  src={data?.image}
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
