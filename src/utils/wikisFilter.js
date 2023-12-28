import React from 'react';
import {
  Container,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@mui/material';



const WikisFilter = ({ categories, selectedCategory, onSelectCategory }) => (
  <Container>
    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end', pt: '5%', gap: 2 }}>
      <Button onClick={() => onSelectCategory(null)} variant={selectedCategory === null ? 'contained' : 'outlined'} color="primary" sx={{ borderRadius: '50px', fontWeight:600 }}>
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onSelectCategory(category)}
          variant={selectedCategory === category ? 'contained' : 'outlined'}
          color="primary"
          sx={{ borderRadius: '50px' , fontWeight:600}}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </Grid>
  </Container>
);

export default WikisFilter;

