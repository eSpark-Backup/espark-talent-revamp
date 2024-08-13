'use client';
import React from 'react';

import { Box, Container } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';
import { usePathname } from 'next/navigation';

const AwardAchievement = ({ data, design, background }) => {
  const pathName = usePathname();
  return (
    <Box
      sx={{
        py: {
          xs: pathName.includes('hire-remote-developers') ? 0 : '20px',
          md:
            pathName.includes('/book-a-meeting') ||
            pathName.includes('hire-remote-developers')
              ? null
              : '40px',
        },
      }}
    >
      {design === 2 ? (
        <Container>
          <Box
            sx={{
              background: `${background}`,
              py: '2.5%',
              px: '1%',
              border: '1px solid rgba(170, 169, 169, 0.41)',
            }}
          >
            <Box sx={{ px: { xs: '20%', md: '0' }, pt: '20px' }}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: { xs: 'wrap', md: 'noWrap' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 4, sm: 3, md: 5 },
                px: { xs: 2 },
              }}
            >
              {data?.items?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: '105px',
                        sm: '120px',
                        md: '120px',
                        lg: '150px',
                      },
                      height: 'auto',
                    }}
                  >
                    <Image
                      quality="85"
                      priority={true}
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
        </Container>
      ) : (
        <Box
          sx={{
            background: '#F7F8FB',
            py: '2.5%',
            pb: { xs: '40px', sm: '70px', md: '60px', lg: '50px' },
            '@media (min-width: 280px) and (max-width:424px)': {
              pb: '30px',
            },
            '@media (min-width: 425px) and (max-width:480px)': {
              pb: '55px',
            },
          }}
        >
          <Container>
            <Box sx={{ px: { xs: '20%', md: '0' }, pt: '20px' }}>
              <ParagraphTitle title={data?.title} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: { xs: 'wrap', md: 'noWrap' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 4, sm: 3, md: 5 },
                px: { xs: 2 },
              }}
            >
              {data?.items?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: '110px',
                        sm: '120px',
                        md: '120px',
                        lg: '150px',
                      },
                      height: 'auto',
                    }}
                  >
                    <Image
                      quality="85"
                      priority={true}
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
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default AwardAchievement;
