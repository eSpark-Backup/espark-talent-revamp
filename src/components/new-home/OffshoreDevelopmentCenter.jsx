// import React from 'react';
// import { Box, Typography, Grid } from '@mui/material';

// const OffshoreDevelopmentCenter = ({ data }) => {
//   const { title, text, cards, styles } = data || {};

//   const {
//     mainBoxStyle,
//     titleStyle,
//     cardStyle,
//     imageStyle,
//     cardTitleStyle,
//     cardDescriptionStyle,
//   } = styles || {};

//   return (
//     <Box sx={mainBoxStyle}>
//       <Typography variant="h4" fontWeight="bold" sx={titleStyle}>
//         {title}
//       </Typography>
//       <Grid
//         container
//         justifyContent={'center'}
//         maxWidth={'1600px'}
//         gap={2}
//       >
//         {cards?.map(({ title, image, description }, index) => (
//           <Grid xs={10.5} sm={10} md={4}  lg={3} key={index}>
//             <Box sx={cardStyle}>
//               <Box component={'img'} src={image} sx={imageStyle} />
//               <Typography sx={cardTitleStyle}>{title}</Typography>
//               <Typography sx={cardDescriptionStyle}>{description}</Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default OffshoreDevelopmentCenter;

'use client';
import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import FlaxibleSlider from './FlaxibleSlider';

const OffshoreDevelopmentCenter = ({ data }) => {
  const { title, cards, styles, breakpoints } = data || {};
  const {
    mainBoxStyle,
    titleStyle,
    cardStyle,
    imageStyle,
    cardTitleStyle,
    cardDescriptionStyle,
    backgroundColorStyle,
  } = styles || {};

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme?.breakpoints?.up('md'));

  return (
    <Box
      sx={{ ...mainBoxStyle, ...backgroundColorStyle }}
      id="pricing-difference"
    >
      {title && (
        <Typography variant="h4" fontWeight="bold" sx={titleStyle}>
          {title}
        </Typography>
      )}
      <Grid
        gap={3.5}
        container
        width={'95%'}
        maxWidth="1400px"
        justifyContent="center"
      >
        {cards?.map(({ title, image, description }, index) => (
          <Box key={index}>
            <Box sx={cardStyle}>
              <Box component="img" src={image} sx={imageStyle} />
              <Typography sx={cardTitleStyle}>{title}</Typography>
              <Typography sx={cardDescriptionStyle}>{description}</Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default OffshoreDevelopmentCenter;
