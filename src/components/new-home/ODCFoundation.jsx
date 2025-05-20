'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FlaxibleSlider from './FlexibleSlider';

const ODCFoundation = ({ data }) => {
  const { title, text, steps, styles } = data || {};
  const {
    mainBoxStyle,
    containerStyle,
    titleStyle,
    textStyle,
    subTitleAndTitleBoxStyle,
    vectorStyle,
    stepStyle,
    stepTextStyle,
    stepIconStyle,
    stepDescriptionStyle,
    slideStyle,
  } = styles || {};

  const ODCStep = ({
    title,
    image,
    description,
    vector = '',
    index = 0,
    extraSx = {},
  }) => (
    <Grid md={'auto'} position={'relative'}>
      <Box
        component={'img'}
        src={vector}
        sx={{
          ...vectorStyle,
          display: {
            xs: 'none',
            md: index === 2 ? 'none' : 'flex',
            lg: 'flex',
          },
          top: {
            md:
              index === 0
                ? '60%'
                : index === 2
                  ? '60%'
                  : index === 3
                    ? '35.5%'
                    : '35.5%',
            lg:
              index === 0
                ? '60%'
                : index === 2
                  ? '60%'
                  : index === 3
                    ? '35.5%'
                    : '33.5%',
          },
          left: index === 0 ? '95%' : '94%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <Box sx={{ ...stepStyle, ...extraSx }}>
        <Typography sx={stepTextStyle}>{title}</Typography>
        <Box
          component={'img'}
          src={image}
          sx={{
            ...stepIconStyle,
            mt: { md: index === 3 ? 0 : 0 },
            ml: { md: index === 0 ? -3 : 0 },
            mr: { xs: index === 0 ? 0 : -0.2, md: index === 4 ? -2.2 : 0 },
          }}
        />
        <Typography sx={stepDescriptionStyle}>{description}</Typography>
      </Box>
    </Grid>
  );

  return (
    <Box sx={mainBoxStyle} id="pricing-difference">
      <Box sx={subTitleAndTitleBoxStyle}>
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography sx={textStyle}>{text}</Typography>
      </Box>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'start'}
        sx={containerStyle}
      >
        {steps?.map(({ title, image, description, vector }, index) => (
          <ODCStep
            key={index}
            title={title}
            image={image}
            vector={vector}
            description={description}
            index={index}
          />
        ))}
        <FlaxibleSlider
          data={steps}
          isDisplay={true}
          slideStyle={slideStyle}
          card={(title, image, description) => (
            <ODCStep
              image={image}
              title={title}
              description={description}
              extraSx={{ display: { xs: 'flex', md: 'none' }, mx: 'auto' }}
            />
          )}
        />
      </Grid>
    </Box>
  );
};

export default ODCFoundation;
