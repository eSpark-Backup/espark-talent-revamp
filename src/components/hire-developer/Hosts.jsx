import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { frontendContentBoxStyle } from '@/constants/hire-developer/hire-developer';
import Image from 'next/image';

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
        <Box sx={{ py: 0 }}>
          <Box sx={mainBoxStyle}>
            {leftImage && (
              <Box sx={imageStyle}>
                <Image
                  src={`${leftImage || ''}`}
                  alt="vector"
                  width={111}
                  height={129}
                  priority
                  style={{
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Box>
            )}
            {image !== undefined && (
              <Box sx={imageBoxStyle}>
                <Image
                  src={`${image || '/'}`}
                  alt="vector"
                  width={913}
                  height={681}
                  priority
                  style={{
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Box>
            )}
            <Box sx={frontendContentBoxStyle(bgImage, image)}>
              <Box sx={titleDiscriptionBoxStyle}>
                <Typography
                  sx={titleTextStyle}
                  dangerouslySetInnerHTML={{ __html: `${title || ''}` }}
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
