import React from 'react';
import { Box, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '@/utils/cors';
import {
  responsiveProcessCardBoxStyle,
  responsiveProcessCardImageBoxStyle,
  responsiveProcessCardImageStyle,
  responsiveProcessCardTitleAndTextBoxStyle,
  responsiveProcessCardTitleStyle,
  responsiveProcessCardTitleTextStyle,
} from '@/constants/hire-developer/hire-developer';

const ServiceProcessMobile = ({ data }) => {
  const { title, subTitle, responsiveProcesses, styles } = data || {};
  const { ServiceProcessMobileStyle } = styles || {};
  const { mainBoxStyle, titleAndSubTitleBoxStyle, titleStyle, subTitleStyle } =
    ServiceProcessMobileStyle || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={titleAndSubTitleBoxStyle}>
        <Typography
          component="h2"
          sx={titleStyle}
          dangerouslySetInnerHTML={{
            __html: capitalizeFirstLetter(title),
          }}
        />
        <Typography component="p" sx={subTitleStyle}>
          {subTitle}
        </Typography>
      </Box>
      {responsiveProcesses?.map((process, index) => (
        <Box key={index} sx={responsiveProcessCardBoxStyle(process)}>
          <Box sx={responsiveProcessCardImageBoxStyle(process)}>
            <Box
              component="img"
              src={process?.image}
              alt={process?.title}
              sx={responsiveProcessCardImageStyle()}
            />
          </Box>
          <Box sx={responsiveProcessCardTitleAndTextBoxStyle(process)}>
            <Typography
              sx={responsiveProcessCardTitleStyle(process)}
              dangerouslySetInnerHTML={{
                __html: capitalizeFirstLetter(process?.title),
              }}
            />
            <Typography sx={responsiveProcessCardTitleTextStyle()}>
              {process?.text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceProcessMobile;
