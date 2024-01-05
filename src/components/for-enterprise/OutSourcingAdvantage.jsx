'use client';
import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';

const OutSourcingAdvantage = ({ data }) => {
  return (
    <>
      <Box sx={{ pt: '2%', background: '#3B59980A' }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} sx={{}}>
              <Typography
                variant="h3"
                color="secondary"
                sx={{ pr: '10%', py: '10px' }}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{ pr: '10%', py: '10px' }}
              >
                {data?.paragraph}
              </Typography>
              <Grid container sx={{ display: 'flex' }}>
                {data?.items?.map((list, itemIndex) => (
                  <Grid item xs={5} key={itemIndex}>
                    <Box sx={{ display: 'flex', gap: '10px', pb: '10px' }}>
                      <Image
                        src={list?.listIcon}
                        alt="List Icon"
                        width={15}
                        height={15}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: '#000', fontSize: '17px' }}
                      >
                        {list?.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} sx={{}}>
              <Image
                src={data?.image}
                height={data?.imageHeight}
                width={data?.imageWidth}
                alt={data?.title}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OutSourcingAdvantage;
