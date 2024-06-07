import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const BenefitCrewCard = ({ benefit, index }) => {
  return (
    <Grid key={index} sx={{ padding: '20px' }} item xs={12} sm={6} md={4}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="10px"
        sx={{
          backgroundColor: '#E8F4FF66',
          padding: '10px',
          border: '0.67px solid #0000004D',
          borderRadius: '3.34px',
        }}
        className="benifits-card"
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: '30px',
            borderRadius: '50%',
            padding: '7px',
          }}
        >
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
