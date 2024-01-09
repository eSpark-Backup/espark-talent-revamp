import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

import OutSourceBenefitsSlider from '@/components/homepage/OutSourceBenefitsSlider.jsx';

const SourceBenefits = ({ data }) => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
        <Container>
          <Box>
            <Box
              component={'div'}
              sx={{
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                width: { xs: 'auto', sm: '700px', lg: '900px' },
                mb: 4,
                gap: 2,
              }}
            >
              <Typography variant={'h2'} color={'secondary'}>
                {data?.title}
              </Typography>
              <Typography
                variant={'body1'}
                color={'secondary'}
                className="hrFirmDesktop"
                sx={{ width: { md: '800px', lg: '900px' } }}
              >
                {data?.paragraph}
              </Typography>
            </Box>
          </Box>
          <Grid
            container
            sx={{ mx: 'auto' }}
            maxWidth={{ sm: 'auto', md: '1000px', lg: '1270px' }}
            spacing={1}
            className="hrFirmDesktop"
          >
            {data?.items?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={4}
                md={4}
                lg={4}
                xl={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  p: '20px',
                }}
              >
                <Box
                  sx={{
                    width: { md: '311.696px', lg: '401.696px' },
                    height: { md: '214.641px', lg: '214.641px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    background: '#fff',
                    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)',
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
                      src={item?.icon}
                      alt={item?.title}
                      sx={{
                        width: { md: 33, lg: 43 },
                        height: { md: 33, lg: 43 },
                      }}
                    />
                    <Typography
                      component={'h4'}
                      color="secondary"
                      sx={{
                        ml: 2,
                        color: '#001C63',
                        fontSize: {
                          md: '16px !important',
                          lg: '20px !important',
                        },
                        fontWeight: 600,
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: '20px',
                      borderRadius: '0 0 20px 20px',
                    }}
                  >
                    <Typography
                      component="p"
                      sx={{
                        fontSize: {
                          sm: '11px !important',
                          lg: '16px !important',
                        },
                        fontWeight: 400,
                        lineHeight: '23px',
                      }}
                      color="initial"
                    >
                      {item?.paragraph}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box className="hrFirmResponsive">
            <OutSourceBenefitsSlider items={data?.items} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SourceBenefits;
