'use client';
import dynamic from 'next/dynamic';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
const PricingStrip = dynamic(() => import('./PricingStrip'));

export default function PricingBenifits({ data }) {
  const textStyles = {
    fontSize: { xs: '25px', sm: '30px', md: '34px', lg: '39px' },
    fontWeight: 600,
    textAlign: 'center',
    mb: '5px',
  };

  const FlexBox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    py: 7,
    px: 1,
  };

  return (
    <>
      <Container sx={{ px: { xs: '24px', lg: '0px !important' } }}>
        <Stack sx={{ ...FlexBox }}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h3" sx={textStyles} color="secondary">
              {`Want more? We'll get you more.`}
            </Typography>
            <Typography
              color="secondary"
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '15px',
                  md: '17px',
                  lg: '21px',
                },
                fontWeight: 300,
                textAlign: 'center',
                mb: '20px',
                mx: { xs: 2, md: 'auto' },
                maxWidth: { xs: '100%', md: '600px', lg: '100%' },
              }}
            >
              {
                'We’re on a mission to simplify every aspect of building and managing a global team.'
              }
            </Typography>
            <Grid container spacing={2}>
              {data.featured?.map((feature, index) => {
                return (
                  <PricingStrip key={index} feature={feature} index={index} />
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
