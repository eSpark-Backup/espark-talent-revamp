import { Box, Typography } from '@mui/material';

const Title = ({ title }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          color: 'primary',
          lineHeight: '44px',
          textAlign: 'center',
          my: 4,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
