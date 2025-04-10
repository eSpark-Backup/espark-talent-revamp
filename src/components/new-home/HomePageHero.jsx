'use client';

import { Box, Button, Typography } from '@mui/material';
import { getAnimation, open } from '@/utils';

const HomePageHero = ({ data }) => {
  const {
    subTitle,
    title,
    animateText,
    description,
    responsiveImage,
    btnTitle,
    btnLink,
    bgImage,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    contentBoxStyle,
    topHorizontalLineStyle,
    subTitleStyle,
    titleStyle,
    animationTextStyle,
    descriptionBoxStyle,
    descriptionTextStyle,
    buttonBoxStyle,
    buttonStyle,
    bottomHorizontalLineStyle,
    bgImageStyle,
    responsiveImageStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={innerBoxStyle}>
        <Box sx={contentBoxStyle}>
          <Box component={'hr'} sx={topHorizontalLineStyle} />
          <Typography variant="h2" sx={subTitleStyle}>
            {subTitle || '#'}
          </Typography>
          <Typography variant="h1" sx={titleStyle}>
            {title || '#'}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              ...animationTextStyle,
              animation: `${getAnimation()} 1s infinite alternate`,
            }}
            className="typography-animate"
          >
            {animateText || '#'}
          </Typography>
          <Box sx={descriptionBoxStyle}>
            <Typography sx={descriptionTextStyle}>
              {description || ''}
            </Typography>
          </Box>
          <Box sx={buttonBoxStyle}>
            <Button
              onClick={() => open(btnLink, '_blank')}
              sx={buttonStyle}
              disableRipple
            >
              {btnTitle || ''}
            </Button>
          </Box>
          <Box component={'hr'} sx={bottomHorizontalLineStyle} />
        </Box>
        <Box sx={bgImageStyle(bgImage)} />
        <Box
          component={'img'}
          src={responsiveImage || ''}
          sx={responsiveImageStyle}
        />
      </Box>
    </Box>
  );
};

export default HomePageHero;
