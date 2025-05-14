import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const OffshoreDevelopmentCenter = ({ data }) => {
  const { title, text, cards, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
    cardDescriptionStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography variant="h4" fontWeight="bold" sx={titleStyle}>
        {title}
      </Typography>
      <Grid
        container
        justifyContent={'center'}
        maxWidth={'1600px'}
        gap={2}
      >
        {cards?.map(({ title, image, description }, index) => (
          <Grid xs={10.5} sm={10} md={4}  lg={3} key={index}>
            <Box sx={cardStyle}>
              <Box component={'img'} src={image} sx={imageStyle} />
              <Typography sx={cardTitleStyle}>{title}</Typography>
              <Typography sx={cardDescriptionStyle}>{description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OffshoreDevelopmentCenter;
