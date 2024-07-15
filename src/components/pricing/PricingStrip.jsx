import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const PricingStrip = ({ key, feature, index }) => {
  return (
    <Grid
      sx={{
        width: '100%',
        justifyContent: 'flex-end',
        display: { sm: 'inline-block', md: index === 0 && 'flex' },
        '@media (max-width: 899px)': {
          order: (index === 1 && 3) || (index === 3 && 3),
          flexBasis: '100%',
          maxWidth: '100%',
          justifyContent: 'center',
          display: 'flex',
        },
      }}
      key={key}
      xs={12}
      md={6}
      item
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        gap="5px"
        sx={{
          width: '100%',
          maxWidth: {
            xs: index === 0 || index === 1 ? '571px' : '625px',
          },
          padding: '10px',
          boxShadow: '0px 4px 25.2px 0px #0000001F',
          borderRadius: '5px',
          position: 'relative',
          minHeight: { xs: '60px', sm: '90px', md: '110px', lg: '115px' },
          maxHeight: { xs: '90px', sm: 'auto', md: '110px', lg: '115px' },
          flexDirection: {
            xs: index % 2 === 0 ? 'row-reverse' : 'row',
          },
          ':after': {
            content: '" "',
            width: { xs: '5px', md: '5px' },
            height: '100%',
            position: 'absolute',
            top: '0px',
            backgroundColor: '#029894',
            borderRadius: '5px',
            py: 2,
          },
          '@media (max-width: 899px)': {
            mx: index === 0 || (index === 2 && 'auto'),
            mr: index !== 3 ? 'auto' : null,
            ml: index !== 1 ? 'auto' : null,
            maxWidth: index === 0 || index === 2 ? '82%' : '91%',
            flexDirection:
              (index === 1 && 'row-reverse') || (index === 2 && 'row'),
            ':after': {
              [index === 2 || index === 3 ? 'left' : 'right']: '0px !important',
            },
          },
          '@media (min-width: 900px)': {
            ':after': {
              content: '" "',
              width: { xs: '5px', md: '5px' },
              height: '100%',
              position: 'absolute',
              top: '0px',
              [index % 2 !== 0 ? 'left' : 'right']: '0px',
              backgroundColor: '#029894',
              borderRadius: '5px',
              py: 2,
            },
          },
        }}
      >
        <Box
          component={'img'}
          src={feature.icon}
          sx={{
            width: { xs: '24px', sm: '33px', md: '44px', lg: '55px' },
            mx: 1.5,
            height: 'auto',
          }}
          alt="asdasd"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pl: { xs: 0, lg: index % 2 !== 0 ? 0 : 3 },
          }}
        >
          <Typography
            color="secondary"
            fontSize={{ xs: '13px', sm: '15px', md: '21px', lg: '27px' }}
            fontWeight={600}
            sx={{
              '@media (min-width: 900px)': {
                textAlign: index % 2 !== 0 ? 'left' : 'right',
              },
              '@media (max-width: 899px)': {
                textAlign: index === 2 || index === 3 ? 'left' : 'right',
              },
            }}
          >
            {feature?.title}
          </Typography>
          <Typography
            color="secondary"
            fontSize={{ xs: '8px', sm: '11px', md: '15px', lg: '17px' }}
            fontWeight={400}
            textAlign={{ xs: index % 2 !== 0 ? 'left' : 'right' }}
            sx={{
              '@media (min-width: 900px)': {
                textAlign: index % 2 !== 0 ? 'left' : 'right',
              },
              '@media (max-width: 899px)': {
                textAlign: index === 2 || index === 3 ? 'left' : 'right',
              },
            }}
          >
            {feature?.description}
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default PricingStrip;
