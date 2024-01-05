'use client';
import React from 'react';

import { Box, Grid, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ParagraphTitle from './ParagraphTitle';

const AwardAchievement = ({ data, design, background }) => {
  return (
    <>
      {design === 2 ? (
        <Box sx={{ background: `${background}`, py: '2.5%' }}>
          <Container>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid rgba(170, 169, 169, 0.41)',
                py: '30px',
              }}
            >
              <Grid item xs={6} md={3} lg={3} xl={3}>
                <ParagraphTitle title={data?.title} />
              </Grid>
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  lg={2}
                  xl={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link href={item?.link}>
                    <Image
                      src={item?.image}
                      height={150}
                      width={150}
                      alt={item?.alt}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
          <Container>
            <ParagraphTitle title={data?.title} />
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  lg={2}
                  xl={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link href={item?.link}>
                    <Image
                      src={item?.image}
                      height={150}
                      width={150}
                      alt={item?.alt}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default AwardAchievement;
