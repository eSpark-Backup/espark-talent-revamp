import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const OurQualityService = ({ ourQualityService }) => {
  const { card, heading, subHeading } = ourQualityService;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Grid
          container
          direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
        >
          <Grid item md={6}>
            <Grid
              container
              spacing={2}
              sx={{
                mb: { xs: '50px', md: '0px' },
              }}
            >
              {card?.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  key={index}
                  sx={{ order: { sm: 1, xs: 2 } }}
                >
                  <Box
                    sx={{
                      border: '1px solid #E5E5E5',
                      borderRadius: '5px',
                      py: '18px',
                      display: 'flex',
                      minHeight: { xs: '85px', sm: 'auto' },
                      alignItems: 'center',
                      alignContent: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#001C63',
                        px: { xs: '34px', md: '0' },
                        textAlign: 'center',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                      }}
                    >
                      {item?.content}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { sm: 2, xs: 1 },
              display: 'flex',
              justifyContent: { lg: 'right', xs: 'center' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ alignItems: 'center', pt: { xs: '30px', md: '0px' } }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#001C63',
                  textAlign: { xs: 'center', md: 'right' },
                  flexWrap: 'wrap',
                  pl: { md: '20px', lg: '118px' },
                  lineHeight: { md: '56px', xs: '32px' },
                  fontSize: { md: '32px', xs: '20px' },
                  fontWeight: 700,
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  textAlign: { xs: 'center', md: 'right' },
                  my: { xs: '20px', md: '20px' },
                  ml: { md: '10px ', lg: '70px' },
                  lineHeight: { xs: '17px', md: '30.4px' },
                  fontStyle: 'normal',
                  fontSize: { xs: '10px', sm: '12px', md: '16px' },
                  fontWeight: 400,
                  px: { xs: '13px', md: '0px' },
                }}
              >
                {subHeading}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurQualityService;
