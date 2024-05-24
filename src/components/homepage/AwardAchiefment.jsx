'use client';
import React from 'react';

import { Box, Grid, Container } from '@mui/material';
import Image from 'next/image';
import ParagraphTitle from './ParagraphTitle';
import { usePathname } from 'next/navigation';

const AwardAchievement = ({ data, design, background }) => {
  const pathName = usePathname();
  return (
    <Box
      sx={{
        py: {
          xs: '20px',
          md:
            pathName.includes('/book-a-meeting') ||
            pathName.includes('/hire-remote-developers')
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
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                py: '30px',
              }}
            >
              <Grid item xs={12} md={12} lg={4} xl={4}>
                <ParagraphTitle title={data?.title} />
              </Grid>
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  lg={2}
                  xl={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.image}
                    height={150}
                    width={150}
                    alt={`${item?.alt} -eSpark Talent`}
                  />
                </Grid>
              ))}
            </Grid>
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

            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              {data?.items?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={6}
                  md={3}
                  lg={2}
                  xl={2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    quality="85"
                    priority={true}
                    src={item?.image}
                    height={150}
                    width={150}
                    alt={`${item?.alt} - eSpark Talent`}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default AwardAchievement;
