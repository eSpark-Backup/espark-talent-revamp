'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';
import { usePathname } from 'next/navigation';

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
  const boxStyles = {
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'noWrap' },
    justifyContent: 'center',
    alignItems: 'center',
    gap: { xs: 4, sm: 3, md: 5 },
    px: { xs: 2 },
  };
  const imageStyles = {
    width: { xs: '100px', sm: '120px', lg: '150px' },
    height: 'auto',
  };

  return (
    <Box sx={containerPadding}>
      <Container>
        {design === 2 ? (
          <Box
            sx={{
              py: '2.5%',
              px: '1%',
              border: '1px solid rgba(170, 169, 169, 0.41)',
            }}
          >
            <Box sx={{ px: { xs: '20%', md: '0' }, pt: '20px' }}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box sx={boxStyles}>
              {data?.items?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={imageStyles}>
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
          <Box
            sx={{
              background: '#F7F8FB',
              py: '1.5%',
              pb: { xs: '40px', sm: '70px', lg: '50px' },
              '@media (max-width:424px)': { pb: '30px' },
              '@media (min-width:425px) and (max-width:480px)': { pb: '55px' },
            }}
          >
            <Box sx={{ px: { xs: '20%', md: '0' }, pt: '20px' }}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box sx={boxStyles}>
              {data?.items?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={imageStyles}>
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
