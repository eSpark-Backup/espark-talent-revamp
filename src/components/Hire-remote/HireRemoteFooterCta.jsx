'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { FOOTER_CTA_DATA } from '@/constants/home-page/footer-cta-section';

const HireRemoteFooterCta = ({ handleOpen }) => {
  const {
    title,
    description,
    buttonLabel = 'Learn More',
    image,
    styles = {},
    bgImage,
  } = FOOTER_CTA_DATA || {};

  const {
    mainBoxStyle,
    innerBoxStyle,
    contentBoxStyle,
    descriptionStyle,
    buttonStyle,
    imageBoxStyle,
    imageStyle,
    titleStyle,
  } = styles;

  return (
    <Box
      sx={{
        ...mainBoxStyle,
        background: `url(${bgImage}) center/cover no-repeat`,
      }}
    >
      <Box sx={innerBoxStyle}>
        <Box sx={contentBoxStyle}>
          <Typography sx={titleStyle}>{title}</Typography>
          <Typography sx={descriptionStyle}>{description}</Typography>
          <Button disableRipple onClick={handleOpen} sx={buttonStyle}>
            {buttonLabel}
          </Button>
        </Box>
        {image && (
          <Box sx={imageBoxStyle}>
            <Image src={image} style={imageStyle} fill alt="Footer CTA" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HireRemoteFooterCta;
