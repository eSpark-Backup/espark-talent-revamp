import React from 'react';
import { Box, Typography } from '@mui/material';

const Process = ({ data }) => {
  const { title, subTitle, processes, styles } = data || {};
  const {
    mainBoxStyle,
    titleAndSubTitleBoxStyle,
    titleStyle,
    subTitleStyle,
    processBoxStyle,
    imageBoxStyle,
    imageStyle,
    titleAndTextBoxStyle,
    spacificTitleStyle,
    textBoxStyle,
    textStyle,
  } = styles || {};

  const renderProcessBox = (process, index) => (
    <Box key={index} sx={processBoxStyle(process)}>
      <Box sx={imageBoxStyle(process)}>
        <Box
          component={'img'}
          src={process?.image}
          alt={process?.title}
          sx={imageStyle}
        />
      </Box>
      <Box sx={titleAndTextBoxStyle(process)}>
        <Typography component="h3" sx={spacificTitleStyle}>
          {process?.title}
        </Typography>
        <Typography component="div" sx={textBoxStyle(process)}>
          <Typography
            component={'p'}
            variant="p"
            sx={textStyle}
            dangerouslySetInnerHTML={{ __html: process?.text }}
          />
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={titleAndSubTitleBoxStyle}>
        <Typography component={'h2'} sx={titleStyle}>
          {title}
        </Typography>
        <Typography component={'p'} variant="p" sx={subTitleStyle}>
          {subTitle}
        </Typography>
      </Box>
      <>{processes && processes?.map(renderProcessBox)}</>
    </Box>
  );
};

export default Process;
