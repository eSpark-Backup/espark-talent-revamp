import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const RightChoiceForEmployers = ({ data }) => {
  const { title, features, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    gridStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Grid gap={2.2} container justifyContent={'center'} width={gridStyle}>
        {features?.map(({ title, icon }, index) => (
          <Box key={index} sx={cardStyle}>
            <Box sx={imageStyle}>
              <Image
                src={icon}
                alt="icon"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                width={58}
                height={58}
              />
            </Box>
            <Typography sx={cardTitleStyle}>{title}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default RightChoiceForEmployers;
