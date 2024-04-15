'use client';
import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

import { Book_A_Demo_Data } from '@/constants/book-a-demo';
import HireForm from './HireForm';
import { usePathname } from 'next/navigation';

const FormSection = ({ data }) => {
  const { form } = Book_A_Demo_Data;
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const pathName = usePathname();
  const book_a_demo_meeting = '/book-a-demo-meeting';

  return (
    <>
      <Box
        id={'form'}
        sx={{
          pt: { xs: 2, sm: 2, md: 5 },
          pb: { xs: 5, sm: 5, md: 5 },
          px: { xs: 2, sm: 5, md: 5 },
          backgroundImage: `url(${isLargeScreen ? data?.bgImage : ''})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          '@media (min-width: 270px) and (max-width: 300px)': {
            pt: pathName === book_a_demo_meeting ? '220px' : undefined,
          },
          '@media (min-width: 300px) and (max-width: 330px)': {
            pt: pathName === book_a_demo_meeting ? '70px' : undefined,
          },
          '@media (min-width: 330px) and (max-width: 375px)': {
            pt: pathName === book_a_demo_meeting ? '50px' : undefined,
          },
          '@media (min-width: 375px) and (max-width: 410px)': {
            pt: pathName === book_a_demo_meeting ? '80px' : undefined,
          },
          '@media (min-width: 410px) and (max-width: 450px)': {
            pt: pathName === book_a_demo_meeting ? '80px' : undefined,
          },
          '@media (min-width: 450px) and (max-width: 520px)': {
            pt: pathName === book_a_demo_meeting ? '60px' : undefined,
          },
          '@media (min-width: 520px) and (max-width: 630px)': {
            pt: pathName === book_a_demo_meeting ? '40px' : undefined,
          },
          '@media (min-width: 768px) and (max-width: 840px)': {
            pt: pathName === book_a_demo_meeting ? '70px' : undefined,
          },
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            display: 'flex',
            maxWidth: '1200px',
            gap: 2,
            justifyContent: 'center',
            '@media(min-width: 280px) and (max-width:1259px)': {
              flexDirection: 'column !important',
              gap: 4,
            },
            '@media(max-width: 425px)': {
              gap: 4,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              maxWidth: '1400px',
              alignItems: 'center',
              gap: { xs: 2, sm: 3, md: 5, lg: 7 },
              '@media(min-width: 280px) and (max-width:1259px)': {
                mx: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                maxWidth: '700px',
                textAlign: { xs: 'center', sm: 'center', md: 'left' },
                flexDirection: 'column',
                gap: { xs: 1, sm: 0.5, lg: 1 },
                pr: { xs: 0, md: 4 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '20px',
                    sm: '25px',
                    md: '40px',
                    lg: '41.04px',
                  },
                  lineHeight: {
                    xs: '28px',
                    sm: '36px',
                    md: '50px',
                    lg: '62.77px',
                  },
                  fontWeight: 600,
                }}
                color={data?.titleColor}
                textTransform={'capitalize'}
              >
                {data?.title}
              </Typography>
              <Box
                sx={{
                  mx: { xs: 'auto', md: 0 },
                  maxWidth: {
                    xs: '400px',
                    sm: '450px',
                    md: '650px',
                    lg: '660px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '11px',
                      sm: '13px',
                      md: '18px',
                      lg: '23px',
                      xl: '23px',
                    },
                    color:
                      pathName === book_a_demo_meeting ? '#001C63' : '#0E1155',
                    fontWeight: 400,
                    lineHeight: {
                      xs: '19.5px',
                      sm: '23px',
                      md: '33px',
                      lg: '43px',
                    },
                    px: { xs: '10px', sm: '0px' },
                  }}
                >
                  {data?.description}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: { xs: 0, md: 3 }, pb: { xs: 0, sm: 1 } }}>
            <Box
              sx={{
                width: 'auto',
                maxWidth: '700px',
                height: 'auto',
                borderRadius: '8px',
                py: 3,
                px: 0.8,
                boxShadow: '0 0 9px 0 rgba(0,0,0,0.29)',
                '@media(min-width: 280px) and (max-width:1259px)': {
                  mx: 'auto',
                },
              }}
            >
              <HireForm form={form} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FormSection;
