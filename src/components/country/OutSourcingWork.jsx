import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const OutSourcingWork = ({ data }) => {
  const { title, cards, styles } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    cardContentBoxStyle,
    cardTitleStyle,
    descriptionStyle,
    cardImageBoxStyle,
    cardImageStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Typography sx={titleStyle}>{title}</Typography>
      <Grid container gap={1.5} justifyContent={'center'} maxWidth={'1300px'}>
        {cards?.map(
          ({ title, description, image, maxWidth, origin, scale }, index) => (
            <Grid item xs={12} md={5.5} key={index}>
              <Box sx={cardStyle}>
                <Box sx={cardContentBoxStyle}>
                  <Typography sx={cardTitleStyle}>{title}</Typography>
                  <Typography sx={descriptionStyle}>{description}</Typography>
                </Box>
                <Box sx={cardImageBoxStyle}>
                  <Box sx={cardImageStyle(maxWidth, origin, scale)}>
                    <Image
                      src={image}
                      alt="dashboard images"
                      sizes="100vw"
                      style={{ width: '100%', height: '100%' }}
                      width={500}
                      height={500}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default OutSourcingWork;
