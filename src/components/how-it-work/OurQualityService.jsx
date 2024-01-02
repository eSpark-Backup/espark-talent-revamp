import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const OurQualityService = ({ ourQualityService }) => {
  const { card, heading, subHeading } = ourQualityService;
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Grid container spacing={2}>
              {card?.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box
                    sx={{
                      border: '1px solid #E5E5E5',
                      borderRadius: '5px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      alignContent: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ textAlign: 'center', fontWeight: 600 }}
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
              display: 'flex',
              justifyContent: { lg: 'right', xs: 'center' },
            }}
          >
            <Box sx={{ width: '80%', alignItems: 'center' }}>
              <Typography
                variant="h2"
                color="secondary"
                sx={{ textAlign: 'right', flexWrap: 'wrap', lineHeight: '56px', fontSize: '32px', fontWeight: 700 }}
              >
                {heading}
              </Typography>
              <Typography
                variant="body1"
                color="secondary"
                sx={{ textAlign: 'right', my: '20px', lineHeight: '30.4px', fontSize: '16px', fontWeight: 400 }}
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
