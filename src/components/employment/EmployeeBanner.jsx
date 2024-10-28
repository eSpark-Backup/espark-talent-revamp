import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const EmployeeBanner = ({ data }) => {
  const {
    title,
    subTitle,
    description,
    bgImage,
    responsiveImage,
    btnTitle,
    btnLink,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    innerBoxStyle,
    contentBoxStyle,
    subTitleBoxStyle,
    subTitleStyle,
    titleStyle,
    descriptionStyle,
    btnStyle,
    imageBoxStyle,
    imageStyle,
  } = styles || {};

  return (
    <>
      <Box sx={mainBoxStyle(bgImage)}>
        <Box sx={innerBoxStyle}>
          <Box sx={contentBoxStyle}>
            <Box sx={subTitleBoxStyle}>
              <Typography
                sx={subTitleStyle}
                dangerouslySetInnerHTML={{
                  __html: subTitle,
                }}
              />
              <Typography sx={titleStyle}>{title}</Typography>
            </Box>
            <Typography sx={descriptionStyle}>{description}</Typography>
            <Button
              disableRipple
              onClick={() => window?.open(btnLink, '_blank')}
              sx={btnStyle}
            >
              {btnTitle}
            </Button>
          </Box>
          <Box sx={imageBoxStyle}>
            <Box component={'img'} src={responsiveImage} sx={imageStyle} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeBanner;
