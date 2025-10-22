'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FlaxibleSlider from './FlexibleSlider';
import Image from 'next/image';
const ExpertDeveloper = ({ data }) => {
  const { title, text, cards, styles, icon } = data || {};

  const {
    top,
    mainBoxStyle,
    gridStyle,
    slideStyle,
    cardDescriptionStyle,
    cardStyle,
    cardTitleStyle,
    textStyle,
    titleStyle,
    imageStyle,
    iconStyle,
    titleAndTextBoxStyle,
  } = styles || {};

  const ODCCard = ({ title, image, description, extraSx = {} }) => (
    <Grid xs={12} sm={12} md={gridStyle?.md}>
      <Box sx={{ ...cardStyle, ...extraSx }}>
        {top ? <Typography sx={cardTitleStyle}>{title}</Typography> : null}
        <Box component={'img'} src={image} sx={imageStyle} />
        {top ? null : <Typography sx={cardTitleStyle}>{title}</Typography>}
        <Typography
          sx={cardDescriptionStyle}
          dangerouslySetInnerHTML={{ __html: description || '' }}
        />
      </Box>
    </Grid>
  );

  return (
    <Box sx={mainBoxStyle} id="pricing-difference">
      <Box
        sx={{
          width: '90%',
          maxWidth: '1200px',
          display: 'flex',
          gap: 0.5,
        }}
      >
        <Box sx={iconStyle}>
          <Image src={icon} alt="icon" objectFit="contain" fill />
        </Box>
        <Box sx={titleAndTextBoxStyle}>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={textStyle}>{text}</Typography>
        </Box>
      </Box>
      <Grid
        container
        justifyContent={'center'}
        maxWidth={'1300px'}
        sx={{ gap: { md: 2.8 } }}
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
              image={image}
              title={title}
              description={description}
              extraSx={{ display: { xs: 'flex', md: 'none' } }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default ExpertDeveloper;
