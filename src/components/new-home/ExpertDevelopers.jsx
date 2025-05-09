import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ExpertDeveloper = ({ data }) => {
  const { title, text, cards, styles, icon } = data || {};

  const {
    mainBoxStyle,
    cardDescriptionStyle,
    cardStyle,
    cardTitleStyle,
    textStyle,
    titleStyle,
    imageStyle,
    iconStyle,
    titleAndTextBoxStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box
        sx={{
          width: '90%',
          maxWidth: '1200px',
          display: 'flex',
          gap: 0.5,
        }}
      >
        <Box sx={iconStyle}>
          <img src={icon} alt="Icon" objectFit="contain" />
        </Box>
        <Box sx={titleAndTextBoxStyle}>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={textStyle}>{text}</Typography>
        </Box>
      </Box>

      <Grid container justifyContent={'center'} maxWidth={'1300px'} gap={2.8}>
        {cards?.map(({ title, image, description }, index) => (
          <Grid xs={12} sm={12} md={4.5} key={index}>
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

export default ExpertDeveloper;
