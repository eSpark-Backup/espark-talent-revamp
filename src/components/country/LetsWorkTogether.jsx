import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const LetsWorkTogether = ({ data }) => {
  const {
    leftDesignImage,
    rightDesignImage,
    styles,
    title,
    items,
    text,
    icon,
  } = data || {};
  const {
    mainBoxStyle,
    contentBoxStyle,
    titleStyle,
    textStyle,
    relativeBoxStyle,
    hrStyle,
    itemsMainBoxStyle,
    leftDesignImageStyle,
    itemBoxStyle,
    gridContainerStyle,
    cardStyle,
    innerCardStyle,
    ellipseStyle,
    cardTextStyle,
    rightDesignImageStyle,
  } = styles || {};

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={contentBoxStyle}>
        <Typography
          sx={titleStyle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Typography sx={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
      </Box>
      <Box sx={relativeBoxStyle}>
        <Box component="hr" sx={hrStyle} />
        <Box sx={itemsMainBoxStyle}>
          <Box
            component={'img'}
            src={leftDesignImage}
            sx={leftDesignImageStyle}
          />
          <Box sx={itemBoxStyle}>
            <Grid container justifyContent={'center'} sx={gridContainerStyle}>
              {items?.map(({ text }, index) => (
                <Grid item xs={10} sm={5.2} md={3.6} lg={3.7} key={index}>
                  <Box sx={cardStyle}>
                    <Box sx={innerCardStyle}>
                      <Box sx={ellipseStyle}>
                        <Image
                          src={icon}
                          alt="ellipse"
                          width={31}
                          height={31}
                          priority
                          style={{
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                          }}
                        />
                      </Box>
                      <Typography sx={cardTextStyle}>{text}</Typography>
                      <Box sx={ellipseStyle}>
                        <Image
                          src={icon}
                          alt="ellipse"
                          width={31}
                          height={31}
                          priority
                          style={{
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            component={'img'}
            src={rightDesignImage}
            sx={rightDesignImageStyle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LetsWorkTogether;
