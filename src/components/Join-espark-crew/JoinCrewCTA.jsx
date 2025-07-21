// JoinCrewCTA.js
'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { JOIN_CREW_FOOTER_DATA } from '@/constants/join-espark-crew';

const JoinCrewCTA = ({ handleClick }) => {
  const {
    title,
    description,
    buttonLabel = 'Join Us',
    image,
    styles = {},
    bgImage,
  } = JOIN_CREW_FOOTER_DATA || {};

  const {
    mainBoxStyle = {},
    innerBoxStyle = {},
    contentBoxStyle = {},
    descriptionStyle = {},
    buttonStyle = {},
    imageBoxStyle = {},
    imageStyle = {},
    titleStyle = {},
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
          <Button disableRipple onClick={handleClick} sx={buttonStyle}>
            {buttonLabel}
          </Button>
        </Box>
        {image && (
          <Box sx={imageBoxStyle}>
            <Image src={image} style={imageStyle} fill alt="Join Crew CTA" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JoinCrewCTA;
