'use client';
import React from 'react';

import Image from 'next/image';
import { Box, Typography, Grid, Container } from '@mui/material';
import ESparkButton from '../global/eSparkButton';

const OutStaffings = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '3%', my: '2%' }}>
        <Container>
          <Box
            sx={{
              pb: '30px',
              px: { md: '20%', sm: '10%', xs: '2%' },
            }}
          >
            <Typography
              color={'secondary'}
              sx={{
                textAlign: 'center',
                flexWrap: 'wrap',
                fontWeight: 600,
                mb: { xs: 1, sm: 0 },
                lineHeight: { sm: '38px', md: '40px', lg: '42.289px' },
                fontSize: {
                  xs: '20px',
                  sm: '24px',
                  md: '25px',
                  lg: '32px',
                },
              }}
            >
              {`Trust eSpark Talent's Outstaffing Services`}
            </Typography>
            <Typography
              color={'secondary'}
              sx={{
                textAlign: 'center',
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                fontWeight: 400,
              }}
            >
              {`Partnering With Us Is Remarkable.`}
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              justifyContent: 'center',
              // alignItems: 'center',
              gap: 2,
            }}
          >
            {data?.items?.map((list, itemIndex) => (
              <Grid item xs={12} sm={5.5} key={itemIndex}>
                <Box
                  sx={{
                    py: '20px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Image
                    src={list?.listIcon}
                    alt="List Icon"
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '16px',
                        sm: '18px',
                        md: '20px',
                        lg: '25px',
                      },
                      fontWeight: 500,
                    }}
                    color="secondary"
                  >
                    {list?.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: '#000', fontSize: { xs: '14px', sm: '18px' } }}
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
