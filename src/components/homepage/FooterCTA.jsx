'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
import { open } from '@/utils';
import { usePathname } from 'next/navigation';
import {
  FOOTER_CTA_DATA,
  HIDDEN_PATHS,
} from '@/constants/home-page/footer-cta-section';
import { PRICING_DATA } from '@/constants/pricing/pricing';

const FooterCTA = () => {
  const pathName = usePathname();

  const renderData = useMemo(() => {
    return pathName?.includes('/pricing') ? PRICING_DATA?.cta : FOOTER_CTA_DATA;
  }, [pathName]);

  const shouldHideCTA = HIDDEN_PATHS?.includes(pathName);

  if (shouldHideCTA) {
    return null;
  }

  const {
    title,
    description,
    buttonLabel = 'Learn More',
    buttonLink = '/',
    image,
    styles = {},
    bgImage,
  } = renderData || {};

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

  /**
   * Handles the button click event by opening the specified link in a new tab.
   *
   * @function handleButtonClick
   * @returns {void}
   */
  const handleButtonClick = () => open(buttonLink, '_blank');

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
          <Button disableRipple onClick={handleButtonClick} sx={buttonStyle}>
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

export default FooterCTA;
