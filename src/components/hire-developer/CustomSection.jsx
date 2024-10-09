import React from 'react';
import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { eachCardForCustomizeSolution } from '@/constants/hire-developer/hire-developer';

const CustomSection = ({ items, styles }) => {
  const { mainLayoutStyle } = styles || {};
  const pathName = usePathname();
  const demo_meeting = 'book-a-demo-meeting';

  const eachCard = (eachItem, index) => {
    const {
      cardLayoutStyle,
      startPoint,
      endPoint,
      allHorizontalImageStyles,
      allVerticalImageStyles,
      allCardBoxStyles,
      titleBoxStyle,
      iconImageStyle,
      titleTypographyStyle,
      descriptionBoxStyle,
      descriptionTypographyStyle,
    } = eachCardForCustomizeSolution(index, pathName);
    return (
      <>
        <Box sx={cardLayoutStyle}>
          <Box
            component={'img'}
            src={eachItem?.start_point || ''}
            sx={startPoint}
          />
          <Box
            component={'img'}
            src={eachItem?.horizontal || ''}
            sx={
              pathName?.includes(demo_meeting) &&
              index !== allHorizontalImageStyles?.length - 2
                ? allHorizontalImageStyles[index]
                : !pathName?.includes(demo_meeting)
                  ? allHorizontalImageStyles[index]
                  : { display: 'none' }
            }
          />
          <Box
            component={'img'}
            src={eachItem?.vertical || ''}
            sx={allVerticalImageStyles[index]}
          />
          <Box
            component={'img'}
            src={eachItem?.end_point || ''}
            sx={pathName?.includes(demo_meeting) ? endPoint[1] : endPoint[0]}
          />
          <Box sx={allCardBoxStyles[index]}>
            <Box sx={titleBoxStyle}>
              <Box
                component={'img'}
                src={eachItem?.icon || ''}
                alt={eachItem?.alt || ''}
                sx={iconImageStyle}
              />
              <Typography
                component={'h4'}
                color="secondary"
                sx={titleTypographyStyle}
              >
                {eachItem?.title || ''}
              </Typography>
            </Box>
            <Box sx={descriptionBoxStyle}>
              <Typography
                component="p"
                sx={descriptionTypographyStyle}
                color="initial"
              >
                {eachItem?.paragraph || ''}
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={mainLayoutStyle}>{items?.map(eachCard)}</Box>
    </>
  );
};

export default CustomSection;
