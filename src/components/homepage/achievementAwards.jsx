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
        <Container>
          <Box sx={{ pb: '30px' }}>
            <Typography
              variant="h2"
              color="secondary"
              
              sx={{ textAlign: 'center',flexWrap: 'wrap'  }}
            >
              {ACHIEVEMENTS_DATA?.title}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={2} md={12} sm={12} xs={12} />
            {ACHIEVEMENTS_DATA.items.map((item, index) => (
              <Grid
                key={index}
                item
                xs={6}
                md={3}
                lg={2}
                xl={2}
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
            <Grid item lg={2} md={12} sm={12} xs={12} />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AchievementAwards;
