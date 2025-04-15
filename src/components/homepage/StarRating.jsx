import { Box } from '@mui/material';
import {
  ratimgImageBoxStyles,
  ratimgImageStyles,
} from '@/components/homepage/StarRatingStyles';

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
      sx={ratimgImageStyles}
      alt="rating_img"
      src={`/images/homepage/our-clients/${conditionalRating(rating, stars, brigthStar, darkStar)}.svg`}
    />
  );

  return (
    <>
      <Box sx={ratimgImageBoxStyles}>{ratings?.map(renderRating)}</Box>
    </>
  );
};

export default StarRating;
