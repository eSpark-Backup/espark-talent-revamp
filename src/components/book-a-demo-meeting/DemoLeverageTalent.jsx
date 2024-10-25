'use client';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import CustomSectionSlider from '../hire-developer/CustomSectionSlider';

const DemoLeverageTalent = ({ data }) => {
  const { title, descrcipton, items, styles } = data;
  const {
    typographyBoxStyle,
    titleTypographyStyle,
    descriptionTypographyStyle,
    leverageTalentSliderStyles,
  } = styles;
  const titleBoxStyle = { display: 'flex', justifyContent: 'center' };
  const containerBoxStyle = {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
  };
  return (
    <Container>
      <Box sx={containerBoxStyle}>
        <Box sx={titleBoxStyle}>
          <Box sx={typographyBoxStyle}>
            <Typography
              sx={titleTypographyStyle}
              dangerouslySetInnerHTML={{
                __html: `${title || ''}`,
              }}
            />
            <Typography sx={descriptionTypographyStyle}>
              {descrcipton || ''}
            </Typography>
          </Box>
        </Box>
        <CustomSectionSlider
          items={items}
          customSectionSliderStyles={leverageTalentSliderStyles}
        />
      </Box>
    </Container>
  );
};

export default DemoLeverageTalent;
