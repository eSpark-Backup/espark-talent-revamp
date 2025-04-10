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

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
