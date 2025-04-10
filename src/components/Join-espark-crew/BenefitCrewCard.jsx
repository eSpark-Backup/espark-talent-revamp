import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const BenefitCrewCard = ({ benefit, index }) => {
  return (
    <Grid key={index} sx={{ padding: '20px' }} item xs={12} sm={6} lg={4}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="10px"
        sx={{
          backgroundColor: '#E8F4FF66',
          padding: { xs: '8px', md: '10px' },
          border: '0.67px solid #0000004D',
          borderRadius: '3.34px',
        }}
        className="benifits-card"
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme?.palette?.primary?.main,
            minWidth: '35px',
            maxWidth: '35px',
            borderRadius: '50%',
            height: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
