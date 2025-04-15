import {
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  gridStyles,
  buttonStyles,
  gridButtonStyles,
} from '@/components/wiki/WikiFilterStyles';

const WikiFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const isSmallScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down('xs')
  );
  const isMediumScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme?.breakpoints?.up('lg'));

  return (
    <Container>
      <Grid container sx={gridStyles}>
        <Button
          size={
            isSmallScreen
              ? 'small'
              : isMediumScreen
                ? 'medium'
                : isLargeScreen
                  ? 'large'
                  : 'medium'
          }
          onClick={() => onSelectCategory(null)}
          variant={selectedCategory === null ? 'contained' : ''}
          color="primary"
          sx={gridButtonStyles}
        >
          <Typography
            fontSize={{
              xs: '10px',
              sm: '12px',
              md: '15px',
              lg: '20px',
            }}
            color={selectedCategory === null ? 'white' : '#001C63'}
            fontWeight="600"
            variant="body1"
          >
            All
          </Typography>
        </Button>
        {categories?.map((category, index) => (
          <Button
            key={index}
            onClick={() => onSelectCategory(category)}
            variant={selectedCategory === category ? 'contained' : ''}
            color="primary"
            sx={buttonStyles}
          >
            <Typography
              fontSize={{
                xs: '10px',
                sm: '12px',
                md: '15px',
                lg: '20px',
              }}
              color={selectedCategory === category ? 'white' : '#001C63'}
              fontWeight="600"
              variant="body1"
            >
              {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
            </Typography>
          </Button>
        ))}
      </Grid>
    </Container>
  );
};

export default WikiFilter;
