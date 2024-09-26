'use client';
import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

const OutSourcingAdvantage = ({ data }) => {
  const theme = useTheme();

  const outerBoxSx = {
    pt: '2%',
    mb: '2%',
    background: '#3B59980A',
  };

  const titleTypographySx = {
    fontSize: { xs: '20px', sm: '24px', md: '25px', lg: '28px' },
    lineHeight: { xs: '27px', sm: '30px', md: '42.289px' },
    color: '#001C63',
    fontWeight: 600,
    pr: { sm: '10%' },
    px: { xs: '5%', sm: 0 },
    py: '10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };

  const paragraphTypographySx = {
    mb: { xs: 1, sm: 0 },
    fontSize: { xs: '14px', sm: '16px', md: '18px' },
    lineHeight: { xs: '20px', sm: '22px', md: '27.363px' },
    pr: { sm: '10%' },
    px: { xs: '5%', sm: 0 },
    py: '10px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };

  const itemsGridContainerSx = {
    display: 'flex',
    mb: 3,
  };

  const itemBoxSx = {
    display: 'flex',
    alignItems: 'start',
    gap: '10px',
    pb: '10px',
  };

  const itemTypographySx = {
    color: '#000',
    fontSize: {
      xs: '12px',
      sm: '12px',
      md: '13px !important',
      lg: '15px !important',
    },
    fontWeight: '400',
  };

  const imageGridSx = {
    display: 'flex',
    alignItems: 'center',
  };

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
