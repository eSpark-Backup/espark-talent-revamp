import { Grid, Stack, Typography } from '@mui/material';
import {
  gridStyles,
  stackStyles,
  indexStyle,
} from '@/components/Join-espark-crew/AboutCrewCardStyles';
const AboutCrewCard = ({ point, index }) => {
  return (
    <Grid sx={gridStyles(index)} padding="10px" key={point} sm={12} md={6} item>
      <Stack
        direction={{
          sm: 'row',
          md: index % 2 === 0 ? 'row-reverse' : 'row',
        }}
        justifyContent="flex-start"
        alignItems="center"
        gap="20px"
        sx={stackStyles(index)}
      >
        <Typography
          sx={indexStyle}
          color="secondary"
          fontSize={18}
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
