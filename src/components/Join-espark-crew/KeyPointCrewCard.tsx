import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const KeyPointCrewCard = ({ KEYS, key, title, desc, index }) => {
  return (
    <Stack
      key={key}
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="10px"
      sx={{
        marginBottom: index !== KEYS.length - 1 ? '20px' : '0px',
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: '50%',
          padding: '7px',
          position: 'relative',
          ':after': {
            content: '" "',
            position: 'absolute',
            top: '40px',
            left: '22px',
            backgroundColor: '#029894',
            width: { xs: '0px', sm: '2px' },
            height: index !== KEYS.length - 1 ? '50px' : '0px',
          },
        }}
      >
        <Typography
          sx={{ width: '30px', height: '30px' }}
          lineHeight={1.6}
          textAlign="center"
          fontWeight={700}
          color="#fff"
        >
          {index + 1}
        </Typography>
      </Box>

      <Typography
        mt="5px"
        lineHeight={1.65}
        fontWeight={500}
        fontSize={{
          xs: '12px',
          sm: '12px',
          md: '16px',
          lg: '18px',
          xl: '18px',
        }}
        color="secondary"
      >
        <span style={{ fontWeight: 700, color: '#001C63' }}>{title}</span>
        {desc}
      </Typography>
    </Stack>
  );
};

export default KeyPointCrewCard;
