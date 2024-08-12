'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HomePageDifferenceMobile from './HomePageDifferenceMobile';

const HomePageDifference = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Box
        sx={{
          maxWidth: '1260px',
          p: 1.5,
          mx: 'auto',
          py: { xs: '30px', md: '50px', lg: '75px' },
        }}
      >
        <Box sx={{ pb: { xs: '20px', md: '25px', lg: '30px' }, px: 2 }}>
          <Typography
            variant="h2"
            color="secondary"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '22px', sm: '25px', md: '28px', lg: '32px' },
              lineHeight: 1.5,
            }}
          >
            {data?.title}
          </Typography>
        </Box>
        <HomePageDifferenceMobile data={data?.items} />
        <Grid
          container
          spacing={4}
          justifyContent="center"
          flexWrap={'wrap'}
          display={{ xs: 'none', sm: 'flex' }}
        >
          {data?.items?.map((item) => (
            <Grid item key={item?.id} xs={12} sm={11} md={6} lg={4}>
              <Box
                sx={{
                  pl: '25px',
                  pr: '20px',
                  py: '25px',
                  backgroundColor: '#F7F8FB',
                  borderRadius: '15px',
                  display: 'flex',
                  gap: 0.5,
                  height: '100%',
                  '&:hover': {
                    backgroundColor: '#fff',
                    boxShadow: '0px 0px 11px 0 rgba(0,0,0,0.17)',
                  },
                }}
              >
                <img
                  src={item?.icon}
                  alt={item?.title}
                  style={{
                    display: 'flex',
                    alignSelf: 'start',
                    height: 'auto',
                    width: '45px',
                    marginTop: '10px',
                  }}
                />
                <Box sx={{ px: '10px' }}>
                  <Typography
                    sx={{
                      color: '#001C63',
                      fontSize: {
                        xs: '19.27px',
                        sm: '24px',
                        md: '28px',
                        lg: '32px',
                      },
                      fontWeight: 600,
                      lineHeight: { xs: 'normal', lg: 1.8 },
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#001C63',
                      fontSize: {
                        xs: '12px',
                        sm: '12px',
                        md: '15px',
                        lg: '18px',
                      },
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePageDifference;
