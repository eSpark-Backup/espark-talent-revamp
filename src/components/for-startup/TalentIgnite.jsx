'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

const TalentIgnite = ({ data }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Grid
          container
          sx={{ flexDirection: { md: 'row', xs: 'row', alignItems: 'center' } }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            alignItems="center"
            justifyContent="center"
            sx={{
              order: { md: 2, xs: 1 },
              pl: { xs: '0px', md: '23px', lg: '35px' },
            }}
          >
            <Typography
              sx={{
                color: '#001C63',
                fontSize: { xs: '20px', md: '28px' },
                lineHeight: { xs: '31px', md: '41.547px' },
                fontWeight: 500,
                mb: { xs: '5px', md: '10px', lg: '15px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {data?.title}
            </Typography>
            <Typography
              sx={{
                color: '#001C63',
                fontSize: { xs: '10px', sm: '13px', md: '18px' },
                lineHeight: { xs: '20px', md: '27.863px' },
                fontWeight: 400,
                mb: { xs: '15px', md: '0px' },
                textAlign: { xs: 'center', md: 'justify' },
              }}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ order: { md: 1, xs: 2 } }}>
            <Box
              sx={{
                borderRadius: '17.311px',
                backgroundColor: '#3B59980A',
                py: { xs: 2, md: 5 },
                px: { xs: 3, md: 3 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                src={data?.image}
                width={400}
                height={300}
                alt={`${data?.alt} -eSpark Talent`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TalentIgnite;
