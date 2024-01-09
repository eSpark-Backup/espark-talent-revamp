import React from 'react';
import {
  Container,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';

const WikiFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  return (
    <Container>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          pt: '5%',
          gap: 2,
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
            variant="body1"
            color={selectedCategory === null ? 'white' : '#001C63'}
            fontWeight="600"
          >
            All
          </Typography>
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelectCategory(category)}
            variant={selectedCategory === category ? 'contained' : ''}
            color="primary"
            sx={{ borderRadius: '50px', fontWeight: 600 }}
          >
            <Typography
              variant="body1"
              color={selectedCategory === category ? 'white' : '#001C63'}
              fontWeight="600"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>
          </Button>
        ))}
      </Grid>
    </Container>
  );
};

export default WikiFilter;
