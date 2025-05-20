import React from 'react';
import { Box, Typography } from '@mui/material';
const HighStakesProjects = ({ data }) => {
  const { title, description, description2, image, styles } = data || {};

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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography sx={descriptionStyle}>{description}</Typography>
            <Typography sx={descriptionStyle}>{description2}</Typography>
          </Box>
        </Box>
        <Box sx={imageBoxStyle}>
          <Box
            sx={{ width: 'auto', height: '100%', objectFit: 'contain' }}
            component={'img'}
            src={image}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HighStakesProjects;
