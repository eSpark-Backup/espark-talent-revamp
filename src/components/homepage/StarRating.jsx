import { Box } from '@mui/material';

const StarRating = ({ stars }) => {
  const ratings = [1, 2, 3, 4, 5];
  const brigthStar = 'bright-star';
  const darkStar = 'dark-star';

  const conditionalRating = (rating, stars, brigthStar, darkStar) => {
    return rating <= stars ? brigthStar : darkStar;
  };

  const renderRating = (rating, index) => (
    <Box
      key={index}
      component={'img'}
      sx={{
        width: { xs: '15px', md: '20px' },
        height: { xs: '15px', md: '20px' },
      }}
      alt="rating_img"
      src={`/images/homepage/our-clients/${conditionalRating(rating, stars, brigthStar, darkStar)}.svg`}
    />
  );

  return (
    <>
      <Box sx={{ display: 'inline-flex', gap: 0.7 }}>
        {ratings?.map(renderRating)}
      </Box>
    </>
  );
};

export default StarRating;
