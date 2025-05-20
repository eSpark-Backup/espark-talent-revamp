'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Doorstep = ({ data }) => {
  const {
    subTitle,
    title,
    image,
    leftDesignImage,
    rightDesignImage,
    expertise,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    subTitleAndTitleBoxStyle,
    subTitleStyle,
    titleStyle,
    parentBoxStyle,
    leftDesignStyle,
    rightDesignStyle,
    expertiseAndLogoBoxStyle,
    expertiseBoxStyle,
    expertiseCardStyle,
    expertiseTextBoxStyle,
    leftExpertiseFirstIconStyle,
    expertiseTextStyle,
    leftExpertiseLastIcon,
    firstVectorStyle,
    secondVectorStyle,
    thirdVectorStyle,
    logoOuterBoxStyle,
    logoInnerBoxStyle,
    rightExpertiseFirstIconStyle,
    rightExpertiseLastIconStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={subTitleAndTitleBoxStyle}>
        <Typography sx={subTitleStyle}>{subTitle}</Typography>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>
      <Box sx={parentBoxStyle}>
        <Box component={'img'} src={leftDesignImage} sx={leftDesignStyle} />
        <Box sx={expertiseAndLogoBoxStyle}>
          <Box sx={expertiseBoxStyle}>
            {expertise?.slice(0, 3)?.map(({ text, icon }, index) => (
              <Box
                key={index}
                sx={{
                  ...expertiseCardStyle,
                  ml: { md: index === 1 ? -13 : 0 },
                  '@media(min-width: 769px) and (max-width:1023px)': {
                    ml: index === 1 ? -3 : 13,
                    width: index === 1 ? '75%' : '75%',
                  },
                }}
              >
                <Box sx={expertiseTextBoxStyle}>
                  <Box
                    component={'img'}
                    src={icon}
                    sx={leftExpertiseFirstIconStyle}
                  />
                  <Typography sx={expertiseTextStyle}>{text}</Typography>
                  <Box
                    component={'img'}
                    src={icon}
                    sx={leftExpertiseLastIcon}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          {[firstVectorStyle, secondVectorStyle, thirdVectorStyle]?.map(
            (vector, vectorIndex) => (
              <Box
                src={image}
                component={'img'}
                key={vectorIndex}
                sx={vector}
              />
            )
          )}
          <Box sx={logoOuterBoxStyle}>
            <Box sx={logoInnerBoxStyle}>
              <Box
                component={'img'}
                src="/images/loading-slider-img.png"
                sx={{ width: { md: '55px', lg: '65px' }, height: 'auto' }}
              />
            </Box>
          </Box>
          <Box sx={expertiseBoxStyle}>
            {expertise?.slice(3, 6)?.map(({ text, icon }, index) => (
              <Box
                key={index}
                sx={{
                  ...expertiseCardStyle,
                  mr: { md: index === 1 ? -13 : 0 },
                  '@media(min-width:769px) and (max-width:1023px)': {
                    mr: index === 1 ? -3 : 13,
                    width: index === 1 ? '75%' : '75%',
                  },
                }}
              >
                <Box sx={expertiseTextBoxStyle}>
                  <Box
                    component={'img'}
                    src={icon}
                    sx={rightExpertiseFirstIconStyle}
                  />
                  <Typography sx={expertiseTextStyle}>{text}</Typography>
                  <Box
                    component={'img'}
                    src={icon}
                    sx={rightExpertiseLastIconStyle}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box component={'img'} src={rightDesignImage} sx={rightDesignStyle} />
      </Box>
    </Box>
  );
};

export default Doorstep;
