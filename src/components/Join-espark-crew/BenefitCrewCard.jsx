import { Box, Grid, Stack, Typography, CircularProgress } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {
  benefitStackStyle,
  benefitIconStyle,
  greenLoaderStyle,
} from '@/constants/join-espark-crew';

const BenefitCrewCard = ({ benefit, index }) => {
  if (!benefit || benefit.length === 0) {
    return (
      <Grid key={index} sx={greenLoaderStyle} item xs={12} sm={6} lg={4}>
        <CircularProgress sx={{ color: '#029894' }} />
      </Grid>
    );
  }
  return (
    <Grid key={index} sx={{ padding: '20px' }} item xs={12} sm={6} lg={4}>
      <Stack direction="row" sx={benefitStackStyle} className="benifits-card">
        <Box sx={benefitIconStyle}>
          <Image
            width={20}
            height={20}
            src="/images/join-crew/tick.png"
            alt="check"
          />
        </Box>
        <Typography variant="subtitle2" color="secondary">
          {benefit}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default BenefitCrewCard;
