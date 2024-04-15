'use client';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';

const DemoLeverageTalent = ({ data }) => {
  const { title, descrcipton, items } = data;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#fff',
          pt: { xs: 3, md: 4, lg: 6 },
          pb: isSmallScreen ? 2 : 7,
          '@media(max-width: 425px)': {
            pb: pathname ? 2 : 15,
          },
        }}
      >
        <Box
          sx={{ display: 'flex', justifyContent: 'center', mb: { xs: '15px' } }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1, lg: 0 },
              alignItems: 'center',
              width: 'auto',
              px: 3.5,
              pt: { lg: '15px' },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '18px',
                  sm: '26px',
                  md: '35px',
                  lg: '48px',
                },
                fontWeight: 600,
                lineHeight: {
                  xs: '28px',
                  sm: '40px',
                  md: '50px',
                  lg: '65px',
                },
                color: '#001C63',
                maxWidth: { md: '1000px', lg: '1200px' },
                textAlign: 'center',
              }}
              dangerouslySetInnerHTML={{
                __html: `${title || ''}`,
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xs: '11px',
                  sm: '15px',
                  md: '19px',
                  lg: '19px',
                },
                fontWeight: 400,
                lineHeight: {
                  xs: '27.86px',
                  sm: '27px',
                  md: '30px',
                  lg: '27.86px',
                },
                color: pathname === book_a_demo_meeting ? '#001C63' : '#0E1155',
                textAlign: 'center',
                maxWidth: '975.45px',
                px: { lg: 2 },
                pt: { md: 1 },
                mb: { md: 3.5 },
              }}
            >
              {descrcipton || ''}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {items?.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Box
                sx={{
                  mx: 'auto',
                  maxWidth: { xs: '401px', md: '650px', lg: '401px' },
                  height: '224px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  background: '#fff',
                  boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
                  position: 'relative',
                  zIndex: 1,

                  '@media(min-width: 421px) and (max-width:485px)': {
                    height: '180px !important',
                  },
                  '@media(max-width: 420px)': {
                    mx: 1.2,
                    height: 'auto',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    height: '89.498px',
                    display: 'flex',
                    borderRadius: '20px 20px 0 0 ',
                    background: '#F7F8FB',
                    p: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src={item?.icon || ''}
                    alt={item?.alt || ''}
                    sx={{
                      width: 42,
                      height: 42,
                      '@media(max-width: 425px)': {
                        width: 30,
                        height: 30,
                      },
                      '@media(max-width: 280px)': {
                        width: 25,
                        height: 25,
                      },
                    }}
                  />
                  <Typography
                    component={'h4'}
                    color="secondary"
                    sx={{
                      ml: 1.5,
                      color: '#001C63',
                      fontSize: '20px',
                      fontWeight: 600,
                      '@media(max-width: 425px)': {
                        fontSize: '18px',
                      },
                      '@media(max-width: 280px)': {
                        fontSize: '16px',
                      },
                    }}
                  >
                    {item?.title || ''}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: '10px 20px 20px 20px',
                    borderRadius: '0 0 20px 20px',
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontSize: {
                        xs: '10.85px',
                        sm: '14px',
                        md: '15px',
                        lg: '16px',
                      },
                      fontWeight: 400,
                      lineHeight: { xs: '18.31px', sm: '26px', md: '27px' },
                      '@media(max-width: 480px)': {
                        fontSize: '12px',
                        lineHeight: '30px',
                      },
                    }}
                    color="initial"
                  >
                    {item?.paragraph || ''}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DemoLeverageTalent;
