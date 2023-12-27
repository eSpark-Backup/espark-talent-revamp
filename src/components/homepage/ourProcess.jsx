'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TitleParagraph from '@/components/global/titleParagraph';

const OurProcess = ({ data }) => {
  return (
    <>
      <Box sx={{ py: '4%' }}>
        <Container maxWidth="lg">
          <TitleParagraph title={data?.title} paragraph={data?.subTitle} />
          {data?.processes?.map((process, index) => (
            <Grid
              key={index}
              container
              alignItems="center"
              spacing={2}
              sx={{
                flexDirection: process?.isReverse ? 'row-reverse' : 'row',
              }}
            >
              <Grid item xs={4} sm={3} lg={3} md={3}>
                {process?.alignment === 'left' ? (
                  <Image
                    src={process?.image}
                    height={250}
                    width={250}
                    alt={process?.title}
                  />
                ) : null}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  p: '20px',
                  textAlign: process?.alignment === 'right' ? 'right' : 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h2" color="secondary" sx={{ pb: '20px' }}>
                  {process?.title}
                </Typography>
                <Typography variant="body1" color="secondary">
                  {process?.text}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={3} lg={3} md={3}>
                {process?.alignment === 'right' ? (
                  <Image
                    src={process?.image}
                    height={250}
                    width={250}
                    alt={process?.title}
                  />
                ) : null}
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default OurProcess;
