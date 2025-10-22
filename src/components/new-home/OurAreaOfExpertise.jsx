import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const OurAreaOfExpertise = ({ data }) => {
  const { title, text, cards, styles } = data || {};

  const {
    mainBoxStyle,
    titleStyle,
    textStyle,
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
      <Typography sx={textStyle}>{text}</Typography>
      <Grid
        container
        justifyContent={'center'}
        maxWidth={'1300px'}
        gap={2.8}
        pt={0.5}
      >
        {cards?.map(({ title, image, description }, index) => (
          <Grid xs={10.5} sm={10} md={5.2} key={index}>
            <Box sx={cardStyle}>
              <Box component={'img'} src={image} sx={imageStyle} />
              <Typography sx={cardTitleStyle}>{title}</Typography>
              <Typography
                sx={cardDescriptionStyle}
                dangerouslySetInnerHTML={{ __html: description || '' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurAreaOfExpertise;
