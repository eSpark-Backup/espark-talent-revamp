import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { frontendContentBoxStyle } from '@/constants/hire-developer/hire-developer';

const Hosts = ({ data }) => {
  const {
    image,
    leftImage,
    title,
    descrcipton,
    btnText,
    btnLink,
    bgImage,
    styles,
  } = data || {};
  const {
    mainBoxStyle,
    imageStyle,
    imageBoxStyle,
    titleDiscriptionBoxStyle,
    titleTextStyle,
    descriptionTextStyle,
    btnTextStyle,
  } = styles || {};

  return (
    <>
      {data ? (
        <Box sx={{ py: 3 }}>
          <Box sx={mainBoxStyle}>
            <Box component={'img'} sx={imageStyle} src={`${leftImage || ''}`} />
            <Box sx={imageBoxStyle}>
              <Box
                component={'img'}
                sx={{
                  width: 'auto',
                  height: 'auto',
                }}
                src={`${image || ''}`}
              />
            </Box>
            <Box sx={frontendContentBoxStyle(bgImage)}>
              <Box sx={titleDiscriptionBoxStyle}>
                <Typography
                  sx={titleTextStyle}
                  dangerouslySetInnerHTML={{
                    __html: `${title || ''}`,
                  }}
                />
                <Typography sx={descriptionTextStyle}>
                  {descrcipton || ''}
                </Typography>
                <Link href={`${btnLink || ''}`}>
                  <Typography sx={btnTextStyle}>{btnText || ''}</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Hosts;
