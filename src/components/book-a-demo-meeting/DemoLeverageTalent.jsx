'use client';

import { Box, Container, Typography } from '@mui/material';
import CustomSectionSlider from '@/components/hire-developer/CustomSectionSlider';
import {
  containerStyle,
  centerBoxStyle,
} from '@/components/book-a-demo-meeting/DemoLeverageTalentStyles';

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
      <Box sx={containerStyle}>
        <Box sx={centerBoxStyle}>
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
