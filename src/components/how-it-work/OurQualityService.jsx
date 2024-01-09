import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const OurQualityService = ({ ourQualityService }) => {
  const { card, heading, subHeading } = ourQualityService;
  return (
    <Box sx={{ mb: '4%' }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Grid container spacing={2}>
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
                      {item.content}
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
            }}
          >
            <Box sx={{ alignItems: 'center' }}>
              <Typography
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
                  my: '20px',
                  pl: { md: '10px', lg: '40px' },
                  lineHeight: { xs: '17px', md: '30.4px' },
                  fontStyle: 'normal',
                  fontSize: { xs: '10px', sm: '12px', md: '16px' },
                  fontWeight: 400,
                  px: { xs: '13px' },
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
