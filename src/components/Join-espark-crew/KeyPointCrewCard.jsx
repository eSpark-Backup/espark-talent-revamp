import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  stackStyle,
  descSpanStyle,
  descStyle,
  counterStyle,
} from '@/constants/keypoint-crewcard';

const KeyPointCrewCard = ({ KEYS, key, title, desc, index }) => {
  return (
    <Stack
      key={key}
      direction={{ xs: 'column', sm: 'row' }}
      sx={stackStyle}
      style={{ marginBottom: index !== KEYS.length - 1 ? '20px' : '0px' }}
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
        <Typography sx={counterStyle}>{index + 1}</Typography>
      </Box>

      <Typography SX={descStyle}>
        <span style={descSpanStyle}>{title}</span>
        {desc}
      </Typography>
    </Stack>
  );
};

export default KeyPointCrewCard;
