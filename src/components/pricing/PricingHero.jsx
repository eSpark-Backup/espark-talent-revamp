import { Box } from '@mui/material';
import PricingCard from '@/components/pricing/PricingCard';
import { pricingCardBoxStyle } from '@/components/pricing/PricingHeroStyles';

const PricingHero = ({ data, handleOpen }) => {
  return (
    <>
      <Box sx={pricingCardBoxStyle}>
        <PricingCard data={data} handleOpen={handleOpen} />
      </Box>
    </>
  );
};

export default PricingHero;
