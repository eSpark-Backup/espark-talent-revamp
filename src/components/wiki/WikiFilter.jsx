import {
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';

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
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          pt: '5%',
          gap: {
            xs: 1,
            sm: 1,
            md: 1.5,
            lg: 2,
          },
        }}
      >
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
          sx={{ borderRadius: '50px' }}
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
            sx={{ borderRadius: '50px', fontWeight: 600 }}
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
