'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';
import { usePathname } from 'next/navigation';
import {
  boxStyle,
  imageStyle,
  containerStyle,
  paragraphTitleStyle,
  imageBoxStyle,
  containerBoxStyle,
} from '@/constants/global/award-achivements';

const AwardAchievement = ({ data, design, background }) => {
  const pathName = usePathname();
  const isSpecialPath = pathName.includes('hire-remote-developers');
  const isMeetingPath = pathName.includes('/book-a-meeting');
  const containerPadding = {
    background,
    my: {
      xs: isSpecialPath ? 0 : '20px',
      md: isMeetingPath || isSpecialPath ? null : '40px',
    },
  };
  return (
    <Box sx={containerPadding}>
      <Container>
        {design === 2 ? (
          <Box sx={containerStyle}>
            <Box sx={paragraphTitleStyle}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box sx={boxStyle}>
              {data?.items?.map((item, index) => (
                <Box key={index} sx={imageBoxStyle}>
                  <Box sx={imageStyle}>
                    <Image
                      quality="85"
                      priority
                      src={item?.image}
                      layout="responsive"
                      width={100}
                      height={100}
                      alt={`${item?.alt} - eSpark Talent`}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box sx={containerBoxStyle}>
            <Box sx={paragraphTitleStyle}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box sx={boxStyle}>
              {data?.items?.map((item, index) => (
                <Box key={index} sx={imageBoxStyle}>
                  <Box sx={imageStyle}>
                    <Image
                      quality="85"
                      priority
                      src={item?.image}
                      layout="responsive"
                      width={100}
                      height={100}
                      alt={`${item?.alt} - eSpark Talent`}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AwardAchievement;
