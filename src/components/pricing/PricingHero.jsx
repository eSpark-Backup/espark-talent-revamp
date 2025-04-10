import { Box } from '@mui/material';
import PricingCard from './PricingCard';

const PricingHero = ({ data, handleOpen }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(180deg, #029894 21.1%, #023A39 158.47%)',
          height: `100%`,
          color: '#fff',
          mb: 10,
        }}
      >
        <PricingCard data={data} handleOpen={handleOpen} />
      </Box>
    </>
  );
};

export default PricingHero;
