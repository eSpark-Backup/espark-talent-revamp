'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

const TalentIgnite = ({ data, isBestOutsourceComponent }) => {
  const textAlignXs = isBestOutsourceComponent ? 'left' : 'center';

  const boxSx = {
    my: 4,
    pt: { sm: '7px', md: '10', lg: '15px' },
  };

  const containerGridSx = {
    flexDirection: { md: 'row', xs: 'row', alignItems: 'center' },
  };

  const leftGridSx = {
    order: { md: 2, xs: 1 },
    pl: { xs: '0px', md: '23px', lg: '35px' },
  };

  const titleSx = {
    color: '#001C63',
    fontSize: { xs: '20px', md: '28px' },
    lineHeight: { xs: '31px', md: '41.547px' },
    fontWeight: 500,
    mb: { xs: '5px', md: '10px', lg: '15px' },
    textAlign: { xs: 'center', md: 'left' },
  };

  const descriptionSx = {
    color: '#001C63',
    fontSize: { xs: '13px', sm: '13px', md: '18px' },
    lineHeight: { xs: '20px', md: '27.863px' },
    fontWeight: 400,
    mb: { xs: '15px', md: '0px' },
    textAlign: { xs: textAlignXs, sm: 'center', md: 'justify' },
  };

  const rightGridSx = {
    order: { md: 1, xs: 2 },
  };

  const imageBoxSx = {
    borderRadius: '17.311px',
    backgroundColor: '#3B59980A',
    py: { xs: 2, md: 5 },
    px: { xs: 3, md: 3 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box sx={boxSx}>
      <Container>
        <Grid container sx={containerGridSx}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6.6}
            alignItems="center"
            justifyContent="center"
            sx={leftGridSx}
          >
            <Typography variant="h3" sx={titleSx}>
              {data?.title}
            </Typography>
            <Typography
              sx={descriptionSx}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5.4} sx={rightGridSx}>
            <Box sx={imageBoxSx}>
              <Image
                quality="85"
                priority={true}
                src={data?.image}
                width={400}
                height={300}
                alt={`${data?.alt}`}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TalentIgnite;
