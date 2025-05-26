import React from 'react';
import { Box, Typography } from '@mui/material';

const EasySteps = ({ data }) => {
  const { title, description, image, styles } = data || {};

  const {
    mainBoxStyle,
    imageBoxStyle,
    descriptionStyle,
    titleStyle,
    titleAndDescriptionBoxStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={imageBoxStyle}>
        <Box
          src={image}
          component={'img'}
          sx={{ width: 'auto', height: 'auto' }}
        />
      </Box>
      <Box sx={titleAndDescriptionBoxStyle}>
        <Typography
          sx={titleStyle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography sx={descriptionStyle}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default EasySteps;
