import { Box, Grid, Stack, Typography } from '@mui/material';
import { pricingStripe } from '@/components/pricing/PricingCardStyles';

const PricingStrip = ({ key, feature, index }) => {
  const {
    pricingStripStackStyle,
    pricingStripGrid,
    stripImageStyle,
    stripeTypographyBoxStyle,
    stripeTitleStyle,
    stripeDiscriptionStyle,
  } = pricingStripe(index);

  return (
    <Grid sx={pricingStripGrid} key={key} xs={12} md={6} item>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        gap="5px"
        sx={pricingStripStackStyle}
      >
        <Box
          component={'img'}
          src={feature.icon}
          sx={stripImageStyle}
          alt="icon"
        />
        <Box sx={stripeTypographyBoxStyle}>
          <Typography
            color="secondary"
            fontSize={{ xs: '13px', sm: '15px', md: '21px', lg: '27px' }}
            fontWeight={600}
            sx={stripeTitleStyle}
          >
            {feature?.title}
          </Typography>
          <Typography
            color="secondary"
            fontSize={{ xs: '8px', sm: '11px', md: '15px', lg: '17px' }}
            fontWeight={400}
            textAlign={{ xs: index % 2 !== 0 ? 'left' : 'right' }}
            sx={stripeDiscriptionStyle}
          >
            {feature?.description}
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default PricingStrip;
