'use client';

import dynamic from 'next/dynamic';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import {
  BenifitsContainer,
  pricingBenifitsHeading,
  pricingBenifitsSubHeading,
  containerStyle,
  boxStyle,
} from '@/components/pricing/PricingCardStyles';
const PricingStrip = dynamic(() => import('@/components/pricing/PricingStrip'));

export default function PricingBenifits({ data }) {
  return (
    <>
      <Container sx={containerStyle}>
        <Stack sx={BenifitsContainer}>
          <Box sx={boxStyle}>
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
