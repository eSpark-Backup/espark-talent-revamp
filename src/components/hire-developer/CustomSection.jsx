import React from 'react';
import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { eachCardForCustomizeSolution } from '@/constants/hire-developer/hire-developer';
import Image from 'next/image';

const CustomSection = ({ items, mainLayoutStyle }) => {
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
      <Box sx={cardLayoutStyle} key={index}>
        <Box sx={startPoint}>
          <Image
            src={eachItem?.start_point || '/'}
            alt="slider image"
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            width={500}
            height={500}
          />
        </Box>
        <Box
          sx={
            pathName?.includes(demo_meeting) &&
            index !== allHorizontalImageStyles?.length - 2
              ? allHorizontalImageStyles[index]
              : !pathName?.includes(demo_meeting)
                ? allHorizontalImageStyles[index]
                : { display: 'none' }
          }
        >
          <Image
            src={eachItem?.horizontal || '/'}
            alt="slider image"
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            width={500}
            height={500}
          />
        </Box>
        <Box sx={allVerticalImageStyles[index]}>
          <Image
            src={eachItem?.vertical || '/'}
            alt="slider image"
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            width={500}
            height={500}
          />
        </Box>
        <Box sx={pathName?.includes(demo_meeting) ? endPoint[1] : endPoint[0]}>
          {eachItem?.end_point && (
            <Image
              src={eachItem?.end_point || '/'}
              alt="slider image"
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              width={500}
              height={500}
            />
          )}
        </Box>
        <Box sx={allCardBoxStyles[index]}>
          <Box sx={titleBoxStyle}>
            <Box sx={iconImageStyle}>
              <Image
                src={eachItem?.icon || '/'}
                alt={eachItem?.alt || '/'}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                width={500}
                height={500}
              />
            </Box>
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
    );
  };

  return (
    <>
      <Box sx={mainLayoutStyle}>{items?.map(eachCard)}</Box>
    </>
  );
};

export default CustomSection;
