'use client';
import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';
import { usePathname } from 'next/navigation';
import { ACHIEVEMENTS_STYLES } from '@/constants/homepage';

const AwardAchievement = ({ data, design }) => {
  const {
    mainBoxStyle,
    titleAndImagesBoxStyle,
    titleBoxStyle,
    commonBoxStyles,
    renderImageBoxStyle,
    imageBoxStyle,
    titleAndRenderImageBoxStyle,
  } = ACHIEVEMENTS_STYLES || {};
  const pathName = usePathname();
  const isSpecialPath = pathName?.includes('hire-remote-developers');
  const isDemo = pathName?.includes('/demo');
  const isMeetingPath = pathName?.includes('/book-a-meeting');

  const renderImages = () =>
    data?.items?.map((item, index) => (
      <Box key={index} sx={renderImageBoxStyle}>
        <Box sx={imageBoxStyle}>
          <Image
            quality="85"
            // priority="true"
            src={item?.image}
            layout="responsive"
            width={100}
            height={100}
            alt={`${item?.alt} - eSpark Talent`}
          />
        </Box>
      </Box>
    ));

  return (
    <Box sx={mainBoxStyle(isSpecialPath, isMeetingPath, isDemo)}>
      {design === 2 ? (
        <Box sx={titleAndImagesBoxStyle}>
          <Box sx={titleBoxStyle}>
            <ParagraphTitle title={data?.title} />
          </Box>
          <Box sx={commonBoxStyles}>{renderImages()}</Box>
        </Box>
      ) : (
        <Box sx={titleAndRenderImageBoxStyle}>
          <Box sx={titleBoxStyle}>
            <ParagraphTitle title={data?.title} />
          </Box>
          <Box sx={commonBoxStyles}>{renderImages()}</Box>
        </Box>
      )}
    </Box>
  );
};

export default AwardAchievement;
