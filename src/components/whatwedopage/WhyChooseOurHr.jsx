import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import WhyChooseOurHrSlider from './WhyChooseOurHrSlider';

const WhyChooseOurHr = ({ data }) => {
  return (
    <Box sx={{ my: '4%' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box sx={{ mt: { md: 2, lg: 3 }, px: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#001C63',
                  fontSize: { md: '32px', xs: '20px' },
                  fontWeight: { xs: 700, sm: 600 },
                  lineHeight: { md: '42.289px', xs: '27px' },
                  textAlign: { xs: 'center', md: 'left' },
                  pt: { xs: '10px', lg: '15px' },
                  py: { xs: '10px' },
                  px: { xs: '30px', sm: '0' },
                  pr: { md: '5px' },
                }}
              >
                {data?.title}
              </Typography>
              <Typography
                sx={{
                  color: '#001C63',
                  fontSize: { lg: '18px', md: '18px', sm: '11px', xs: '10px' },
                  fontWeight: { xs: 700, md: 400 },
                  lineHeight: { lg: '31.863px', md: '22px', xs: '20px' },
                  pr: { md: '10px', lg: '80px' },
                  px: { xs: '5px', sm: '0' },
                  textAlign: { xs: 'center', md: 'justify' },
                }}
              >
                {data?.paragraph}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <WhyChooseOurHrSlider data={data} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseOurHr;
