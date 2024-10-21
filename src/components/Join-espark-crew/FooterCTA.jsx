import { Box, Button, Stack, Typography } from '@mui/material';
import {
  JOINT_ESPARK_CREW_HEADING_DATA,
  footerStackStyle,
  footerSubStackStyle,
  footerSecHeadingStyle,
  footerSecDescriptionStyle,
  footerSecButtonBoxStyle,
  footerSecButtonStyle,
} from '@/constants/join-espark-crew';

const FooterCTA = ({ handleClick }) => {
  const { footerSecHeading, footerSecDescription, jointusSecHeading } =
    JOINT_ESPARK_CREW_HEADING_DATA;

  return (
    <Stack sx={footerStackStyle}>
      <Stack sx={footerSubStackStyle}>
        <Typography variant="h2" sx={footerSecHeadingStyle}>
          {footerSecHeading}
        </Typography>
        <Typography sx={footerSecDescriptionStyle}>
          {footerSecDescription}
        </Typography>

        <Box sx={footerSecButtonBoxStyle}>
          <Button onClick={handleClick} sx={footerSecButtonStyle}>
            {jointusSecHeading}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default FooterCTA;
