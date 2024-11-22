import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import EmployeeSlider from '../new-home/EmployeeSlider';
import { EMPLOYEE_SLIDER_DATA } from '@/constants/new-home';

const EmployeeBanner = ({ data }) => {
  const {
    title,
    subTitle,
    description,
    bgImage,
    animatedGif,
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
    endIconStyle,
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
              sx={btnStyle}
              onClick={() => window?.open(btnLink, '_blank')}
              endIcon={
                <Box sx={endIconStyle}>
                  <Box
                    component={'img'}
                    src="/images/header/topbar/rc-right.png"
                  />
                </Box>
              }
            >
              {btnTitle}
            </Button>
          </Box>
          <Box sx={imageBoxStyle} id="webm-video">
            <Box component={'img'} sx={imageStyle} src={animatedGif} />
          </Box>
        </Box>
        <Box sx={{ mt: { xs: 2.5, lg: 0 } }}>
          <EmployeeSlider data={EMPLOYEE_SLIDER_DATA} />
        </Box>
      </Box>
    </>
  );
};

export default EmployeeBanner;
