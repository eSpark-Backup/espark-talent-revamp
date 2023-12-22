import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

import { ACHIEVEMENTS_DATA } from '@/constants/home-page/achievement-awards';

const AchievementAwards = () => {
  return (
    <>
      <Box sx={{ background: '#F7F8FB', py: '2.5%' }}>
        <Container sx={{ px: '40%' }}>
          <Box sx={{ pb: '30px' }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{ textAlign: 'center' }}
            >
              {ACHIEVEMENTS_DATA?.title}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={2} />
            {ACHIEVEMENTS_DATA.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={item.image}
                  height={150}
                  width={150}
                  alt={item.alt}
                />
              </Grid>
            ))}
            <Grid item xs={2} />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AchievementAwards;
