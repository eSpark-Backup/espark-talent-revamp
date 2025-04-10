'use client';

import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';

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
    <Box
      key={index}
      alt={img?.alt || ''}
      component={'img'}
      src={img?.image || ''}
      sx={awardImageStyle}
    />
  );

  return (
    <Box sx={mainBoxStyle}>
      {images?.map(employeeImage)}
      <Box sx={contentBoxStyle}>
        <Link href={data?.logoLink || ''}>
          <Box component={'img'} src={data?.logo || ''} sx={logoImageStyle} />
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
      <Box component={'img'} src={data?.group_img || ''} sx={groupImageStyle} />
      <Box sx={awardBoxStyle}>
        <Typography sx={awardTitleStyle}>{data?.awardTitle || ''}</Typography>
        <Box sx={awardImageBoxStyle}>
          {data?.awardsSection?.map(awardImage)}
        </Box>
      </Box>
    </Box>
  );
};
