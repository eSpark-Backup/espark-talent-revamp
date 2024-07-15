'use client';
import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const PricingDefference = ({ data }) => {
  const isSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      <Box sx={{ backgroundColor: '#F7F8FB' }}>
        <Box
          sx={{
            maxWidth: '1260px',
            p: 1.5,
            mx: 'auto',
            py: { xs: '30px', md: '50px', lg: '75px' },
          }}
        >
          {isSM ? (
            <Grid
              container
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={3.5}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '13.57px',
                      border: '0.9px solid rgba(0, 0, 0, 0.5)',
                      '@media (min-width: 767px) and (max-width: 767px)': {
                        width: '100%',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        height: '70.972px',
                        borderTopLeftRadius: '13.57px',
                        borderTopRightRadius: '13.57px',
                        borderTop: '1px solid lightGray',
                        p: '20px',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component={'img'}
                        src={item?.icon}
                        alt={item?.title}
                        sx={{
                          width: 43,
                          height: 43,
                          '@media (min-width: 280px) and (max-width: 424px)': {
                            width: 27,
                            height: 27,
                          },
                        }}
                      />
                      <Typography
                        component="h4"
                        color="secondary"
                        sx={{
                          fontSize: '19px !important',
                          fontWeight: 600,
                          ml: 2,
                          '@media (min-width: 375px) and (max-width: 424px)': {
                            fontSize: '19px !important',
                          },
                          '@media (min-width: 280px) and (max-width: 359px)': {
                            ml: 1,
                            fontSize: '19px !important',
                          },
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        p: '20px',
                        borderRadius: '0 0 20px 20px',
                        backgroundColor: '#fff',
                        height: '100%',
                      }}
                    >
                      <Typography
                        component={'p'}
                        sx={{
                          fontSize: '12.05px',
                          lineHeight: '25.3px',
                          fontWeight: 400,
                          color: '#001C63',
                        }}
                      >
                        {item?.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={4} justifyContent={'center'}>
              {data?.items?.map((item) => (
                <Grid
                  item
                  key={item?.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  sx={{ display: 'flex' }}
                >
                  <Box
                    spacing={4}
                    sx={{
                      pl: '25px',
                      pr: '20px',
                      py: '25px',
                      backgroundColor: '#F7F8FB',
                      borderRadius: '15px',
                      border: '0.9px solid rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      height: '100%',
                      '&:hover': {
                        backgroundColor: '#fff',
                        boxShadow: 'transparent',
                      },
                    }}
                  >
                    <Grid
                      item
                      xs={1.5}
                      sx={{ justifyContent: 'center', pt: '10px' }}
                    >
                      <img
                        src={item?.icon}
                        alt={item?.title}
                        height={50}
                        width={50}
                      />
                    </Grid>
                    <Grid item xs={10.5} sx={{ px: '10px' }}>
                      <Typography
                        sx={{
                          color: '#001C63',
                          fontSize: {
                            xs: '19.27px',
                            sm: '24px',
                            md: '28px',
                            lg: '28.83px',
                          },
                          fontWeight: 600,
                          lineHeight: 1.8,
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
                    </Grid>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PricingDefference;
