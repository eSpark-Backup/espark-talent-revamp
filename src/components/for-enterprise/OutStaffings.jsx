'use client';
import React from 'react';

import Image from 'next/image';
import { Box, Typography, Grid, Container } from '@mui/material';
import ParagraphTitle from '@/components/homepage/ParagraphTitle';
import ESparkButton from '../global/eSparkButton';

const OutStaffings = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '3%', my: '2%' }}>
        <Container>
          <ParagraphTitle
            title={`Trust eSpark Talent's Outstaffing Services`}
            paragraph={`Partnering With Us Is Remarkable.`}
          />
          <Grid
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {data?.items?.map((list, itemIndex) => (
              <Grid item xs={5} key={itemIndex}>
                <Box sx={{ py: '20px', display: 'flex', gap: '10px' }}>
                  <Image
                    src={list?.listIcon}
                    alt="List Icon"
                    width={15}
                    height={15}
                  />
                  <Typography variant="h4" color="secondary">
                    {list?.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: '#000', fontSize: '18px' }}
                  >
                    {list?.paragraph}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            item
            xs={12}
            sx={{
              pt: '40px',
              textAlign: 'center',
            }}
          >
            <ESparkButton
              title={data?.buttonText}
              link={data?.buttonLink}
              color={'secondary'}
              size={'170px'}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutStaffings;
