import { Box, Stack, Typography } from '@mui/material';
import {
  indexStyle,
  indexBoxStyle,
  titleStyles,
  descStyles,
  stackStyles,
} from '@/components/Join-espark-crew/KeyPointCrewCardStyles';

const KeyPointCrewCard = ({ KEYS, key, title, desc, index }) => {
  return (
    <Stack
      key={key}
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      gap="10px"
      sx={stackStyles(index, KEYS)}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme?.palette?.primary?.main,
          ...indexBoxStyle(index, KEYS),
        }}
      >
        <Typography
          sx={indexStyle}
          lineHeight={1.6}
          textAlign="center"
          fontWeight={700}
          color="#fff"
        >
          {index + 1}
        </Typography>
      </Box>

      <Typography sx={descStyles}>
        <span style={titleStyles}>{title}</span>
        {desc}
      </Typography>
    </Stack>
  );
};

export default KeyPointCrewCard;
