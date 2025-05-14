import React from 'react';
import { Box, Typography } from '@mui/material';
const HighStakesProjects = ({ data }) => {
  const { title, description, description2, description3, image, styles } =
    data || {};
  const {
    mainBoxStyle,
    imageBoxStyle,
    descriptionStyle,
    titleStyle,
    titleAndDescriptionBoxStyle,
    containerStyle,
  } = styles || {};

  return (
    <Box sx={containerStyle}>
      <Box sx={mainBoxStyle}>
        <Box sx={titleAndDescriptionBoxStyle}>
          <Typography
            sx={titleStyle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Box>
            <Typography sx={descriptionStyle}>{description}</Typography>
            <Typography sx={descriptionStyle}>{description2}</Typography>
            <Typography sx={descriptionStyle}>{description3}</Typography>
          </Box>
        </Box>
        <Box sx={imageBoxStyle}>
          <Box
            src={image}
            component={'img'}
            sx={{ width: 'auto', height: '100%', objectFit: 'contain' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HighStakesProjects;
