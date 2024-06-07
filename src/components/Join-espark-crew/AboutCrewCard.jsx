import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const AboutCrewCard = ({ point, index }) => {
  return (
    <Grid
      sx={{
        width: '100%',
        justifyContent: 'flex-end',
        display: { sm: 'inline-block', md: index === 0 && 'flex' },
      }}
      padding="10px"
      key={point}
      sm={12}
      md={6}
      item
    >
      <Stack
        direction={{
          sm: 'row',
          md: index % 2 === 0 ? 'row-reverse' : 'row',
        }}
        justifyContent="flex-start"
        alignItems="center"
        gap="20px"
        sx={{
          width: {
            sm: '100%',
            md: index === 0 || index === 1 ? '80%' : '100%',
          },
          padding: '10px',
          boxShadow: '0px 4px 25.2px 0px #0000001F',
          borderRadius: '7px',
          position: 'relative',
          minHeight: '95px',
          ':after': {
            content: '" "',
            width: { sm: '3px', md: '3px' },
            height: '100%',
            position: 'absolute',
            top: '0px',
            left: { sm: '0px', md: 'auto !important' },
            [index % 2 !== 0 ? 'left' : 'right']: '0px !important',
            backgroundColor: '#029894',
          },
        }}
      >
        <Typography
          sx={{ letterSpacing: '5px' }}
          color="secondary"
          fontSize={20}
          fontWeight={600}
        >
          0{index + 1}
        </Typography>
        <Typography
          color="secondary"
          fontSize={18}
          fontWeight={500}
          textAlign={{ xs: 'center', md: 'initial' }}
        >
          {point}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default AboutCrewCard;
