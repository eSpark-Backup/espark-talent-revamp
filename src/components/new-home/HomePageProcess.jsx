'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const HomePageProcess = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(data?.items[0]);
  return (
    <>
      <Box sx={{ backgroundColor: '#F7F8FB', py: 3 }}>
        <Container sx={{ p: 1 }}>
          <Box sx={{ pb: '30px' }}>
            <Typography
              variant={'h2'}
              color={'secondary'}
              sx={{
                flexWrap: 'wrap',
                fontSize: {
                  xs: '20px',
                  sm: '22px',
                  md: '26px',
                  lg: '32px',
                },
                fontWeight: '600',
                textAlign: {
                  xs: 'center',
                  md: 'center',
                  lg: 'left',
                },
              }}
            >
              {data?.title}
            </Typography>
          </Box>
          <Grid container spacing={4} sx={{ py: 2 }}>
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row', lg: 'column' },
                justifyContent: 'space-evenly',
              }}
            >
              {data?.items?.map((item) => (
                <Box
                  key={item.step}
                  onClick={() => setSelectedItem(item)}
                  onMouseEnter={() => setSelectedItem(item)}
                  sx={{
                    width: { xs: 'auto', sm: 'auto', md: '33%', lg: 'auto' },
                    height: {
                      xs: '122px',
                      sm: '122px',
                      md: 'auto',
                      lg: 'auto',
                    },

                    mb: 3,
                    cursor: 'pointer',
                    px: { xs: 1.2, sm: 1.5, md: 2 },
                    py: { xs: 1.5, sm: 2.2, md: 2 },
                    backgroundColor: selectedItem === item ? '#fff' : 'none',
                    '&:hover': {
                      backgroundColor: '#fff',
                      borderLeft: '16px solid #596EA5',
                      boxShadow: '0px 4px 4px rgba(3,3,3,0.58)',
                    },
                    borderLeft:
                      selectedItem === item
                        ? '16px solid #596EA5'
                        : '16px solid #F7F8FB',
                    boxShadow:
                      selectedItem === item
                        ? '2px 4px 4px 0 rgba(3,3,3,0.3)'
                        : 'none',
                    borderRadius: '18px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'primary',
                      fontSize: {
                        xs: '14px',
                        sm: '14.65px',
                        md: '17px',
                        lg: '19.68px',
                        xl: '19.68px',
                      },
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#001C63',
                      fontSize: {
                        xs: '23.97px',
                        sm: '23.97px',
                        md: '25px',
                        lg: '28px',
                        xl: '28px',
                      },
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#000',
                      fontSize: {
                        xs: '14px',
                        sm: '15px',
                        md: '16px',
                        lg: '17px',
                        xl: '18px',
                      },
                      fontWeight: 600,
                      lineHeight: 1.4,
                      pr: { xs: '0', sm: '3%', md: '5%' },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `${item.description}`,
                    }}
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              <Box style={{ width: '100%', height: '100%' }}>
                <img
                  src={selectedItem?.image}
                  alt={selectedItem?.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePageProcess;
