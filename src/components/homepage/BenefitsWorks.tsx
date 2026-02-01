'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const BenefitsWorks = ({ data }) => {
  const { items, title, paragraph, vectorImages, styles } = data || {};
  const {
    mainBoxStyle,
    titleBoxStyle,
    titleStyle,
    paragraphStyle,
    gridContainerStyle,
    gridItemStyle,
    itemBoxStyle,
    iconStyle,
    itemParagraphStyle,
    imageStyles,
  } = styles || {};

  const renderImage = (_vector, index) => (
    <Box
      alt=""
      key={index}
      src={_vector || '/'}
      sx={imageStyles[index]}
      component={'img'}
    />
  );

  const renderItem = (item, index) => (
    <Grid key={index} item xs={12} sm={12} md={5} sx={gridItemStyle}>
      <Box sx={itemBoxStyle}>
        <Box
          component={'img'}
          src={item?.icon}
          alt={item?.title}
          sx={iconStyle}
        />
        <Typography
          color="#000"
          sx={itemParagraphStyle}
          dangerouslySetInnerHTML={{ __html: item?.paragraph }}
        />
      </Box>
    </Grid>
  );

  return (
    <>
      <Box sx={mainBoxStyle}>
        <Container>
          <Box sx={titleBoxStyle}>
            <Typography variant="h2" sx={titleStyle}>
              {title}
            </Typography>
            <Typography
              component={'p'}
              sx={paragraphStyle}
              danggerouslySetInnerHTML={{ __html: paragraph }}
            />
          </Box>
          <Grid container spacing={[5, 6, 2, 2]} sx={gridContainerStyle}>
            {vectorImages?.map(renderImage)}
            {items?.map(renderItem)}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BenefitsWorks;
