import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import {
  gridStyle,
  stackStyle,
  boxStyle,
} from '@/components/Join-espark-crew/BenefitCrewCardStyles';
const BenefitCrewCard = ({ benefit, index }) => {
  return (
    <Grid key={index} sx={gridStyle} item xs={12} sm={6} lg={4}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="10px"
        sx={stackStyle}
        className="benifits-card"
      >
        <Box sx={boxStyle}>
          <Image
            width={20}
            height={20}
            src="/images/join-crew/tick.png"
            alt="check"
          />
        </Box>
        <Typography variant="subtitle2" color="secondary">
          {benefit}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default BenefitCrewCard;
