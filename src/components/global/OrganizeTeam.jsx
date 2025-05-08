import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';

const OrganizeTeam = ({ data }) => {
  const { title_1, title_2, text, buttonText, link, images, styles } =
    data || {};

  const {
    mainBoxStyle,
    titleStyle,
    titleAndImagesBoxStyle,
    imagesBoxStyle,
    textStyle,
    imageStyle,
    buttonStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>
        {title_1}
        <Box sx={titleAndImagesBoxStyle}>
          <Box sx={imagesBoxStyle}>
            {images?.map(({ img, alt }, index) => (
              <Avatar key={index} alt={alt} src={img} sx={imageStyle(index)} />
            ))}
          </Box>
          {title_2}
        </Box>
      </Typography>
      <Typography sx={textStyle}>{text}</Typography>
      <Button sx={buttonStyle} onClick={() => window?.open(link, '_blank')}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default OrganizeTeam;
