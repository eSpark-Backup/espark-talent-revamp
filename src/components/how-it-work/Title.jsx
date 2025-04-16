import { Box, Typography } from '@mui/material';
import {
  boxStyle,
  headingStyle,
  subHeadingStyle,
} from '@/components/how-it-work/HowitsWorkTitle';

const Title = ({ heading, subHeading, variant }) => {
  return (
    <Box sx={boxStyle}>
      <Typography variant={variant} sx={headingStyle}>
        {heading}
      </Typography>
      <Typography sx={subHeadingStyle}>{subHeading}</Typography>
    </Box>
  );
};

export default Title;
