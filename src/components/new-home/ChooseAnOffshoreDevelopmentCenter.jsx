'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FlaxibleSlider from './FlexibleSlider';

const ChooseAnOffshoreDevelopmentCenter = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
    cardDescriptionStyle,
    slideStyle,
  } = styles || {};

  const ODCCard = ({ title, image, description, extraSx = {} }) => (
    <Box
      sx={{
        ...cardStyle,
        ...extraSx,
      }}
    >
      <Box component="img" src={image} sx={imageStyle} />
      <Typography sx={cardTitleStyle}>{title}</Typography>
      <Typography sx={cardDescriptionStyle}>{description}</Typography>
    </Box>
  );

  return (
    <Box sx={{ ...mainBoxStyle }} id="pricing-difference">
      {title && (
        <Typography variant="h4" fontWeight="bold" sx={titleStyle}>
          {title}
        </Typography>
      )}
      <Grid
        gap={3.5}
        container
        width="95%"
        maxWidth="1400px"
        justifyContent="center"
      >
        {cards?.map(({ title, image, description }, index) => (
          <ODCCard
            key={index}
            title={title}
            image={image}
            description={description}
          />
        ))}
        <FlaxibleSlider
          data={cards}
          isDisplay={true}
          slideStyle={slideStyle}
          card={(title, image, description) => (
            <ODCCard
              title={title}
              image={image}
              description={description}
              extraSx={{ display: { xs: 'flex', md: 'none' } }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default ChooseAnOffshoreDevelopmentCenter;
