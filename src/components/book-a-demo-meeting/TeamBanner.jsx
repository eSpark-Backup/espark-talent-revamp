'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const TeamBanner = ({ data }) => {
  const { images, styles } = data || {};
  const {
    mainBoxStyle,
    contentBoxStyle,
    logoImageStyle,
    subTitleStyle,
    titleStyle,
    descriptionStyle,
    btnStyle,
    groupImageStyle,
    awardBoxStyle,
    awardTitleStyle,
    awardImageBoxStyle,
    awardImageStyle,
    allImagesStyles,
  } = styles || {};
  const isLargeScreen = useMediaQuery((theme) =>
    theme?.breakpoints?.down('md')
  );

  const employeeImage = (img, index) => (
    <Box component={'img'} key={index} src={img} sx={allImagesStyles[index]} />
  );

  const awardImage = (img, index) => (
    <Box sx={awardImageStyle} key={index}>
      <Image
        alt={img?.alt || ''}
        src={img?.image || '/'}
        width={132}
        height={114}
        priority
        style={{ objectFit: 'contain', display: 'block', margin: '0 auto' }}
      />
    </Box>
  );

  return (
    <Box sx={mainBoxStyle}>
      {images?.map(employeeImage)}
      <Box sx={contentBoxStyle}>
        <Link href={data?.logoLink || ''}>
          <Box sx={logoImageStyle}>
            <Image
              src={data?.logo || '/'}
              alt={'logo'}
              width={159}
              height={78}
              priority
              style={{
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Box>
        </Link>
        <Typography sx={subTitleStyle}>{data?.subTitle || ''}</Typography>
        <Typography
          component={'h1'}
          sx={titleStyle}
          dangerouslySetInnerHTML={{
            __html: `${
              isLargeScreen ? data?.desktopTitle : data?.mobileTitle || ''
            }`,
          }}
        />
        <Typography
          sx={descriptionStyle}
          dangerouslySetInnerHTML={{
            __html: `${
              isLargeScreen
                ? data?.desktopDescription
                : data?.mobileDescription || ''
            }`,
          }}
        />
        <Link href={data?.btnLink || ''}>
          <Typography sx={btnStyle}>{data?.btnText || ''}</Typography>
        </Link>
      </Box>
      <Box sx={groupImageStyle}>
        <Image
          src={data?.group_img || ''}
          alt={'logo'}
          width={685}
          height={332}
          priority
          style={{ objectFit: 'contain', display: 'block', margin: '0 auto' }}
        />
      </Box>
      <Box sx={awardBoxStyle}>
        <Typography sx={awardTitleStyle}>{data?.awardTitle || ''}</Typography>
        <Box sx={awardImageBoxStyle}>
          {data?.awardsSection?.map(awardImage)}
        </Box>
      </Box>
    </Box>
  );
};
