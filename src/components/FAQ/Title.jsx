import { Box, Typography } from '@mui/material';
import { titleStyles } from '@/components/faq/titleStyles';

const Title = ({ title }) => {
  return (
    <Box>
      <Typography sx={titleStyles}>{title}</Typography>
    </Box>
  );
};

export default Title;
