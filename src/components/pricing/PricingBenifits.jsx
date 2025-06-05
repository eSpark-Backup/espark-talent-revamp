'use client';
import dynamic from 'next/dynamic';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import {
  BenifitsContainer,
  pricingBenifitsHeading,
  pricingBenifitsSubHeading,
} from '@/constants/pricing/pricing';
const PricingStrip = dynamic(() => import('./PricingStrip'));

export default function PricingBenifits({ data }) {
  return (
    <>
      <Container sx={{ px: { xs: '24px', lg: '0px !important' } }}>
        <Stack sx={BenifitsContainer}>
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h3"
              sx={pricingBenifitsHeading}
              color="secondary"
            >
              {`Want more? We'll get you more.`}
            </Typography>
            <Typography color="secondary" sx={pricingBenifitsSubHeading}>
              {
                'We’re on a mission to simplify every aspect of building and managing a global team.'
              }
            </Typography>
            <Grid container spacing={2}>
              {data?.featured?.map((feature, index) => {
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
