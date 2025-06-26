import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const OutSourcingWork = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    cardTitleStyle,
    descriptionStyle,
    cardImageStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Grid container gap={1.5} justifyContent={'center'} maxWidth={'1300px'}>
        {cards?.map(({ title, description, image, maxWidth }, index) => (
          <Grid xs={12} md={5.5} key={index}>
            <Box sx={cardStyle}>
              <Typography sx={cardTitleStyle}>{title}</Typography>
              <Typography sx={descriptionStyle}>{description}</Typography>
              <Box
                src={image}
                component={'img'}
                sx={cardImageStyle(maxWidth)}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OutSourcingWork;
